<template>
  <v-card>
    <v-card-title>Employment Informations</v-card-title>
    <v-card-text>
      <v-autocomplete
        :items="booleanOptions"
        item-value="id"
        item-text="name"
        label="Employed"
        v-model="payload.detail.employed"
      ></v-autocomplete>
      <template>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
              <v-text-field
              v-model="payload.detail.employment_date"
              label="Birthday date"
              readonly
              v-bind="attrs"
              v-on="on"
              ></v-text-field>
          </template>
          <v-date-picker
              v-model="payload.detail.employment_date"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
          ></v-date-picker>
        </v-menu>
        <v-text-field
          v-model="payload.detail.company_name"
          label="Company name"
        ></v-text-field>
        <v-autocomplete
          v-model="payload.detail.employment_status"
          :items="empStatus"
          label="Employment status"
        >
        </v-autocomplete>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data(){
      return {
        activePicker:null,
        menu:false,
        empStatus:[
          'Regular',
          'Contractual'
        ],
        booleanOptions:[
          {
              id:0,
              name:'No'
          },
          {
              id:1,
              name:'Yes'
          }
        ],
        payload:{
          detail:{}
        }
      }
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
  }
</script>
<style scoped>
    h1 {
        margin-bottom: 30px;
    }
</style>
