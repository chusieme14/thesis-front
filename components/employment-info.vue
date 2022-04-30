<template>
    <div>
        <h1>Employment Informations</h1>
         <div class="employ">
            <v-select :items="employ" label="Employed" dense></v-select>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin-bottom: 30px;
    }
</style>

<script>
  export default {
    data: () => ({
      employ: ['Yes', 'No'],
    }),
  }
</script>