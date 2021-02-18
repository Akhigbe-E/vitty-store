<template>
  <div>
    <vitty-header />
    <vitty-hero class="mb-16" />
    <vitty-home-products class="mb-16" title="New Products" />
    <vitty-banner />
    <vitty-showcase />
  </div>
</template>

<script>
  import VittyHero from "./components/VittyHero.vue";
  import VittyHeader from "./components/VittyHeader.vue";
  import VittyHomeProducts from "./components/VittyHomeProducts.vue";
  import VittyBanner from "./components/VittyBanner.vue";
  import VittyShowcase from "./components/VittyShowcase.vue";
  export default {
    components: { VittyHero, VittyHeader, VittyHomeProducts, VittyBanner, VittyShowcase },
  };
</script>

<style></style>
