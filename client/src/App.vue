<template>
  <ResponsiveBackground page="home">
    <Header />
    <main class="main">
      <div class="main-txt">
      <h2 class="sub-tilte">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 class="tilte">SPACE</h1>
        <p class="para">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div class="btn-main">
        <main-button class="btn"/>
      </div>
    </main>
  </ResponsiveBackground>
</template>

<script setup>
import Header from "./components/shared/Header.vue";
import ResponsiveBackground from "./components/shared/ResponsiveBackground.vue";
import mainButton from "./components/home/mainButton.vue";

</script>

<style lang="scss">
@import 'assets/scss/main.scss';

  body {
    width: 100%;
    height: 100vh;

  }
  .main{
    width: 100%;
    height: 382px;
    margin-top: 148px;
    display: flex;
    @include flex-center;

      .main-txt{
        width: 482px;
        height: 100%;
        margin-right: 286px;

          .sub-tilte{
            text-transform: uppercase;
            color: $second-color;
            font-size: 28px;
            font-family: $BarlowC;
            font-weight: 400;
            letter-spacing: 4.7px;
          }
          .tilte{
            font-family: $Bellefair;
            font-size: 150px;
            font-weight: 400;
          }

          .para{
            font-size: 18px;
            font-family: $BarlowC;
            color: $second-color;
            font-weight: 200;
            line-height: 32px;
          }

      }

      .btn-main{
        width: 482px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: relative;

        .btn{
          position: absolute;
          right: 10%;
          bottom: -10%;
        }
      }


  }

</style>