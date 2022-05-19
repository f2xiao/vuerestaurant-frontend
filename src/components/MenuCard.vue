<template>
<v-card>
    <v-img
        :src="require(`@/assets/img/${item.image_tag}`)"
        height="200px"
    >
    </v-img>
    <v-card-title v-text="item.title" class="text-uppercase"></v-card-title>
    <v-card-subtitle v-text="item.description"></v-card-subtitle>
    <v-card-actions>
        <v-btn text @click="addItem(item)">
        Add to Cart
        </v-btn>
    </v-card-actions>

</v-card>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:['item'],
    methods: {
    ...mapActions({
        addItem: 'cart/addProductToCart'
    })
    }
}
</script>

<style>

</style>