<template>
  <section class="visited-countries section" id="visited-countries" v-if="coutries.length>0 && internalExternal.length>0">
    <div class="container">
        <div class="row" data-aos="fade-up" data-aos-delay="200"><h1 class="h1">Країни до яких найбільше подорожують українці</h1></div>
        <div class="line line-blue"></div>
        <div class="row">
            <div class="col-sm-7">
                <BarChart class="visitedCountriesChart" :coutries="coutries" :external="internalExternal[0].external" data-aos="fade-right" data-aos-delay="400"/>
            </div>
            <div class="col-sm-5 section-img visited-countries-img" data-aos="fade-left" data-aos-delay="600">
                <img src="../assets/images/visited_countries/Saly2.svg" alt="man">
            </div>
        </div>
    </div>
</section> 
</template>

<script>

import BarChart from './charts/BarChart2.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'VisitedCountries',
    components: {
        BarChart
    },
    data () {
        return {
        }
    },
    methods: {
        ...mapActions([
            'getCoutriesDataFromAPI'
        ]),
    },
    computed: {
        ...mapGetters([
            'coutries',
            'internalExternal'
        ])
    },
    mounted() {
       this.getCoutriesDataFromAPI();   
    },
}
</script>

<style scoped>
    .visitedCountriesChart {
        margin-top: 20px;
    }
</style>
