<template>
    <div class="dir-management">
        <div class="d-btn">
            <span class="btn" @click="initData">重新获取</span>
        </div>
        <a-breadcrumb>
            <a-breadcrumb-item @click="handleFileDir(-1)">files</a-breadcrumb-item>
            <a-breadcrumb-item v-for="(item, index) in dirProcess" :key="index" @click="handleFileDir(index)">{{item}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="directory" v-loading="isLoading">
            <div class="d-item" v-for="(item, index) in dirList" @click="handleDir(item)">
                <dir-icon :url="item.download_url" :type="item.type" :name="item.name"></dir-icon>
                <div class="d-txt text-ellipsis">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import uploader from "@/utils/upload.js"
import DirIcon from './DirIcon.vue'
// import { aBreadcrumb, aBreadcrumbItem } from 'ant-design-vue';
export default {
    name: 'ImgList',
    components: {
        DirIcon
    },
    data() {
        return {
            dirList: [],

            dirProcess: [],
            isLoading: false
        }
    },
    mounted() {
        this.initData()
    },
    methods: {
        initData() {
            this.getDirList()
        },
        handleDir(item) {
            console.log(item)
            if(item.name.indexOf('.') !== -1){
                return
            }
            this.dirProcess.push(item.name)
            const dir = this.dirProcess.join('/')
            this.getDirList(dir)
        },
        getDirList(dir) {
            if(this.isLoading){
                return
            }
            this.isLoading = true
            const getRes = async () => {
                const data = await uploader.getImgList(dir)
                // debugger
                console.log(data)
                this.dirList = data || []
                this.isLoading = false
            }
            getRes()
        },
        handleFileDir(index) {
            if (index === -1) {
                this.dirProcess = []
            } else {
                this.dirProcess = this.dirProcess.slice(0, index + 1)
            }
            const dir = this.dirProcess.join('/')
            this.getDirList(dir)
        }
    }
}
</script>

<style lang="scss" scoped>
.dir-management{
    padding: 20px;
    .d-btn{
        text-align: left;
        border-bottom: 1px solid #000;
        padding-bottom: 20px;
        margin-bottom: 20px;
        .btn{
            display: inline-block;
            width: 100px;
            height: 40px;
            line-height: 40px;
            background: #ddd;
            cursor: pointer;
            text-align: center;
        }
    }
}
.directory{
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    .d-item{
        width: 150px;
        height: 150px;
        margin-right: 20px;
        margin-bottom: 20px;
        position: relative;
        background: #fff;
        cursor: pointer;
        .d-txt{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 10px;
            padding: 6px;
            font-size: 13px;
            overflow: hidden;
        }
    }
    
    .text-ellipsis{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>