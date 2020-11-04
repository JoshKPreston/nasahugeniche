<template>
  <div class="Apod">
    {{ getApods() }}
  </div>
</template>

<script>
import { reactive } from 'vue'
import { apodService } from '../services/ApodService'

export default {
  name: 'Apod',
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      getApods() {
        apodService.getAll(state.query)
      }
    }
  },
  components: {}
}

</script>
<style lang="scss" scoped>

</style>
