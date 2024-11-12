<script setup>
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ProductCard from './components/ProductCard.vue'

function showEmit(){
  console.log("emit");
}

let productsList = [
  {
    nombre:"taza",
    precio:"4000"
    },
  {
    nombre:"tacita",
    precio:"3400"
    }
];

onMounted(()=> {
  console.log("Mounted");
  fetch('https://6733e62ea042ab85d1184fd7.mockapi.io/productsList/products')
  .then(x => {
    console.log("data", x);
    return x.json();
  }).then(pList => {
    console.log(pList);
    productsList = pList;
  })
})

</script>

<template>
  <section class="container"  >
    <ProductCard v-for="product in productsList" v-bind:nombre = "product.nombre" v-bind:precio = "product.precio" v-on:click-product = "showEmit" />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
