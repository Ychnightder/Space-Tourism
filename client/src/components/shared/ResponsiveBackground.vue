<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  page: {
    type: String,
    required: true
  }
})

const backgroundImage = ref('dd')
function getImagesForPage(pageName) {
  if(!pageName){pageName = "home"}
  const lower = pageName.toLowerCase()
  return {
    mobile: new URL(`../../assets/images/${lower}/background-${lower}-mobile.jpg`, import.meta.url).href,
    tablet: new URL(`../../assets/images/${lower}/background-${lower}-tablet.jpg`, import.meta.url).href,
    desktop: new URL(`../../assets/images/${lower}/background-${lower}-desktop.jpg`, import.meta.url).href
  }
}
function updateBackground(pageName) {
  const width = window.innerWidth
  const images = getImagesForPage(pageName)
  if (width < 768) {
    backgroundImage.value = images.mobile
  } else if (width < 1024) {
    backgroundImage.value = images.tablet
  } else {
    backgroundImage.value = images.desktop
  }
}
const resizeHandler = () => updateBackground(props.page)

watch(() => props.page, (newPage) => {
  updateBackground(newPage)
})
onMounted(() => {
  updateBackground(props.page)
  window.addEventListener('resize', resizeHandler)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})

</script>
<template>
  <div class="background-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <slot />
  </div>
</template>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh;
  background-size: cover;
  transition: background-image 0.5s ease-in-out;
  position: relative;
}
</style>