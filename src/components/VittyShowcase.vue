<template>
  <SfSection titleHeading="Be In Tune" subtitleHeading="#OppOpgOpk" :levelHeading="2">
    <div class="px-14 grid w-full">
      <div class="a p-2">
        <SfImage
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          width=""
          height=""
        >
          A
        </SfImage>
      </div>
      <div class="b p-2">
        <SfImage
          class="object-cover"
          src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          width=""
          height="100%"
        >
          B
        </SfImage>
      </div>
      <div class="c p-2">
        <SfImage
          class="object-cover"
          src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          width=""
          height="100%"
        >
          C
        </SfImage>
      </div>
      <div class="d p-2">
        <SfImage
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          width=""
          height=""
        />
      </div>
    </div>
  </SfSection>
</template>

<script>
  import { SfSection, SfImage } from "@storefront-ui/vue";
  export default {
    components: {
      SfSection,
      SfImage,
    },
  };
</script>

<style>
  .a {
    grid-column: 1;
    grid-row: 1;
  }
  .b {
    grid-column: 1;
    grid-row: 2 / span 2;
  }
  .c {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  .d {
    grid-column: 2;
    grid-row: 3;
  }
</style>
