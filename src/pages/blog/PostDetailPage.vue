<template>
  <section class="container p-[10px] md:p-[20px] h-full min-h-dvh ">
    <div class="bg-white p-[15px] md:p-[30px] rounded-xl relative w-full">
      <button
        @click="closePost"
        class="absolute top-3 right-3.5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
      >
        <Icons name="Plus" class="rotate-45 w-4 h-4" />
      </button>

      <div v-if="post">
        <h1 class="text-2xl font-bold mb-2">{{ post.title }}</h1>

        <div
          class="flex items-center text-sm font-medium text-gray-400 gap-3 my-[10px]"
        >
          <span>{{ post.date }}</span>
          <span>•</span>
          <span class="flex item-baseline leading-none gap-1">
            <Icons name="Time" class="size-[14px]" />
            {{ post.readTime }}
          </span>
          <span>•</span>
          <span class="flex item-baseline leading-none gap-1">
            <Icons name="Comments" class="size-[14px]" />
            {{ post.comments }} комментари{{ post.comments === 1 ? "й" : "ев" }}
          </span>
        </div>

        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl mb-4"
        />
        <p class="text-gray-700 text-base mt-4">{{ post.description }}</p>
        <div class="flex flex-wrap gap-2 my-4">
          <span
            v-for="cat in post.categories"
            :key="cat.value"
            class="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-medium px-[14px] py-[6px] rounded-[20px] leading-none"
            >{{ cat.label }}</span
          >
        </div>

        <div class="mt-8 pt-4 border-t border-gray-200">
          <h2 class="text-xl font-bold mb-4">
            Комментарии {{ post.comments }}
          </h2>

          <div class="bg-white rounded-lg mb-4">
            <input
              v-if="!isCommentInputActive"
              type="text"
              @focus="isCommentInputActive = true"
              @input="isCommentInputActive = true"
              placeholder="Введите комментарий"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
            />

            <div v-else>
              <div class="flex justify-between items-center relative">
                <button
                  v-if="newCommentText.length > 0"
                  @click="cancelComment"
                  class="absolute right-2 top-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <Icons name="Plus" class="rotate-45 w-4 h-4" />
                </button>
              </div>
              <textarea
                v-model="newCommentText"
                rows="4"
                :class="[
                  commentExceedsLimit
                    ? 'border-red-500'
                    : newCommentText.length > 0
                      ? 'border-blue-500'
                      : 'border-gray-300',
                  'w-full p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200',
                ]"
                placeholder="Введите комментарий"
              ></textarea>
              <div
                v-show="newCommentText.length > 0"
                class="text-sm text-right mt-1"
                :class="commentExceedsLimit ? 'text-red-500' : 'text-gray-500'"
              >
                {{ newCommentText.length }} из {{ maxCommentLength }} символов
              </div>
              <div
                v-show="newCommentText.length > 0"
                class="flex justify-end gap-2 mt-4"
              >
                <button
                  @click="cancelComment"
                  class="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  Отмена
                </button>
                <button
                  @click="submitComment"
                  :disabled="commentExceedsLimit || newCommentText.length === 0"
                  class="px-4 py-2 rounded-md text-white transition-colors duration-200"
                  :class="
                    commentExceedsLimit || newCommentText.length === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  "
                >
                  Опубликовать
                </button>
              </div>
            </div>
          </div>

          <div v-if="post.comments > 0" class="mt-6">
            <div class="bg-white rounded-lg mb-4 flex items-start">
              <img
                src=""
                alt="User Avatar"
                class="w-10 h-10 rounded-full mr-3 bg-gray-100 mt-1.5"
              />
              <div>
                <p class="font-semibold text-gray-800">Мира Гусева</p>
                <p class="text-gray-700 text-sm">
                  Эти мгновения наполняют наши сердца радостью и любовью.
                </p>
                <p class="text-xs text-gray-500 mb-2">0.04.2024 в 14:54</p>
              </div>
            </div>
            <!-- Add more comments here if available in post.comments -->
          </div>
        </div>
      </div>
      <div
        v-else
        class="container text-center text-gray-500 mt-8 bg-white p-[30px] rounded-xl flex flex-col items-center"
      >
        <Icons name="NotFound" />
        <span class="text-[#7E8299] font-medium text-sm mt-2">
          Пост не найден
        </span>
        <p class="max-w-[300px] text-center text-xs">
          Повторите поиск или используйте фильтр для структуризации контента
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { posts } from "~/data/posts";
import Icons from "~/components/ui/icons/Icons.vue";
import type { Post } from "~/types/post";

const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug as string);
const post = computed(() => posts.find((p) => p.slug === slug.value));

const newCommentText = ref("");
const maxCommentLength = 250;
const commentExceedsLimit = computed(
  () => newCommentText.value.length > maxCommentLength
);

const isCommentInputActive = ref(false);

function cancelComment() {
  newCommentText.value = "";
  isCommentInputActive.value = false;
}

function submitComment() {
  if (!commentExceedsLimit.value && newCommentText.value.length > 0) {
    // Implement actual comment submission logic here
    console.log("Submitting comment:", newCommentText.value);
    alert("Комментарий отправлен: " + newCommentText.value); // For demonstration
    newCommentText.value = "";
    isCommentInputActive.value = false;
  } else if (newCommentText.value.length === 0) {
    alert("Комментарий не может быть пустым.");
  } else {
    alert("Превышен лимит символов.");
  }
}

function closePost() {
  router.push("/blog");
}
</script>

