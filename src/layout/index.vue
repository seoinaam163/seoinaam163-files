<template>
    <div class="app-wrapper">
        <a-layout>
            <a-layout>
                <a-layout-sider>
                    <sidebar class="sidebar-container" />
                </a-layout-sider>
                <a-layout-content>
                    <div class="main-container">
                        <app-main />
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup>
import { AppMain, Sidebar } from './components'
// import { aLayout, aLayoutSider, aLayoutContent } from 'ant-design-vue';
// export default {
//     components: {
//         AppMain,
//         Sidebar
//     }
// }
// 跳转路由
// import { useRouter } from 'vue-router'
// export default defineComponent({
//   setup() {
//     return {
//     };
//   }
// });
</script>

<style>
.a-header{
    position: relative;
}
</style>