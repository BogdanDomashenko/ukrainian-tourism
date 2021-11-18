<template>
    <section class="section investements" id="investements">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="h1 wow animate__animated animate__fadeInUp" data-wow-delay="0s">Інвестиції</h1>
                    <div class="line line-white line-break"></div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="investements-conut wow animate__animated animate__fadeInDown" data-wow-delay="0.2s">
                                <span class="investements-conut-data">839 943 гривень</span>
                            </div>
                            <InvestementsCharts class="wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s" :investementsChartData="investementsData"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                    <!-- <object data="../assets/images/investements/Saly-32.svg" type="" class="investements-img"></object> -->
                    <img src="../assets/images/investements/Saly-32.png" class="investements-img" alt="">
                </div>
            </div>
        </div>
</section>
</template>

<script>
import InvestementsCharts from "./charts/InvestementsChart.vue"

export default {
    components: {
        InvestementsCharts
    },
    data () {
        return {
            investementsData: {
                maxCount: 200,
                years: [
                    {year: 2018, data: 200, color: '#E84D4D'},
                    {year: 2019, data: 140, color: '#06AB8D'},
                    {year: 2020, data: 130, color: '#6034BE'}
                ] 
            }
        }
    }
}
</script>