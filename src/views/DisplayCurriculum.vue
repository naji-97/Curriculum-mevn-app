<template>
  <div class="home">
    <v-container class="grey lighten-5">
      <v-row no-gutters class="home-page">
        <v-col md="6" offset-md="3" sm="8" offset-sm="2">
          <div class="page-header">
            <h2>Display Curriculum</h2>
          </div>
          <div class="curricula-list">
            <v-row>
              <v-col cols="12">
                <v-card class="mx-auto" color="" max-width="800">
                  <v-card-title>
                    <span class="text-h6 font-weight-light"
                      >My curriculum 1</span
                    >
                  </v-card-title>

                  <v-card-text class="font-weight-bold">
                    "Turns out semicolon-less style is easier and safer in TS
                    because most gotcha edge cases are type invalid as well."
                  </v-card-text>

                  <v-card-actions> </v-card-actions>
                  <v-expansion-panels inset>
                    <v-divider></v-divider>

                    <v-expansion-panels accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header
                          >Section 1</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-list flat subheader three-line>
                            <v-list-item-group
                              v-model="settings"
                              multiple
                              active-class=""
                            >
                              <P>Resources</P>
                              <hr />
                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Notifications</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Notify me about updates to apps or games
                                      that I downloaded</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title>Sound</v-list-item-title>
                                    <v-list-item-subtitle
                                      >Auto-update apps at any time. Data
                                      charges may apply</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Auto-add widgets</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Automatically add home screen widgets
                                      when downloads
                                      complete</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                          <v-list flat subheader three-line>
                            <v-list-item-group
                              v-model="settings"
                              multiple
                              active-class=""
                            >
                              <P>Projects</P>
                              <hr />
                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Notifications</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Notify me about updates to apps or games
                                      that I downloaded</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title>Sound</v-list-item-title>
                                    <v-list-item-subtitle
                                      >Auto-update apps at any time. Data
                                      charges may apply</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Auto-add widgets</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Automatically add home screen widgets
                                      when downloads
                                      complete</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                    <v-expansion-panels accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header
                          >Section 1</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-list flat subheader three-line>
                            <v-list-item-group
                              v-model="settings"
                              multiple
                              active-class=""
                            >
                              <P>Resources</P>
                              <hr />
                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Notifications</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Notify me about updates to apps or games
                                      that I downloaded</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title>Sound</v-list-item-title>
                                    <v-list-item-subtitle
                                      >Auto-update apps at any time. Data
                                      charges may apply</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Auto-add widgets</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Automatically add home screen widgets
                                      when downloads
                                      complete</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                          <v-list flat subheader three-line>
                            <v-list-item-group
                              v-model="settings"
                              multiple
                              active-class=""
                            >
                              <P>Projects</P>
                              <hr />
                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Notifications</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Notify me about updates to apps or games
                                      that I downloaded</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title>Sound</v-list-item-title>
                                    <v-list-item-subtitle
                                      >Auto-update apps at any time. Data
                                      charges may apply</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>

                              <v-list-item>
                                <template v-slot:default="{ active }">
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="active"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title
                                      >Auto-add widgets</v-list-item-title
                                    >
                                    <v-list-item-subtitle
                                      >Automatically add home screen widgets
                                      when downloads
                                      complete</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </template>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-expansion-panels>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'DisplayCurriculum'
}
</script>
