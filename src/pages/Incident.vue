<template>
  <q-page>
    <q-list>
      <q-list-header>Incident Details</q-list-header>
        <q-item>
          <q-item-main>
            <q-datetime
              v-model="datetime"
              type="datetime"
              minimal
              float-label="Date/Time of incident"
              format="D-MMMM-YYYY hh:mmA"/>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
             <q-input v-model="location" float-label="Location of incident"/>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-select
              v-model="severity"
              float-label="Severity"
              :options="severityOptions"
            />
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-option-group
              color="secondary"
              type="checkbox"
              v-model="involved"
              :options="involvedOptions"
            />
          </q-item-main>
        </q-item>
        <q-item v-if="involved.includes('thirdParty')">
          <q-item-main>
            <q-input v-model="thirdPartyName" float-label="Name of person involved"></q-input>
          </q-item-main>
        </q-item>
        <q-item v-if="involved.includes('thirdParty')">
          <q-item-main>
            <q-select
              v-model="thirdPartyType"
              float-label="Relationship to business"
              :options="thirdPartyOptions"
            />
          </q-item-main>
        </q-item>
      </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Incident',
  data () {
    return {
      header: { title: 'Incident/Event/Near Miss', color: 'deep-orange-7' },
      datetime: '',
      location: '',
      severity: '',
      severityOptions: [
        { label: 'Serious Harm', value: 'serious' },
        { label: 'Minor Harm', value: 'minor' },
        { label: 'No Harm/Near Miss', value: 'none' }
      ],
      involvedOptions: [
        { label: 'I was involved in the incident', value: 'user' },
        { label: 'The incident involved another person', value: 'thirdParty' }
      ],
      involved: [],
      thirdPartyOptions: [
        { label: 'Employee', value: 'employee' },
        { label: 'Contractor', value: 'contractor' },
        { label: 'Customer/Client', value: 'customer' },
        { label: 'Other', value: 'other' }
      ],
      thirdPartyType: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
  },
  beforeMount () {
    this.$store.dispatch('updateHeader', this.header)
  }
}
</script>

<style scoped>
</style>
