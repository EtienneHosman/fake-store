<script setup>
import Card from "@/components/Card.vue";
import {useWishlistStore} from "@/stores/wishlist";
import RatingBlock from "@/components/RatingBlock.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AddToCartButton from "@/components/AddToCartButton.vue";

const store = useWishlistStore()
</script>

<template>
  <Card class="p-4">
    <h1>My wishlist</h1>
    <div v-if="store.listLength">
      <ul role="list" class="divide-y divide-gray-100">
        <li class="flex justify-between gap-x-6 py-5" v-for="[key,value] in store.list" :key="key">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-24 w-24 flex-none object-contain" :src="value.image" :alt="value.title">
            <div class="min-w-0 flex-auto">
              <p class="text-xl font-semibold leading-6 text-gray-900 max-w-sm">{{ value.title }}</p>
              <p class="text-xl font-bold text-gray-900">€{{ value.price }}</p>
              <RatingBlock :rating="value.rating"/>
            </div>
          </div>
          <div class="inline-flex flex-row items-start">
            <AddToCartButton>Add to Cart</AddToCartButton>
            <button class="py-2 px-4 text-gray-400 hover:border-red-400 border ml-2 rounded hover:text-red-400" @click="store.removeFromList(value.id)">
              <FontAwesomeIcon icon="fa-solid fa-trash"/>
            </button>
          </div>
        </li>
      </ul>
      <div class="ml-2 inline-flex">
        <div class="inline-flex text-sky-600 underline cursor-pointer hover:text-sky-700">
          <FontAwesomeIcon class="self-center" icon="fa-solid fa-share"/>
          <p class="ml-2 text-lg ">Share my wishlist</p>
        </div>
      </div>
    </div>
    <div v-else class="mt-4">
      <p class="text-lg italic">No wishlisted items yet...</p>
      <router-link :to="{name: 'Home'}">
        <button class="py-2 mt-4 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Visit store</button>
      </router-link>
    </div>
  </Card>
</template>