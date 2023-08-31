<script setup>
import ProductCard from "@/components/ProductCard.vue";
import {onMounted} from "vue";
import {useProductsStore} from "@/stores/products";

const store = useProductsStore()
onMounted(async () => {
  await store.fetchProducts().catch(err => console.log(err))
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <ProductCard v-for="[key, value] in store.products" :key="key" :product="value" class="min-w-full md:mx-auto"/>
  </div>
</template>

<style scoped>

</style>