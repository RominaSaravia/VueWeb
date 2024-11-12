<script setup>
defineProps({
  nombre: {
    type: String,
    required: true,
  },
    precio: {
    type: String,
    required: true,
  },
})
</script>

<template>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100 " style="width: 16rem;">
                <img src="../assets/img/taza-item-white.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="details">
                        <div  onmouseover="handleHover(this)" onmouseleave="handleHoverLeave(this)">
                            <h4 class="card-title">{{nombre}}</h4>
                                <div class="details-child card-text" >
                                    <p>Tamaños S posillo</p>
                                    <p>Tamaños M taza </p>
                                    <p>Tamaños L tazon</p>
                                </div>
                        </div>
                        <div class="price">
                            <h4 class="text-price">${{precio}}</h4>
                            <h6 class="text-price-regular">$${{precio}}</h6>
                        </div>
                    </div>

                    <div class="pick-items">

                        <div class="pick-items-color">
                            <input type="radio" name="color-white" id="white" onclick="pickColorItem(this)">
                            <input type="radio" name="color-white" id="red" onclick="pickColorItem(this)" >
                            <input type="radio" name="color-white" id="blue" onclick="pickColorItem(this) ">
                        </div>
    
                        <div class="pick-size">
                            <div class="pick-size-button">S</div>
                            <div class="pick-size-button">M</div>
                            <div class="pick-size-button">L</div>
    
                        </div>
        
                    </div>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">tacitas.com</small>
                  <p v-on:click="$emit('product-click',this.nombre)" >BUY</p>
                </div>

              </div>
            </div>
          </div>
</template>

<style scoped>
img {
    height: 256px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 16px;
}

#card{
    border-radius: 1rem;
    border: 1px solid rgb(212, 212, 212);
    padding-bottom: 4px;
    margin: 1rem;
    box-shadow: 3px 4px 5px grey;

}

.card-header{
    border-radius: 1rem;
}

.container{
    display: flex;
    align-items: flex-start;
}

.card-header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

}

.card-body{
    min-width: 200px;
}

.details{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: start;
    margin:16px 0;
}
.details h2{
    margin: 2px 0;
}

.details p {
    margin: 0;
    padding-bottom: 2px;
}

.price{
    display: flex;
    flex-direction: column;
    align-items: start;

}

.details-child{
    transition: 1.5s;
    height: 10;
    color:white;
}

.text-price{
    color: red;
    padding: 4px;
    margin: 0;
    text-align: right;
}

.text-price-regular{
    color: grey;
    padding: 4px;
    margin: 0;
    text-align: right;
}

.pick-items{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.pick-size{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}

div.pick-size-button{
    padding: 0;
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 12px;
    border: 2px solid grey;
    text-align: center;
    font-size:small;
}

/* Radio */
input[type="radio"]#blue {
    background-color: blue;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin-right: 2px;
    position: relative;
    width: 20px;
    -webkit-appearance: none;
}

input[type="radio"]#red {
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin-right: 2px;
    position: relative;
    width: 20px;
    -webkit-appearance: none;
}

input[type="radio"]#white {
    background-color: #dbddc1;
    border-radius: 10px;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin-right: 2px;
    position: relative;
    width: 20px;
    -webkit-appearance: none;
}
input[type="radio"]:after {
    background-color: white;
    border-radius: 25px;
    box-shadow: inset 0 0 0 2px hsla(0,0%,0%,.4),
                0 1px 1px hsla(0,0%,100%,.8);
    content: '';
    display: block;
    height: 11px;
    left: 5px;
    position: relative;
    top: 4.5px;
    width: 11px;
}
input[type="radio"]:checked:after {
    background-color: rgb(96, 138, 156);
    box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.4),
                inset 0 1px 1px hsla(0,0%,100%,.4),
                0 1px 1px hsla(0,0%,100%,.8),
                0 0 1px 1px hsla(256, 70%, 70%, 0.4);
}

.card-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
}

.puntuation{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
