<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/images/shared/logo.svg" alt="star">
    </div>
      <div class="separator"></div>
    <nav class="nav">
      <ul>
        <li v-for="(link , i) in links" :key="link.name">
          <a @click="activeLink = link.name" href="#">{{ formatIndex(i) }} {{ link.name.toUpperCase() }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
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
</script>

<style  lang="scss"  scoped>

  .header{
    width: 100%;
    height: 136px;
    display: flex;
    align-items: flex-end;

      .separator{
        width: 473px;
        height: 1px;
        background-color: white;
      }
      .nav{
        width: 830px;
        height: 96px;
        display: flex;
          ul{
            display: flex;
          }
    }

  }


</style>