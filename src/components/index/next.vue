<template>
  <div>
  		<div class="go-home-pc">
  			<a href="http://www.huizuche.com/Car/Index2">{{msg}}</a>
  		</div>
  		<div class="copyHZC">
  			<span>@2015惠租车</span>
  		</div>
  </div>
</template>

<script>
export default {
  name: 'next',

  data() {
    return {
      msg: '访问电脑版'
    };
  }
};
</script>

<style lang="scss" scoped>
  .go-home-pc {
    font-family: "Arial","Hiragino Sans GB","Microsoft Yahei","simsun";
    margin: 0 auto;
    width: 100%;
    font-weight: bold;
    font-size: 0.75rem;
    position: relative;
    /*bottom: -65px;*/
    text-align: center;
    /*padding-bottom: 20px;*/
    margin-top:50px;
}
.go-home-pc a {
    text-align: center;
    color: #000;
    text-decoration: none;
}
.copyHZC {
    width: 100%;
   /*margin-top: 50px;*/
    padding-bottom: 10px;
    text-align: center;
    color: #aaa;
    font-size: 0.75rem;
}
</style>