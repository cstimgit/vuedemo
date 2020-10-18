<!-- Tabbar -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- <div :class="{active:isActive}"><slot  name="item-text"></slot></div> -->
<div :style="activeStyle"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return {
        // isActive:false
      }
    },
    computed:{
      isActive(){
        //获取当前活动页，显示高亮active
        // console.log('计算'+this.path)
        // console.log('路由'+this.$route.path)
        // indexOff ---> 如果在数组中没找到字符串则返回 -1
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        //给当前页字体添加颜色
        return this.isActive ? {color:this.activeColor} : {}
      }

    },
    methods:{
      itemClick(){
        console.log('---')
        // this.$router.push(this.path)
         this.$router.replace(this.path)
      }
    }

  }
</script>

<style>
  .tab-bar-item {
    flex:1;
    display: flex;
    flex-direction:column;
    text-align: center;
    align-items: center;
    height: 49px;
    font-size: 12px;
    color: #666;
    justify-content: center;


  }
  .tab-bar-item img{
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
   /* .tab-bar-item>div{flex:1;} */
  .active{color: red;}
</style>
