<template>
<<<<<<< HEAD
    <div>
        <v-container>
        <v-dialog v-model="dialog"
        persistent
        max-width="500px">
=======
    <v-content>
        <v-dialog v-model="dialog"
        persistent
        max-width="600px">
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
        <v-card>
            <v-card-title>
                <span class="headline">{{title}}</span>
            </v-card-title>

            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 sm6 md8>
                            <v-form>
                            <slot name="form"></slot>
<<<<<<< HEAD
=======
    
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
<<<<<<< HEAD
=======

>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
            <v-card-actions>
                <v-spacer></v-spacer>
                <slot name="button"></slot>
            </v-card-actions>
        </v-card>
        </v-dialog>
<<<<<<< HEAD
        <v-data-table
            :headers='headers'
            :items="items"
            class="elevation-1">
            <template slot="items" slot-scope="props">
            <slot name="field" :props="props">
            </slot>
            </template>
        </v-data-table>
        </v-container>
    </div>
=======
        <v-data-table>
            <template slot="items" slot-scope="props">
                <slot name="field"></slot>
            </template>
        </v-data-table>
    </v-content>
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
</template>

<script>
export default {
<<<<<<< HEAD
    props:['dialog','title','headers','items'],
=======
    props:['dialog','title'],
>>>>>>> 5dfa83c56c6350dd19ea3c06cd298a9787170608
    watch:{
        dialog(val) {
            this.$emit('update:dialog',val) 
        },
    }
}
</script>

<style>

</style>
