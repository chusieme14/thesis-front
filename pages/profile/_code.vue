<template>
    <div class="profile">
        <div class="categ">
            <ul>
                <li><v-btn @click="tabs=1">personal information</v-btn></li>
                <li><v-btn @click="tabs=2">Educational Informations</v-btn></li>
                <li><v-btn @click="tabs=3">Employment Informations</v-btn></li>
            </ul>
        </div>
        <div class="infos">
            <personal-info v-if="tabs==1"></personal-info>
            <educational-info v-if="tabs==2"></educational-info>
            <employment-info v-if="tabs==3"></employment-info>
           
        </div>
    </div>
</template>
<script>
import PersonalInfo from "../../components/personal-info.vue";
export default {
    middleware: 'auth',
    components:{PersonalInfo},
    data(){
        return{
            tabs:1,
        }
    },
    created(){
        console.log(this.$route.params.id,"params")
    }
}
</script>
<style scoped>
    .profile {
        margin-right: 28px;
        max-width: 935px;
        width: 100%;
        background: transparent;
        width: 100%;
        margin: auto;
        margin-top: 30px;
        display: flex;
        border: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .profile .categ {
        width: 30%;
        padding-top: 20px;
        border-right: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .profile .infos {
        width: 70%;
        padding-top: 20px;
        padding-left: 6%;
        padding-right: 6%;
        padding-bottom: 3%;
    }

    .profile ul {
        padding-left: 0;
    }

    .profile ul li {
        list-style: none;
        margin-bottom: 6px;
    }

    .profile ul li button {
        box-shadow: none;
        width: 100%;
        background-color: transparent !important;
    }

    .profile ul li button span.v-btn__content {
        justify-content: start !important;
    }

</style>