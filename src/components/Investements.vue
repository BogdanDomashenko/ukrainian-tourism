<template>
    <section class="section investements" id="investements" v-if="investements.length>0">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="h1" data-aos="fade-down" data-aos-delay="0">Інвестиції</h1>
                    <div class="line line-white line-break"></div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="investements-conut" data-aos="fade-up" data-aos-delay="200">
                                <span class="investements-conut-data">{{(totalInvestements/1000000).toFixed(0)}} млн. гривень</span>
                            </div>
                            <InvestementsCharts data-aos="fade-right" data-aos-delay="400" :investementsChartData="investementsData"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-delay="400">
                    <!-- <object data="../assets/images/investements/Saly-32.svg" type="" class="investements-img"></object> -->
                    <img src="../assets/images/investements/Saly-32.png" class="investements-img" alt="">
                </div>
            </div>
        </div>
</section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import InvestementsCharts from "./charts/InvestementsChart.vue"

export default {
    components: {
        InvestementsCharts
    },
    data () {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'investements',
        ]),
        investementsData: function() {
               return{ 
                    maxCount: this.maxInvestemet,
                    years: [
                        {year: 2018, data: this.getInvestementsByYear(2018), color: '#E84D4D'},
                        {year: 2019, data: this.getInvestementsByYear(2019), color: '#06AB8D'},
                        {year: 2020, data: this.getInvestementsByYear(2020), color: '#6034BE'}
                    ] 
               }
        },
        totalInvestements: function() {
            let sum = 0;
            this.investements.forEach(item => sum += item.count);

            return sum;
        },
        maxInvestemet: function() {
            let max = 0;

            this.investements.forEach(item => {
                if (item.count > max ) max = item.count;
            });

            return max;
        }
    },
    methods: {
        ...mapActions([
            'getInvestementsFromAPI'
        ]),
        getInvestementsByYear: function (year) {
            let currentItem = this.investements.find(item => item.year == year);
            return currentItem.count;
        }
    },
    mounted() {
        this.getInvestementsFromAPI();
    },
}
</script>