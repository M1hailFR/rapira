<template>
  <div
    class="flex flex-wrap justify-between sm:justify-start sm:flex-nowrap sm:flex-row items-center w-full gap-4 py-3 sm:py-5  sm:border-nones"
  >
    <h1 v-if="title" class="sm:mr-8 order-1 inline-block">{{ title }}</h1>
    <div class="relative w-full sm:max-w-[400px] order-3 sm:order-2">
      <Icons
        name="Search"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] w-5 h-5 pointer-events-none"
      />
      <input
        type="text"
        :placeholder="searchPlaceholder"
        class="w-full pl-10 pr-3 py-2 font-medium rounded-lg bg-[var(--primary-light)] text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none focus:ring focus:ring-[var(--primary-active)] transition"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
        "
      />
    </div>
    <div class="w-auto sm:w-full flex justify-end order-2 sm:order-3">
      <button
        v-if="showReset && (modelValue || selectedCategories.length > 0)"
        @click="$emit('reset')"
        class="text-[var(--primary-active)] font-medium text-sm hover:underline ml-4"
      >
        Очистить
      </button>
      <button
        v-if="showFilter"
        @click="$emit('toggleFilter')"
        class="flex items-center gap-1 font-medium text-sm text-gray-400 hover:text-[var(--primary-active)] ml-2"
      >
        <span>{{ showCategoryFilter ? "Скрыть фильтр" : "Фильтр" }}</span>
        <Icons
          name="Arrow"
          class="transition-all duration-300"
          :class="showCategoryFilter ? 'rotate-0' : 'rotate-180'"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from "~/components/ui/icons/Icons.vue";

defineProps<{
  modelValue: string;
  selectedCategories: string[];
  showReset?: boolean;
  showFilter?: boolean;
  showCategoryFilter?: boolean;
  title?: string;
  searchPlaceholder?: string;
}>();

defineEmits(["update:modelValue", "reset", "toggleFilter"]);
</script>
