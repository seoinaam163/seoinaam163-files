const req = import.meta.glob('./svg/*.svg',  {
    import: 'default',
    eager: true,
  })
  console.log(req)
// const req = import.meta.globEager("./svg/*.svg")
// console.log(req)
// // const req = require.context('./svg', false, /\.svg$/)
// const requireAll = (requireContext) => {
//     for(let key in requireContext){

//     }
// }
// requireAll(req)
