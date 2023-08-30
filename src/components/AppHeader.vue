<script setup>
import Wishlist from "@/components/Wishlist.vue";
</script>

<template>
  <div class="bg-sky-600 py-4 sticky top-0">
    <div class="container mx-auto text-gray-50">
      <div class="inline-flex justify-between w-full">
        <router-link :to="{name: 'Home'}">
          <h1>Fake Store</h1>
        </router-link>
        <Wishlist/>
      </div>
    </div>
  </div>
</template>