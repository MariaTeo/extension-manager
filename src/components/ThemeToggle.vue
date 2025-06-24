<script setup lang="ts">
const props = defineProps<{
  theme: 'light' | 'dark'
}>()

const emit = defineEmits(['toggle'])

const toggle = () => {
  emit('toggle')
}
</script>

<template>
  <button
    class="theme-toggle-btn"
    :class="theme === 'light' ? 'light' : 'dark'"
    @click="toggle"
    :aria-label="theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'"
  >
    <template v-if="theme === 'light'">
      <svg
        class="theme-toggle-icon moon-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 22 22"
      >
        <g clip-path="url(#a)">
          <path
            stroke="#091540"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.98"
            d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"
          />
        </g>
        <defs>
          <clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath>
        </defs>
      </svg>
    </template>
    <template v-else>
      <svg
        class="theme-toggle-icon sun-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 22 22"
      >
        <g clip-path="url(#a)">
          <path
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.98"
            d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"
          />
        </g>
        <defs>
          <clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath>
        </defs>
      </svg>
    </template>
  </button>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.theme-toggle-btn {
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius-sm;
  width: $spacing-xl;
  height: $spacing-xl;
  transition: none !important;
}
.light {
  background-color: $color-neutral-100;
}

.dark {
  background-color: $color-neutral-700;
}
</style>
