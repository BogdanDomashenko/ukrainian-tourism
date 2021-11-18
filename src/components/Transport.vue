<template>
    <section class="transport section" id="transport">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h1 class="h1 wow animate__animated animate__fadeInUp" data-wow-delay="0s">Транспорт</h1>
                <div class="line line-white"></div>
                <p class="wow animate__animated animate__fadeInDown" data-wow-delay="0s">млн. пасажирів у 2020 р.</p>
                <div class="transport-img wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
                    <img src="../assets/images/transport/Saly11.png" alt="man">
                </div>
            </div>
            <div class="col-md-7 transport-content wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                <TransportChart :transportData="transport"/>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import TransportChart from './charts/TransportChart.vue'

export default {
    name: 'Transport',
    components: {
        TransportChart
    },
    data() {
        return {
            transport: { 
                automobile: 124,
                train: 155,
                avia: { international: 90, domestic: 10 },
                water: { river: 88, sea: 12 }
            }
        }
    }
}
</script>

<style scoped>

</style>