<!--
 * @Description: 
 * @Autor: lin
 * @Date: 2025-04-22 09:29:34
 * @LastEditors: lin
 * @LastEditTime: 2025-07-18 15:23:57
-->
<template>
  <div class="to-cyan-500 min-h-screen text-white" style="background: #4961F0;">
    <header class="text-center py-12">
      <!-- <img src="@/assets/logo.png" alt="迅拣" class="mx-auto inline-block w-32 h-32 rounded-xl shadow-lg" /> -->
      <h1 class="text-3xl font-bold mt-4 bigTittle">FastPick</h1>
      <p class="text-xl mt-2">Live-stream Shopping Express Sorter Assistant</p>
    </header>

    <section class="section px-4 w-4/5 ">
      <h2 class="bigTittle">App Introduction</h2>
      <div class="w-100% leading-[2] declear text-[#fff] text-1xl">
        FastPick - A specialized utility App designed for live-stream commerce on platforms like TikTok and Red Velvet. By instantly syncing with merchant backend systems, it generates Bluetooth-printed buyer IDs to enable rapid, error-free order sorting. Drastically accelerates fulfillment efficiency for live-selling operations.
      </div>
      <div class="w-100%" style="margin: 20px auto; max-width: 500px;">
        <n-carousel :autoplay="true">
          <!-- <img src="@/assets/1.jpg" width="100%" class="inline-block rounded-xl"/> -->
          <img src="@/assets/2.png" width="100%" class="inline-block rounded-xl"/>
          <img src="@/assets/3.png" width="100%" class="inline-block rounded-xl"/>
        </n-carousel>
      </div>
      <h3 class="bigTittle" style="margin: 20px 0;">Key Considerations</h3>
      <div class="p-6 bg-[#FAFBFF] rounded-md">
        <div class="text-1xl">
          <!-- <div class="mb-[10px] relative">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">实时弹幕读取与订单编号分配</span>
          </div> -->
          <div  class="text-right mb-[10px] relative">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">Bluetooth Auto-Print Labels</span>
          </div>
          <div  class=" mb-[10px] relative">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">‌Network-Wide Blocklist Sharing, Prevents Malicious Evasion.</span>
          </div>
          <div  class="text-right mb-[10px] relative origin-top-left">
            <span class="bg-[#DBEAFE] text-[#4F6DFE] p-2 rounded-sm inline-block">Boost Live-Stream Transaction & Inventory Processing Speed</span>
          </div>
        </div>
      </div>

    </section>
    <section class="mx-auto px-4 mt-10">
        <div class="text-center rounded-xl shadow-md p-6 text-white">
          <p class="mb-4">Scan the QR code or click the button below to download FastPick.</p>
          <img src="@/assets/qrcode.png" alt="下载二维码" class="w-40 h-40 inline-block mb-4" />
          <a href="https://mp-6e4ba07a-f05f-4c88-bf57-25f05c7a03a0.cdn.bspapp.com/cloudstorage/d57fa830-cc06-44af-bbfd-1c5359e0db32.apk" style="margin: 10px auto;" class="block w-40 text-center bg-white text-blue-600 font-semibold rounded-lg py-2">
            Download
          </a>
        </div>
    </section>
    <footer class="text-center py-8 text-sm opacity-75">
      <div>Email - <a href="mailto:dh_technology@163.com">dh_technology@163.com</a></div>
      <!-- <div class="w-[210px] flex justify-between" style="margin: 5px auto;">
        <img src="@/assets/z.png"  width="100" height="100"/>
        <img src="@/assets/y.png"  width="100" height="100"/>
      </div> -->
      <n-divider />
      <!-- <div @click="goWeb('https://beian.miit.gov.cn')" class="cursor-pointer">ICP备案号:苏ICP备2025175795号-2 >></div> -->
      <div>Copyright © {{ year }} Wayvance Technology Limited</div>
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
  font-size: 30px;
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
