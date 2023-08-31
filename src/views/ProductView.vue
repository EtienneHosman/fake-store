<script setup>
import {computed, onMounted, ref} from "vue";
import {useWishlistStore} from "@/stores/wishlist";
import {useProductsStore} from "@/stores/products";
import RatingBlock from "@/components/RatingBlock.vue";
import Card from "@/components/Card.vue";
import AddToCartButton from "@/components/AddToCartButton.vue";
import AddToWishlistButton from "@/components/AddToWishlistButton.vue";


const store = useWishlistStore();
const productStore = useProductsStore();
const product = computed(() => productStore.selectedProduct);

const props = defineProps({
  id: Number
})
const loading = ref(true)
onMounted(async () => {
  if(!product.value){
    await productStore.fetchProductById(props.id)
        .catch(err => console.log(err))
  }
  loading.value = false
})
</script>

<template>
  <div class="py-8" v-if="!loading">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <Card class="h-[460px] mb-4">
            <img class="w-full h-full object-contain" :src="product.image" :alt="product.title">
          </Card>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <AddToCartButton class="w-full" rounded>Add to cart</AddToCartButton>
            </div>
            <div class="w-1/2 px-2">
              <AddToWishlistButton :in-wishlist="store.isInList(product.id)" @click="store.toggleWishlistItem(product)"/>
            </div>
          </div>
        </div>
        <Card class="md:flex-1 p-4">
          <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
          <RatingBlock :rating="product.rating"/>
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
          </Card>
        </div>
      </div>
    </div>
</template>