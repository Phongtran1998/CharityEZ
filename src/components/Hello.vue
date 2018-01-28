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
      msg: ''
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
    margin: 240px 307px 0 0;
  }
  .hello-btn {
    position: relative;
    color: #6B7C8F;
    /*color: rgb(44,62,80);*/
    display: inline-block;
    width: 500px;

    &:before {
      content: 'We made it easier to';
      position: absolute;
      top: -41px;
      font-size: 30px;
      left: -38px;
       -webkit-transition: top 1.5s ease-out, left 1.5s ease-out; /* Safari */
       transition: top 1.5s ease-out, left 1.5s ease-out;
     }
    &:after {
      content: 'where you would like to donate';
       position: absolute;
       top: 41px;
       right: -178px;
       font-size: 30px;
       -webkit-transition: top 1.5s ease-out, right 1.5s ease-out; /* Safari */
       transition: top 1.5s ease-out, right 1.5s ease-out;
     }

     &:hover {
        &:before {
           top: -51px;
           left: -48px;
           -webkit-transition: top 1.5s ease-out, left 1.5s ease-out; /* Safari */
           transition: top 1.5s ease-out, left 1.5s ease-out;
         }
        &:after {
           top: 59px;
           right: -188px;
           -webkit-transition: top 1.5s ease-out, right 1.5s ease-out; /* Safari */
           transition: top 1.5s ease-out, right 1.5s ease-out;
         }
        .hello-btn-text {
          padding: 6px 40px;
          -webkit-transition: padding 1.5s ease; /* Safari */
          transition: padding 1.5s ease;
        }
      }

     .hello-btn-text {
       display: inline-block;
       border-radius: 3px;
       background-color: #F7892F;
       /*color: #6B7C8F;*/
       color: #fff;
       font-size: 30px;
       padding: 1px 25px;
       -webkit-transition: padding 1.7s ease-out; /* Safari */
       transition: padding 1.7s ease-out;
     }

  }
  .hello-img {
    vertical-align: bottom;
    width: 380px;
    display: inline-block;
  }
</style>
