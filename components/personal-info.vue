<template>
     <div>
         <h1>Personal Informations</h1>
        <v-text-field class="mb-4" label="First Name" hide-details="auto"></v-text-field>
        <v-text-field class="mb-4" label="Last Name" hide-details="auto"></v-text-field>
        <v-text-field class="mb-4" label="Middle Name" hide-details="auto"></v-text-field>
            
        <v-text-field class="mb-4" v-model="email" label="Student Number" hide-details="auto"></v-text-field>
        <v-text-field label="Contact Number" type="number" hide-details="auto"></v-text-field>
        <div class="civil-status">
            <v-select :items="civil_status" label="Civil Status" dense></v-select>
        </div>
        <div>
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
                v-model="date"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
            ></v-date-picker>
            </v-menu>
        </div>
        <v-text-field class="mb-4 pt-0" label="Location of Residence" hide-details="auto"></v-text-field>
        <div class="gender">
            <v-select :items="gender" label="Gender" dense></v-select>
        </div>
    </div>
</template>

<style scoped>
    .civil-status,
    .gender {
        margin-top: 30px;
    }
</style>


<script>
  export default {
    data: () => ({
      civil_status: ['Single', 'Married', 'Separated', 'Widowed'],
      gender: ['Male', 'Female'],
      date: null,
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
  }
</script>