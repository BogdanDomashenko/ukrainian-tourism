<template>
    <section class="foreigners section" id="foreigners">
        <div class="container">
            <h1 class="h1 wow animate__animated animate__fadeInUp" data-wow-delay="0s">Розподіл іноземних туристів </h1>
            <p class="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">за країнами з яких вони прибули</p>
            <div class="line line-white line-break"></div>
            <WorldMap class="wow animate__animated animate__fadeInRight" data-wow-delay="0.4s" style="width: 95%;" :mapData="worldMapData"/>
        </div>
    </section>
</template>

<script>
import WorldMap from './maps/WorldMap.vue'
import { getName } from 'country-list'

export default {
    components: {
        WorldMap
    },
    data () {
        return {
            worldMapData: {
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
                    values: {
                    AF: { gdp: 587},
                    AL: { gdp: 4583},
                    DZ: { gdp: 4293},
                    }
                }
        }
        }
    },
    mounted () {
        console.log(getName('AF'));
    }
}
</script>