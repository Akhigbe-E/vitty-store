<template>
  <SfHero>
    <SfHeroItem
      title="Colorful summer dresses are already in store"
      subtitle="Summer Collection 2019"
      buttonText="Learn more"
      background="#ECEFF1"
      image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
    />
    <SfHeroItem
      buttonText="Learn more"
      background="#ECEFF1"
      image="https://images.unsplash.com/photo-1596149615678-8488f200b301?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
    >
      <template v-slot:subtitle>
        <h1 class="sf-hero-item__subtitle text-white">Summer Collection 2019</h1>
      </template>
      <template v-slot:title>
        <h1 class="sf-hero-item__title text-white">Colorful summer dresses are already in store</h1>
      </template>
    </SfHeroItem>
  </SfHero>
</template>

<script>
  import { SfHero } from "@storefront-ui/vue";

  export default {
    data: () => ({}),
    components: {
      SfHero,
    },
  };
</script>

<style></style>
