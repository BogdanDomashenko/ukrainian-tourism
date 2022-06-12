<template>
    <section class="transport section" id="transport" v-if="transport.length>0">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h1 class="h1" data-aos="fade-up" data-aos-delay="200">Транспорт</h1>
                <div class="line line-white"></div>
                <p data-aos="fade-down" data-aos-delay="200">млн. пасажирів у 2021 р.</p>
                <div class="transport-img" data-aos="fade-right" data-aos-delay="400">
                    <img src="../assets/images/transport/Saly11.png" alt="man">
                </div>
            </div>
            <div class="col-md-7 transport-content" data-aos="fade-left" data-aos-delay="600">
                <TransportChart :transportData="transport"/>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import TransportChart from './charts/TransportChart.vue'

import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Transport',
    components: {
        TransportChart
    },
    data() {
        return {
            // transport: { 
            //     automobile: 124,
            //     train: 155,
            //     avia: { international: 90, domestic: 10 },
            //     water: { river: 88, sea: 12 }
            // }
        }
    },
    methods: {
        ...mapActions([
            'getTransportFromAPI'
        ])
    },
    computed: {
        ...mapGetters([
            'transport'
        ])
    },
    mounted() {
        this.getTransportFromAPI().then(() => {
            console.log(this.transport)
        });
        
    }
}
</script>

<style scoped>

</style>