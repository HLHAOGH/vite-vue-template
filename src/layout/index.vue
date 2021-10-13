<template>
  <div class="layout">
    <div class="header">
      <div class="pro-title">
        <Icon name="logo" class="logo"></Icon>
        <span class="app-name">{{ VITE_APP_PROJECT_NAME }}</span>
      </div>
      <div class="user-wrap">
        <i class="el-icon-user user"></i>
      </div>
    </div>
    <div class="content">
      <div :class="['aside', collapse ? 'mini-aside' : '']">
        <el-scrollbar wrap-class="scrollbar-wrapper" class="menu">
          <el-menu
            :default-active="activeMenu"
            :collapse="collapse"
            background-color="#fff"
            text-color="#141414"
            :unique-opened="false"
            active-text-color="#fc5757"
            :collapse-transition="false"
            mode="vertical"
            router>
            <template
              v-for="parentRoute in routes"
              :key="`${parentRoute.path}`">
              <template v-if="parentRoute.meta && parentRoute.meta.parent">
                <SubMenu :route="parentRoute"></SubMenu>
              </template>
              <template
                v-else
                v-for="subRoute in parentRoute.children"
                :key="`${parentRoute.path}/${subRoute.path}`">
                <MenuItem :route="parentRoute" :subRoute="subRoute"></MenuItem>
              </template>
            </template>
          </el-menu>
        </el-scrollbar>
        <div class="collapse"  @click="handleCollpase">
          <i class="el-icon-s-unfold left" v-if="collapse"></i>
          <i class="el-icon-s-fold right" v-else></i>
        </div>
      </div>
      <div :class="`main ${collapse ? 'col-content' : ''}`">
        <router-view #default="{ Component }">
          <transition name="component-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubMenu from './components/SubMenu.vue'
import MenuItem from './components/MenuItem.vue'
import {
  ref,
  computed
} from 'vue';
import {
  useRoute,
  useRouter
} from 'vue-router';
import {
  useStore
} from 'vuex';

const VITE_APP_PROJECT_NAME = ref(import.meta.env.VITE_APP_PROJECT_NAME);
const route = useRoute();
const router = useRouter();
const store = useStore();

const collapse = computed(() => store.state.collapse);

const routes = computed(() => {
  const len = router.options.routes.length;
  return router.options.routes.slice(0, len - 1)
});

const activeMenu = computed(() => route.path);

const handleCollpase = () => {
  store.commit('setCollapse', !collapse.value)
};

</script>

<style lang="scss" scoped>
.layout{
  box-sizing: border-box;
  .header{
    width:100%;
    height: 50px;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 0 4px 0 rgb(175 186 200 / 17%);
    border: 1px solid #f5f7fa;
    z-index: 2000;
    .user-wrap{
      position: absolute;
      right: 10px;
      top: 0;
      height: 50px;
      padding: 15px;
      cursor: pointer;
      box-sizing: border-box;
      .user{
        font-size:20px;
        color: #304156;
      }
      &:hover{
        background: rgba(235, 235, 235, .8);
      }
    }
  }
  .aside{
    z-index: 2000;
    width:180px;
    height: 100vh;
    // background: #304156;
    background: #fff;
    transition: all 0.2s ease;
    .menu{
      height: calc(100% - 100px);
      box-shadow: 0 0px 4px 0 rgb(175 186 200 / 17%);
    }
    .collapse{
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 50px;
      box-sizing: border-box;
      box-shadow: 0 0px 4px rgb(175 186 200 / 31%);
      .left, .right{
        font-size: 20px;
        color: #141414c7;
      }
    }
  }
  .pro-title{
    width:180px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    overflow: hidden;
    .logo{
      min-width:30px;
      min-height: 30px;
      font-size: 30px;
      color: #fc5757;
      font-family: cursive;
    }
    .app-name{
      margin-left:8px;
      font-size: 16px;
      font-family: cursive;
      flex: none;
    }
  }
  .mini-aside{
    width:50px;
  }
  .content{
    width: 100vw;
    height: calc(100vh - 50px);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    .main{
      width: 100%;
      height: calc(100vh - 50px);
      padding: 16px;
      overflow-y: auto;
      box-sizing: border-box;
      background: #f5f7fa;
    }
  }
  .col-content{
    left: 50px;
    width: calc(100vw - 50px);
  }
}
</style>

<style lang="scss">
.layout{
  .el-menu {
    border-right: 0
  }
  .el-menu--collapse{
    width: 50px;
  }
  .el-sub-menu__title{
    text-align: left;
    padding-left: 16px !important;
  }
  .el-sub-menu .el-menu-item {
    padding-left: 40px !important;
    padding-right: 20px !important;
    min-width: 180px;
  }
  .el-menu-item{
    padding-left: 16px !important;
    display: flex;
    align-items: center;
    min-width: 180px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .el-scrollbar__view{
    overflow-x: hidden;
  }
}
.el-menu-item:hover{
  background: #ee3b3b12 !important;
}
</style>
