<template>
  <Header/>
  <InternalExternal/>
  <VisitedCountries/>
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
import Header from './components/Header.vue'
import InternalExternal from './components/InternalExternal.vue'
import VisitedCountries from './components/VisitedCountries.vue'

export default {
  name: 'App',
  components: {
    Header,
    InternalExternal,
    VisitedCountries
  },
  mounted() {

  }
}
</script>

<style>
</style>
