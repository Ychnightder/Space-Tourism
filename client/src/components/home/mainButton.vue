<script setup></script>

<template>
  <div class="explore-button">
    <a href="#">explore</a>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/main.scss";

.explore-button {
  position: relative;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: white;
  color: $primary-color;
  font-family: $Bellefair;
  font-size: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  @include flex-center;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;
}
.explore-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1035);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease-in;
  z-index: -1;
}
.explore-button:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

@media (max-width: 768px) {
  .explore-button {
    width: 100px;
    height: 100px;
    font-size: 20px;
    letter-spacing: 1.25px;
  }

  .explore-button:hover::before {
    transform: translate(-50%, -50%) scale(0.5);
  }
}

@media (max-width: 1024px) {
  .explore-button {
    width: 245px;
    height: 245px;
    font-size: 24px;
    letter-spacing: 1.5px;
  }
  .explore-button:hover::before {
    transform: translate(-50%, -50%) scale(0.7);
  }
}
</style>
