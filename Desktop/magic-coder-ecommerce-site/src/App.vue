<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Headnav from './components/Headnav.vue'
import Cart from './components/Cart.vue'
import Login from './components/Login.vue'
import Subscribe from './components/Subscribe.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <transition name="fade">
    <div v-if="newsletter">
      <Subscribe @newsClose="toggleNewsletter"/>
    </div>
  </transition>
  <transition name="slide-fade">
    <div v-if="login">

    <Login @loginclosed="toggleLogin"/>
  </div>
  </transition>
  <transition name="slide-fade">
  <div v-if="cart">
    <Cart @goShop="toggleCart" @cartclosed="toggleCart"/>
  </div>
</transition>
  <Headnav @cartClicked="toggleCart" @loginClicked="toggleLogin"/>
  <RouterView @openNews="toggleNewsletter"/>
  <Footer />
</template>

<script>
// import { globalEvent } from './components/java/globalEvent'

export default {
  name: 'App',
  data() {
    return {
      cart: false,
      login: false,
      newsletter: false,
    }
  },
  methods: {
    toggleCart() {
      this.cart = !this.cart
    },
    toggleLogin() {
      this.login = !this.login
    },
    toggleNewsletter() {
      this.newsletter = !this.newsletter
    },
  },
  // created() {
  //   globalEvent.$on('openNews', () => {
  //     this.newsletter = !this.newsletter
  //   })
  // }
}
</script>


<style scoped>
      .slide-fade-enter-active {
        transition: all 0.2s ease-in;
        position: absolute;
        left: 0;
        }
      .slide-fade-leave-active {
        transition: all 0.2s;
        position: absolute;
        left: -800px;
        }
       .slide-fade-enter-from,
       .slide-fade-leave-to {
        opacity: 0;
        position: absolute;
        left: -800px;
        }
        .fade-enter-active,
        .fade-leave-active {
        transition: 0.5s ease;
        }
        .fade-enter-from,
        .fade-leave-to {
        opacity: 0;
        }
</style>
