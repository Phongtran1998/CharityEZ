<template>
  <div class="main-wrapper">
    <div class="internal-wrap">
      <div class="deep-wrap1">
        <h2>My Bank Account</h2>
        <p>Available Balance:</p>
        <p>Account Number:</p>
        <p>Routing Numbers:</p>
        <p>Average Spending:</p>
      </div>
      <div class="deep-wrap1">
        <h2><br></h2>
        <p>1000</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div class="deep-wrap2">
        <h2><br></h2>
        <button>Set Up</button>
      </div>
    </div>
    <div class="internal-wrap">
      <h2>Choose the Organizations to donate</h2>
      <h3>Choose the category</h3>
      <select>
        <option selected>...</option>
        <option>Education</option>
        <option>Animal</option>
        <option>Environment</option>
        <option>International NGOs</option>
        <option>Health</option>
        <option>Arts and Culture</option>
      </select>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'account'
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

  .main-wrapper{
    width: 100%;
    display: flex;

  }
h2 {
  font-size: 35px;
  font-family: Berkshire Swash;
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

  .internal-wrap:first-child {
    margin-left: 60px;
    width: 50%;
    display: inline-flex;
    text-align: left;
  }
  .internal-wrap {
    margin-left: 60px;
    width: 50%;
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

  }
  .deep-wrap2 {
    width: 33%;
    display: inline-block;
    text-align: left;
  }
  button {
    position: absolute;
    width: 100px;
  }
  select {
    width: 200px;
    ;
  }


</style>
