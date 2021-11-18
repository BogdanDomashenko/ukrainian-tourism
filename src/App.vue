<template>
  <Header/>
  <InternalExternal/>
  <VisitedCountries/>
  <UkrainianRegions/>
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
import Header from './components/Header.vue'
import InternalExternal from './components/InternalExternal.vue'
import VisitedCountries from './components/VisitedCountries.vue'
import UkrainianRegions from './components/UkrainianRegions.vue'

import 'animate.css';
import WOW from 'wowjs'

export default {
  name: 'App',
  components: {
    Header,
    InternalExternal,
    VisitedCountries,
    UkrainianRegions
  },
  mounted() {
    new WOW.WOW().init();
  }
}
</script>

<style>
</style>
