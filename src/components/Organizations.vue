<template>
<div class="main-wrapper">
  <h1>List of all organizations</h1>
  <div v-for="organizations in organizations" class="main-wrapper">
    <h2>{{organizations.header()}}</h2>

  </div>
</div>
</template>

<script>
  export default {
    name: 'organizations',
    data () {
      return {
        organizations: []
      }
    },
    created () {
      this.$http.get('https://www.dosomething.org/api/v1/').then(function (data) {
        this.orgainizations = data.body.slice(0, 10)
      })
    }
  }
</script>

<style scoped>

</style>
