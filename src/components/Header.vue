<template>
<header class="header section" id="header">
    <nav class="navbar" id="navbar" v-bind:class="{sticky: isScrolling}">
        <div class="container" v-bind:class="{'nav-upper': !isScrolling, 'nav-upper-sticky': isScrolling}">
            <div class="nav-main">
                <a class="nav-mobile" v-on:click="greet">
                    <i class="bi bi-list nav-mobile-icon"></i>
                </a>
                <ul class="nav-items" id="nav-items1" v-bind:class="{ navMobileActive: isActive,  navMobileDisabled: !isActive}">
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#header'" class="nav-link">Головна</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#internal-external'" class="nav-link">Кількість туристів</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#visited-countries'" class="nav-link">Країни до яких подорожують</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#regions'" class="nav-link">Області</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#transport'" class="nav-link">Транспорт</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#foreigners'" class="nav-link">Іноземці</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#employment'" class="nav-link">Зайнятість</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-scroll-to="'#investements'" class="nav-link">Інвестиції</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="header-info">
        <!-- <div class="header-info-video">
            <video class="header-info-video-media" src="images/header/Comp 1.mp4" autoplay muted loop></video>
        </div> -->
        <div class="container header-content">
            <h1 class="header-text1"> Ukrainian <br> Tourism Analyzer </h1>
            <div class="header-text block1">
                <p class="p-text1 p-header">Інноваційний формат аналізу і подання статистичної інформації, який є результатом збору і аналізу усіх доступних статистичних даних, які тим чи іншим чином характеризують туризм.</p>
            </div>
            <div class="header-btn">
                <a href="#internal-external">
                    <button class="btn1">Переглянути</button>
                </a>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
  name: 'Header',
    data: function() {
      return {
        isActive: false,
        isScrolling: false,
        error: null
      }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    greet: function() {
      this.isActive = !this.isActive;
    },
    handleScroll: function() {
      if (window.scrollY > 50) {
        if(!this.isScrolling) {
          this.isScrolling = true;
        }
      }
      else {
        this.isScrolling = false;
      }
    }
  },
}
</script>

<style scoped>

</style>
