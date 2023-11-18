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
          url: 'http://s4bl0sedp.sabkt.gdipper.com/DK%20-%20%E3%83%99%E3%83%86%E3%83%AB%E3%82%AE%E3%82%A6%E3%82%B9.mp3',
          pic: '../src/assets/参宿四.jpg'
        },
        {
          title: '开普勒',
          artist: '孙燕姿',
          url: 'http://s4bl0sedp.sabkt.gdipper.com/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E5%85%8B%E5%8D%9C%E5%8B%92.mp3',
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
