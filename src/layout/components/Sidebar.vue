<template>
    <div class="sidebar">
        <div class="scrollbar-wrapper">
            <a-menu
            v-model:selectedKeys="state.selectedKeys"
            mode="inline"
            theme="dark"
            :inline-collapsed="state.collapsed"
            :items="items"
            @click="handleClick"
            >
            </a-menu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch, h } from 'vue';
import { useRouter } from 'vue-router'
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined
} from '@ant-design/icons-vue';
const route = useRouter()
function titleCase(str) {
    let newStr = str.slice(0,1).toUpperCase() +str.slice(1).toLowerCase();
    return newStr;
}
const state = reactive({
  collapsed: false,
  selectedKeys: [route.currentRoute.name || titleCase(window.location.hash.replace('#/','')) || "Upload"],
});

console.log(state, route, route.currentRoute.name, '************************')
const items = reactive([
  {
    key: 'Upload',
    icon: () => h(PieChartOutlined),
    label: '图片上传',
    title: '上传',
    link: '/upload'
  },
  {
    key: 'Imglist',
    icon: () => h(DesktopOutlined),
    label: '图片列表',
    title: '图片列表',
    link: '/imgList'
  },
  // {
  //   key: '3',
  //   icon: () => h(InboxOutlined),
  //   label: 'Option 3',
  //   title: 'Option 3',
  // },
]);
// watch(
//   () => state.openKeys,
//   (_val, oldVal) => {
//     state.preOpenKeys = oldVal;
//   },
// );
// const toggleCollapsed = () => {
//   state.collapsed = !state.collapsed;
//   state.openKeys = state.collapsed ? [] : state.preOpenKeys;
// };

const handleClick = (info) => {
  console.log('click', info);
  if(info.item.link){
      route.push({
          path: info.item.link
      })
  }
}
</script>