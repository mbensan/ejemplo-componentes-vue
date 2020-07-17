<template>
  <div class="card brown darken-1">
    <div class="card-content white-text">
      <span class="card-title">Has realizado {{ clicks }} clicks!</span>
      <div>
        <button @click="addClick" class="waves-effect waves-light btn">Aumentar clicks</button>
        <button @click="resetClicks" class="waves-effect waves-light btn lime darken-1">Resetear clicks</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data() {
      return {
        clicks: 0
      }
    },
    methods: {
      addClick: function() {
        this.clicks++;
        localStorage.setItem('clicks', this.clicks);
      },
      resetClicks() {
        this.clicks = 0;
      }
    },
    mounted: function() {
      // esta función se va a ejecutar cuando el monte el componente
      const oldClicks = localStorage.getItem('clicks');
      if (oldClicks) {
        this.clicks = oldClicks;
      }
    }
  }
</script>