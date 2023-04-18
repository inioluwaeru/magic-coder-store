<template>
  <Headnav />
  <router-view/>
<footer class="text-center">
  <h1 class="text-sm mt-1">CREATED WITH JOY BY WEALTH</h1>
</footer>
</template>

<script>
import Headnav from './components/Headnav.vue'

export default {
  name: 'App',
  components: { Headnav }
}

</script>

<style>

</style>
