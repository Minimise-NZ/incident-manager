<template>
  <q-page>
  </q-page>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Plant Damage',
  data () {
    return {
      header: { title: 'Plant Damage', color: 'amber-9' }
    }
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>
