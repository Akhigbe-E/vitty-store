<template>
  <div>
    <h1 class="text-3xl text-center font-medium mb-8">{{ title }}</h1>
    <SfCarousel :settings="settings">
      <SfCarouselItem v-for="(n, index) in new Array(6)" :key="index">
        <SfProductCard
          image="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/363-mj-3796-ae-a-l.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=67561fcc6e2a6442637577f7abb7ad68"
          :imageWidth="216"
          :imageHeight="326"
          title="Cotton Sweater"
          :scoreRating="4"
          :reviewsCount="7"
          :maxRating="5"
          wishlistIcon="heart"
          isOnWishlistIcon="heart_fill"
          showAddToCartButton
        />
      </SfCarouselItem>
    </SfCarousel>
  </div>
</template>

<script>
  import { SfProductCard, SfCarousel } from "@storefront-ui/vue";
  export default {
    data: () => ({
      settings: { perView: 3 },
    }),
    components: {
      SfProductCard,
      SfCarousel,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style></style>
