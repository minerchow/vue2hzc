<template>
<div>
  
  <div class='banner-book-drive'>
  <a class="banner-book" title="订单查询" href="###"><img src="http://cdn.qiniu.h5.huizuche.com/image/help/a.png"><span class="book-drice-text">订单查询</span></a>
  <a class="banner-book" title="驾照翻译" href="###"><img src="http://cdn.qiniu.h5.huizuche.com/image/help/b.png"><span class="book-drice-text">驾照翻译</span></a>
  <a class="banner-book" title="客服热线" href="###"><img src="http://cdn.qiniu.h5.huizuche.com/image/help/c.png"><span class="book-drice-text">客服热线</span></a>
  <a class="banner-book" title="GPS租赁" href="###"><img src="http://cdn.qiniu.h5.huizuche.com/image/help/d.png"><span class="book-drice-text">GPS租赁</span></a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'bookDrive',

  data() {
    return {
      msg: '搜索海外租车'
    };
  }
};
</script>

<style lang="scss" scoped>
  .search-btn{
  width:94%;
  height:48px;
  line-height:48px;
  position:relative;
  left:3%;
  text-align:center;
  color:white;
  background:#ff8400;
  margin-top:10px;
  }
  .banner-book-drive{
  background:#fff;
  width:100%;
  border-bottom:1px solid #e4e4e4;
  border-top:1px solid #e4e4e4;
  overflow:hidden;
  text-align:center;
  margin-top:20px;
  }
  .banner-book-drive a{
  font-family: "Arial","Hiragino Sans GB","Microsoft Yahei","simsun";
  font-size: 1.1rem;
  text-decoration: none;
  color: #28a677;
  }
  .banner-book{
   width:24.692%;
   float:left;
   border-right:1px solid #e4e4e4;
  }
  .book-drice-text{
  display:block;
  font-size:0.85rem;
  text-align:center;
  margin-bottom:8px;
  }
  img{
  margin-bottom:8px;
  vertical-align:middle;
  height:29px;
  width:29px;
  margin-left:10%;
  margin-top:10px;
  }
</style>