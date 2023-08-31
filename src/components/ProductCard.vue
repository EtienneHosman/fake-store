<script setup>
import {useProductsStore} from "@/stores/products";
import {useWishlistStore} from "@/stores/wishlist"
import RatingBlock from "@/components/RatingBlock.vue";
import Card from "@/components/Card.vue";
import AddToCartButton from "@/components/AddToCartButton.vue";
import AddToWishlistButton from "@/components/AddToWishlistButton.vue";

const props = defineProps({
  product: Object
})

const store = useWishlistStore()
const productStore = useProductsStore()

</script>

<template>
  <Card class="flex-col flex justify-between">
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
        <div class="inline-flex">
<!--          <font-awesome-icon size="xl" @click="handleWishlistClick"-->
<!--                             :icon="store.list.get(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"-->
<!--                             :class="store.list.get(product.id) ? 'text-red-300' : 'text-gray-400 hover:text-red-300'"-->
<!--                             class="mx-4 cursor-pointer transition-all hover:scale-110"-->
<!--          />-->
          <AddToWishlistButton @click="store.toggleWishlistItem(product)" class="self-center mx-4" :in-wishlist="store.isInList(product.id)" icon-only/>
          <AddToCartButton rounded>Add to cart</AddToCartButton>
        </div>
      </div>
    </div>
  </Card>
</template>