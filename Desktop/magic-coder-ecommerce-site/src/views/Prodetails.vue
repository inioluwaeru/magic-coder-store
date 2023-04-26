<template>
  <div class="hw">
    <div v-if="product" class="d2 w-full text-center pt-10 flex">
        <div class="w-2/5 p-10 hwe border-r border-gray-500 px-24 py-20">
            <img :src="product.img" class="w-80" alt=""> 
            <button class="border border-black px-7 py-2 mt-12 text-xl hover:bg-black hover:text-white" @click="produce.add(this.product)">Add to cart</button>
        </div>
        <div class="w-3/5 px-10 py-10">
            <h3 class="text-3xl font-semibold">{{ product.name }}</h3>
            <p class="mt-10">{{ product.data }}</p>
            <p class="mt-10 text-xl">PRICE: {{ product.price }}</p>
        </div>
    </div>
  </div>
</template>



<script>
import { produce } from '../components/java/java' 
import getProduct from '../composable/getProduct';

export default {
    props: ['id'],
    setup(props) {
        const { product, error, load } = getProduct(props.id)

        load()

        return { product, error }
    },
    data() {
        return {
            produce
        }
    }
}
</script>

<style scoped>
    .hw{
        height: 73vh;
    }
    .hwe{
        height: 63vh;
    }
</style>