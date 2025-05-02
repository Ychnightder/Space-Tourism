<script setup>
const props = defineProps({
  number: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="tilte-destination">
    <span>{{ props.number }}</span
    >{{ props.text }}
  </h1>
</template>
<style lang="scss">
@import "../../assets/scss/main";

.tilte-destination {
  display: block;
  margin: 60px 0 45px 166px;
  font-size: 28px;
  letter-spacing: 4.5px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: $BarlowC;
  span {
    margin: 0 25px;
    opacity: 0.25;
  }
}
@media (max-width: 1024px) {
  .tilte-destination {
    margin-left: 30px;
  }
}

@media (max-width: 768px) {
  .tilte-destination {
    font-size: 16px;
    letter-spacing: 2.7px;
    margin-left: 0px;
    text-align: center;
    span {
      margin: 0 15px;
    }
  }
}
</style>
