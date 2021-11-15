<template>
  <section class="visited-countries section" id="visited-countries">
    <div class="container">
        <div class="row wow animate__animated animate__fadeInUp"><h1 class="h1">Країни до яких найбільше подорожують українці</h1></div>
        <div class="line line-blue"></div>
        <div class="row">
            <div class="col-sm-7">
                <div class="visited-countries-list wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s">
                    <div class="visited-country-el">
                        <div class="marker marker-blue"></div>
                        <span>Єгипет</span>
                    </div>
                    <div class="visited-country-el">
                        <div class="marker marker-aqua"></div>
                        <span>Туреччина</span>
                    </div>
                    <div class="visited-country-el">
                        <div class="marker marker-red"></div>
                        <span>Об’єднані Арабські Емірати</span>
                    </div>
                    <div class="visited-country-el">
                        <div class="marker marker-green"></div>
                        <span>Чорногорія</span>
                    </div>
                    <div class="visited-country-el">
                        <div class="marker marker-purple"></div>
                        <span>Домініканська Республіка</span>
                    </div>
                    <div class="visited-country-el">
                        <div class="marker marker-yellow"></div>
                        <span>Болгарія</span>
                    </div>
                    <div class="visited-country-el">
                        <div class="marker marker-lightyellow"></div>
                        <span>Інші</span>
                    </div>
                </div>
                <div class="row wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                    <BarChart class="visitedCountriesChart"/>
            </div>
            </div>
            <div class="col-sm-5 section-img visited-countries-img wow animate__animated animate__backInRight" data-wow-delay="0.2s">
                <img src="../assets/images/visited_countries/Saly2.svg" alt="man">
            </div>
        </div>
    </div>
</section> 
</template>

<script>

import BarChart from './charts/BarChart2.vue'

export default {
    name: 'VisitedCountries',
    components: {
        BarChart
    },
    data () {
        return {
        }
    },
}
</script>

<style scoped>
    .visitedCountriesChart {
        margin-top: 20px;
    }
</style>
