<template>
  <div class="container w-full mx-auto" style="max-width:1100px">
    <SfBanner
      title="Eco Sandals"
      subtitle="Summer shoes"
      description="The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
      image="https://images.unsplash.com/photo-1572206443494-b07cc12d6921?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80"
    >
      <template v-slot:call-to-action>
        <SfButton>
          Shop Now
        </SfButton>
      </template>
    </SfBanner>
  </div>
</template>

<script>
  import { SfBanner, SfButton } from "@storefront-ui/vue";
  export default {
    components: {
      SfBanner,
      SfButton,
    },
  };
</script>

<style></style>
