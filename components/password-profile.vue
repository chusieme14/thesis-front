<template>
    <v-card>
        <v-card-title class="class-title">
            <v-avatar
                size="250"
            >
                <img
                    @click="triggerUpload"
                    :src="payload.avatar?payload.avatar:'/no-image.png'"
                />

            </v-avatar>
            <input 
                ref="file_input"
                type='file' class="hidden" 
                accept="image/x-png,image/gif,image/jpeg" 
                @change="onFileChange($event.target.files)"
            />
        </v-card-title>
        <v-card-text>
            <v-form ref="form">
                <v-text-field
                    v-model="payload.old_password"
                    :rules="[() => !!payload.old_password ||  '']"
                    label="Old password *"
                    type="password"
                >
                </v-text-field>
                <v-text-field
                    v-model="payload.new_password"
                    :rules="[() => !!payload.new_password ||  '']"
                    label="New password *"
                    type="password"
                >
                </v-text-field>
                <v-text-field
                    v-model="payload.c_password"
                    :rules="[() => payload.c_password == payload.new_password ||  '']"
                    label="Confirm password *"
                    type="password"
                >
                </v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="update" color="success">Update</v-btn>
        </v-card-actions>
        <v-snackbar
            :timeout="-1"
            v-model="issuccess"
            tile
            color="success"
        >
            {{message}}
        </v-snackbar>
        <v-snackbar
            :timeout="-1"
            v-model="hasError"
            tile
            color="error"
        >
            {{message}}
        </v-snackbar>
    </v-card>
</template>
<script>
export default {
    data(){
        return{
            imageUrl:process.env.imageUrl,
            issuccess:false,
            hasError:false,
            message:null,
            payload:{
                image_base64:null,
                avatar:null
            }
        }
    },
    methods:{
        async update(){
            if(!this.$refs.form.validate()) return;
            try {
                await this.$axios.put(`update-graduate-password/${this.payload.id}`,this.payload).then(({data})=>{
                    this.message = "Password was successfully updated"
                    this.issuccess = true
                    setTimeout(() => {
                        this.issuccess = false
                    }, 3000);
                })
            } catch (error) {
                this.message = "Old password not match"
                this.hasError = true
                setTimeout(() => {
                    this.hasError = false
                }, 3000);
            }
        },
        getGraduate(){
            this.$axios.get(`graduates/${this.$auth.user.id}`).then(({data})=>{
                this.payload = data
                this.payload.avatar = this.imageUrl+this.payload.avatar
            })
        },

        triggerUpload() {
            this.$refs.file_input.click()
        },

        async onFileChange(file) {
            let imageFile = file[0]

            if (file.length>0) {
                if (!imageFile.type.match('image.*')) {
                this.errorDialog = true
                this.errorText = 'Please choose an image file'
                } else {
                let imageURL = URL.createObjectURL(imageFile)
                this.avatar_blob = imageURL
                this.payload.image_base64 = await this.createImageBase64(imageFile);
                }
            }
            console.log(this.payload.image_base64)
            this.payload.avatar = this.payload.image_base64
            this.$axios.put(`update-graduate-profile/${this.payload.id}`,this.payload).then(({data})=>{
                this.getGraduate()
            })

        },
        createImageBase64(file) {
            var reader = new FileReader();

            return new Promise((resolve, reject) => {
                reader.onload = e => {
                    let res = e.target.result;
                    resolve(res);
                };
                reader.readAsDataURL(file);
            });
        },
    },
    created(){
        this.getGraduate()
    }
}
</script>
<style lang="scss" scoped>
    .class-title{
        display: flex;
        justify-content: center;
    }
    .hidden{
        display: none;
    }
</style>