<script setup lang="ts">
const props = defineProps<{
  title: string
  message: string
  confirmText: string
  cancelText: string
}>()

const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}
</script>

<template>
  <div class="modal-overlay" @click.self="cancel">
    <div class="modal-content">
      <h3 class="modal-title">{{ title }}</h3>
      <p class="modal-message">{{ message }}</p>
      <div class="modal-actions">
        <button class="cancel-btn" type="button" @click="cancel">{{ cancelText }}</button>
        <button
          type="button"
          :class="['confirm-btn', { 'confirm-remove': confirmText === 'Remove' }]"
          @click="confirm"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $z-index-modal-backdrop;
}

.modal-content {
  background-color: $color-neutral-600;
  padding: $spacing-xl;
  border-radius: $border-radius-sm;
  box-shadow: $shadow-default;
  max-width: 500px;
  width: 90%;
  text-align: center;
}

.modal-title {
  font-size: 1.8rem;
  margin-bottom: $spacing-md;
}

.modal-message {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: $spacing-xl;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: $spacing-md;
}

.cancel-btn,
.confirm-btn {
  padding: $spacing-sm $spacing-lg;
  border-radius: $border-radius-sm;
  cursor: pointer;
  font-size: $font-size-body;
  font-weight: 600;
}

.cancel-btn {
  &.light-theme {
    background-color: $color-neutral-100;
    color: $color-neutral-900;
    border: 1px solid $color-neutral-300;

    &:hover {
      background-color: $color-neutral-200;
    }

    &:active {
      background-color: $color-neutral-300;
      color: $color-neutral-900;
    }
  }

  &.dark-theme {
    background-color: $color-neutral-800;
    color: $color-neutral-0;
    border: 1px solid $color-neutral-600;

    &:hover {
      background-color: $color-neutral-900;
      color: $color-neutral-0;
    }

    &:active {
      background-color: $color-neutral-900;
      color: $color-red-500;
    }
  }
}

.confirm-btn {
  background-color: $color-red-500;
  color: $color-neutral-0;
  border: none;

  &:hover {
    background-color: $color-red-400;
  }

  &:active {
    background-color: $color-red-700;
  }

  &.confirm-remove {
    background-color: $color-red-500;
    &:hover {
      background-color: $color-red-400;
    }
    &:active {
      background-color: $color-red-700;
    }
  }
}
</style>
