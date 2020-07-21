<template>
  <form v-on:submit="enviar" action="">
    <div class="input-field">
      <input type="text" v-model="nombre" required>
      <label for="">Nombre del plato:</label>
    </div>
    <div class="input-field">
      <input type="number" v-model="precio" required min="1000" max="20000">
      <label for="">Precio: $</label>
    </div>
    <div class="input-field">
      <select v-model="categoria" required>
        <option value=""></option>
        <option value="entrada">Entrada</option>
        <option value="principal">Plato Principal</option>
        <option value="acomp">Acompañamiento</option>
        <option value="postre">Postre</option>
      </select>
      <label for="">Categoria:</label>
    </div>
    <div class="input-field">
      <textarea v-model="descripcion" class="materialize-textarea"></textarea>
      <label for="">Descripción:</label>
    </div>
    <div class="input-field">
      <div class="row-">
        <div class="col s6">
          <label>
            <input type="checkbox" value="dsco" v-model="opciones" />
            <span>con Descuento</span>
          </label>
        </div>
        <div class="col s6">
          <label>
            <!-- <input type="checkbox" value="rappi" v-model="opciones" />   -->
            <span>Rappi</span>
          </label>
        </div>
      </div>
    </div>
    <p><input type="submit" class="btn tooltipped" data-position="bottom" data-tooltip="Haga click para enviar el formulario"></p>
  </form>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'FormMenu',
  data() {
    return {
      nombre: '',
      precio: 0,
      categoria: '',
      descripcion: '',
      opciones: []
    }
  },
  mounted: function() {
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, {});

    var tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips, {});
  },
  methods: {
    enviar: function(ev) {
      ev.preventDefault();
      console.log(this.nombre)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
