let numeros = [1,1,1,1,1];

function promedio(arr){
    try{
        if(!Array.isArray(arr) )
        {
            throw TypeError('argument is not an array');
        }
        suma = 0;
        resultado = 0;
          for(let i of arr){
            suma += i;
            
        }
        return resultado = suma / arr.length;

    }catch(e){
        console.log(e.message)
        
    }
}

let promedioNum = promedio(numeros);
console.log(promedioNum);


////////////////////////////////////////////////

let misProductos = [
	{nombre:'Usb 32GB',precio:1200},
  {nombre:'Mouse ',precio:9000},

];

function addAtributo(objetos){
try{
	if(typeof(objetos)!= 'object' ){
  	throw TypeError('Argument is not an object')
  }
	iterador = 0;
	for(let i of objetos){
  	i.id = iterador;
    iterador ++;
  }

}catch(e){
	console.log(e.message);

}

}

addAtributo(misProductos);

console.log(misProductos);


//////////////////////////////////////////////
let miFuncion = fetch('https://671190904eca2acdb5f5205d.mockapi.io/api/users',
    {
method:'GET',
body:null,
},
);
miFuncion
.then(function(response){
response.json()
.then(function(resJson){
console.log('el json de la respuesta es: ',resJson );
})
}).catch(function(e){
console.log(e.message);
})

console.log('mifuncion: ',miFuncion)

///////////////////////////////////////////////////

function sumar(num1,num2){

    return new Promise(function(resolve,reject){
        if( typeof(num1) != number || typeof(num2) != number){
            reject()
        }
        let result = num1 + num2;
        resolve(result)
    }
)
}

let result = sumar(1,2).then(function(response){
    console.log('resultado', resolve)
}).catch(function(e){
    console.log(e)
})
