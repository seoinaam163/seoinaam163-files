import axios from 'axios'

const repo = 'seoinaam163/files' // 填你的仓库 repo
const cutToken = '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' // 填你的 Token
// const tailToken = ''
const tailToken = process.env.NODE_ENV === 'development' ? '' : '0Cp7BjWgKlLpa14opaEzL'
// const uploader = {
//     getUrl(file) {
//         const content = await this.getBase64(file)
//         const imgUrl = await this.uploader(content)
//         return imgUrl
//     },
//     uploader: async (content) => {
//         const d = new Date()
//         const path = `${d.getFullYear()}/${d.getMonth()}/${d.getTime()}${file.name?.split('.').pop() || '.png'}`
//         const imageUrl = 'https://api.github.com/repos/' + repo + '/contents/' + path
//         const body = { branch: 'main', message: 'upload', content, path }
//         const headers = {
//           Authorization: `token ${cutToken}${tailToken}`,
//           'Content-Type': 'application/json; charset=utf-8',
//         }
//         const res = await axios.put(imageUrl, body, { headers })
//         // 直接取得返回的图片地址
//         return res?.content?.download_url
//         // return `https://fastly.jsdelivr.net/gh/${repo}@main/${path}`
//       },
      
//     getBase64(file) {
//         const reader = new FileReader()
//         return new Promise((resolve) => {
//             reader.onload = function (event) {
//             const fileContent = event.target.result
//             resolve(fileContent.split(',')[1])
//             }
//             reader.readAsDataURL(file)
//         })
//     }
    
// }
const uploader = {
    getBase64(file) {
        const reader = new FileReader()
                return new Promise((resolve) => {
                    reader.onload = function (event) {
                    const fileContent = event.target.result
                    resolve(fileContent.split(',')[1])
                    }
                    reader.readAsDataURL(file)
                })
     },
    uploadGit: async (content, name) => {
        const d = new Date()
        const path = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getTime()}${name?.split('.').pop() || '.png'}`
        const imageUrl = 'https://api.github.com/repos/' + repo + '/contents/' + path
        const body = { branch: 'main', message: 'upload', content, path }
        const headers = {
          Authorization: `token ${cutToken}${tailToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        }
        const res = await axios.put(imageUrl, body, { headers })
        console.log(res)
        // 直接取得返回的图片地址
        return res?.data?.content?.download_url
        // return `https://fastly.jsdelivr.net/gh/${repo}@main/${path}`
    },
    // uploadImg: async (file) => {
    //     const content = await uploader.getBase64(file)
    //     const imgUrl = await uploader.uploadGit(content)
    //     console.log(imgUrl)
    // },
    getImgList: async (dir) => {
        const url = `https://api.github.com/repos/${repo}/contents/${dir || ''}`
        // const url = `https://api.github.com/user/repos`
        // const body = { branch: 'main', message: 'upload', content, path }
        const headers = {
          Authorization: `token ${cutToken}${tailToken}`,
          'Content-Type': 'application/json; charset=utf-8',
          Accept : 'application/vnd.github.v3+json'
        }
        // const res = await axios.post(url, {"name": "files"}, { headers })
        const res = await axios.get(url, {}, { headers })
        console.log(res)
        // 直接取得返回的图片地址
        return res.status === 200 ? res.data : ''
    }
}

export default uploader