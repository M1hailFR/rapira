<template>
  <div>
    <div class="h-[1px] bg-[var(--primary-light)]"></div>
    <div class="flex flex-wrap gap-2 py-3 sm:py-5">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="[
          'px-[14px] py-1 rounded-[20px] transition-all duration-300 cursor-pointer',
          modelValue.includes(cat)
            ? 'bg-blue-500 text-white'
            : 'bg-[var(--primary-light)] text-[var(--primary-active)] hover:bg-[var(--primary)]/50',
        ]"
        @click="toggleCategory(cat)"
        @mouseenter="hoveredCategory = cat"
        @mouseleave="hoveredCategory = null"
        type="button"
      >
        <span class="flex items-center gap-2 transition-all duration-150">
          {{ cat }}
          <template v-if="modelValue.includes(cat)">
            <Icons v-if="hoveredCategory !== cat" name="Check" />
            <Icons v-else name="Plus" class="rotate-45" />
          </template>
          <template v-else>
            <Icons v-if="hoveredCategory !== cat" name="Plus" />
            <Icons v-else name="Check" />
          </template>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icons from "~/components/ui/icons/Icons.vue";

const props = defineProps<{ modelValue: string[]; categories: string[] }>();
const emit = defineEmits(["update:modelValue"]);

const hoveredCategory = ref<string | null>(null);

function toggleCategory(cat: string) {
  const arr = props.modelValue.includes(cat)
    ? props.modelValue.filter((c) => c !== cat)
    : [...props.modelValue, cat];
  emit("update:modelValue", arr ?? []);
}
</script>
