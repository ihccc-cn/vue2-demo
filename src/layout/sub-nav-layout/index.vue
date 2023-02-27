<template>
  <section>
    <div class="pageBanner">
      <img :src="pageConfig.banner">
    </div>

    <div class="pageTop" v-if="pageConfig.subRoutes">
      <div class="wal">
        <div class="sideName">
          <div class="ico">
            <img :src="pageConfig.icon">
          </div>
          <div class="name">{{ pageConfig.subRoutes.title }}</div>
        </div>
        <div class="pageNav">
          <ul>
            <li v-for="(route) in pageConfig.subRoutes.children" v-if="route.path" :key="route.path">
              <router-link :to="route.path" :class="{ 'active': activePath === route.path }">{{ route.title
              }}</router-link>
            </li>
          </ul>
          <div class="clear_f"></div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </section>
</template>

<script>
import { bannerMap, iconMap } from "./banner";

export default {
  name: "sub-nav-layout",
  computed: {
    activePath() {
      return this.$route.matched[1]?.path?.split('/')[2]
    },
    pageConfig() {
      const pkey = this.$route.fullPath.split('/')[1];
      const subRoutes = this.$router.options.routes.find(item => item.path === '/' + pkey);

      return {
        icon: iconMap[pkey],
        banner: bannerMap[pkey],
        subRoutes
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageTop {
  height: 60px;
  background: #f5f5f5;
}

.pageTop .wal {
  height: 60px;
  position: relative;
}

.sideName {
  width: 189px;
  height: 120px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 22;
  background: url(@/assets/images/nimg189Bg.jpg) no-repeat;
}

.sideName .ico {
  text-align: center;
  padding: 26px 0 10px;
}

.sideName .name {
  font-size: 20px;
  text-align: center;
  color: #fff;
}

.pageNav {
  padding-left: 189px;
}

.pageNav li {
  float: left;
}

.pageNav li a {
  display: block;
  padding: 0 22px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
}

.pageNav li a:hover,
.pageNav li a.active {
  background: #bb3944 url(@/assets/images/ico1.png) center bottom no-repeat;
  color: #fff;
}
</style>
