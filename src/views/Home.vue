<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {onMounted, ref} from "vue";
const products = ref([]);
onMounted(() => {
  fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => products.value = json)
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" class="min-w-full md:mx-auto"/>
  </div>
</template>

<style scoped>

</style>