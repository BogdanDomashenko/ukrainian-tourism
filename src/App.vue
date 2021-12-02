<template>
  <div>
    <!-- <div v-if="pageIsLoading">{{pageIsLoading}}</div> -->
    <Header/>
    <InternalExternal/>
    <VisitedCountries/>
    <UkrainianRegions/>
    <Transport/>
    <Foreigners/>
    <Employment/>
    <Investements/>
  </div>
</template>

<script>
import 'animate.css';
import * as aos from "aos/dist/aos.js"
import "aos/dist/aos.css"

// import VueScrollTo from 'vue-scrollto';

import Header from './components/Header.vue'
import InternalExternal from './components/InternalExternal.vue'
import VisitedCountries from './components/VisitedCountries.vue'
import UkrainianRegions from './components/UkrainianRegions.vue'
import Transport from './components/Transport.vue'
import Foreigners from './components/Foreigners.vue'
import Employment from './components/Employment.vue'
import Investements from './components/Investements.vue'


export default {
  name: 'App',
  data() {
    return {
      pageIsLoading: true
    }
  },
  components: {
    Header,
    InternalExternal,
    VisitedCountries,
    UkrainianRegions,
    Transport,
    Foreigners,
    Employment,
    Investements
  },
    mounted(){
      aos.init();
      window.addEventListener('load', () => {
        this.pageIsLoading = false;
      })
    }
}
</script>

<style>
</style>
