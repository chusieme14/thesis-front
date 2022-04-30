<template>
     <div>
        <h1>Educational Informations</h1>
        <div class="educ-attainment">
            <v-select :items="educ_attain" label="High Educational Attainment" dense></v-select>
        </div>
        <div class="examp-pass">
            <v-select :items="exam_pass" label="Professional Exam Passed" dense></v-select>
        </div>
        <v-text-field class="award pt-0" label="Award(s)" hide-details="auto"></v-text-field>
        <div class="course">
            <v-select :items="course" label="Course" dense></v-select>
        </div>
         <v-text-field class="section pt-0" label="Section" hide-details="auto"></v-text-field>
         <div class="graduated">
            <v-select :items="graduated" label="Graduated" dense></v-select>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin-bottom: 20px;
    }

    .educ-attainment,
    .examp-pass,
    .employ,
    .course,
    .graduated {
        margin-bottom: 30px;
    }

    .award,
    .section {
        margin-bottom: 40px;
        margin-top: -10px;
    }
</style>

<script>
  export default {
    data: () => ({
      educ_attain: ['Baccalaureate', 'Masteral', 'Doctorate'],
      exam_pass: ['Yes', 'No'],
      course: ['Bachelor of Secondary Education', 'Bachelor of Science in Computer Science','Bachelor of Science in Information Technology','Bachelor of Science in Office Administration'],
      graduated: ['2021-2022', '2020-2021','2019-2020','2018-2019','2017-2018'],
    }),
  }
</script>