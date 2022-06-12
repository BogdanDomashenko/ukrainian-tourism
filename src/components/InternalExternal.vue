<template>
  <section class="internal-external section" id="internal-external" v-if="internalExternal[0]">
    <div class="container">
        <div class="row int-ext">
            <div class="col-lg-4 internal-external-img" data-aos="fade-right" data-aos-delay="200">
                <img src="../assets/images/internal_external/Saly14.svg" alt="man">
            </div>
            <div class="col-lg-7 internal-external-content">
                    <div class="row" data-aos="fade-up" data-aos-delay="400"><h1 class="h1">Туристів обслуговано у 2021</h1></div>
                    <div class="line line-white line-break"></div>
                    <div class="row">
                        <div class="internal-external-count" data-aos="fade-down" data-aos-delay="400" id="#internal-external-count">
                            {{saparateNumber(internalExternal[0].external+internalExternal[0].internal)}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="internal-external-count-extended"  data-aos="fade-left" data-aos-delay="600">
                            <h2 class="internal-external-count-extended-h2">
                                З них
                            </h2>
                            <p class="internal-external-count-extended-p">
                                 {{saparateNumber(internalExternal[0].external)}} виіздних
                                  <!--5 980 203 виіздних  -->
                            </p>
                            <p class="internal-external-count-extended-p">
                                 {{saparateNumber(internalExternal[0].internal)}} внутрішніх
                                 <!-- 6 378 929 внутрішніх -->
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'InternalExternal',
    data: function() {
      return {
          
      }
  },
    methods: {
        ...mapActions([
            'getInternalExternalFromAPI'
        ]),
        saparateNumber: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          }
    },
    computed: {
        ...mapGetters([
            'internalExternal'
        ])
    },
    mounted() {
       this.getInternalExternalFromAPI();   
    },
}
</script>

<style scoped>

</style>
