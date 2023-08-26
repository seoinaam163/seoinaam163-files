<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {},
  
    metaInfo() {
        return {
            title: this.$store.state.settings.title,
            titleTemplate: title => {
                // return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
                return title
            }
        }
    },
  data() {
    return {};
  },
  watch: {},
  methods: {}
}
</script>
<style lang="less"></style>
