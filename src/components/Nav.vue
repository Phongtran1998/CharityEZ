<template>
  <nav class="main-nav">
  <!--<a href="/organizations">Orga</a>-->
    <router-link :to="{name: 'bank-account'}" class="nav-link btn btn-primary">My Bank Account</router-link>
    <router-link :to="{name: 'organizations'}" class="nav-link btn btn-primary">All Organizations For Charity</router-link>
    <span class="nav-user">Xuan Petrov</span>
  <!--<group>-->
    <!--<cell title="My Bank Account" value="bank-account" link="bank-account"></cell>-->
    <!--<cell title="All Organizations For Charity" value="organizations" link="organizations"></cell>-->
  <!--</group>-->
  </nav>
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
  /*@mixin transition {*/
    /*-webkit-transition: all .3s ease-out;*/
    /*-moz-transition: all .3s ease-out;*/
    /*-ms-transition: all .3s ease-out;*/
    /*transition: all .3s ease-out;*/
  /*}*/

  .main-nav a {
    /*font: 40 40px/1.3 'Berkshire Swash', Helvetica, sans-serif;*/
    /*text-shadow: 1px 1px 0px #ededed, 4px 4px 0px rgba(0,0,0,0.15);*/
    /*color: #6B7C8F;*/
    /*color: #F7892F;*/
    /*color: #FAC231;*/
    /*color: #DCC8AA;*/
    color: #2B2931;
    font: 400 40px/0.8 'Cookie', Helvetica, sans-serif;
    /*text-shadow: 4px 4px 3px rgba(0,0,0,0.1);*/
    transition: transform .2s;

    &:hover {
       /*@include transition;*/
       color: #6B7C8F;
       text-shadow: 4px 4px 3px rgba(0,0,0,0.1);
       -webkit-transition: color 1s ease, text-shadow 1.5s ease; /* Safari */
       transition: color 1s ease, text-shadow 1.5s ease;
     }
  }

  .nav-link, .nav-user {
    margin: 0 30px;
  }

</style>
