<template>
    <div class="profile">
        <div class="categ">
            <ul>
                <li :class="tabs==0?'active':''"><v-btn @click="tabs=0">Change password/profile</v-btn></li>
                <li :class="tabs==1?'active':''"><v-btn @click="tabs=1">personal information</v-btn></li>
                <li :class="tabs==2?'active':''"><v-btn @click="tabs=2">Educational Informations</v-btn></li>
                <li :class="tabs==3?'active':''"><v-btn @click="tabs=3">Employment Informations</v-btn></li>
                <!-- <li :class="tabs==4?'active':''"><v-btn @click="tabs=4">Survey Informations</v-btn></li> -->
                <div class="class-share">
                    <div>
                        <small>Share your link to another to gain points</small>
                        <v-btn @click="copy" color="success">Copy share link</v-btn>
                    </div>
                </div>
            </ul>
        </div>
        <div class="infos">
            <password-profile v-if="tabs==0"></password-profile>
            <personal-info v-if="tabs==1"></personal-info>
            <educational-info v-if="tabs==2"></educational-info>
            <employment-info v-if="tabs==3"></employment-info>
            <!-- <survey-info v-if="tabs==4"></survey-info> -->
           
        </div>
    </div>
</template>
<script>
import PasswordProfile from '~/components/password-profile.vue';
import PersonalInfo from "../../components/personal-info.vue";
export default {
    middleware: 'auth',
    components:{PersonalInfo, PasswordProfile},
    data(){
        return{
            tabs:0,
            appUrl:process.env.appUrl,
        }
    },
    methods:{
        copy(){
            navigator.clipboard.writeText(this.appUrl+'/profile/'+this.$auth.user.share_code)
        },
    },
    created(){
        console.log(this.$route.params.id,"params")
    }
}
</script>
<style lang='scss' scoped>
    .class-share{
        display: flex;
        justify-content: center;

        div{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    }
    .active{
        background-color: #006048;
        button{
            color: white;
        }
    }
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

    @media(max-width: 480px) {
        .profile {
            display: block;
        }

        .profile .categ,
        .profile .infos {
            width: 100%;
        }
    }

</style>