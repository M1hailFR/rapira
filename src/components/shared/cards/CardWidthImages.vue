<template>
  <div
    class="bg-white rounded-xl transition cursor-pointer flex flex-col h-full"
  >
    <img
      :src="data.image"
      :alt="data.title"
      class="w-full h-48 object-cover rounded rounded-xl min-h-[200px] md:min-h-[220px] lg:min-h-[250px]"
    />
    <div
      class="flex items-center text-sm font-medium text-gray-400 gap-3 my-[10px]"
    >
      <span> {{ data.date }}</span>
      <span>•</span>
      <span class="flex item-baseline leading-none gap-1">
        <Icons name="Time" class="size-[14px]" />
        {{ data.readTime }}
      </span>
      <span>•</span>
      <span class="flex item-baseline leading-none gap-1">
        <Icons name="Comments" class="size-[14px]"/> {{ data.comments }} комментари{{
          data.comments === 1 ? "й" : "ев"
        }}
      </span>
    </div>
    <h2 class="text-2xl font-semibold mb-1 line-clamp-1">
      {{ data.title }}
    </h2>
    <p class="text-gray-600 text-sm mb-[10px] line-clamp-2">
      {{ data.description }}
    </p>
    <div class="flex flex-wrap gap-2 mt-auto">
      <span
        v-for="cat in data.categories"
        :key="cat.value"
        class="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-medium px-[14px] py-[6px] rounded-[20px] leading-none"
        >{{ cat.label }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from "~/components/ui/icons/Icons.vue";
import type { Post } from "~/types/post";
defineProps<{ data: Post }>();
</script>
