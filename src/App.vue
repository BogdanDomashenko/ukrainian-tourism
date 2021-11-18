<template>
  <Header/>
  <InternalExternal/>
  <VisitedCountries/>
  <UkrainianRegions/>
  <Transport/>
  <Foreigners/>
  <Employment/>
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
import Header from './components/Header.vue'
import InternalExternal from './components/InternalExternal.vue'
import VisitedCountries from './components/VisitedCountries.vue'
import UkrainianRegions from './components/UkrainianRegions.vue'
import Transport from './components/Transport.vue'
import Foreigners from './components/Foreigners.vue'
import Employment from './components/Employment'

import 'animate.css';
import WOW from 'wowjs'

export default {
  name: 'App',
  components: {
    Header,
    InternalExternal,
    VisitedCountries,
    UkrainianRegions,
    Transport,
    Foreigners,
    Employment
  },
  mounted() {
    new WOW.WOW().init();
  }
}
</script>

<style>
</style>
