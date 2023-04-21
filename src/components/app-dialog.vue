<template>
  <div ref="modalRef" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button @click="modal.hide()" class="btn-close"></button>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Modal } from "bootstrap";
import { onMounted, ref } from "vue";
interface Proptype {
  title: string;
}
defineProps<Proptype>();

const modalRef = ref();
const modal = ref();
onMounted(() => (modal.value = new Modal(modalRef.value)));
defineExpose({ modal });
</script>
