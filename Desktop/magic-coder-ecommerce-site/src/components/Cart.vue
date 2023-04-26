<template>
  <div class="absolute w-full h-full z-10">
  <div class="fixed top-0 w-full h-screen bg-black bg pl-0" @click.self="emitCartClose">
    <button @click="emitCartClose" class="text-3xl text-gray-700 hover:text-white hover:border-black hover:bg-black border p-3 absolute right-96 border-gray-700">X</button>
  </div>
  <div class="bg-white w-96 h-screen fixed top-0 right-0 px-7 overflow-y-scroll overflow-x-hidden">
    <h1 class="text-3xl py-8 ">Shopping Cart</h1>
    <hr>
    <div v-if="products.length">
        <div class="flex py-3" v-for="product in products" :key="product.id">
            <div class="h-28 w-1/2">
                <img :src="product.img" alt="">
            </div>
            <div class="cart-text pl-2 py-3 w-1/2" >
                <h1>{{product.name}} </h1>
                <h1 class="mt-1 text-gray-500">{{product.price}}</h1>
                <span>
                    <input type="number" :value="product.qty" class="bg-gray-400 w-12 pl-3.5 mt-2 outline-none">
                </span>
            </div>
            <div>
                <button class="border border-black p-0.5 mt-10" @click="deletePro(products, product.id)">delete</button>
            </div>
    </div>
</div>

    <div v-else class="text-center">
        <h1 class="text-xl">No products in cart yet</h1>
        <router-link to="/shop">
            <button class="my-5 hover:text-red-600" @click="goShop">Go shoping?</button>
        </router-link>
    </div>

        <div class="w-full h-16 py-2.5 fixed bottom-2 z-50 bg-white">
            <button class="text-xl py-2 px-4 border border-black hover:bg-black hover:text-white ml-20">Proceed to checkout</button>
        </div>
  </div>
</div>
</template>

<script>
import {produce} from '../components/java/java'

export default {
    name: 'Cart',
    data() {
        return {
            products: produce.produces
       } 
    },
    methods: {
        emitCartClose() {
        this.$emit('cartclosed')
        },
        deletePro: produce.remove,
        goShop() {
            this.$emit('goShop')
        }
    }
}
</script>

<style scoped>
.bg{
    background-color: #0000009d;
}
.cart-text{
    font-size: 16px;
}
</style>