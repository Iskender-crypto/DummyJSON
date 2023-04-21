import axios from "axios";
import { computed, onMounted, Ref, ref } from "vue";
import { Entity } from "../entities/Entity";

export const useEntities = <TEntity extends Entity>(url: string) => {
  const items: Ref<TEntity[]> = ref([]);
  const loaded: Ref<boolean> = ref(false);
  const dialog = ref();
  const item: Ref<TEntity | any> = ref({});
  const skip: Ref<number> = ref(1);
  const limit: Ref<number> = ref(30);
  const total: Ref<number> = ref(0);
  const searchText: Ref<string> = ref("");

  const search = async () => {
    const { data } = await axios.get(`${url}/search?q=${searchText.value}`);
    items.value = data[url];
  };
  // =============================
  // =============================
  // const obj = {
  //   limit: limit,
  //   skip: skip,
  //   total: total,
  // };

  // const str = computed(() => {
  //   return `kfdmkmfc${limit.value}`;
  // });
  const queryString = computed(() => {
    // return `${url}?limit${limit.value}&skip=${skip.value}`;
    let updateLimit = `?limit=${limit.value}`;
    let updateSkip = `&skip=${(skip.value - 1) * limit.value}`;
    if (!limit.value) {
      updateLimit = "";
      updateSkip = `?skip=${(skip.value - 1) * limit.value}`;
    }
    if (!skip.value) {
      updateSkip = "";
      updateLimit = `?limit=${limit.value}`;
    }
    if (!skip.value && !limit.value) {
      return url;
    }

    return `${updateLimit}${updateSkip}`;
  });

  // let myString = ``;
  // for (const key in obj) {
  //   if (obj[key].value !== 0) {
  //     if (myString == "") {
  //       myString = `?${key}=${obj[key].value}`;
  //     } else {
  //       if (obj[key].value !== 0) {
  //         myString = myString + `&${key}=${obj[key].value}`;
  //       }
  //     }
  //   }
  // }
  // for (const i in object) {
  //   if (!myString) {
  //     if (object[i].value !== 0) {
  //       myString = myString + `?${i}=${object[i].value}`;
  //     }
  //   } else {
  //     if (object[i].value !== 0) {
  //       myString = myString + `&${i}=${object[i].value}`;
  //     }
  //   }
  // }

  //   return myString;
  // let updateLimit = `?limit=${limit.value}`;
  // let updateSkip = `&skip=${skip.value}`;
  // if (!limit.value) {
  //   updateLimit = "";
  //   updateSkip = `?skip=${skip.value}`;
  // }
  // if (!skip.value) {
  //   updateSkip = "";
  //   updateLimit = `?limit=${limit.value}`;
  // }
  // return `${updateLimit}${updateSkip}`;
  // ===========================
  // ===========================
  const pageCount = computed(() => Math.ceil(total.value / limit.value));
  const get = async () => {
    const { data } = await axios.get(`${url}/${queryString.value}`);
    items.value = data[url];
    total.value = data.total;
  };

  const show = (i: TEntity) => {
    if (i == null) return;
    Object.assign(item.value, i);
    dialog.value.modal.show();
  };

  const add = async () => {
    const { data } = await axios.post(`${url}/add`, item.value);
    items.value.unshift(data);
    dialog.value.modal.hide();
    item.value = {};
  };

  const update = async () => {
    const { data } = await axios.put(`${url}/${item.value.id}`, item.value);
    const index = items.value.findIndex((y: TEntity) => y.id === data.id);
    items.value[index] = data;
    dialog.value.modal.hide();
  };

  const remove = async (id: number) => {
    await axios.delete(`${url}/${id}`);
    const index = items.value.findIndex((i: TEntity) => i.id === id);
    items.value.splice(index, 1);
    dialog.value.modal.hide();
  };

  onMounted(async () => {
    await get();
    loaded.value = true;
  });

  return {
    items,
    loaded,
    dialog,
    show,
    item,
    get,
    add,
    update,
    remove,
    skip,
    limit,
    queryString,
    total,
    pageCount,
    searchText,
    search,
  };
};
