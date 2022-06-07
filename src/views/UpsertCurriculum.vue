<template>
  <div class="home">
    <v-card color="#26c6da"  class="mx-auto pa-6 my-12" max-width="574">
      <div class="title">
        <h3>Create Curriculum</h3>
      </div>
      <br />
      <form pa-6>
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field label="Goal"></v-text-field>
        <v-textarea
          name="input-7-1"
          label="Description"
          hint="Hint text"
        ></v-textarea>
        <v-btn>Save</v-btn>
      </form>
    </v-card>
    <v-row>
      <v-col cols="12">
        <!-- <v-card class="mx-auto" color="" max-width="800"> -->
        <v-card color="#26c6da" class="mx-auto pa-6 my-12" max-width="574">
          <v-card-title>
            <span class="text-h6 font-weight-light">Sections 1</span>
          </v-card-title>

          <form pa-6>
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field label="Goal"></v-text-field>
            <v-text-field class="pt-8" placeholder="Enter Resource Link"></v-text-field>
            <div>
              <!-- <h4>List of Resources: </h4> -->
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color=""
                light
                dismissible
              >
                 List of Resources
              </v-alert>
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color=""
                light
                dismissible
              >
                 List of Resources
              </v-alert>
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color=""
                light
                dismissible
              >
                 List of Resources
              </v-alert>
            </div>
            <v-text-field class="pt-8" placeholder="Enter Project Link"></v-text-field>
            <div>
              <!-- <h4>List of Resources: </h4> -->
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color=""
                light
                dismissible
              >
                 List of Projects
              </v-alert>
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color=""
                light
                dismissible
              >
                 List of Projects
              </v-alert>
              <v-alert
                v-model="alert"
                border="left"
                close-text="Close Alert"
                color=""
                light
                dismissible
              >
                 List of Projects
              </v-alert>
            </div>
          </form>
            <v-btn class="mt-8 ">Add Section</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'UpsertCurriculum'
}
</script>
<style scoped>

</style>
