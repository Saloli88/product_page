<template>
  <div>

      <b-navbar toggleable="lg" type="light" variant="light" style="color:black">
        <b-navbar-brand  style="color:black;margin-left: 20px;"><router-link to="/" class="routerLink">Products</router-link>
  </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
                  <router-link :to="{name:formLink,params:{id:'new',newItem: true}}" class="routerLink">Add Product</router-link>

          <b-navbar-nav class="ml-auto" style="margin-right: 20px;">
            <b-nav-form>
              <b-form-input size="md" placeholder="" v-model="query"></b-form-input>
            </b-nav-form>
              <b-button style="margin-left:10px" @click.prevent="updateQuery" variant="success">Search</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
data() {
    return {
        formLink : 'form',
        categories: [],
        categoryValue : "",
        query: ''
    }
},
methods: {
  updateQuery(){
    this.updateSearchQuery(this.query)
  },

  ...mapActions(['updateSearchQuery']),

},
mounted() {
        axios.get("/Categories").then(res=>{
            this.categories = res.data.data
        })
    },
computed: {
 
    ...mapState(['searchQuery']),
    ...mapGetters(['getSearchQuery','getCategoryValue']),

  }
}

</script>

<style>
ul{
    list-style-type: none;
}
.routerLink{text-decoration: none; font-style: none;}

</style>