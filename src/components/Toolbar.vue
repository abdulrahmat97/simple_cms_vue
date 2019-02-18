<template>
  <v-toolbar dark color="#013777">
    <router-link to="/" style="color:white">
    <v-toolbar-title class="headline font-weight-black font-italic">
        Header
    </v-toolbar-title>
  </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to='/content'> Action </v-btn>
      <v-btn flat to='/content_b'> Brand </v-btn>
      <v-btn flat to='/content_c'> Consultation </v-btn>
      <v-btn flat to='/content_d'> Daily </v-btn>
    </v-toolbar-items>
    <v-menu transition="slide-y-transition" bottom class="hidden-md-and-up" offset-y>
      <v-btn slot="activator" flat dark>
        <v-icon size="24px">fas fa-layer-group</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {
      items: [{
          title: 'Action',
          to:'/content'
        },
        {
          title: 'Brand',
          to:'/content_b'
        },
        {
          title: 'Consultation',
          to:'/content_c'
        },
        {
          title: 'Daily',
          to:'/content_d'
        }
      ]
    }
  },
  methods:{

  }
}
</script>\
<style>
  a{
    text-decoration:none
  }
</style>
