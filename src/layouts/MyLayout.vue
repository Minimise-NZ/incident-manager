<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        :color='header.color'
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{header.title}}
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-toolbar
        color="teal-7"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
        ><q-toolbar-title>
          {{ companyName }}
        </q-toolbar-title>
      </q-toolbar>
      <q-list no-border class="q-mt-sm">
        <q-item @click.native="$router.push('/')">
          <q-item-side icon="home"/>
          <q-item-main label="Home"/>
        </q-item>
        <q-item @click.native="$router.push('/incident')">
          <q-item-side icon="fas fa-medkit"/>
          <q-item-main label="Incident/Event/Near Miss"/>
        </q-item>
        <q-item @click.native="$router.push('/plantDamage')">
          <q-item-side icon="fas fa-car-crash"/>
          <q-item-main label="Plant Damage"/>
        </q-item>
        <q-item @click.native="$router.push('/hazard')">
          <q-item-side icon="fas fa-exclamation-circle"/>
          <q-item-main label="Potential Hazard"/>
        </q-item>
        <q-item @click.native="$router.push('/observation')">
          <q-item-side icon="far fa-eye"/>
          <q-item-main label="Safety Observation"/>
        </q-item>
        <q-item @click.native="$router.push('/suggestion')">
          <q-item-side icon="fas fa-comments"/>
          <q-item-main label="Suggestion for Improvement"/>
        </q-item>
      </q-list>
      <q-list no-border style="position: fixed; bottom:0">
        <q-item @click.native="$router.push('/user')">
          <q-item-side icon="fas fa-user" />
          <q-item-main label="User Profile" />
        </q-item>
        <q-item @click.native="$router.push('/notifications')">
          <q-item-side icon="fas fa-bell" />
          <q-item-main label="Notifications" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      companyName: 'Apex Car Rentals'
    }
  },
  computed: {
    header () {
      return this.$store.getters.header
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
  .q-item {
    margin-bottom: 20px;
  }

</style>
