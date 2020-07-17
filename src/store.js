export default {
  state: {
    puntaje1: 50,
    puntaje2: 50
  },
  updatePuntaje1: function(nuevoPuntaje) {
    this.state.puntaje1 = nuevoPuntaje;
  },
  updatePuntaje2: function(nuevoPuntaje) {
    this.state.puntaje2 = nuevoPuntaje;
  }
}