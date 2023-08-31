<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const props = defineProps({
  rounded: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="bg-amber-500 text-white py-2 px-4 font-bold hover:bg-amber-600"
          :class="rounded ? 'rounded-full' : ''"
  >
    <font-awesome-icon icon="fa-solid fa-cart-plus"></font-awesome-icon>
    <span class="md:inline-block hidden ml-2">

      <slot/>
    </span>
  </button>
</template>

<style scoped>

</style>