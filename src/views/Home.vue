<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {onMounted} from "vue";
import {useProductsStore} from "@/stores/products";

const store = useProductsStore()
onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <ProductCard v-for="product in store.products" :key="product.id" :product="product" class="min-w-full md:mx-auto"/>
  </div>
</template>

<style scoped>

</style>