<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import Tilte from "../components/shared/Tilte.vue";
import { onMounted, ref } from "vue";
import { fetchData } from "../utils/Fn";

const selectedCrew = ref(0);
const crews = ref([]);
onMounted(async () => {
  crews.value = await fetchData("crew");
});
const selectCrew = (index) => {
  selectedCrew.value = index;
};
</script>
<template>
  <!-- <ResponsiveBackground page="Crew"> -->
  <Header />
  <Tilte text="Meet your crew" number="02" />
  <main class="main-crew">
    <div class="description-crew">
      <div class="wrapper-text">
        <h2 class="job-crew">{{ crews[selectedCrew]?.role }}</h2>
        <h1 class="name-crew">{{ crews[selectedCrew]?.name }}</h1>
        <p class="para-crew">{{ crews[selectedCrew]?.bio }}</p>
      </div>
      <div class="wrapper">
        <div
          class="pins"
          v-for="(crew, i) in crews"
          :key="i"
          @click="selectCrew(i)"
          :class="{ activePins: selectedCrew === i }"
        ></div>
      </div>
    </div>
    <img
      class="personal-crew"
      :src="`/assets/images${crews[selectedCrew]?.image_png}`"
      :alt="crews[selectedCrew]?.name"
    />
  </main>
  <!-- </ResponsiveBackground> -->
</template>
<style lang="scss">
@import "../assets/scss/main";
.main-crew {
  width: 100%;
  display: flex;
  justify-content: start;
  height: 100%;

  .description-crew {
    height: 100%;
    margin-left: 190px;
    margin-top: 79px;
    display: flex;
    flex-direction: column;

    .job-crew {
      font-size: 32px;
      font-weight: 400;
      font-family: $Bellefair;
      opacity: 0.5;
      text-transform: uppercase;
    }
    .name-crew {
      font-size: 56px;
      font-weight: 400;
      font-family: $Bellefair;
      text-transform: uppercase;
    }
    .para-crew {
      color: $second-color;
      font-size: 18px;
      font-weight: 400;
      font-family: $Barlow;
      width: 440px;
      height: 128px;
    }

    .wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 132px;
      height: 15px;
      margin-top: 100px;

      .pins {
        width: 15px;
        height: 100%;
        border-radius: 50px;
        background: white;
        opacity: 0.17;
        cursor: pointer;
        transition: all 0.2s ease-out;
      }

      .activePins {
        opacity: 1;
      }

      .pins:hover {
        opacity: 0.5;
      }
    }
  }
  .personal-crew {
    width: 440px;
    position: absolute;
    bottom: 0;
    right: -50px;
    margin-right: 200px;
  }
}

@media (max-width: 1024px) {
  .main-crew {
    flex-direction: column;
    @include flex-center;
    height: 100%;
    width: 100%;

    .description-crew {
      text-align: center;
      margin: 0;
      width: 100%;
      height: auto;
      @include flex-center;
      .wrapper-text {
        display: flex;
        @include flex-center;
        flex-direction: column;
      }
      .job-crew {
        font-size: 24px;
      }
      .name-crew {
        font-size: 40px;
      }
      .para-crew {
        width: 70%;
        margin-bottom: 25px;
      }

      .wrapper {
        margin-top: 25px;
      }
    }
    .personal-crew {
      position: relative;
      left: 0;
      width: 300px;
      margin: 50px 0 0 0;
    }
  }
}
@media (max-width: 768px) {
  .main-crew {
    flex-direction: column-reverse;
    @include flex-center;
    height: auto;
    .description-crew {
      flex-direction: column-reverse;

      .wrapper-text {
        display: flex;
        @include flex-center;
        flex-direction: column;
      }
      .job-crew {
        font-size: 16px;
      }
      .name-crew {
        font-size: 24px;
        margin-bottom: 15px;
      }
      .para-crew {
        font-size: 15px;
        width: 90%;
      }

      .wrapper {
        margin-bottom: 25px;
      }
    }
    .personal-crew {
      margin-top: 0;
      margin-bottom: 15px;
      width: 200px;
    }
  }
}
</style>
