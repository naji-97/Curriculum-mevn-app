<template>
  <v-app id="app">
    <top-nav />
    <v-main>
      <v-container grid-list-xs>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import TopNav from './components/TopNav.vue'
export default {
  components: { TopNav }
}
</script>
