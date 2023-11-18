<template>
    <div id="container">
    <div id="header">
      <h1 class="h_c">四周年快乐!</h1>
    </div>
    <div id="content">

    </div>
    <div id="footer">
      <aplayer :music="audio[0]" :list="audio" :mini="true" :autoplay="true" :repeat="repeat-all"></aplayer>
    </div>
    </div>
</template>

<script>
import aplayer from 'vue-aplayer'
export default {
  components: {
    aplayer
  },
  data () {
    return {
      audio: [
        {
          title: '参宿四',
          artist: 'dk',
          url: '../src/assets/DK - ベテルギウス.mp3',
          pic: '../src/assets/参宿四.jpg'
        },
        {
          title: '开普勒',
          artist: '孙燕姿',
          url: '../src/assets/孙燕姿 - 克卜勒.mp3',
          pic: '../src/assets/参宿四.jpg'
        }
      ]
    }
  },
  name: 'rightanswer'
}
</script>
<style>
.h_c {
  color: white;
  font-size: large;
}
</style>
