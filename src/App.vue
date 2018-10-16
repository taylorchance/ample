<template>
  <div id="app">
    <ao-navbar>
      <li
        v-for="route in routes"
        :key="route.path"
        :class="route.name">
        <router-link :to="route.path" >{{ route.name }}</router-link>
      </li>
    </ao-navbar>
    <router-view/>
  </div>
</template>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app .ao-navbar {
  background: #265284;
  float: left;
  width: 48px;
  height: 100vh;

  & > ul {

    & > li {
      display: block;

      & .router-link-exact-active, .router-link-active, .active {
        background-color: none !important;
      }

      & > * {
        background: none;
      }
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      routes: [
        { path: '/exchange', name: 'exchange'},
        { path: '/buy', name: 'buy'},
        { path: '/buyershomepage', name: 'BuyersHomepage'},
      ]
    }
  }
}
</script>