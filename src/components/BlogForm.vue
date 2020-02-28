<template>
        <v-form v-model="valid">
            <v-text-field v-model="blog.id" 
                        label="ID" 
                        :rules="[required('id')]" />
            <v-text-field v-model="blog.title" 
                        label="Title" 
                        counter=50 
                        :rules="[required('title'), minLength('title',5), maxLength('title',50)]" />
            <v-textarea v-model="blog.description" 
                        label="Description" 
                        :rules="[required('Description')]" />
            <v-text-field v-model="blog.url" 
                        label="Image Url" 
                        :rules="[required('Image Url')]" />
            <v-btn color="primary" @click="saveBlog" :disabled= "!valid" >{{buttonText}}</v-btn>
        </v-form>
</template>

<script>
export default {
        data() {
        return{
            valid:false,
            required(propertyType) {
                return b => b && b.length > 0 || `You must input a ${propertyType}`
            },
            minLength(propertyType,minLength) {
                return b => b && b.length >= minLength ||  `${propertyType} must be at least ${minLength} characters`
            },
            maxLength(propertyType,maxLength) {
                return b => b && b.length <= maxLength ||  `${propertyType} must be less than ${maxLength} characters`
            }
        }
    },
    props: ['blog','saveBlog','buttonText']
}
</script>
