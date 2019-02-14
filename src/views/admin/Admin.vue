<template>
    <v-content>
    <navbar></navbar>
     <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>   
    </v-content>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
 components:{
    Navbar : Navbar
  }
}
</script>

<style>

</style>
