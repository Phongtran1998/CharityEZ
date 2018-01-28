<template>

  <div class="main">
    <!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>

<!-- app -->
<div id="app">
  <!--<button id="show-modal" @click="showModal = true">Show Modal</button>-->
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </modal>
</div>
    <Nav></Nav>
    <Hello></Hello>

    <Footer></Footer>

    <!--<h2>TITLE</h2>-->
    <!--<x-button type="primary" @click.native="clickToast">点我</x-button>-->
  </div>
</template>

<script>
// import Api from 'api'
import { Group, Cell, XButton } from 'vux'
import Hello from 'components/Hello'
import Account from 'components/Account'
import Organizations from 'components/Organizations'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Modal from 'components/Modal'

export default {
  components: {
    Group,
    Cell,
    XButton,
    Hello,
    Account,
    Organizations,
    Nav,
    Footer,
    Modal
  },
  data () {
    return {
      showModal: false,
      msg: 'Welcome to Your Vue.js App Index'
    }
  },
  methods: {
    clickToast () {
      this.toast({
        title: 'aaaa',
        onHide: () => {
          this.alert({
            title: 'bbbb',
            content: 'cccc',
            onHide: () => {
              this.confirm({
                title: 'hahah Confirm'
              })
            }
          })
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    // Api.getSetting().then(response => {
    //   console.log(response)
    //   next()
    // })
    setTimeout(() => {
      next()
    }, 1000)
  }
}
</script>

<style rel="stylesheet/scss">
  .main {
    /*min-height: 100vh;*/
    height: 100%;
    box-sizing: border-box;
  }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

body{
  margin-top: -60px;
  min-height: 100vh;
  background: linear-gradient(-13deg, #DCC7AE, #fff);
  min-height: 100vh;
}
</style>
