<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Welcome to Your Vue.js App</h1>

  <div class="container-fluid">
    <apod />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Apod from './components/ApodComponent'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Apod }
}

</script>

<style lang="scss" scoped>
  body {
    background: url('{{ }}')
  }
</style>
