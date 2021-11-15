<template>
  <div>
    <canvas id="visitedCountriesChart" width="100%" height="160"></canvas>
  </div>
</template>
  
  <script>
  import Chart from 'chart.js/auto';

    export default {
      name: 'BarChart',
      mounted() {
        let visitedCountriesCtx = document.getElementById('visitedCountriesChart').getContext('2d');

        new Chart(visitedCountriesCtx, {
          type: 'bar',
          data: {
              labels: [''],
              datasets: [{
                  label: 'Єгипет',
                  data: [46.4],
                  backgroundColor: "#80A3FF",
                  hoverBackgroundColor: "rgba(50,90,100,1)"
              },{
                  label: 'Туреччина',
                  data: [39.7],
                  backgroundColor: "#A4FFEF",
                  hoverBackgroundColor: "rgba(140,85,100,1)"
              },{
                  label: 'Об’єднані Арабські Емірати',
                  data: [7.6],
                  backgroundColor: "#DB5B5B",
                  hoverBackgroundColor: "rgba(46,185,235,1)"
              },{
                  label: 'Чорногорія',
                  data: [4],
                  backgroundColor: "#63F060",
                  hoverBackgroundColor: "rgba(46,185,235,1)"
              },{
                  label: 'Домініканська Республіка',
                  data: [2],
                  backgroundColor: "#BA51DF",
                  hoverBackgroundColor: "rgba(46,185,235,1)"
              },{
                  label: 'Болгарія',
                  data: [1],
                  backgroundColor: "#E8D52A",
                  hoverBackgroundColor: "rgba(46,185,235,1)"
              }]
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