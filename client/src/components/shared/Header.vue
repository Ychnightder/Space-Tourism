<script setup>
import { ref } from 'vue';

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

</script>


<template>
  <header class="header">
    <div class="wrapper-nav">
      <div class="logo">
        <img src="../../assets/images/shared/logo.svg" alt="star">
      </div>

      <div v-if="isMenuOpen" class="burger" @click="isMenuOpen = !isMenuOpen">
        <img src="../../assets/images/shared/icon-hamburger.svg" alt="icon-hamburger" />
        <img src="../../assets/images/shared/icon-close.svg" alt="icon-close" />
      </div>
      <nav class="nav ">
        <div class="separator"></div>
        <ul>
          <li v-for="(link , i) in links" :key="link.name">
            <a  :class="{'active-nav' : activeLink === link.name   } " @click="activeLink = link.name" href="#"><span class="number">{{ formatIndex(i) }} </span>{{ link.name.toUpperCase() }}</a>
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
              width: 573px;
              height: 1px;
              left: -63%;
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
//@media (max-width: 1024px) {
//  .header {
//    height: 96px;
//    width: 100%;
//  }
//
//  .header .separator {
//    display: none;
//  }
//
//  .header .nav ul {
//    display: none;
//  }
//}


</style>