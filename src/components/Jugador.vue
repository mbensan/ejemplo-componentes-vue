<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Su puntaje es:</span>
      <h3>{{ puntaje }}</h3>
      <p><button v-on:click="generarPuntaje" class="waves-effect waves-light btn lime darken-1">Jugar</button></p>
    </div>
  </div>
</template>

<script>
import Store from '@/store.js'

export default {
  name: "Jugador",
  props: {
    puntaje: Number,
    numJugador: String
  },
  methods: {
    generarPuntaje: function() {
      const nuevoPuntaje = Math.round(Math.random() * 100);

      let puntajeOtroJugador;
      if (this.numJugador == '1') {
        Store.updatePuntaje1(nuevoPuntaje);
        puntajeOtroJugador = Store.state.puntaje2;
      } else {
        Store.updatePuntaje2(nuevoPuntaje);
        puntajeOtroJugador = Store.state.puntaje1;
      }

      // Verificar si gané, empaté o perdí
      if (nuevoPuntaje > puntajeOtroJugador) {
        console.log('Ganaste!');
      } else if (nuevoPuntaje == puntajeOtroJugador) {
        console.log('Empataste');
      } else {
        console.log('Perdiste!');
      }
    }
  }
}
</script>