<template>
  <div class="app">

  </div>
  <HeaderComponent />
<!--   <ContactComponent /> -->
  <HomeComponent />
  <FooterComponent />

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
/* import ContactComponent from './components/ContactComponent.vue'; */
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
 /*    ContactComponent, */
    HomeComponent
    /* HelloWorld */

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
