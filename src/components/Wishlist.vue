<script setup>
import { useWishlistStore } from '@/stores/wishlist'
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import WishlistPopover from "@/components/WishlistPopover.vue";
const store = useWishlistStore()

const extended = ref(false);

</script>

<template>
  <div class="relative inline-block text-left">
    <button class="cursor-pointer mt-1 md:mr-0 mr-4" @click="extended = !extended">
      <font-awesome-icon :icon="store.listLength ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" size="xl"/>
      <span class="ml-2 font-semibold" v-if="store.listLength">{{store.listLength}}</span>
    </button>
    <WishlistPopover v-if="extended"/>
  </div>
</template>