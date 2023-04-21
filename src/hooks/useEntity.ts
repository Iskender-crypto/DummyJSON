import { onMounted, ref, Ref } from "@vue/runtime-dom";
import axios from "axios";
import { Entity } from "../entities/Entity";

export const useEntity = <TEntity extends Entity>(
  className: string,
  id: number,
) => {
  const model: Ref<TEntity | any> = ref();
  const loaded: Ref<boolean> = ref(false);

  const get = async () => {
    const { data } = await axios.get(`/${className}/${id}`);
    model.value = data;
    console.log(model);
  };

  onMounted(async () => {
    await get();
    loaded.value = true;
  });

  return { model, loaded };
};
