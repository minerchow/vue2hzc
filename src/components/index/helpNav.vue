<template>
  <div style="background-color:#f5f5f5">
    	<div class='help_nav'>
    		<ul>
    			<li class='newHelp'>
    				<a title='海外自驾新手指南' href='###'>
    					<div class='new_user'>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/a.png'/>
    						<p>新手指南</p>
    					</div>
    				</a>
    			</li>
    			<li class='rental'>
    				<a title='海外租车流程' href='###'>
    					<i>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/b.png'/>
    					</i>
    					<div style='margin-left:8px;'>租车流程</div>
    					<span>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/f.png'/>
    					</span>
    				</a>
    			</li>
    			<li class='insurance'>
    				<a title='海外租车流程' href='###'>
    					<i>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/c.png'/>
    					</i>
    					<div style='margin-left:8px;'>保险说明</div>
    					<span>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/f.png'/>
    					</span>
    				</a>
    			</li>
    			<li class='modelGroup'>
    				<a title='海外租车流程' href='###'>
    					<i>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/d.png'/>
    					</i>
    					<div style='margin-left:8px;'>车型组介绍</div>
    					<span>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/f.png'/>
    					</span>
    				</a>
    			</li>
    			<li class='comment-ico'>
    				<a title='海外租车流程' href='###'>
    					<i>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/e.png'/>
    					</i>
    					<div style='margin-left:8px;'>用户评论</div>
    					<span>
    						<img src='http://cdn.qiniu.h5.huizuche.com/image/guide/f.png'/>
    					</span>
    				</a>
    			</li>
    		</ul>
    	</div>
  </div>
</template>

<script>
export default {
  name: 'helpNav',

  data() {
    return {
      msg: 'helpNav'
    };
  }
};
</script>

<style lang="scss" scoped>
  .help_nav {
    width: 100%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    margin-top: 20px;
    overflow: hidden;
}
.help_nav ul li {
    list-style: none;
    position: relative;
}
.newHelp {
    width: 49.6%;
    border-right: 1px solid #e4e4e4;
    text-align: center;
    padding: 36px 0;
    float: left;
}
.help_nav ul {
    height: 170px;
    background-color: #fff;
    font-family: "Arial","Hiragino Sans GB","Microsoft Yahei","simsun";
}
.help_nav ul li a {
    color: #525252;
    display: block;
    width: 100%;
    height: 100%;
}
.help_nav ul li div {
    display: inline-block;
    line-height: 44px;
    font-size: 0.87rem;
}
.help_nav ul li i {
    display: inline-block;
    vertical-align: top;
    position: absolute;
    left: 10px;
}
.new_user {
    position: relative;
    top: 8px;
}
.newHelp img {
    width: 53px;
    margin: 0;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.rental {
    overflow: hidden;
    border-bottom: 1px solid #e4e4e4;
    height: 25%;
    padding-left: 45px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
 img {
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
}
.insurance {
    overflow: hidden;
    height: 25%;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 45px;
}
.modelGroup {
    overflow: hidden;
    height: 25%;
    padding-left: 45px;
}
.comment-ico {
    overflow: hidden;
    height: 25%;
    padding-left: 45px;
    border-top: 1px solid #e4e4e4;
}
body {
    width: 100%;
    height: 100%;
    font-size: 1.0em;
    color: rgb(51,51,51);
}
</style>