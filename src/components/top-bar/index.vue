<template>
  <div class="touDiv">
    <div class="wal">
      <div class="txt">{{ title }}</div>
      <div class="topRight">
        <div class="lan fl"><a>中</a><a>EN</a></div>
        <div class="form fl">
          <input type="text" class="input1 input_hover" placeholder="输入关键词搜索" title="输入关键词搜索" />
          <input type="button" class="btn1" />
        </div>
        <div class="email fl"><a>公司邮箱</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-bar",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.touDiv {
  height: 39px;
  background: #f5f5f5;
  width: 100%;
  border-bottom: #eee solid 1px;
}

.touDiv .wal {
  position: relative;
  height: 39px;
}

.touDiv .txt {
  font-size: 14px;
  color: #bababa;
  line-height: 39px;
}

.touDiv .topRight {
  position: absolute;
  right: 0px;
  top: 0px;
}

.touDiv .lan {
  height: 39px;
  line-height: 39px;
  background: url(@/assets/images/line1.jpg) center no-repeat;
  font-size: 14px;
}

.touDiv .lan a {
  padding: 0 15px 0 16px;
}

.touDiv .form {
  width: 210px;
  height: 30px;
  position: relative;
  top: 4px;
  background: #e0e0e0;
}

.touDiv .form .input1 {
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
  color: #999;
  float: left;
  width: 170px;
}

.touDiv .form .btn1 {
  float: left;
  width: 30px;
  height: 30px;
  background: url(@/assets/images/nimg15_1.png) center no-repeat;
  cursor: pointer;
}

.touDiv .email {
  width: 105px;
  height: 39px;
  padding-left: 20px;
  cursor: pointer;
}

.touDiv .email a {
  display: block;
  width: 105px;
  height: 39px;
  background: #e0e0e0;
  text-align: center;
  color: #999;
  line-height: 38px;
}

.touDiv .email a:hover {
  background: #123885;
  color: #fff;
}
</style>
