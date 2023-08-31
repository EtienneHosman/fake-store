<script setup>
const props = defineProps({
  iconOnly: {
    type: Boolean,
    default: false
  },
  inWishlist: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div v-if="iconOnly">
    <font-awesome-icon size="xl"
                       :icon="inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
                       :class="inWishlist ? 'text-red-300' : 'text-gray-400 hover:text-red-300'"
                       class="cursor-pointer transition-all hover:scale-110"
    />
  </div>
  <div v-else>
    <button class="w-full bg-blue-400 text-gray-50 py-2 px-4 rounded-full font-bold hover:bg-blue-500 inline-flex justify-center">
      <font-awesome-icon size="lg"
                         :icon="inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
                         class="cursor-pointer transition-all hover:scale-110 self-center mr-2"
      />
      <span v-if="inWishlist">
        Remove from wishlist
      </span>
      <span v-else>Add to wishlist</span>
    </button>

  </div>
</template>