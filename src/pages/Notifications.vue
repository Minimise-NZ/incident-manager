<template>
  <q-page>
  </q-page>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Notifications',
  data () {
    return {
      header: { title: 'Notifications', color: 'red' }
    }
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>
