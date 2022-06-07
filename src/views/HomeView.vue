<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters class="home-page">
      <v-col md="6" offset-md="3" sm="8" offset-sm="2">
        <div class="page-header">
          <h1>All Curricula</h1>
          <v-btn>Create New</v-btn>
        </div>
        <div class="curricula-list">
           <v-row>
      <v-col cols="12">
          <v-card class="mx-auto" color="" max-width="800">
            <v-card-title>
              <span class="text-h6 font-weight-light">My curriculum 1</span>
            </v-card-title>

            <v-card-text class="font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home-view',

  components: {}
}
</script>
