<script setup>
import AppHeader from "@/components/AppHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import {onMounted, ref} from "vue";
import {usePersistWishlist} from "@/composables/usePersistWishlist";

usePersistWishlist()
const products = ref([]);
onMounted(() => {
  fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => products.value = json)
})
</script>

<template>
  <AppHeader/>
  <div class="container mx-auto mt-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" class="min-w-full md:mx-auto"/>
    </div>
  </div>
</template>