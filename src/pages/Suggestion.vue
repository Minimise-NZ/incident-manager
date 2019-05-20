<template>
  <q-page>
  </q-page>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Suggestion',
  data () {
    return {
      header: { title: 'Suggestion for Improvement', color: 'teal-7' }
    }
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>
