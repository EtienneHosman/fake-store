<script setup>
import AppHeader from "@/components/AppHeader.vue";
import {usePersistWishlist} from "@/composables/usePersistWishlist";

usePersistWishlist()

</script>

<template>
  <AppHeader/>
  <div class="container mx-auto mt-4">
    <router-view/>
  </div>
</template>