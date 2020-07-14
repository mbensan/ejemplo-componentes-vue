<template>
  <form action="">
    <h3>Ingresar un Plato Nuevo al Menú</h3>
    <p>Nombre del plato: <input type="text" v-model="nombre" ></p>
    <p>Precio: $<input type="number" v-model="precio" ></p>
    <p>Categoría:
        <select v-model="categoria" >
          <option value="entrada">Entrada</option>
          <option value="principal">Plato Principal</option>
          <option value="acomp">Acompañamiento</option>
          <option value="postre">Postre</option>
        </select>
    </p>
    <p>Descripción: <textarea v-model="descripcion" ></textarea></p>
  </form>
</template>

<script>
export default {
  name: 'FormMenu',
  data: function() {
    return {
      nombre: '',
      precio: 0,
      categoria: '',
      descripcion: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
