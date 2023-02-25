<template>
  <section>
    <div class="pageBanner">
      <img :src="banner">
    </div>

    <router-view></router-view>
  </section>
</template>

<script>
import aboutBanner from '@/assets/images/20171108073913838.jpg';
import newsBanner from '@/assets/images/20171108073913838.jpg';
import productBanner from '@/assets/images/2017110807420955.jpg';
import caseBanner from '@/assets/images/20171122025234401.jpg';
import supportBanner from '@/assets/images/20171108074631920.jpg';
import investorBanner from '@/assets/images/20171108074925605.jpg';
import recruitmentBanner from '@/assets/images/20171121102912248.jpg';
import contactBanner from '@/assets/images/20171108075128033.jpg';

const bannerMap = {
  "about": aboutBanner,
  "news": newsBanner,
  "product": productBanner,
  "case": caseBanner,
  "support": supportBanner,
  "investor": investorBanner,
  "recruitment": recruitmentBanner,
  "contact": contactBanner,
};

export default {
  name: "SubNavLayout",
  computed: {
    banner() {
      return bannerMap[this.$route.path.split('/')[1]]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
