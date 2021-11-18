<template>
    <div class="man-chart" id="man-chart">
        <img src="../../assets/images/employment/man.png" alt="img" class="man-chart-img" :class="{'man-chart-img-unactive': chartCoeficient<i/80}" v-for="i in 80" :key="i">
    </div>
</template>

<script>
export default {
    props: {
        manChartData: 
        { 
            maxCount: Number,
            count: Number
        },
    },
    computed: {
        chartCoeficient: function () {
            return this.manChartData.count/this.manChartData.maxCount;
        }
    }
}
</script>

<style scoped>
    .man-chart-img-unactive {
        opacity: 0.5;
    }
</style>