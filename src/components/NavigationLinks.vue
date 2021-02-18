<template>
  <ul class="flex gap-x-5">
    <li><SfLink class="text-sf-lg" link="/">Home</SfLink></li>
    <li><SfLink class="text-sf-lg" link="/about">About</SfLink></li>
    <li><SfLink class="text-sf-lg" link="/contact">Contact</SfLink></li>
  </ul>
</template>

<script>
  import { SfLink } from "@storefront-ui/vue";
  export default {
    components: {
      SfLink,
    },
  };
</script>

<style></style>
