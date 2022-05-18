<template>
    <div class="login">
        <div class="login-inner">
            <v-card class="login-cont">
                <v-card-title>NWSSU Alumni</v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-text-field
                            label="Email or student number"
                            :rules="[() => !!payload.email ||  '']"
                            v-model="payload.email"
                            filled
                            dense
                        ></v-text-field>
                        <v-text-field
                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                            label="Password"
                            :rules="[() => !!payload.password ||  '']"
                            v-model="payload.password"
                            filled
                            :type="show3 ? 'text' : 'password'"
                            dense
                            @click:append="show3 = !show3"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="login" color="success">Log In</v-btn>
                </v-card-actions>
                 <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="forgot-pass">Forgot password ?</v-btn>
                </v-card-actions>
            </v-card>
        <v-snackbar
            :timeout="-1"
            v-model="hasError"
            tile
            color="red accent-2"
        >
            Something wrong please check you're credential.
        </v-snackbar>
            <div class="no-accnt">
                <v-card-text>Don't have an account? <v-btn text @click="$router.push({path: '/register'})">Sign up</v-btn></v-card-text>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    head(){
        return {
            title:'Login',
            meta:[
                {
                hid:"description",
                name:"description",
                content:"this is the login page"
                }
            ]
        }
    },
    data(){
        return{
            payload:{},
            hasError:false,
            show3: false,
        }
    },
    methods:{
        async login(){
            if(!this.$refs.form.validate()) return;
            try {
                let loginCredential = this.payload
                await this.$auth.loginWith('local',{
                    data: {
                        email:loginCredential.email,
                        password:loginCredential.password
                    }
                })
                if(this.$auth.user){
                    if(this.$nuxt.context.from){
                        console.log(this.$nuxt.context.to.fullPath.slice(1),"prevvvvvvvv")
                        setTimeout(() => {
                            this.$router.push({ path: this.$nuxt.context.from.fullPath.slice(1) })
                        }, 1000);
                    }else{
                        this.$router.push({ path: '/' })
                    }
                }
            } catch (error) {
                this.hasError = true

                setTimeout(() => {
                    this.hasError = false
                }, 3000);
            }
        },
        saveCurrentRoute(){
            localStorage.setItem('current_path', )
        }
    },
    created(){
    }
}
</script>
<style scoped>
    .login {
        display: flex;
        justify-content: center;
        
    }

    .login-inner {
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .login-inner .v-card {
        background-position: top;
        background-size: 47%;
        width: 500px;
        background-image: linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('/logo.png');
    }

    .login-inner .v-card,
    .no-accnt {
        border: 1px solid rgba(var(--b6a,219,219,219),1);
    }

    .login-inner .v-card .theme--light.v-input input {
            color: rgba(0, 0, 0, 1) !important;
    }

    .no-accnt {
        text-align: center;
        margin-top: 20px;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    }

     .login-inner .v-card .v-card__text {
         padding-bottom: 0 !important;
     }

     .login-inner .v-card button {
         width: 96%;
     }

     .login-inner .v-card .v-card__actions {
        display: block;
        text-align: center;
     }

    .forgot-pass,
    .forgot-pass:hover {
        box-shadow: none;
        background-color: transparent !important;
    }

    .login-form {
        background-color: #fff;
    }

    .login input {
        background: #fafafa;
        background: rgba(var(--b3f,250,250,250),1);
        border: 0;
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        margin: 0;
        outline: 0;
        overflow: hidden;
        padding: 9px 0 7px 8px;
        text-overflow: ellipsis;
    }

    @media(max-width: 480px) {
        .login .login-inner .login-cont {
            width: 400px !important;
        }
    }
</style>