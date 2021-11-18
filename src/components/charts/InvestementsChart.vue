<template>
    <div class="investemts-chart" id="investemts-chart">
        <div class="investemts-chart-block" v-for="(year, index) in years" :key="index">
            <div class="investemts-chart-block-count">
                {{years[index].data}}
            </div>
            <div class="investemts-chart-pillar" :style="{ height: year.data/maxCount*100-20 + '%', background: year.color }"></div>
            <div class="investemts-chart-block-year">{{year.year}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        investementsChartData: {
            maxCount: Number,
            years: Array  
        }
    },
    data() {
        return {
            maxCount: 200,
            years: [
                {year: 2018, data: 200, color: '#E84D4D'},
                {year: 2019, data: 140, color: '#06AB8D'},
                {year: 2020, data: 130, color: '#6034BE'}
            ]  
        }
    }
}
</script>