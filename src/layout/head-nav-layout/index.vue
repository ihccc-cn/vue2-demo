<template>
  <div id="main-layout">
    <header>
      <top-bar title="欢迎来到丰海科技官网" />

      <div class="headDiv">
        <div class="wal">
          <router-link to="/" class="logo"> <img src="/CH/images/logo.png" /></router-link>
          <div class="nav">
            <ul>
              <li class="nav-item" :class="{ 'sNavA': !!route.children }" v-for="(route) in routes" :key="route.path">
                <router-link :to="route.path">{{ route.title }}</router-link>

                <ul class="sub-nav" v-if="route.children">
                  <li v-for="subRoute in route.children" :key="subRoute.path">
                    <router-link :to="route.path + '/' + subRoute.path">{{ subRoute.title }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="javascript:;" class="navIco"> <img src="/CH/images/navIco.png" /></a>
        </div>
      </div>

    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TopLayout from "@/components/top-bar/index.vue";

export default {
  name: "HeadLayout",
  components: {
    "top-bar": TopLayout,
  },
  props: {},
  data() {
    return {
      routes: this.$router.options.routes[0].children
    }
  },
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

.nav li.nav-item:hover {
  color: #fff;
  background: #2056c0;
  font-weight: bold;
}

.nav li.nav-item:hover>a {
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
</style>
