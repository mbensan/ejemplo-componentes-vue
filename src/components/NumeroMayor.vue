<template>
  <div class="row">
    <div class="col s6">
      <Jugador v-bind:puntaje="puntaje1" numJugador="1" />
    </div>
    <div class="col s6">
      <Jugador v-bind:puntaje="puntaje2" numJugador="2" />
    </div>
  </div>
</template>

<script>
import Jugador from './Jugador.vue'
import Store from '@/store.js'

export default {
  name: 'NumeroMayor',
  components: {
    Jugador
  },
  data() {
    // estos son los datos internos del componente
    return Store.state;
  }
}
</script>
