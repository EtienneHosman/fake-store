<script setup>
import { useWishlistStore } from '@/stores/wishlist'
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const store = useWishlistStore()

const extended = ref(false);

</script>

<template>
  <div class="relative inline-block text-left">
    <button class="cursor-pointer mt-1 md:mr-0 mr-4" @click="extended = !extended">
      <font-awesome-icon :icon="store.listLength ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" size="xl"/>
      <span class="ml-2" v-if="store.listLength">{{store.listLength}}</span>
    </button>
    <div v-if="extended" class="origin-top-right absolute right-0 max-w-md w-96 top-12 bg-white rounded-lg md:max-w-lg border border-gray-400">
      <div class="px-4 py-2 border-b border-gray-200 bg-white rounded-t-lg sticky top-0">
        <h2 class="font-semibold text-gray-800">Wishlist</h2>
      </div>
      <div class="flex flex-col divide-y divide-gray-200 overflow-y-auto max-h-80">
        <div v-if="store.listLength" class="flex items-center py-4 px-6" v-for="[key, value] in store.list" :key="key">
          <img class="w-16 h-16 object-contain rounded" :src="value.image" alt="Product Image">
          <div class="ml-3">
            <h3 class="text-gray-900 font-semibold">{{ value.title }}</h3>
            <p class="text-gray-700 mt-1">€{{value.price}}</p>
          </div>
          <button class="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" @click="store.removeFromList(value.id)">
            <font-awesome-icon icon="fa-regular fa-heart"/>
          </button>
        </div>
        <div v-else class="items-center py-4 px-6">
          <p class="italic text-slate-900">No wishlisted items yet...</p>
        </div>
      </div>
      <div class="flex items-center justify-between rounded-b-lg px-6 py-3 bg-gray-100">
        <h3 class="text-gray-900 font-semibold">Total: $29.98</h3>
        <button class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>