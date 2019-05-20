<template>
  <q-page>
  </q-page>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Observation',
  data () {
    return {
      header: { title: 'Safety Observation', color: 'blue' }
    }
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>
