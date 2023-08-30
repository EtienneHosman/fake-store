<script setup>
import {onMounted, ref} from "vue";
import {useWishlistStore} from "@/stores/wishlist";
const product = ref(null);
const loading = ref(true);

const store = useWishlistStore();

const props = defineProps({
  id: Number
})
onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${props.id}`)
      .then(res => res.json())
      .then(json => {
        product.value = json;
        loading.value= false;
      })
})
</script>

<template>
  <div class="py-8" v-if="!loading">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-white shadow mb-4">
            <img class="w-full h-full object-contain" :src="product.image" :alt="product.title">
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
            </div>
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300" @click="store.addToList(product)">Add to Wishlist</button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
          <div class="flex items-center mb-2">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p class="ml-2 text-sm font-bold text-gray-900">{{ product.rating.rate }}</p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
            <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline">{{ product.rating.count }} reviews</a>
          </div>
          <p class="text-gray-600 text-sm mb-4 capitalize">{{
              product.category
            }}</p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Price:</span>
              <span class="text-gray-600">${{ product.price }}</span>
            </div>
            <div>
              <span class="font-bold text-gray-700">Availability:</span>
              <span class="text-gray-600">In Stock</span>
            </div>
          </div>
            <span class="font-bold text-gray-700">Product Description:</span>
            <p class="text-gray-600 text-sm mt-2">
              {{product.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>