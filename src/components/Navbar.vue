<template>
<<<<<<< HEAD
    <div>
=======
    <v-content>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
    <v-navigation-drawer
         fixed
         clipped
         v-model="drawer"
         app>
            <v-list dense>
<<<<<<< HEAD
                <v-list-tile to="/admin">
=======
                <v-list-tile>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
                
<<<<<<< HEAD
                <v-list-tile to="/admin/quotes">
=======
                <v-list-tile>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
                    <v-list-tile-action>
                        <v-icon>message</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Quote</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-group>
                     <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Pages</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

<<<<<<< HEAD
                    <v-list-tile v-for="page in listpages" :key="page.title"
                    :to="page.to">
=======
                    <v-list-tile>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
                        <v-list-tile-action>
                            <v-icon>assignment</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
<<<<<<< HEAD
                            <v-list-tile-title>{{page.title}}</v-list-tile-title>
=======
                            <v-list-tile-title>Page A</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>assignment</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Page B</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>assignment</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Page C</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>assignment</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Page D</v-list-tile-title>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

<<<<<<< HEAD
                <v-list-tile to="/admin/settings">
=======
                <v-list-tile>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
                <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar 
        clipped-left
        fixed
        app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Admin</v-toolbar-title>
<<<<<<< HEAD
            <v-spacer></v-spacer>
            <v-btn flat color="error" @click="logout">Logout</v-btn>
        </v-toolbar>
        <slot name="content"></slot>
    </div>
=======
        </v-toolbar>
        
    </v-content>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608

</template>

<script>
<<<<<<< HEAD

=======
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
export default {
    data(){
        return{
            drawer:null,
<<<<<<< HEAD
            listpages:[
                {to:'/admin/page-action',title:'Page Action'},
                {to:'/admin/page-brand',title:'Page Brand'},
                {to:'/admin/page-consultation',title:'Page Consultation'},
                {to:'/admin/page-daily',title:'Page Daily'},
            ]
        }
    },

    methods:{
        logout(){
            this.$auth.destroyToken()
            location.reload(true)
=======
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
        }
    }
}
</script>

<style>

</style>
