<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import {onMounted, ref} from "vue";
import {fetchData} from "../utils/Fn";


const selectedDestination = ref(null);
const destinations = ref([]);
onMounted( async () => {
 destinations.value = await fetchData('destinations');
  console.log(destinations.value)
})
const selectDestination = (index) => {
  selectedDestination.value = index;
};
</script>
<template>
  <ResponsiveBackground page="Destination">
    <Header />
    <h1 class="tilte-destination"><span>01</span>Pick your destination</h1>
    <main class="main-destination">
      <div class="planet">
        <img :src="`/assets/images${destinations[selectedDestination]?.image_webp}`" :alt="destinations[selectedDestination]?.name" />
      </div>
      <div class="desciption">
        <div class="navigation">
          <ul>
          <li v-for="(destination , i ) in destinations" :key="i"   :class="{'active-nav': selectedDestination === i}"
              @click="selectDestination(i)">{{ destination.name }}</li>
          </ul>
        </div>
        <h1 class="name-planet ">{{ destinations[selectedDestination]?.name }}</h1>
        <p class="para">{{ destinations[selectedDestination]?.description }}</p>
        <div class="line"></div>
        <div class="info">
          <div class="leftInfo">
            <h3 >avg. distance</h3>
            <span >{{ destinations[selectedDestination]?.distance }}</span>
          </div>
          <div class="rightInfo">
            <h3>est. travel time</h3>
            <span >{{ destinations[selectedDestination]?.travel }}</span>
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
    margin: 75px 0 50px 166px;
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
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: space-around;

    .planet{
      width: 445px;
      height: 445px;
      transition: all 0.3ms ease-out;
    }

    .desciption{
      width: 445px;
      height: 472px;
      .navigation{
        display: flex;
        ul{
          width: 100%;
          height: 34px;
          display: flex;

          li{
            margin: 0 30px 0 0;
            cursor: pointer;
            text-transform: uppercase;
            font-family: $BarlowC;
            font-size: 16px;
            color: $second-color;
            letter-spacing: 2.7px;
          }
        }
      }

      .name-planet{
        font-family: $Bellefair;
        text-transform: uppercase;
        font-size: 100px;
        font-weight: 400;
      }
      .para{
        margin: 14px 0 60px  0;
        font-family: $Barlow;
        font-size: 18px;
        line-height: 32px;
      }
      .line{
        width: 100%;
        height: 1px;
        background: #383B4B;
        margin-bottom: 30px;
      }
      .info{
        width: 100%;
        display: flex;
        align-items: center;
        div{
          width: 170px;
          height: 60px;
          margin-right: 68px;

          h3{
            font-family: $BarlowC;
            letter-spacing: 2.3px;
            font-weight: 400;
            text-transform: uppercase;
            color: $second-color;
            margin-bottom: 15px;

          }
          span{
            font-family: $Bellefair;
            font-size: 28px;
            text-transform: uppercase;
            font-weight: 400;
          }
        }
      }


    }
  }
</style>