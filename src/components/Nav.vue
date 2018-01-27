<template>
  <!--<a href="/organizations">Orga</a>-->
  <group>
    <cell title="My Bank Account" value="bank-account" link="bank-account"></cell>
    <cell title="All Organizations For Charity" value="organizations" link="organizations"></cell>
  </group>
</template>

<script>
  import { Group, Cell, XButton } from 'vux'
  export default {
    name: 'nav',
    components: {
      Group,
      Cell,
      XButton
    }
  }
</script>

<style scoped>

</style>
