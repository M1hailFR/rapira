<template>
  <div class="w-full h-full min-h-dvh transition-transform duration-300">
    <div class="bg-white">
      <FilterBar
        v-model="search"
        :selectedCategories="selectedCategories"
        :showReset="true"
        :showFilter="true"
        :showCategoryFilter="showCategoryFilter"
        title="Блог"
        searchPlaceholder="Поиск"
        @reset="resetFilters"
        @toggleFilter="showCategoryFilter = !showCategoryFilter"
        class="container px-[10px] sm:px-[30px] md:px-9"
      />
    </div>
    <Transition name="fade">
      <div v-show="showCategoryFilter" class="bg-white">
        <CategoryFilter
          v-model="selectedCategories"
          :categories="categories"
          class="container px-[10px] sm:px-[30px] md:px-9"
        />
      </div>
    </Transition>
    <Transition name="fade">
      <section
        v-show="filteredPosts.length"
        class="container p-[10px] md:p-[20px]"
      >
        <div
          class="gap-y-10 bg-white p-[15px] md:p-[30px] rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5"
        >
          <CardWidthImages
            v-for="post in filteredPosts"
            :key="post.slug"
            :data="post"
            @click="goToDetail(post.slug)"
          />
        </div>
      </section>
    </Transition>

    <div
      v-if="filteredPosts.length === 0"
      class="container text-center text-gray-500 mt-8 bg-white p-[30px] rounded-xl flex flex-col items-center"
    >
      <Icons name="NotFound" />
      <span class="text-[#7E8299] font-medium text-sm mt-2"
        >Поиск не дал результатов</span
      >
      <p class="max-w-[300px] text-center text-xs">
        Повторите поиск или используйте фильтр для структуризации контента
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { posts } from "~/data/posts";
import CardWidthImages from "~/components/shared/cards/CardWidthImages.vue";
import FilterBar from "~/components/shared/filters/FilterBar.vue";
import CategoryFilter from "~/components/shared/filters/CategoryFilter.vue";
import Icons from "~/components/ui/icons/Icons.vue";

const search = ref("");
const selectedCategories = ref<string[]>([]);
const showCategoryFilter = ref(true);
const categories = [
  ...Array.from(
    new Set(posts.flatMap((p) => p.categories.map((c) => c.label)))
  ),
];

const filteredPosts = computed(() => {
  return posts.filter((post) => {
    const matchesCategory =
      selectedCategories.value.length === 0 ||
      post.categories.some((c) => selectedCategories.value.includes(c.label));

    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});

const router = useRouter();
function goToDetail(slug: string) {
  router.push(`/blog/${slug}`);
}
function resetFilters() {
  search.value = "";
  selectedCategories.value = [];
}
</script>

<style scoped></style>
