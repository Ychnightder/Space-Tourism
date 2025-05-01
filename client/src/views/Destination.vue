<script setup>
import ResponsiveBackground from "../components/shared/ResponsiveBackground.vue";
import Header from "../components/shared/Header.vue";
import {onMounted, ref} from "vue";
import {fetchData} from "../utils/Fn";
import Tilte from "../components/shared/Tilte.vue";


const selectedDestination = ref(0);
const destinations = ref([]);
onMounted( async () => {
 destinations.value = await fetchData('destinations');
})
const selectDestination = (index) => {
  selectedDestination.value = index;
};
</script>
<template>
  <!-- <ResponsiveBackground page="Destination"> -->
    <Header />
    <Tilte text="Pick your destination" number="01"/>
    <main class="main-destination">
      <div class="planet">
        <img :src="`/assets/images${destinations[selectedDestination]?.image_png}`" :alt="destinations[selectedDestination]?.name" />
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
  <!-- </ResponsiveBackground> -->
</template>

<style  lang="scss">
@import '../assets/scss/main';

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

      img{
        margin: 25px 0  0 75px;
      }
    }

    .desciption{
      width: 445px;
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
            position: relative;
            &:last-child{
              margin-right: 0;
            }
            &:first-child{
              margin-left: 0;
            }

            &::after{
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              right: 0;
              width: 00%;
              height: 3px;
              background-color: rgba(255, 255, 255, 0.75);
              transform: scaleX(0);
              transform: translateY(-4px);
              transform-origin: center;
              transition: all 0.3s ease;

            }
            &.active-nav {
              transform: translateY(-4px);
              color: white;
            }

            &.active-nav::after {
              width: 100%;
              background-color: white;
              transform: scaleX(1);
            }
            &:hover::after {
              width: 100%;
              transform: scaleX(1);
              transform: translateY(-4px);
            }

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
        margin: 14px 0 40px  0;
        font-family: $Barlow;
        font-size: 18px;
        line-height: 32px;
        color: $second-color; 
        font-weight: 200;
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

  @media (max-width: 1024px) {
    .main-destination{
      height: auto;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .planet{
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        margin:  30px 0 0 0;

        img{
          width: 100%;
          height: 100%;
          margin: 0;
        }
      }
      .desciption{
        width: 100%;
        margin-top: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        ul{
          margin: 30px 0 0 0;
          justify-content: center;
        }

        .para{
          margin: 14px 0px 40px  0px;
          height: 84px;
           text-align: center;
          font-size: 16px ;
          width:55%;
        }

        .line{
          width: 575px;
          display: inline-block;

        }

        .info{
          display: flex;
          align-items: center;
          justify-content: center;

          div{
            margin-right: 68px;
            text-align: center;
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
    }
  }


@media (max-width:  768px) {

  .main-destination{
    width: 100%;
    height: auto;

    .planet{
      width: 170px;
      height: 170px;
      margin: 0;
      img{
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
    .desciption{
      ul{
        height: 28px;
      }
      
      .name-planet{
        font-size: 56px;
        margin: 20px 0;
      }
      
      .para{
        width:50% ;
        max-width:   100%;
        height: auto;
        font-size: 15px;
        line-height: 25px;
      }

      .line{
        width: 327px;
      }


      .info{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        div{
          margin-right: 0;
          margin-bottom: 20px;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>