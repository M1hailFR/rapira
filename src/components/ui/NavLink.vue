<template>
  <RouterLink :to="to" custom v-slot="{ isActive, href, navigate }">
    <a
      :href="href"
      @click="navigate"
      class="px-4 py-1 rounded-lg transition-colors duration-200 font-medium hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
      :class="isActive ? 'bg-white/10 text-[var(--primary)]' : 'text-white'"
    >
      <slot />
    </a>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{ to: string }>();
</script> 