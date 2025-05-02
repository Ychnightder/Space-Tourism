<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import Tilte from "../components/shared/Tilte.vue";
import { onMounted, ref, onUnmounted } from "vue";
import { fetchData } from "../utils/Fn";

const selectedTechnology = ref(0);
const technologies = ref([]);
onMounted(async () => {
  technologies.value = await fetchData("technology");
});

const selectTechnology = (index) => {
  selectedTechnology.value = index;
};

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <Header />
  <Tilte text="SPACE LAUNCH 101" number="03" />

  <main class="main-technology">
    <div class="contenu">
      <div class="wrapper">
        <div class="container-btn">
          <div
            class="btn-technology"
            v-for="(technology, i) in technologies"
            :key="i"
            @click="selectTechnology(i)"
            :class="{ 'active-btn': selectedTechnology === i }"
          >
            {{ i + 1 }}
          </div>
        </div>

        <div class="description-technology">
          <h2 class="sub-technology">THE TERMINOLOGY …</h2>
          <h1 class="name-technology">
            {{ technologies[selectedTechnology]?.name }}
          </h1>
          <p class="para-technology">
            {{ technologies[selectedTechnology]?.description }}
          </p>
        </div>
      </div>
    </div>

    <img
      class="technology-img"
      :src="`/assets/images${
        windowWidth >= 1024
          ? technologies[selectedTechnology]?.image_portrait
          : technologies[selectedTechnology]?.image_landscape
      }`"
      :alt="technologies[selectedTechnology]?.name"
    />
  </main>
</template>

<style lang="scss">
@import "../assets/scss/main";

.main-technology {
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  .contenu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .wrapper {
      width: 95%;
      display: flex;
      align-items: center;
      height: 85%;
      margin-left: 190px;

      .container-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 80px;
        margin-right: 75px;

        .btn-technology {
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
          @include flex-center;
          font-weight: 400;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease-out;
          &:hover {
            border: 1px solid rgb(255, 255, 255);
          }
          &.active-btn {
            border: 1px solid rgb(255, 255, 255);
            background-color: white;
            color: $primary-color;
          }
        }
      }

      .description-technology {
        height: 275px;
        max-width: 500px;
        .sub-technology {
          font-size: 16px;
          letter-spacing: 2.7;
          font-weight: 200;
          font-family: $BarlowC;
          text-transform: uppercase;
          color: $second-color;
        }
        .name-technology {
          font-size: 56px;
          font-weight: 400;
          text-transform: uppercase;
          font-family: $Bellefair;
        }
        .para-technology {
          font-size: 18px;
          font-weight: 200;
          font-family: $Barlow;
          color: $second-color;
          line-height: 32px;
          width: 445px;
        }
      }

      .technology-img {
        position: absolute;
        width: 500px;
        top: -50px;
        right: 0;
      }
    }
  }
}

@media (max-width: 1024px) {
  .main-technology {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column-reverse;

    .contenu {
      .wrapper {
        flex-direction: column;
        width: 100%;
        margin-left: 0;
        height: 100%;
        .container-btn {
          width: 100%;
          margin-right: 0;
          margin: 57px 0 20px 0;
          flex-direction: row;
          gap: 20px;
        }

        .description-technology {
          height: auto;
          width: 100%;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          .sub-technology {
            margin-bottom: 26px;
          }
          .name-technology {
            font-size: 40px;
            margin-bottom: 36px;
          }
          .para-technology {
            font-size: 16px;
            line-height: 28px;
            width: 80%;
          }
        }
      }
    }
  }
  .technology-img {
    width: 100%;
    position: relative;
  }
}

@media (max-width: 768px) {
  .main-technology {
    .contenu {
      .wrapper {
        flex-direction: column;
        .container-btn {
          .btn-technology {
            width: 40px;
            height: 40px;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .description-technology {
          .sub-technology {
            font-size: 15px;
          }
          .name-technology {
            font-size: 24px;
          }
          .para-technology {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
