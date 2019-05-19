<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="light-blue-10"
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
          Incident Manager
          <div slot="subtitle">{{ companyName }}</div>
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
          Incident Manager
          <div slot="subtitle">{{ companyName }}</div>
        </q-toolbar-title>
      </q-toolbar>
      <q-list no-border class="q-mt-sm">
        <q-item>
          <q-item-side icon="fas fa-medkit"/>
          <q-item-main label="Incident/Event"/>
        </q-item>
        <q-item >
          <q-item-side icon="fas fa-exclamation-circle"/>
          <q-item-main label="Near Incident (Near Miss)"/>
        </q-item>
        <q-item >
          <q-item-side icon="fas fa-bolt"/>
          <q-item-main label="Potential Hazard"/>
        </q-item>
        <q-item >
          <q-item-side icon="far fa-eye"/>
          <q-item-main label="Safety Observation"/>
        </q-item>
        <q-item >
          <q-item-side icon="fas fa-comments"/>
          <q-item-main label="Suggestion for Improvement"/>
        </q-item>
      </q-list>
      <q-list no-border style="position: fixed; bottom:0">
        <q-item>
          <q-item-side icon="fas fa-user" />
          <q-item-main label="User Profile" />
        </q-item>
        <q-item>
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
