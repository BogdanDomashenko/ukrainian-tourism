<template>
    <div v-if="coutries.length>0">
            <section class="foreigners section" id="foreigners">
        <div class="container">
            <h1 class="h1" data-aos="fade-right" data-aos-delay="200">Розподіл іноземних туристів </h1>
            <p class="" data-aos="fade-right" data-aos-delay="400">за країнами з яких вони прибули</p>
            <div class="line line-white line-break"></div>
            <WorldMap class="" data-aos="fade-up" data-aos-delay="600" style="width: 95%;" :mapData="worldMapData"/>
        </div>
    </section>
    </div>
</template>

<script>
import WorldMap from './maps/WorldMap.vue'
// import { getCode } from 'country-list'
import {mapGetters} from 'vuex'
import * as country from '../plugins/countryList';

export default {
    components: {
        WorldMap
    },
    data () {
        return {

        }
    },
    methods: {
 
    },
    computed: {
        ...mapGetters([
            'coutries'
        ]),
        worldMapData: function() {
            let obj = {}

            for (let item of this.coutries) {
                if(item.country) {
                    if(item.internal && item.internal != "-") {
                        obj[country.getKeyByName(item.country)] = { gdp: item.internal};
                    }
                    else if(item.internal == "-") {
                        obj[country.getKeyByName(item.country)] = { gdp: 0};
                    }
                }
            }
            
            let resObj = {
                targetElementID: 'svgWorldMap',
                colorMax: "#48185F",
                colorMin: "#C1AAD3",
                data: {
                    data: {
                    gdp: {
                        name: 'Відвідало:',
                        format: '{0} чоловік',
                        thousandSeparator: ',',
                        thresholdMax: 50000,
                        thresholdMin: 1000
                    },
                    },
                    applyData: 'gdp',
                    values: obj
                }
            }

            return(resObj)
        },
    },
    mounted () {

    }
}
</script>