<template>
  <div class="main">
    <!--<Nav></Nav>-->
  <div class="main-wrapper">
    <div class="internal-wrap">
      <div class="deep-wrap1">
        <h2>My Bank Account</h2>
        <p>Available Balance:</p>
        <p>Account Number:</p>
        <p>Routing Numbers:</p>
        <p>Average Spending:</p>
        <p>Where I donate:</p>
        <br>

      </div>
      <div v-for="" class="deep-wrap1">
        <h2><br><br></h2>
        <p>$1,000</p>
        <p>6262627</p>
        <p>9282737181</p>
        <p>$5,898</p>
        <p>American Red Cross <span class="donation">2%</span> <span class="period">yearly</span> </p>
        <p>Save the Children <span class="donation">$500</span> <span class="period">monthly</span></p>
      </div>
      <div class="deep-wrap2">
        <h2><br><br></h2>
        <button class="account-button">Set Up</button>
      </div>
    </div>
    <div class="internal-wrap">
      <h2>Choose the Organizations to donate</h2>
      <h3>Choose the category</h3>
      <select>
        <!--<option selected>...</option>-->
        <option selected>Education</option>
        <option>Animal</option>
        <option>Environment</option>
        <option>International NGOs</option>
        <option>Health</option>
        <option>Arts and Culture</option>
      </select>
    </div>
    <!--<Footer></Footer>-->
  </div>
  </div>

</template>

<script>
  import Nav from 'components/Nav'
  import Footer from 'components/Footer'
  export default {
    components: {
      Nav,
      Footer
    },
    name: 'account',
    data () {
      return {
        account: {
          id: '',
          name: '',
          number: '',
          type: '',
          updated_at: '',
          users: [],
          features: '',
          routing: ''
        }
      }
    },

    created () {
      this.$http.get('https://api.demo.narmitech.com/v1/55555').then(function (data) {
        console.log(data)
      })
    }

  }
</script>

<style scoped>
/*p {*/
  /*text-align: left;*/

/*}*/
/*h2 {*/
  /*text-align: left;*/

/*}*/
/*h3 {*/
  /*text-align: left;*/

/*}*/
   body{
     background: linear-gradient(-13deg, #DCC7AE, #fff);
    min-height: 100vh;
  }

  .donation, .period {
    border: 1px solid #666666;
    background-color: #fff;
    margin: 0 5px 0 10px;
    padding: 0 5px;
  }
  .main-wrapper{
    width: 100%;
    display: flex;
    color: #2B2931;
    padding: 50px 0;
  }
h2 {
  font-size: 35px;
  font-family: Berkshire Swash;
  line-height: 36px;
}

p {
  font-size: 35px;
  font-family: Cookie;
}
h3 {
  font-family: Cookie;
  font-size: 40px;
  font-weight: lighter;
}

  .account-button {

  }
  .internal-wrap:first-child {
    margin-left: 20%;
    width: 70%;
    display: inline-flex;
    text-align: left;

  }
  .internal-wrap:last-child {
    margin-right: 20%;
    width: 30%;
    display: inline-block;
    text-align: center;
    line-height: 100px;
  }
  .deep-wrap1 {
    width: 40%;
    display: inline-block;
  }
  .deep-wrap1:last-child {
    width: 20%;
    display: inline-block;
    margin-left: 30px;
  }
  .deep-wrap2 {
    width: 23%;
    display: inline-block;
    text-align: left;
    padding: 0 10px;
  }
  button {
    position: absolute;
    width: 100px;
    line-height: 35px;
    font-size: 22px;
    background-color: #F7892F;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
  }
  select {
    width: 100%;
    line-height: 35px;
    /* height: 35px; */
    font-size: 24px;
    background-color: #fff;
    color: #333333;
    padding: 5px;
  }


</style>
