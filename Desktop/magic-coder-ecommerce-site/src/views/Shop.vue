<template>
  <main class="text-center px-9">
    <h1 class="text-2xl font-semi-bold mr-10 mt-5">PRODUCTS</h1>
    <div v-if="error">{{ error }}</div>
        <div v-if="products.length">
            <div class="flex flex-wrap justify-between mt-5">
            <Products :products="products" />
        </div>
    </div>
    <div v-else>
        Loading Products...
    </div>
  </main>
</template>

<script>
import Products from '../components/Products.vue'
import getProducts from '../composable/getProducts'
export default {
    components: {
        Products
    },
    
    setup() {
        const { products, error,load } = getProducts()
        load()

        return{ products, error, load }
    }
}
</script>

<style>

</style>