<template>
  <div style="background-color:#f5f5f5;">
    <div id="destination">
    	<h2>{{msg}}</h2>
    	<div class="state">
    		<ul class="state_list">
    			<li>
    				<a title="美国自驾游" href="###">
    					<img alt="美国" src="http://cdn.qiniu.h5.huizuche.com/image/mudi/a.jpg" />
    				</a>
    			</li>
    			<li>
    				<a title="法国自驾游" href="###">
    					<img alt="法国" src="http://cdn.qiniu.h5.huizuche.com/image/mudi/b.jpg" />
    				</a>
    			</li>
    			<li>
    				<a title="德国自驾游" href="###">
    					<img alt="德国" src="http://cdn.qiniu.h5.huizuche.com/image/mudi/c.jpg" />
    				</a>
    			</li>
    			<li>
    				<a title="澳大利亚自驾游" href="###">
    					<img alt="澳大利亚" src="http://cdn.qiniu.h5.huizuche.com/image/mudi/e.jpg" />
    				</a>
    			</li>
    			<li>
    				<a title="新西兰自驾游" href="###">
    					<img alt="新西兰" src="http://cdn.qiniu.h5.huizuche.com/image/mudi/f.jpg" />
    				</a>
    			</li>
    			<li>
    				<a title="土耳其自驾游" href="###">
    					<img alt="土耳其" src="http://cdn.qiniu.h5.huizuche.com/image/mudi/j.jpg" />
    				</a>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'destination',

  data() {
    return {
      msg: '热门目的地推荐'
    };
  }
};
</script>

<style lang="scss" scoped>
  #destination {
    width: 92%;
    margin: 13px auto;
    overflow: hidden;
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
#destination ul {
    font-size: 0;
    overflow: hidden;
    margin-right: -16px;
    text-align: center;
    margin-bottom: -16px;
    display: block;
}
#destination ul li {
    list-style: none;
    font-size: 0;
    display: inline-block;
    width: 45%;
    margin-right: 13px;
    margin-bottom: 13px;
}
a:-webkit-any-link {
    color: -webkit-link;
    text-decoration: underline;
    cursor: auto;
}
#destination ul li img {
    width: 100%;
    margin: 0;
}
h2:before {
    content: '\200B';
    width: 2px;
    position: absolute;
    background-color: #28a677;
    left: 0;
}
</style>