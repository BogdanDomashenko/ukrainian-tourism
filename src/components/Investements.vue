<template>
    <section class="section investements">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="h1 wow animate__animated animate__fadeInUp" data-wow-delay="0s">Інвестиції</h1>
                    <div class="line line-white line-break"></div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="investements-conut">
                                <span class="investements-conut-data">839 943 гривень</span>
                            </div>
                            <!-- <canvas id="investementsData" width="100%" height="40"></canvas> -->
                            <div class="investemts-chart" id="investemts-chart">
                                <div class="investemts-chart-block" v-for="(year, index) in years" :key="index">
                                    <div class="investemts-chart-block-count">
                                        {{years[index].data}}
                                    </div>
                                    <div class="investemts-chart-pillar" :style="{ height: year.data/maxCount*100-20 + '%', background: year.color }"></div>
                                    <div class="investemts-chart-block-year">{{year.year}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <object data="../assets/images/investements/Saly-32.svg" type="" class="investements-img"></object>
                </div>
            </div>
        </div>
</section>
</template>