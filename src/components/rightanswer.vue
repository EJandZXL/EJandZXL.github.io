<template>
  <div id="container">
    <div id="header">
      <h1 class="h_c">&#127775;四周年快乐!&#127775;</h1>
    </div>
    <div v-masonry class="box" id="content" fit-width="true">
      <div v-masonry-tile v-for="pic in imgArr" :key="pic">
        <img :src="pic.image" class="imgplay">
        <p class="whitebox">{{ pic.date }}</p>
        <p class="whitebox">{{ pic.words }}</p>
      </div>
    </div>
    <div id="footer">
      <p class="whitebox_right">未完待续...</p>
      <aplayer :music="audio[0]" :list="audio" :mini="true" :autoplay="true" :repeat="repeat - all"></aplayer>
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
      ],
      waterfallList: [],
      imgArr: [
        {
          image: './static/img/IMG_20221220_151026.jpg',
          date: '2022.12.20',
          words: '  好好玩的日常，在相册翻到给我笑死了。'
        },
        {
          image: './static/img/IMG_20221225_200325.jpg',
          date: '2022.12.25',
          words: '  一点点奶茶铺留影。'
        },
        {
          image: './static/img/mmexport1674370223240.jpg',
          date: '2023.01.22',
          words: '  春节古城给我发来的盛世美颜。'
        },
        {
          image: './static/img/mmexport1675145905092.jpg',
          date: '2023.01.31',
          words: '  春节的盛世美颜x2。'
        },
        {
          image: './static/img/IMG_20230214_173005.jpg',
          date: '2023.02.14',
          words: '  最期待的江左尚白，吃最撑的一集。'
        },
        {
          image: './static/img/IMG_20230218_152304.jpg',
          date: '2023.02.18',
          words: '  快毕业了，还好没把八闽园的风景落下。'
        },
        {
          image: './static/img/IMG_20230219_162148.jpg',
          date: '2023.02.19',
          words: '  园博苑留影，地方太大，不知道以后还有没有机会逛完呢。'
        },
        {
          image: './static/img/mmexport1678356157677.jpg',
          date: '2023.03.09',
          words: '  哥老官美蛙鱼，火锅好吃人好看，只是抱歉那天让你久等了。'
        },
        {
          image: './static/img/IMG_20230421_180238.jpg',
          date: '2023.04.21',
          words: '  闪现去成都，三天吃n顿的钵钵鸡，还有加了罂粟的豆腐。'
        },
        {
          image: './static/img/IMG_20230424_201731.jpg',
          date: '2023.04.24',
          words: '  一起游览了建昌古城，据说有赵姐的股份。'
        },
        {
          image: './static/img/IMG_20230424_213906.jpg',
          date: '2023.04.24',
          words: '  西昌烧烤yyds！'
        },
        {
          image: './static/img/IMG_20230501_113827.jpg',
          date: '2023.05.01',
          words: '  来吃赵姐从小吃到大的过桥米线。'
        },
        {
          image: './static/img/IMG_20230502_224843.jpg',
          date: '2023.05.02',
          words: '  让我再吃一次铁哥妹，就算让我中五百万我也毫无怨言。'
        },
        {
          image: './static/img/IMG_20230504_211950.jpg',
          date: '2023.05.04',
          words: '  在赵姐家给赵姐过生日留念。'
        },
        {
          image: './static/img/IMG_20230520_134551_Burst01.jpg',
          date: '2023.05.20',
          words: '  赵姐顺利通过毕业答辩之ZYJ偷拍版。'
        },
        {
          image: './static/img/IMG_20230523_182925.jpg',
          date: '2023.05.23',
          words: '  一起去做曲奇饼干。'
        },
        {
          image: './static/img/mmexport1685461425979.jpg',
          date: '2023.05.30',
          words: '  （恬静的找书美女）'
        },
        {
          image: './static/img/IMG_20230604_151117.jpg',
          date: '2023.06.04',
          words: '  陈家祠留影。'
        },
        {
          image: './static/img/IMG_20230604_151921.jpg',
          date: '2023.06.04',
          words: '  开启了雪糕鉴赏之旅的第一站。'
        },
        {
          image: './static/img/IMG_20230604_215754.jpg',
          date: '2023.06.04',
          words: '  MVP之一，啫啫煲。'
        },
        {
          image: './static/img/retouch_2023060418361305.jpg',
          date: '2023.06.04',
          words: '  震惊！神级美女竟在广州沙面岛露面！'
        },
        {
          image: './static/img/IMG_20230605_124709.jpg',
          date: '2023.06.05',
          words: '  从左至右从前至后分别是，大美女，搞笑zyj，龟的女友，憨包wzx，下头女，半个龟。'
        },
        {
          image: './static/img/IMG_20230606_104844.jpg',
          date: '2023.06.06',
          words: '  广东省博留影。'
        },
        {
          image: './static/img/IMG_20230606_160726.jpg',
          date: '2023.06.06',
          words: '  圣心大教堂留影。'
        },
        {
          image: './static/img/mmexport1686033094987.jpg',
          date: '2023.06.06',
          words: '  广州塔留影。'
        },
        {
          image: './static/img/IMG_20230606_192610.jpg',
          date: '2023.06.06',
          words: '  赵姐说是我们和儿子的合照。'
        },
        {
          image: './static/img/IMG_20230615_154946.jpg',
          date: '2023.06.15',
          words: '  橘子洲头太大，还是坐车舒服。'
        },
        {
          image: './static/img/IMG_20230615_223547.jpg',
          date: '2023.06.15',
          words: '  长沙小龙虾，巴适！'
        },
        {
          image: './static/img/IMG_20230616_174720.jpg',
          date: '2023.06.16',
          words: '  一起成功征服岳麓山！'
        },
        {
          image: './static/img/IMG_20230617_183943.jpg',
          date: '2023.06.17',
          words: '  笨萝卜！金钱蛋！'
        },
        {
          image: './static/img/IMG_20230618_191754.jpg',
          date: '2023.06.18',
          words: '  先锋书店合影。（最附庸风雅的一集）'
        },
        {
          image: './static/img/IMG_20230619_153112.jpg',
          date: '2023.06.19',
          words: '  摸摸善缘。'
        },
        {
          image: './static/img/IMG_20230619_164448.jpg',
          date: '2023.06.19',
          words: '  玄武湖公园合影。'
        },
        {
          image: './static/img/IMG_20230722_202917.jpg',
          date: '2023.07.22',
          words: '  第一次偷偷去找你。'
        },
        {
          image: './static/img/IMG_20230903_194922.jpg',
          date: '2023.09.03',
          words: '  第二次偷偷去找你。（此时的zyj还不知道过几分钟航班就会取消）'
        },
        {
          image: './static/img/mmexport1696495090943.jpg',
          date: '2023.10.05',
          words: '  剪了短发的盛世美颜。'
        },
        {
          image: './static/img/IMG_20231027_194812.jpg',
          date: '2023.10.27',
          words: '  第三次偷偷去找你，盛世美颜出租车版。'
        }
      ],
      waterfallImgWidth: 200, // 每个盒子的宽度
      waterfallImgCol: 3, // 瀑布流的列数
      waterfallImgRight: 10, // 每个盒子的右padding
      waterfallImgBottom: 10, // 每个盒子的下padding
      waterfallDeviationHeight: [],
      imgList: []
    }
  },
  name: 'rightanswer'
}
</script>
<style>
.imgplay {
  width: 300px;
  height: auto;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.whitebox {
  color: white;
  text-align: left;
  margin-top: 0;
  width: 300px;
}
.whitebox_right {
  color: white;
  text-align: right;
  width: 300px;
}
.whitefont {
  color: white;
}

.h_c {
  font: 76px "幼圆";
  margin: 50px auto;
  font-weight: 300;
  text-align: center;
  color: rgb(255, 252, 153);
  -webkit-animation: bounce 2s infinite;
  /*设置动画*/
}

@-webkit-keyframes bounce {

  /*创建动画*/
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
  }
}</style>
