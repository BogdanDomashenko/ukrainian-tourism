<template>
  <section class="internal-external section" id="internal-external">
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
                            <!-- 1 957 410 -->
                            {{saparateNumber(info['внутрішні']+info['виїздні'])}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="internal-external-count-extended wow animate__animated animate__fadeInDown"  data-wow-delay="0.6s">
                            <h2 class="internal-external-count-extended-h2">
                                З них
                            </h2>
                            <p class="internal-external-count-extended-p">
                                {{saparateNumber(info['виїздні'])}} виіздних
                            </p>
                            <p class="internal-external-count-extended-p">
                                {{saparateNumber(info['внутрішні'])}} внутрішніх
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InternalExternal',
    data: function() {
      return {
        info: {'внутрішні': 122, 'виїздні': 12}
      }
  },
    async mounted() {
        // this.info = await request('/api/internalExternal/');
    },
    methods: {
        saparateNumber: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          }
    }
}
</script>

<style scoped>

</style>
