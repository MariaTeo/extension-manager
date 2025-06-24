<script setup lang="ts">
import type { Extension } from '../types'

const props = defineProps<{
  extension: Extension
}>()

const emit = defineEmits(['toggle-active-status', 'remove-extension'])

const handleToggle = () => {
  emit('toggle-active-status', props.extension.id)
}

const handleRemove = () => {
  emit('remove-extension', props.extension.id)
}
</script>

<template>
  <div class="extension-item">
    <div class="extension-group">
      <img :src="extension.logo" :alt="extension.name" class="extension-image" />
      <div>
        <h3 class="extension-name">{{ extension.name }}</h3>
        <p class="extension-description">{{ extension.description }}</p>
      </div>
    </div>

    <div class="extension-actions">
      <button class="remove-btn" @click="handleRemove">Remove</button>
      <label class="toggle-switch" :for="'toggle-' + extension.id">
        <input
          type="checkbox"
          :id="'toggle-' + extension.id"
          :checked="extension.isActive"
          @change="handleToggle"
        />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.extension-item {
  border-radius: 1rem;
  padding: $spacing-lg;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid transparent;

  body.light-theme & {
    background-color: $color-neutral-0;
    box-shadow: $shadow-default;
    border-color: $color-neutral-100;

    &:hover {
      box-shadow: $shadow-hover;
    }
  }

  .extension-group {
    display: flex;
    gap: $spacing-md;
    height: 100px;
  }

  body.dark-theme & {
    background-color: $color-neutral-700;
    box-shadow: $shadow-default;
    border-color: $color-neutral-600;

    &:hover {
      background-color: $color-neutral-800;
      box-shadow: $shadow-hover;
    }
  }

  .extension-image {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: $border-radius-sm;
    margin-bottom: $spacing-xs;
  }

  .extension-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
  }

  .extension-description {
    font-size: 14px;
    flex-grow: 1;
    line-height: 1.5;

    body.light-theme & {
      color: $color-neutral-600;
    }

    body.dark-theme & {
      color: $color-neutral-200;
    }
  }

  .extension-actions {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-top: $spacing-md;
  }

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: $border-radius-pill;
      transition: 0.4s;

      body.light-theme & {
        background-color: $color-neutral-300;
      }
      body.dark-theme & {
        background-color: $color-neutral-600;
      }

      &:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: 5px;
        bottom: 4px;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
      }
    }

    input:checked + .slider {
      background-color: $color-red-500;
    }

    input:checked + .slider:before {
      transform: translateX(16px);
    }
  }

  .remove-btn {
    background-color: $color-neutral-700;
    color: $color-neutral-0;
    padding: $spacing-xs $spacing-sm;
    border-radius: 25px;
    font-size: $font-size-body;
    font-weight: 500;
    margin-right: auto;

    body.light-theme & {
      border: 1px solid $color-neutral-300;
      background-color: inherit;
      color: $color-neutral-900;
      &:hover {
        background-color: $color-red-700;
        color: $color-neutral-100;
      }

      &:active {
        background-color: $color-red-700;
      }
    }

    body.dark-theme & {
      border: 1px solid $color-neutral-600;
      background-color: $color-neutral-700;
      &:hover {
        background-color: $color-red-500;
        color: $color-neutral-900;
      }

      &:active {
        background-color: $color-red-700;
      }
    }
  }
}
</style>
