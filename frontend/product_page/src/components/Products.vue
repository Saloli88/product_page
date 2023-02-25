<template>
  <div class="products-container">
      <b-card
        v-for="(value,key) in resultQuery" :key="key"
        :title= value.name
        img-src="https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 18rem; margin-left: 15px;"
      >
        <b-card-text>
            Price: {{ value.price }}$ <br>
            {{ value.stock }} items left <br>
            Category: {{ value.category.name }}
        </b-card-text>

        <b-button href="#" variant="success" @click="updateProduct(value.id)" style="width:100%">Update</b-button>
        <b-button href="#" variant="danger" @click="deleteProduct(value.id)" style="width:100%; margin-top:10px">Delete</b-button>
        <b-card-text v-if="showDetails">
            {{ key }}
        </b-card-text>
      </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'
import router from '@/router'

export default {
    data() {
        return {
            products : [],
            showDetails: false,

        }
    },
    mounted() {
        axios.get('/Product/GetProductWithCategory').then(res=>{
            this.products = res.data.data
        })
    },
    computed:{
            ...mapGetters(['getSearchQuery']),
        resultQuery() {
            if (this.getSearchQuery) {
                return this.products.filter((item) => {
                    return this.getSearchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            } else {
                return this.products;
            }
        }
    },
    methods: {
        deleteProduct(id){
            axios.delete(`Product/${id}`).then(res=>{
                location.reload()
            })
        },
        updateProduct(productId){
            router.push({ name: 'form',params:{id:productId}})
        }
    },
}
</script>

<style>
.products-container{
    margin-top: 10px;
    display: flex;
    flex: wrap;
}
</style>