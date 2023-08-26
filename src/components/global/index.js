const modules = import.meta.globEager('./**/*.vue')
const map = {}
Object.keys(modules).forEach(file => {
  const modulesName = file.replace('./', '').replace('.vue', '')
  map[modulesName] = modules[file].default
})
const globalComponents = {
  ...map,
}
console.log(modules)
export default globalComponents
