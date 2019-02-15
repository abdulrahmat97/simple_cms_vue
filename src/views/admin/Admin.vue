<template>
    <div>
    <navbar>
        <template slot="content">
            <v-content>
                <v-container fill-height fluid>
                <v-layout>
                    <router-view/>
                </v-layout>
            </v-container>
            </v-content>
        </template>
    </navbar>
    </div>
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
