<template>
  <section class="internal-external section" id="internal-external" v-if="internalExternal[0]">
    <div class="container">
        <div class="row int-ext">
            <div class="col-lg-4 internal-external-img  wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
                <img src="../assets/images/internal_external/Saly14.svg" alt="man">
            </div>
            <div class="col-lg-7 internal-external-content">
                    <div class="row wow animate__animated animate__fadeInUp" data-wow-delay="0.4s"><h1 class="h1">Туристів обслуговано у 2020</h1></div>
                    <div class="line line-white line-break"></div>
                    <div class="row">
                        <div class="internal-external-count wow animate__animated animate__fadeInRight" data-wow-delay="0.4s" id="#internal-external-count">
                            {{saparateNumber(internalExternal[0].external+internalExternal[0].internal)}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="internal-external-count-extended wow animate__animated animate__fadeInDown"  data-wow-delay="0.6s">
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
