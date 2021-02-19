<template>
  <SfFooter :column="4" multiple :open="['About us', 'Help', 'Social']" logo="https://www.svgrepo.com/show/9395/ribbon-banner-silhouette.svg" title="Vitty Store">
    <SfFooterColumn title="About us">
      <SfList>
        <SfListItem><SfMenuItem label="Who we are"/></SfListItem>
        <SfListItem><SfMenuItem label="Quality in the details"/></SfListItem>
        <SfListItem><SfMenuItem label="Customer Reviews"/></SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Departments">
      <SfList>
        <SfListItem><SfMenuItem label="Women fashion"/></SfListItem>
        <SfListItem><SfMenuItem label="Men fashion"/></SfListItem>
        <SfListItem><SfMenuItem label="Kidswear"/></SfListItem>
        <SfListItem><SfMenuItem label="Home"/></SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Help">
      <SfList>
        <SfListItem><SfMenuItem label="Customer service"/></SfListItem>
        <SfListItem><SfMenuItem label="Size guide"/></SfListItem>
        <SfListItem><SfMenuItem label="Contact us"/></SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Payment & delivery">
      <SfList>
        <SfListItem><SfMenuItem label="Purchase terms"/></SfListItem>
        <SfListItem><SfMenuItem label="Guarantee"/></SfListItem>
      </SfList>
    </SfFooterColumn>
  </SfFooter>
</template>

<script>
  import { SfFooter, SfList, SfMenuItem } from "@storefront-ui/vue";
  export default {
    components: {
      SfFooter,
      SfList,
      SfMenuItem,
    },
  };
</script>

<style></style>
