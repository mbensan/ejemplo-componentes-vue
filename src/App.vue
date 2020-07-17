<template>
  <div id="app" class="container">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HolaMundo msg="Bienvenidos a la aplicación Vue"/>
    <div class="row">
      <div class="col s6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Ingrese Nuevo Plato al Menú</span>
            <FormMenu />
          </div>
        </div>
      </div>
      <div class="col s6">
        <NumeroMayor />
        <Counter />
        <ExtraInfo titulo="Installed CLI Plugins" v-bind:enlaces="enlaces_cli_plugins" />
        <ExtraInfo titulo="Essential Links" v-bind:enlaces="enlaces_essential_links" />
        <ExtraInfo titulo="Ecosystem" v-bind:enlaces="enlaces_ecosystem" />
      </div>
    </div>
    <br> <br> <br>
  </div>
</template>

<script>
import HolaMundo from './components/HolaMundo.vue'
import ExtraInfo from './components/ExtraInfo.vue'
import FormMenu from './components/FormMenu.vue'
import Counter from './components/Counter.vue'
import NumeroMayor from './components/NumeroMayor.vue'

export default {
  name: 'App',
  components: {
    HolaMundo,
    ExtraInfo,
    FormMenu,
    Counter,
    NumeroMayor
  },
  data: () => {
    return {
      // acá están mis datos
      enlaces_cli_plugins: [
        {texto: 'babel', url: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'},
        {texto: 'eslint', url: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'}
      ],
      enlaces_essential_links: [
        {url: "https://vuejs.org", texto: 'Core Docs'},
        {url: "https://forum.vuejs.org", texto: 'Forum'},
        {url: "https://chat.vuejs.org", texto: 'Community Chat'},
        {url: "https://twitter.com/vuejs", texto: 'Twitter'},
        {url: "https://news.vuejs.org", texto: 'News'}
      ],
      enlaces_ecosystem: [
        {url: "https://router.vuejs.org", texto:'vue-router'},
        {url: "https://vuex.vuejs.org", texto:'vuex'},
        {url: "https://github.com/vuejs/vue-devtools#vue-devtools", texto:'vue-devtools'},
        {url: "https://vue-loader.vuejs.org", texto:'vue-loader'},
        {url: "https://github.com/vuejs/awesome-vue", texto:'awesome-vue'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
