<template>
  <div>
    <b-card style="margin-left:20%; margin-right: 20%; margin-top: 20px;">
            <b-form @submit.prevent="submitProduct">
            <b-form-group style="padding:16px" >
                <b-form-input placeholder="Name" type="text" v-model="product.name" style="margin-top:5px" required ></b-form-input>
                <b-form-input placeholder="Stock" type="number" v-model="product.stock" style="margin-top:5px" required ></b-form-input>
                <b-form-input placeholder="Price" v-model="product.price" type="number" style="margin-top:5px" required ></b-form-input>
                <b-form-select v-model="product.categoryId" style="width:100%; margin-top: 5px;" :options="options" required></b-form-select>
                <b-button  style="width: 100%; margin-top: 10px;" variant="success" type="submit">Submit</b-button>
                 <b-alert show variant="danger" v-if="errors" style="margin-top:10px;">
                    <p v-for="(error,key) in errors" :key="key">{{ error }}</p>
                 </b-alert>
                </b-form-group>
        </b-form>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
import router from '@/router'
export default {
    props: ['id', 'newItem'],
    data() {
        return {
                errors: null,
                selected: null,
                options: [
                    {value: null,text:'Please select a category'},
                    {value: 1,text:'Pencils'},
                    {value: 2,text:'Books'},  
                ],
                product: {
                    name: '',
                    stock: null,
                    price: null,
                    categoryId: null,
                    }
        }
    },
    methods: {
        submitProduct(){
            if (this.id == 'new') {
                axios.post('/Product', this.product).then(res => {
                    router.push('/')
                }).catch(err => { this.errors = (err.response.data.errors) })
            } else
            {
                axios.put('/Product',this.product).then(res => {
                    router.push('/')
                }).catch(err => { this.errors = (err.response.data.errors) })
            }
        }
    },
    mounted() {
        if (this.id != 'new') {
            axios.get(`Product/${this.id}`).then(res=>
            {this.product = res.data.data }).catch(err => { this.errors = (err.response.data.errors) })
        }
    },
}
</script>

<style>

</style>