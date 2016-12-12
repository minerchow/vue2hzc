<template>
  <div>
   <div id='why_choose' style="background:#f5f5f5;padding:0">
   		<h2 style="margin-left:15px;">
   		为什么选择惠租车？
   		</h2>
   		<div class="state">
			<div class="state-list">
				<div class="state-img">
					<a href="###">
						<img alt="保证无隐私收费" src="http://cdn.qiniu.h5.huizuche.com/image/why/a.png">
					</a>
				</div>
				<div class="state-text">
					<div class="state-text-top">
						<a href="###" title="全程无隐形收费">
						全程无隐形收费</a>
					</div>
					<div class="state-text-bottom">
						<a href="###" title="一口价，拒绝二次消费">
							一口价，拒绝二次消费
						</a>
					</div>
				</div>
				<div class="state-img">
					<a href="###">
					<img alt="预定保证到店有车" src="http://cdn.qiniu.h5.huizuche.com/image/why/b.png">
					</a>
				</div>
				<div class="state-text">
					<div class="state-text-top">
						<a href="###" title="预定保证到店有车">
						预定保证到店有车</a>
					</div>
					<div class="state-text-bottom">
						<a href="###" title="无车免费升级">
							承诺到店有车，无车免费升级
						</a>
					</div>
				</div>
				<div class="state-img">
					<a href="###">
					<img alt="客户急速响应" src="http://cdn.qiniu.h5.huizuche.com/image/why/c.png">
					</a>
				</div>
				<div class="state-text">
					<div class="state-text-top">
						<a href="###" title="30秒急速响应">
						客服30秒急速响应</a>
					</div>
					<div class="state-text-bottom">
						<a href="###" title="中文客服">
							身在异国，不愁找不到客服
						</a>
					</div>
				</div>
				<div class="state-img">
					<a href="###">
						<img alt="专属客服" src="http://cdn.qiniu.h5.huizuche.com/image/why/d.png">
					</a>
				</div>
				<div class="state-text">
					<div class="state-text-top">
						<a href="###" title="微信专属客服">
						微信1对1专属客服</a>
					</div>
					<div class="state-text-bottom">
						<a href="###" title='24小时客服陪伴'>
							微信客服全程陪伴，出国自驾不孤单
						</a>
					</div>
				</div>
			</div>
   		</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'why',

  data() {
    return {
      msg: '为什么选择惠租车'
    };
  }
};
</script>

<style lang="scss" scoped>
  #why_choose {
    padding: 0 4%;
    margin: 13px auto;
    background-color: #fff;
    overflow: hidden;
    border-top: 1px solid #ddd;
}
h2 {
    font-size: 0.95rem;
    padding-left: 10px;
    position: relative;
    margin-bottom: 16px;
    margin-top: 15px;
}
.state {
    background: #fff;
    border-top: 1px solid #e4e4e4;
    padding-top: 10px;
}
.state-list {
    padding-left: 10px;
}
.state-img {
    display: inline-block;
    width: 18%;
}
.state-text {
    display: inline-block;
    width: 78%;
    vertical-align: sub;
}
.state-text-top {
    font-size: 0.95rem;
    margin-bottom: 8px;
}
.state-text-top a {
    color: #28a677;
}
.state-list a {
    text-decoration: none;
}
.state-text-bottom {
    font-size: 0.85rem;
    margin-bottom: 30px;
}
.state-list img {
    width: 30px;
    vertical-align: super;
}
img{
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
}
.state-text-top {
    font-size: 0.95rem;
    margin-bottom: 8px;
}
.state-text-bottom a {
    color: #4b4b4b;
}
.state-list a {
    text-decoration: none;
}
</style>