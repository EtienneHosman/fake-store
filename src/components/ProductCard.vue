<script setup>
import {useProductsStore} from "@/stores/products";
import {useWishlistStore} from "@/stores/wishlist"
import RatingBlock from "@/components/RatingBlock.vue";

const props = defineProps({
  product: Object
})

const store = useWishlistStore()
const productStore = useProductsStore()

function handleWishlistClick(){
  if (store.list.includes(props.product)) {
    store.removeFromList(props.product.id)
  } else {
    store.addToList(props.product)
  }
}
</script>

<template>
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex-col flex justify-between">
    <router-link :to="{name: 'ProductView', params: {id: product.id}}">
      <img @click="productStore.setSelectedProduct(product)" class="p-8 h-52 object-contain w-52 rounded-t-lg mx-auto" :alt="product.title" :src="product.image" />
    </router-link>
    <div class="px-5 pb-5 align-bottom">
      <router-link :to="{name: 'ProductView', params: {id: product.id}}">
        <h5 @click="productStore.setSelectedProduct(product)" class="text-xl font-semibold tracking-tight text-sky-600 hover:underline">{{product.title}}</h5>
      </router-link>
      <RatingBlock :rating="product.rating"/>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900">€{{ product.price }}</span>
        <div>
          <font-awesome-icon size="xl" @click="handleWishlistClick"
                             :icon="store.list.includes(product) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
                             :class="store.list.includes(product) ? 'text-red-300' : 'text-gray-400 hover:text-red-300'"
                             class="mx-4 cursor-pointer transition-all hover:scale-110"
          />
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>