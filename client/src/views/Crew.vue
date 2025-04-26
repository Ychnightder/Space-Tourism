<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import Tilte from "../components/shared/Tilte.vue";
import {onMounted, ref} from "vue";
import {fetchData} from "../utils/Fn";


const selectedCrew = ref(0);
const crews = ref([]);
onMounted( async () => {
  crews.value = await fetchData('crew');
})

const selectCrew = (index) => {
  selectedCrew.value = index;
};
</script>

<template>
  <ResponsiveBackground page="Crew">
    <Header />
    <Tilte text="Meet your crew" number="02"/>
    <main  class="main-crew">
      <div class="description-crew">
        <h2 class="job-crew">{{ crews[selectedCrew]?.role }}</h2>
        <h1 class="name-crew">{{ crews[selectedCrew]?.name }}</h1>
        <p class="para-crew">{{ crews[selectedCrew]?.bio }}</p>
        <div class="wrapper">
          <div class="pins" v-for="(crew , i) in crews" :key="i" @click="selectCrew(i)" >
            gg
          </div>
        </div>
      </div>
      <div class="personal-crew">
        <img :src="`src/assets/images${crews[selectedCrew]?.image_webp}`" :alt="crews[selectedCrew]?.name" />
      </div>
    </main>
</ResponsiveBackground>
</template>

<style  lang="scss">
@import '../assets/scss/main';

  .main-crew{
    width: 100%;
    display: flex;
  }
</style>