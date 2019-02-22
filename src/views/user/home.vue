<template>
<v-layout row wrap>
  <v-flex d-flex md4 xs12>
    <v-card color="#2C599A" height="640px" dark>
      <v-img aspect-ratio="1.82" src="static/images/foto.png"></v-img>

      <v-card color="#023878" height="110px" dark>
        <v-layout align-center justify-center fill-height>
          <h1 size="10px" font-color="with" align="center">www.satriaharis.com</h1>
        </v-layout>
      </v-card>
      <v-card color="#2C599A" height="300px">
        <v-layout row wrap align-center justify-center fill-height mx-3>
          <div class="text-xs-center" v-html="getQuotes[getleng].quotes"></div>
        </v-layout>
      </v-card>
    </v-card>
  </v-flex>

  <v-flex d-flex md8 xs12>
    <!-- <v-flex d-flex> -->
      <v-card color="" height="100%">
        <v-layout row wrap align-center justify-center my-3>
          <v-card to="/content">
            <v-flex md5 xs12>
              <img src="static/images/action.png" width="280px">
            </v-flex>
          </v-card>
          <v-flex md1 xs12></v-flex>
          <v-card to="/content_b">
            <v-flex md6 xs12>
              <img src="static/images/brand.png" width="280px">
            </v-flex>
          </v-card>
        </v-layout>
        <v-layout row wrap align-center justify-center mb-3>
          <v-card to="/content_c">
            <v-flex md6 xs12>
              <img src="static/images/consultation.png" width="280px">
            </v-flex>
          </v-card>
          <v-flex md1 xs12></v-flex>
          <v-card to="/content_d">
            <v-flex md6 xs12>
              <img src="static/images/daily.png" width="280px">
            </v-flex>
          </v-card>
        </v-layout>
        <v-flex md12 xs12>
          <v-footer height="auto" color="white">
            <v-layout align-center justify-center fill-height margin="20px" dark>
              <v-icon size="24px" class="mr-2">fa fa-instagram</v-icon>
              <v-icon size="24px" class="mr-1">fa fa-facebook-official</v-icon>
              <strong> satriaharis</strong>
              <v-icon size="24px" class="ml-3">mail_outline</v-icon>
              <strong> satriaharis.brandactivator@gmail.com</strong>
            </v-layout>
          </v-footer>
        </v-flex>
      </v-card>
    <!-- </v-flex> -->
  </v-flex>



</v-layout>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  data(){
    return{
        length:-1
    }
  },
  computed: {
    ...mapGetters([
      'getQuotes'
    ]),
    getleng(){
      let jum = this.getQuotes ? this.getQuotes.length : ''
      let h = jum - 1
      return h
    }
  },
  created() {
    this.$store.dispatch('fetchQuotes')
  },
  mounted(){
  },
  methods:{

  }
}
</script>

<style>

</style>
