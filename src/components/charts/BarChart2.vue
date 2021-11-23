<template>
  <div v-if="filteredCountries">
      <div class="visited-countries-list wow animate__animated animate__fadeInLeft" data-wow-delay="0.4s">
          <div class="visited-country-el" v-for="(item, index) in chartData" :key="index">
              <div class="marker" :style="{ backgroundColor: item.backgroundColor}"></div>
              <span>{{item.label[0]}}</span>
          </div>
      </div>
      <div class="row wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
          <canvas id="visitedCountriesChart" width="100%" height="200"></canvas>
      </div>
  </div>
</template>
  
  <script>
  import Chart from 'chart.js/auto';

    export default {
      name: 'BarChart',
      props: {
        coutries: Array,
        external: Number
      },
      data() {
        return {
          chartData: [],
          colors: [
            {backgroundColor: '#80A3FF', hoverBackgroundColor: 'rgba(50,90,100,1)'},
            {backgroundColor: '#A4FFEF', hoverBackgroundColor: '#495f6b'},
            {backgroundColor: '#DB5B5B', hoverBackgroundColor: '#4d0606'},
            {backgroundColor: '#63F060', hoverBackgroundColor: '#083809'},
            {backgroundColor: '#BA51DF', hoverBackgroundColor: 'rgba(46,185,235,1)'},
            {backgroundColor: '#E8D52A', hoverBackgroundColor: 'rgba(46,185,235,1)'},
            {backgroundColor: '#ff47f9', hoverBackgroundColor: '#ff9cfc'},
            {backgroundColor: '#2c286b', hoverBackgroundColor: '#1a173d'},
            ]
        }
      },
      computed: {
        filteredCountries () {
          const countries = this.coutries;
          return [...countries].sort((a,b) => b.external-a.external).slice(0,7);
        }
      },
      mounted() {
        let index = 0;
        let sum = 0;
        for (let country of this.filteredCountries) {
          this.chartData.push({
            label:  [country.country],
            data: [country.external],
            backgroundColor: this.colors[index].backgroundColor,
            hoverBackgroundColor: this.colors[index].hoverBackgroundColor
          });
          index++;
          sum += country.external;
        }

        this.chartData.push({
            label:  ['Інші'],
            data: [this.external-sum],
            backgroundColor: this.colors[index].backgroundColor,
            hoverBackgroundColor: this.colors[index].hoverBackgroundColor
        });

        let visitedCountriesCtx = document.getElementById('visitedCountriesChart').getContext('2d');

        new Chart(visitedCountriesCtx, {
          type: 'bar',
          data: {
              labels: [''],
              datasets: this.chartData
          },
          options: {
              plugins: {
                  legend: {
                      display: false
                  }
              },
              indexAxis: 'y',
              responsive: true,
              scales: {
                x: {
                  display: false,
                  stacked: true,
                },
                y: {
                  display: false,
                  stacked: true
                }
              },
            }
      });
      },
    }
  </script>