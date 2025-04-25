<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import {onMounted, ref} from "vue";
import {fetchData} from "../utils/Fn";

const destinations = ref([]);
onMounted( async () => {
 destinations.value = await fetchData('destinations');
  console.log(destinations.value)
})

</script>
<template>
  <ResponsiveBackground page="Destination">
    <Header />
    <h1 class="tilte-destination"><span>01</span>Pick your destination</h1>
    <main class="main-destination">
      <div class="planet"></div>
      <div class="desciption">
        <div class="navigation">
          <ul>
          <li v-for="(destination , i ) in destinations" :key="i" :class="{'active-nav': true }">  {{ destination.name }}</li>
          </ul>
        </div>
        <h1 class="name-planet"></h1>
        <p class="para"></p>
        <div class="line"></div>
        <div class="info">
          <div class="leftInfo">
            <h3 >avg. distance</h3>
            <span class="distanceSpan"></span>
          </div>
          <div class="rightInfo">
            <h3>est. travel time</h3>
            <span class="travelSpan"></span>
          </div>
        </div>
      </div>
    </main>
  </ResponsiveBackground>

</template>

<style  lang="scss">
@import '../assets/scss/main';

  .tilte-destination{
    display: block;
    margin: 75px 0 75px 166px;
    font-size: 28px;
    letter-spacing: 4.5px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: $BarlowC;

      span{
        margin: 0 25px;
        opacity: 0.25;
      }
  }

  .main-destination{
    width: 100%;
    height: 480px;
    background: rgba(33, 200, 233, 0.77);
    margin: 0;
  }
</style>