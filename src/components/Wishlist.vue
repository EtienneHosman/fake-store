<script setup>
import { useWishlistStore } from '@/stores/wishlist'
import {ref} from "vue";
const store = useWishlistStore()

const extended = ref(false);

</script>

<template>
  <div>
    <button class="cursor-pointer mt-1 md:mr-0 mr-4" @click="extended = !extended">
      <font-awesome-icon :icon="store.listLength ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" size="xl"/>
      <span class="ml-2" v-if="store.listLength">{{store.listLength}}</span>
    </button>
    <div v-if="extended" class="absolute max-w-md mx-auto top-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
      <div class="px-4 py-2 border-b border-gray-200">
        <h2 class="font-semibold text-gray-800">Wishlist</h2>
      </div>
      <div class="flex flex-col divide-y divide-gray-200">
        <div class="flex items-center py-4 px-6" v-for="product in store.list">
          <img class="w-16 h-16 object-cover rounded" src="https://dummyimage.com/100x100/F3F4F7/000000.jpg" alt="Product Image">
          <div class="ml-3">
            <h3 class="text-gray-900 font-semibold">{{ product.title }}</h3>
            <p class="text-gray-700 mt-1">{{product.price}}</p>
          </div>
          <button class="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Remove
          </button>
        </div>
      <div class="flex items-center justify-between px-6 py-3 bg-gray-100">
        <h3 class="text-gray-900 font-semibold">Total: $29.98</h3>
        <button class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  </div>
  </div>
</template>