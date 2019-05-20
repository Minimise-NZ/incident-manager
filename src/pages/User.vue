<template>
  <q-page>
  </q-page>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'User',
  data () {
    return {
      header: { title: 'User Profile', color: 'grey' }
    }
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>
