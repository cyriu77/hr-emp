<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
//import EmptyLayout from '@/layouts/EmptyLayout.vue'
export default {
  computed: {
    layout () {
      console.log()
      return (this.$route.meta.layout || 'main'+ '-layout')
    }
  },
  components: {
    MainLayout
  }
}
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
