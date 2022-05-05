<template>
    <div class="login">
        <div class="login-inner">
            <v-card min-width="500">
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
                            label="Password"
                            :rules="[() => !!payload.password ||  '']"
                            v-model="payload.password"
                            filled
                            type="password"
                            dense
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="login" color="success">Log In</v-btn>
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
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            payload:{},
            hasError:false
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
                router.push({ path: '/' })
            } catch (error) {
                this.hasError = true

                setTimeout(() => {
                    this.hasError = false
                }, 3000);
            }
        }
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
</style>