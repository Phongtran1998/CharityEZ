<template>
  <footer class="footer">
    <div class="left-block">CharityEZ © 2018</div>
    <div class="middle-block">“We only have what we give.”
      ― Isabel Allende</div>
    <div class="right-block"></div>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>
  .footer {
    position: relative;
    height: 130px;
    margin-top: -130px;
    text-align: left;
  }
  .left-block {
    vertical-align: bottom;
    display: inline-block;
    background-color: #6D7B90;
    width: 60%;
    height: 100%;
    color: #fff;
    padding: 40px 0 0 40px;
    box-sizing: border-box;
  }
  .middle-block {
    position: absolute;
    bottom: 0;
    left: 20%;
    background-color: rgba(247, 137, 47, 0.7);
    color: rgba(247, 137, 47, 1);
    font: 400 60px/0.8 'Cookie', Helvetica, sans-serif;
    box-sizing: border-box;
    width: 70%;
    height: 70%;
    padding-top: 25px;
    padding-left: 10%;
  }
  .right-block {
    vertical-align: bottom;
    display: inline-block;
    background-color: #fff;
    width: 40%;
    height: 100%;
    -moz-box-sizing: border-box;
  }
</style>
