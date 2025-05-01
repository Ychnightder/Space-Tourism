<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import Tilte from "../components/shared/Tilte.vue";
import {onMounted, ref} from "vue";
import {fetchData} from "../utils/Fn";



const selectedTechnology = ref(0);
const technologies = ref([]);
onMounted( async () => {
  technologies.value = await fetchData('technology');
})

const selectTechnology = (index) => {
  selectedTechnology.value = index;
};
  
</script>

<template>
  <!-- <ResponsiveBackground page="technology">  -->
    <Header />
    <Tilte text="SPACE LAUNCH 101" number="03"/>

    <main class="main-technology">
      <div class="wrapper">
        <div class="container-btn">
        <div class="btn-technology" v-for="(technology , i) in technologies" :key="i" @click="selectTechnology(i)" :class="{'active-btn' : selectedTechnology === i }">{{ i+1 }}</div>
      </div>

      <div class="description-technology">
        <h2 class="sub-technology">THE TERMINOLOGY …</h2>
        <h1 class="name-technology">{{ technologies[selectedTechnology]?.name }}</h1>
        <p class="para-technology">{{ technologies[selectedTechnology]?.description }}</p>
      </div>
      
      <img class="technology-img" :src="`/assets/images${technologies[selectedTechnology]?.image_portrait}`" :alt="technologies[selectedTechnology]?.name" />

      </div>
     
    </main>
  <!-- </ResponsiveBackground> -->
</template>

<style  lang="scss">
  @import '../assets/scss/main';

    .main-technology{
      width: 100%;
      height: 430px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
    
      .wrapper{
        width: 95%;
        display: flex;
        align-items: center;
        height: 85%;
        margin-left: 190px;
    
        .container-btn{
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          width: 80px;
          margin-right: 75px;
          
          .btn-technology{
            font-family: $Bellefair;
            font-size: 32px;
            width: 80px;
            height: 80px;
            margin: 10px 0;
            border-radius: 50%;
            border: 1px solid rgb(255, 255, 255, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 400;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease-out;
              &:hover{
                border: 1px solid rgb(255, 255, 255);
                
              }
              &.active-btn{
               border: 1px solid rgb(255, 255, 255);
               background-color: white;
               color: $primary-color;

              }
          }
        }

        .description-technology{
            height: 275px;
            max-width: 500px;
          .sub-technology{
            font-size: 16px;
            letter-spacing: 2.7;
            font-weight: 200;
            font-family: $BarlowC;
            text-transform: uppercase; 
            color: $second-color;
          }
          .name-technology{
            font-size: 56px;
            font-weight: 400;
            text-transform: uppercase;
            font-family:$Bellefair ;
          }
          .para-technology{
            font-size: 18px;
            font-weight: 200;
            font-family:$Barlow ;
            color: $second-color;
            line-height :32px ;
            width: 445px;
          }
        }

        .technology-img{
            position: absolute;
            width: 500px;
            top: -50px;
            right: 0;
        }
    }
  }
</style>