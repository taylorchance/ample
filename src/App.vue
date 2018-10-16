<template>
  <div id="app">
    <div class="layout">

      <div class="layout__sidebar">
        <ao-navbar>
          <li
            v-for="route in routes"
            :key="route.path"
            :class="route.name">
            <router-link :to="route.path" >{{ route.name }}</router-link>
          </li>
        </ao-navbar>
      </div>

      <main class="layout__container">

        <div class="layout__header-toolbar">
          <ao-header-toolbar>

            <ao-button>
              Create Product Call
            </ao-button>

            <router-link to="/createproductcall" tag="ao-button">foo</router-link>

            <ao-input
              type="search"
              :placeholder="'Search'"
              :iconHtml="'&#10004;'"
            />

            <span>🍔</span>

          </ao-header-toolbar>
        </div>

        <div class="layout__content">
          <router-view/>
        </div>

      </main>

    </div>
  </div>
</template>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .layout__container {
    float: right;
    width: calc(100vw - 48px);
  }

  .layout__content {
    margin: 48px;
  }
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
.layout__header-toolbar {
  .ao-header-toolbar__title {
    display: none;
  }
  .ao-header-toolbar__controls {
    align-items: center;
    width: 100%;

    & > * {
      flex-basis: 80%;
      flex-grow: 0;
      border: 0;
      &:hover {
        background: none;
        cursor: default;
      }
    }
  }
  .ao-input-group {
    width: 400px;
    margin-top: 14px;
  }
  button {
    margin-left: 2em;
    height: 2.5em;
    max-width: 200px;
  }
  span {
    max-width: 100px;
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