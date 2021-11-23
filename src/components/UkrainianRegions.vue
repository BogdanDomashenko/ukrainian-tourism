<template>
    <section class="ukrainian-regions section" id="regions" v-if="regions.length>0">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="row wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                        <h1 class="h1">Області до яких подорожують внутрішні туристи</h1>
                    </div>
                    <div class="line line-blue"></div>
                    <div class="row">
                        <UkraineMap :regionsData="regions" @clicked="setCity"/>
                    </div>
                </div>
                <div class="col-lg-5 col-10 ukrainian-region wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                        <div class="ukrainian-region-block wow animate__animated animate__fadeIn" data-wow-delay="0.8s" v-if="currentCity">
                            <h2 class="ukrainian-region-name">{{currentCity.city}}</h2>
                            <p class="ukrainian-region-count">Кількість туристів за рік: {{currentCity.visitors}}</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import UkraineMap from './maps/UkraineMap'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'UkrainianRegions',
    components: {
        UkraineMap
    },
    data: function () {
        return {
            currentCity: null
        }
    },
    methods: {
        ...mapActions([
            'getRegionsFromAPI'
        ]),
        setCity(value) {
            this.currentCity = value
      }
    },
    computed: {
        ...mapGetters([
            'regions'
        ]),
    },
    mounted() {
        this.getRegionsFromAPI();
    }
}
</script>

<style scoped>

</style>