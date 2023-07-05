<template>
  <div id="app">
    <div class="container">
      <HeaderComponent />
      <HomeComponent />
      <AboutMe />
      <PortfolioComponent />
      <SkillComponent />
      <FooterComponent />

    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
/* import ContactComponent from './components/ContactComponent.vue'; */
import FooterComponent from './components/FooterComponent.vue';
import AboutMe from './components/AboutMe.vue';
import PortfolioComponent from './components/PortfolioComponent.vue';
import SkillComponent from './components/SkillComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
 /*    ContactComponent, */
    HomeComponent,
    AboutMe,
    PortfolioComponent,
    SkillComponent
    /* HelloWorld */

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Rajdhani', sans-serif;
}

#app {
  text-align: center;
}

.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url(./assets/bg-image.jpg);
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
nav {
  position: relative; 
  z-index: 1; 
}

html {

  scroll-behavior: smooth;
}
</style>
