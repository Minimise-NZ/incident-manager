<template>
  <q-page style="padding:10px">
     <q-list no-border>
        <q-item class="home-item" @click.native="$router.push('/incident')">
          <q-item-side color="red">
            <i class="fas fa-medkit fa-3x"></i>
          </q-item-side>
          <q-item-main
            label="Incident/Event/Near Miss"
            sublabel="Any unplanned event resulting in, or having a
            potential for injury, ill health or other loss"/>
        </q-item>
        <q-item-separator />
        <q-item class="home-item" @click.native="$router.push('/plantDamage')">
          <q-item-side color="deep-orange-6">
            <i class="fas fa-car-crash fa-3x"></i>
          </q-item-side>
          <q-item-main
            label="Plant Damage"
            sublabel="Any unplanned event resulting in damage to plant, property or equipment"/>
        </q-item>
        <q-item-separator />
        <q-item class="home-item" @click.native="$router.push('/hazard')">
          <q-item-side color="orange-6">
            <i class="fas fa-exclamation-circle fa-3x"></i>
          </q-item-side>
          <q-item-main
            label="Potential Hazard"
            sublabel="An activity, event, situation or substance that has the potential to cause harm "/>
        </q-item>
        <q-item-separator />
        <q-item class="home-item" @click.native="$router.push('/observation')">
          <q-item-side color="primary">
            <i class="far fa-eye fa-3x"></i>
          </q-item-side>
          <q-item-main
            label="Safety Observation"
            sublabel="An observation of a workers's good safety practises or
            a worker's unsafe behaviours"/>
        </q-item>
        <q-item-separator />
        <q-item class="home-item" @click.native="$router.push('/suggestion')">
          <q-item-side color="secondary">
            <i class="fas fa-comments fa-3x"></i>
          </q-item-side>
          <q-item-main
            label="Suggestion for Improvement"
            sublabel="Suggestions on how we can make the workplace safer"/>
        </q-item>
        <q-item-separator />
        <q-item @click.native="$router.push('/notifications')">
          <q-item-side color="pink-5">
            <i class="fas fa-bell fa-3x"></i>
          </q-item-side>
          <q-item-main
            label="Notifications" sublabel="Investigations and actions assigned to you"/>
        </q-item>
      </q-list>
  </q-page>
</template>

<style scoped>
  .home-item {
    margin-bottom: 10px;
  }
  .q-item-side {
    min-width: 70px;
  }
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      header: { title: 'Incident Manager', color: 'primary' }
    }
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>
