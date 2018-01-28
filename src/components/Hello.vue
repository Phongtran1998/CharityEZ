<template>
  <div class="hello">
    <div class="hello-btn-container">

      <a href="#" class="hello-btn"><span class="hello-btn-text">FIND</span></a>
    </div>
    <img class="hello-img" src="../assets/img/bulldog.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Donate motherfucker!!!'
    }
  }
}
</script>

<style scoped>
  .hello {
    padding: 60px 0;
  }
  .hello-btn-container {
    display: inline-block;
    vertical-align: top;
  }
  .hello-btn {
    position: relative;
    color: rgb(44,62,80);
    display: inline-block;

    &:before {
      content: 'We made it easier to';
      position: absolute;
      top: -52px;
      font-size: 30px;
      left: -215px;
     }
    &:after {
      content: 'where you would like to donate';
       position: absolute;
       top: 59px;
       left: 66px;
       font-size: 30px;
     }

     .hello-btn-text {
       display: inline-block;
       border-radius: 3px;
       background-color: #F7892F;
       color: #6B7C8F;
       font-size: 30px;
       padding: 5px 25px;
     }

  }
  .hello-img {
    vertical-align: bottom;
    width: 380px;
    display: inline-block;
  }
</style>
