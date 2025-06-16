<template>
  <component
    :is="iconComponent"
    v-bind="attrs"
    class="inline-block align-middle"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps<{
  name: string;
}>();

const attrs = useAttrs();

const icons = import.meta.glob("./shared/components/*.vue", { eager: true }) as Record<string, any>;

const iconComponent = computed(() => {
  const file = icons[`./shared/components/${props.name}.vue`];
  return file?.default
});
</script>
