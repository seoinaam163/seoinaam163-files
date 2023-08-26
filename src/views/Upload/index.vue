<template>
    <div class="upload">
        <div class="img-block img-add">
            <input class="u-input" type="file" @change="uploadFile($event)" />
        </div>
        <div class="img-list">
            <div class="img-row" v-for="(item, index) in imgUrlList" :key="index">
                <img :src="item" class="img" />
            </div>
        </div>
    </div>
</template>

<script>
import uploader from "@/utils/upload.js"
export default {
    name: 'Upload',
    data() {
        return {
            imgUrlList: [
                // "https://raw.githubusercontent.com/seoinaam163/files/main/2023/7/1692946179504.png"
            ]
        }
    },
    mounted() {
        
        uploader.getImgList()
    },
    methods: {
        uploadFile(e) {
            if(this.isLoading){
                return
            }
            this.isLoading = true
            // let file = e.target.files[0]
            // // const imgUrl = uploader.getUrl(file)
            // // this.imgUrl = imgUrl
            // const content = await this.getBase64(file)
            // const imgUrl = await uploader(content, file.name)
            let file = e.target.files[0]
            // const imgUrl = uploader.uploadImg(file)
            const uploadImg = async (file) => {
                const content = await uploader.getBase64(file)
                const imgUrl = await uploader.uploadGit(content)
                this.imgUrlList.push(imgUrl)
                this.isLoading = false
            }
            uploadImg(file)
        },
        getBase64(file) {
            return new Promise((resolve) => {
                reader.onload = function (event) {
                const fileContent = event.target.result
                resolve(fileContent.split(',')[1])
                }
                reader.readAsDataURL(file)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.upload{
    padding: 20px;
    .img-block{
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid #ddd;
        overflow: hidden;
        margin-right: 20px;
        margin-bottom: 20px;
        background: #ddd;
        .u-input{
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        &.img-add{
            &::before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -1px;
                margin-top: -10px;
                width: 2px;
                height: 20px;
                background: #000;
            }
            &::after{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -10px;
                margin-top: -1px;
                width: 20px;
                height: 2px;
                background: #000;
            }
        }
    }
    .img-list{
        .img-row{
            width: 100px;
            margin-right: 20px;
            margin-bottom: 20px;
            .img{
                width: 100%;
            }
        }
    }
}
</style>

