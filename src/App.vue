<template>
  <div>
    <vitty-header />
    <vitty-hero />
    <vitty-home-products title="New Products" />
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
