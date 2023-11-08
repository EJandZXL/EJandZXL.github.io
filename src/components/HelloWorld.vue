<template>
  <div>
    <h1 class="shine" align="center">{{ msg }}</h1>
    <input v-model = "ans" align="center">
    <p>
    <img src="../assets/DM_20231106203830_001.png" v-on:click="check_the_ans">
    </p>
    <router-link to="/rightanswer">ans</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '给网安人的小情书',
      ans: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shine{
  /* width: 1000px; */
  font-family: "Microsoft YaHei";
  font-size: 60px;
  text-align: center;
  background: -webkit-linear-gradient(left, rgb(198, 255, 221), rgb(251,215,134)) 0 0 no-repeat;/*设置线性渐变*/
  -webkit-background-size: 160px;                        /*设置背景大小*/
  -webkit-background-clip: text;                            /*背景被裁剪到文字*/
  -webkit-text-fill-color: rgba(61, 53, 53, 0.307);        /*设置文字的填充颜色*/
  -webkit-animation: shine 3s infinite;                    /*设置动画*/
}
@-webkit-keyframes shine{   /*创建动画*/
  0%{
  background-position: 0 0;
  }
  100%{
  background-position: 100% 100%;
  }
}

input {
  animation: animated-border 3s infinite;
  width: 240px;
  font-family: Arial;
  font-size: 15px;
  line-height: 30px;
  font-weight: bold;
  color: white;
  background: rgba(61, 53, 53, 0.307);
  border: 2px solid;
  border-radius: 10px;
  padding: 15px;
}
@keyframes animated-border {
  0% {
    box-shadow: 0 0 0 0 rgba(255,255,255,0.4);
  }
  100% {
     box-shadow: 0 0 0 20px rgba(255,255,255,0);
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
