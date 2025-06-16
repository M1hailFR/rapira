<template>
  <header class="bg-black px-[10px] lg:px-14 py-4">
    <div class="container flex flex-row items-center text-white">
      <Icons name="Menu" class="mr-4 md:hidden" />
      <Icons name="Logo" class="mr-16" />
      <nav class="flex items-center gap-5 max-md:hidden">
        <NavLink v-for="(nav, idx) in navigation" :key="idx" :to="nav.href">
          {{ nav.title }}
        </NavLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import Icons from "~/components/ui/icons/Icons.vue";
import NavLink from "~/components/ui/NavLink.vue";
const navigation = [
  { title: "Главная", href: "/" },
  { title: "Блог", href: "/blog" },
];
</script>
