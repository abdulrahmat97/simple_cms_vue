<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex d-flex md12 xs12>
      <toolbar/>
    </v-flex>
        <v-flex d-flex md4 xs12>
      <v-card margin="10px">
        <v-img src="static/images/pageB.png"></v-img>
      </v-card>
    </v-flex>
    <v-flex d-flex md8 xs12>
      <v-flex d-flex>
        <v-card style="overflow:auto;padding-top:100px" color="#2B5899" dark height="445px" max-width="750px">
          <v-layout style="text-align:justify" align-center justify-center fill-height mx-5>
            <v-card-text class="pr-2">
               <div v-html="getPageB.content"></div>
              <!-- {{ getPageB.content }} -->
            </v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
    </v-flex>
    <v-flex d-flex md4 xs12>
      <v-card color="#013777" dark height="auto">
          <v-layout align-center justify-center fill-height margin="20px">
            <router-link to="/" style="color:white">
              <h2>www.satriaharis.com</h2>
            </router-link>
          </v-layout>
      </v-card>
    </v-flex>
    <v-flex d-flex md8 xs12>
      <v-footer dark height="auto" max-width="750px">
        <v-card color="#2B5899" class="flex" flat tile>
          <v-card-text class="white--text">
            <v-icon size="24px" class="mr-2">fa fa-instagram</v-icon>
            <v-icon size="24px">fa fa-facebook-official</v-icon>
            <strong> satriaharis</strong>
            <v-icon size="24px" class="ml-3">mail_outline</v-icon>
            <strong> satriaharis.brandactivator@gmail.com</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import { mapGetters } from 'vuex'
export default {
  components:{
    Toolbar:Toolbar
  },

  computed:{
    ...mapGetters([
      'getPageB'
    ])
  },

  created(){
    this.$store.dispatch('fetchPageB')
  }
}
</script>

<style>
</style>
