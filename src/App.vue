<template>
  <v-app id="inspire">
    <v-slide-x-transition mode='out-in'>
    <router-view/>
    </v-slide-x-transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
}
</script>
