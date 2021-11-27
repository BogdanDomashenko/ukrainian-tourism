<template>
    <div class="investemts-chart" id="investemts-chart">
        <div class="investemts-chart-block" v-for="(year, index) in investementsChartData.years" :key="index">
            <div class="investemts-chart-block-count">
                {{investementsChartData.years[index].data}}
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
}
</script>