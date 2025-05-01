<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';

const links = [
  { name: 'Home' },
  { name: 'Destination' },
  { name: 'Crew' },
  { name: 'Technology' }
];

const activeLink = ref('Home');
function formatIndex(i) {
  return i.toString().padStart(2, '0');
}
const isMenuOpen = ref(false);
const isMobile = ref(window.innerWidth < 768);

function handleResize() {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isMenuOpen.value = false;
  }
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

</script>


<template>
  <header class="header">
    <div class="wrapper-nav">
      <div class="logo">
        <img src="../../../public/assets/images/shared/logo.svg" alt="star">
      </div>

      <div v-if="isMobile " class="burger" @click="isMenuOpen = true">
        <img src="../../../public/assets/images/shared/icon-hamburger.svg" alt="icon-hamburger" />
      </div>


<!-- "-->
      <nav v-if="!isMobile || isMenuOpen"  class="nav" >
<!--          -->
        <div v-if="isMobile && isMenuOpen"  class="close" @click="isMenuOpen = false">
          <img src="../../../public/assets/images/shared/icon-close.svg" alt="icon-close" />
        </div>

        <div class="separator"></div>
        <ul>
          <li v-for="(link , i) in links" :key="link.name" >
            <router-link
                :to="`/${link.name.toLowerCase() === 'home' ? link.name.toLowerCase() : link.name.toLowerCase()}`"
                :class="{'active-nav': $route.path.toLowerCase().includes(link.name.toLowerCase()) }"
                @click="activeLink = link.name"
            >
              <span class="number">{{ formatIndex(i) }}</span>{{ link.name.toUpperCase() }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style   lang="scss"  >
@import '../../assets/scss/main';

  .header{
    width: 100%;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-family: $BarlowC;

      .wrapper-nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 97px;

         .logo{
            height: 100%;
            width: 60%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
              img{
                width: 48px;
                height: 48px;
                margin-left: 50px;
              }
          }

         .nav{
          max-width: 830px;
          width: 100%;
          height: 96px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          position: relative;

            .separator{

              max-width: 573px;
              width: 473px;
              height: 1px;
              left: -53%;
              background-color: rgba(255, 255, 255, 0.20);
              position: absolute;

            }

            ul{
              display: flex;
              height: 100%;
              gap: 48px;
              margin: 0 110px;

                a{
                  letter-spacing: 1.6px;
                  font-size: 16px;
                  font-weight: 400;
                  transition: all 0.3s ease;
                  @include flex-center;
                  width: 100%;
                  height: 100%;
                  position: relative;

                    &::after{
                      content: '';
                      position: absolute;
                      bottom: -3px;
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
                    .number{
                      margin:  0 15px 0 0;
                      font-weight: bold;
                    }
                }
            }
        }
      }
  }
@media (max-width: 1024px) {

  .header {
    height: 96px;
    width: 100%;
    justify-content: flex-end;

    .wrapper-nav{
      height: 100%;

      .nav{
        width: 450px;


        .separator {
          display: none;
        }
        ul {
          gap: 34px;
          margin: 0 50px;
          a{
            font-size: 14px;
            .number{
              display: none;
            }
          }
        }
      }

    }
  }


 

}

@media (max-width:  768px) {

     .header{
       .wrapper-nav{
         width: 100%;
         justify-content: space-around;
         .logo {
           justify-content: start;
           img{
             margin: 0;
               width: 40px;
               height: 40px;
           }
         }
         .nav{
           position: fixed;
           width: 255px;
           height: 100%;
           bottom: 0;
           right: 0;
           flex-direction: column;
           z-index: 999;

           .close{
             width: 100%;
             height: 50px;
             margin: 44px 0 60px 0;
             display: flex;
             align-items: center;
             justify-content: flex-end;
             img{
               margin: 0 30px;
             }
           }
           ul{
              width: 100%;
              height: auto;
              flex-direction: column;
             align-items: flex-end;

              li{
                justify-content: flex-start;
                width: 85%;
                height: 30px;
              }
              a{
                width: 100%;
                height: 100%;
                font-size: 16px;
                justify-content: normal;

                &::after{
                  content: '';
                  position: absolute;
                  right: 0;
                  width: 3px;
                  height: 100%;
                  background-color: rgba(255, 255, 255, 0.75);
                  transform-origin: center;
                  transition: all 0.3s ease;
                  opacity: 0;
                }
                &.active-nav {
                  opacity: 1;
                }

                &.active-nav::after {
                  height: 100%;
                  width: 3px;
                  background-color: white;
                  opacity: 1;
                }
                .number{
                  display: block;
                }
              }
           }
         }

       }
     }
}
</style>