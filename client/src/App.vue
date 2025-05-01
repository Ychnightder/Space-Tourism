<template>
  <router-view />
</template>

<script setup>
import { ref, watch, onMounted , onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const backgroundImage = ref('')

function getImagesForPage(pageName) {
  if(!pageName){pageName = "home"}
  const lower = pageName.toLowerCase()

  return {
    mobile: new URL(`../public/assets/images/${lower}/background-${lower}-mobile.jpg`, import.meta.url).href,
    tablet: new URL(`../public/assets/images/${lower}/background-${lower}-tablet.jpg`, import.meta.url).href,
    desktop: new URL(`../public/assets/images/${lower}/background-${lower}-desktop.jpg`, import.meta.url).href
  }
}

function updateBackground(pageName) {

  const width = window.innerWidth
  const images = getImagesForPage(pageName)
  console.log(images)

  let selectedImage
  if (width < 768) selectedImage = images.mobile
  else if (width < 1024) selectedImage = images.tablet
  else selectedImage = images.desktop

  document.body.style.backgroundImage = `url('${selectedImage}')`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundRepeat = 'no-repeat'
}



const resizeHandler = () => updateBackground(route.name)


watch(() => route.name, (newPage) => {
  updateBackground(route.name)
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})

</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
  transition: background-image 0.5s ease-in-out;
}
</style>