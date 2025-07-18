<!--
 * @Description: 
 * @Autor: lin
 * @Date: 2025-04-22 09:29:34
 * @LastEditors: lin
 * @LastEditTime: 2025-07-10 15:36:09
-->
<template>
  <div class="to-cyan-500 min-h-screen text-white" style="background: #4961F0;">
    <header class="text-center py-12">
      <!-- <img src="@/assets/logo.png" alt="迅拣" class="mx-auto inline-block w-32 h-32 rounded-xl shadow-lg" /> -->
      <h1 class="text-3xl font-bold mt-4 bigTittle">迅拣</h1>
      <p class="text-xl mt-2">直播带货极速分拣助手</p>
    </header>

    <section class="section px-4 w-4/5 ">
      <h2 class="bigTittle">应用介绍</h2>
      <div class="w-100% leading-[2] declear text-[#fff] text-1xl">
        迅拣是一款专为抖音小红书等平台直播带货设计的工具型App。通过实时读取商家后台订单信息，结合蓝牙打印功能，快速分配买家编号，实现货品快速准确分拣，有效提升直播间的销售和理货效率。
      </div>
      <div class="w-100%" style="margin: 20px auto; max-width: 500px;">
        <n-carousel :autoplay="true">
          <!-- <img src="@/assets/1.jpg" width="100%" class="inline-block rounded-xl"/> -->
          <img src="@/assets/2.jpg" width="100%" class="inline-block rounded-xl"/>
          <img src="@/assets/3.png" width="100%" class="inline-block rounded-xl"/>
        </n-carousel>
      </div>
      <h3 class="bigTittle" style="margin: 20px 0;">核心功能</h3>
      <div class="p-6 bg-[#FAFBFF] rounded-md">
        <div class="text-1xl">
          <!-- <div class="mb-[10px] relative">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">实时弹幕读取与订单编号分配</span>
          </div> -->
          <div  class="text-right mb-[10px] relative">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">蓝牙自动打印标签</span>
          </div>
          <div  class=" mb-[10px] relative">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">全网黑名单共享，防恶意逃单</span>
          </div>
          <div  class="text-right mb-[10px] relative origin-top-left">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">提升直播间交易与理货速度</span>
          </div>
        </div>
      </div>

    </section>
    <section class="mx-auto px-4 mt-10">
        <div class="text-center rounded-xl shadow-md p-6 text-white">
          <p class="mb-4">扫描二维码或点击下方按钮下载使用迅拣。</p>
          <img src="@/assets/qrcode.png" alt="下载二维码" class="w-40 h-40 inline-block mb-4" />
          <a href="https://mp-6e4ba07a-f05f-4c88-bf57-25f05c7a03a0.cdn.bspapp.com/cloudstorage/d57fa830-cc06-44af-bbfd-1c5359e0db32.apk" style="margin: 10px auto;" class="block w-40 text-center bg-white text-blue-600 font-semibold rounded-lg py-2">
            立即下载
          </a>
        </div>
    </section>
    <footer class="text-center py-8 text-sm opacity-75">
      <div>联系我们 - dh_technology@163.com</div>
      <div class="w-[210px] flex justify-between" style="margin: 5px auto;">
        <img src="@/assets/z.png"  width="100" height="100"/>
        <img src="@/assets/y.png"  width="100" height="100"/>
      </div>
      <n-divider />
      <div @click="goWeb('https://beian.miit.gov.cn')" class="cursor-pointer">ICP备案号:苏ICP备2025175795号-2 >></div>
      <div>Copyright © {{ year }} 无锡市道亨科技有限责任公司</div>
    </footer>
  </div>
</template>

<script>
import { NCarousel, NDivider } from 'naive-ui'
export default {
  components: {
    NCarousel,
    NDivider
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  methods: {
    goWeb(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scpped>
@import "tailwindcss";
body, html {
  margin: 0;
  padding: 0;
  /* font-family: 'douyu', Arial, sans-serif; */
}
.bigTittle{
  /* 1. 设置渐变背景 */
  /* background: linear-gradient(45deg, #FED50F, #d5d036, #fff); */
  
  /* 2. 裁剪背景到文字区域 */
  /* -webkit-background-clip: text;  */
  /* 兼容 WebKit 内核浏览器 */
  /* background-clip: text; */
  
  /* 3. 设置文字颜色透明 */
  color: #FED50F;
  
  /* 以下为可选样式 */
  display: inline-block;
  font-size: 48px;
  font-weight: bold;
  padding: 10px;
  font-family: 'douyu';

}
.infoBg{
  background: #6170f1ce;
}
.section{
  margin: 0 auto;
}
.declear{
}
.infoList{
}
</style>
