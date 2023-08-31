<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useProductsStore} from "@/stores/products";
import {useWishlistStore} from "@/stores/wishlist";

const store = useWishlistStore()
const productStore = useProductsStore()
</script>

<template>
  <div class="origin-top-right absolute right-0 max-w-md w-96 top-12 bg-white rounded-lg md:max-w-lg border border-gray-400">
    <div class="px-4 py-2 border-b border-gray-200 bg-white rounded-t-lg sticky top-0">
      <h2 class="font-semibold text-gray-800">Wishlist</h2>
    </div>
    <div class="flex flex-col divide-y divide-gray-200 overflow-y-auto max-h-80">
      <div v-if="store.listLength" class="flex items-center py-4 px-6" v-for="[key, value] in store.list" :key="key">
        <router-link :to="{name: 'ProductView', params: {id: value.id}}">
          <img @click="productStore.setSelectedProduct(value)" class="w-16 h-16 object-contain rounded" :src="value.image" alt="Product Image">
        </router-link>
        <div class="ml-3">
          <router-link :to="{name: 'ProductView', params: {id: value.id}}">
            <h3 @click="productStore.setSelectedProduct(value)" class="text-gray-900 hover:text-sky-600 hover:underline font-semibold">{{ value.title }}</h3>
          </router-link>
          <p class="text-gray-700 mt-1">€{{value.price}}</p>
        </div>
        <button class="ml-auto py-2 pl-4 text-gray-400 hover:text-red-400 rounded-lg" @click="store.removeFromList(value.id)">
          <font-awesome-icon icon="fa-solid fa-trash"/>
        </button>
      </div>
      <div v-else class="items-center py-4 px-6">
        <p class="italic text-slate-900">No wishlisted items yet...</p>
      </div>
    </div>
    <div class="flex items-center justify-end rounded-b-lg px-6 py-3 bg-gray-100">
      <router-link :to="{name: 'WishlistView'}">
        <button class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          View Wishlist
        </button>
      </router-link>
    </div>
  </div>
</template>