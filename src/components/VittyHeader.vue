<template>
  <div>
    <SfHeader
      logo="https://www.svgrepo.com/show/9395/ribbon-banner-silhouette.svg"
      title="Storefront UI"
      cartIcon="empty_cart"
      wishlistIcon="heart"
      accountIcon="profile"
      searchPlaceholder="Search for items"
      searchValue=""
      wishlistItemsQty="0"
      cartItemsQty="0"
    >
      <template v-slot:navigation>
        <navigation-links />
      </template>
    </SfHeader>
  </div>
</template>

<script>
  import { SfHeader } from "@storefront-ui/vue";
  import NavigationLinks from "./NavigationLinks.vue";
  export default {
    components: {
      SfHeader,
      NavigationLinks,
    },
  };
</script>

<style></style>
