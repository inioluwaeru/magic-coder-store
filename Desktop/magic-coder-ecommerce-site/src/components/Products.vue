<template>

<div class="w-72 h-80 border border-gray-300 pt-5 text-left mt-5" v-for="product in products" :key="product.id">
            <Product :product="product" />
        </div>
</template>

<script>
import Product from "./Product.vue"
export default {
    props: ['products'],
    components: {
        Product
    }
}
</script>

<style>

</style>