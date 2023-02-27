<template>
  <div id="main-layout">
    <header>
      <top-bar title="欢迎来到XXXXXX科技官网" />

      <div class="headDiv">
        <div class="wal">
          <router-link to="/" class="logo"> <img src="/CH/images/logo.png" /></router-link>
          <div class="nav">
            <ul>
              <li class="nav-item" v-for="(route) in routes"
                :class="{ 'active': activePath === route.path, 'sNavA': !!route.children }" :key="route.path">
                <router-link :to="route.path">{{ route.title }}</router-link>

                <ul class="sub-nav" v-if="route.children">
                  <li v-for="subRoute in route.children" :key="subRoute.path">
                    <router-link :to="route.path + '/' + subRoute.path">{{ subRoute.title }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="javascript:;" class="navIco"> <img src="@/assets/images/navIco.png" /></a>
        </div>
      </div>

    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="footDiv">
        <div class="wal">
          <div class="name">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
          <div class="msgList">
            <ul>
              <li>电话：9999999999<em>传真：1000000000</em></li>
              <li>邮箱：xxxxxxxxx@xxx.com<em>地址：11111111111111111111</em></li>
            </ul>
          </div>
          <div class="links"><a href="/">首页</a>|<a href="/about/company">关于</a>|<a href="/news/company">新闻资讯</a>|<a
              href="/product/product1">产品中心</a>|<a href="/case/case1">案例展示</a>|<a href="/support/download">技术支持</a>|<a
              href="/investor/announcement">投资者关系</a>|<a href="/recruitment/concept">人才招聘</a>|<a
              href="/contact/us">联系我们</a>
          </div>
          <div class="ewmDiv">
            <div class="imgDiv">
              <img src="@/assets/hello.png" width="100px" alt="关注我们">
            </div>
            <p>扫一扫 关注我们</p>
          </div>
        </div>
        <a href="javascript:;" class="topA" @click="backToTop">
          <img src="@/assets/images/topA.jpg"></a>
      </div>

      <div class="foot">
        <div class="wal">
          <div class="msg fl">XXXXXXXX Copyright © 2023</div>
          <div class="share fr">
            <em>分享到：</em>
            <ul>
              <li><a href="javascript:void 0;">
                  <img src="@/assets/images/nimg19_1.png"></a></li>
              <li><a href="javascript:void 0;">
                  <img src="@/assets/images/nimg19_2.png"></a></li>
              <li><a href="javascript:void 0;">
                  <img src="@/assets/images/nimg19_3.png"></a></li>
              <li><a href="javascript:void 0;">
                  <img src="@/assets/images/nimg19_4.png"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/components/top-bar/index.vue";

export default {
  name: "main-nav-layout",
  components: {
    "top-bar": TopBar,
  },
  props: {},
  data() {
    return {
      routes: this.$router.options.routes
    }
  },
  computed: {
    activePath() {
      return this.$route.matched[0]?.path
    }
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headDiv {
  height: 115px;
}

.headDiv .wal {
  height: 115px;
  position: relative;
}

.headDiv .logo {
  display: block;
  position: absolute;
  left: 0px;
  top: 30px;
}

.nav {
  height: 115px;
  right: 0px;
  top: 0px;
  position: absolute;
}

.nav li.nav-item {
  float: left;
  height: 115px;
  width: 105px;
}

.nav li.nav-item>a {
  display: block;
  float: left;
  height: 115px;
  width: 105px;
  overflow: hidden;
  text-align: center;
  line-height: 115px;
  position: relative;
  font-size: 16px;
}

.nav li.nav-item:hover,
.nav li.nav-item.active {
  background: #2056c0;
  font-weight: bold;
}

.nav li.nav-item:hover>a,
.nav li.nav-item.active>a {
  color: #fff;
}

.nav li.nav-item.sNavA:hover {
  color: #fff;
  background: #2056c0 url(@/assets/images/sNavA.png) center bottom no-repeat;
  font-weight: bold;
}

.navIco {
  display: none;
}

.sub-nav {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 155px;
  z-index: 11;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #123885;
  text-align: center;
}

.sub-nav li {
  display: inline-block;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
}

.sub-nav li a {
  padding-left: 16px;
  color: #a7afc8;
  font-weight: normal;
}

.sub-nav li a:hover {
  color: #fff;
  background: url(@/assets/images/ico3.png) left center no-repeat;
  font-weight: bold;
}

.nav li.nav-item:hover .sub-nav,
.nav .sub-nav:hover {
  display: block;
}


.footDiv {
  height: 212px;
  background: #c6c6c6;
  padding-top: 80px;
  position: relative;
}

.footDiv .wal {
  position: relative;
}

.footDiv .name {
  font-size: 18px;
  color: #333;
  padding-bottom: 25px;
}

.footDiv .msgList {
  padding-bottom: 25px;
}

.footDiv .msgList li {
  font-size: 14px;
  line-height: 26px;
}

.footDiv .msgList li em {
  padding-left: 25px;
}

.footDiv .links {
  font-size: 14px;
  position: relative;
  left: -16px;
}

.footDiv .links a {
  padding: 0 16px;
}

.footDiv .ewmDiv {
  position: absolute;
  right: 0px;
  top: 0px;
}

.footDiv .ewmDiv p {
  padding-top: 15px;
  color: #a4a4a4;
  text-align: center;
}

.foot {
  height: 40px;
  background: #939393;
}

.foot .msg {
  line-height: 40px;
  color: #c3c3c3;
}

.foot .msg a {
  color: #c3c3c3;
}

.foot .msg a:hover {
  color: #123885;
}

.foot .share {
  height: 40px;
  line-height: 40px;
  position: relative;
  padding-left: 46px;
}

.foot .share em {
  color: #c3c3c3;
  position: absolute;
  left: 0px;
  top: 0px;
  display: block;
  line-height: 40px;
}

.foot .share li {
  float: left;
  padding-left: 15px;
}

.topA {
  position: absolute;
  right: 50%;
  margin-right: -670px;
  top: 0px;
  display: block;
  width: 50px;
  height: 40px;
  z-index: 22;
}
</style>
