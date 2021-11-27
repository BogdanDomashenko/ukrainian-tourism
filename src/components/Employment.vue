<template>
    <section class="employment section" id="employment" v-if="employments.length>0">
        <div class="container">
            <h1 class="h1 wow animate__animated animate__fadeInUp" data-wow-delay="0s">Зайнятість</h1>
            <div class="line line-white line-break"></div>
            <div class="row">
                <div class="col-md-6 employment-left wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
                    <div class="block1 employment-block1">
                        <h2 class="h1">{{saparateNumber(employmentsTourism.count)}}</h2>
                        <p class="p">в галузі зайнято обслуговуванням відвідувачів(без роздрібної торгівлі)</p>
                    </div>
                </div>
                <div class="col-md-6 employment-right wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                    <div class="row">
                        <div class="block1 employment-block2 block-right">
                            <h3 class="h1">{{((employmentsTourism.count/employmentsTotal.count)*100).toFixed(0)}}%</h3>
                            <p class="p">зайнятого населення</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="block1 employment-block3 block-right">
                            <ManChart :manChartData="chartData"/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import ManChart from './charts/ManChart.vue'


export default {
    components: {
        ManChart
    },
    methods: {
        ...mapActions([
            'getEmploymentsFromAPI'
        ]),
        saparateNumber: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }
    },
    computed: {
        ...mapGetters([
            'employments',
        ]),
        employmentsTotal: function() {
            return this.employments.find(item => item.type == "total");
        },
        employmentsTourism: function() {
            return this.employments.find(item => item.type == "tourism");
        },
        chartData: function() {
            let maxCount = this.employmentsTotal.count;
            let count = this.employmentsTourism.count;

            return {maxCount, count};
        }
    },
    mounted() {
        this.getEmploymentsFromAPI();
    },
}
</script>