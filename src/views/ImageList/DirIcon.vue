<template>
    <div class="d-icon">
        <span v-if="type === 'dir'">
            <FolderOpenFilled />
        </span>
        <span v-if="type === 'file' && urlType === 0">
            <FileFilled />
        </span>
        <span v-if="type === 'file' && urlType === 1">
           <img class="img" :src="url" />
           <i class="down-btn" @click="downloadUrl(url)">
                <CloudDownloadOutlined />
           </i>
        </span>
    </div>
</template>

<script>
import {
  FolderOpenFilled,
  FileFilled,
  CloudDownloadOutlined
} from '@ant-design/icons-vue';
export default {
    components: {
        FolderOpenFilled,
        FileFilled,
        CloudDownloadOutlined
    },
    props: {
        url: String,
        type: String,
        name: String
    },
    computed: {
        urlType() {
            let type = 0
            if (this.url) {
                const fileStu = this.url
                .split('.')
                .slice(-1)
                .join()
                if (fileStu == 'jpg' || fileStu == 'png' || fileStu == 'gif') {
                    type = 1
                } else if (fileStu == 'mp3' || fileStu == 'wma' || fileStu == 'cda' || fileStu == 'wav') {
                    type = 2
                } else if (fileStu == 'mp4' || fileStu == 'ogg' || fileStu == 'webm') {
                    type = 3
                }
            }
            return type
        }
        // urlName() {
        //     let name = ''
        //     if (this.url) {
        //         const list = this.url.split('/')
        //         name = list[list.length - 1]
        //     }
        //     return name
        // }
    },
    methods: {
        downloadUrl(url) {
             var link = document.createElement("a");
            link.href = url;

            link.style = "visibility:hidden";
            link.download = this.name;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>

<style lang="scss" scoped>
.d-icon {
    // font-size: 42px;
    // margin-top: 10px;
    font-size: 50px;
    margin-top: 30px;
    .img{
        position: absolute;
        top: 10px;
        left: 50%;
        height: 100px;
        transform: translateX(-50%);
    }
    .down-btn{
        position: absolute;
        right: 0;
        top: 0;
        background: #1677ff;
        color: #fff;
        font-size: 18px;
        padding: 1px 5px;
        border-bottom-left-radius: 10px;
        z-index: 10;
        cursor: pointer;
    }
}
</style>