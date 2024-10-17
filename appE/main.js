
let myarray = ['a','b','c','d','e',1,2,3,4,5]
for (let i of myarray){
	//console.log(i);
}

let animal = {
nombre:'pepe',
edad:5,
pesoKgs:26,
especie:'perro',
raza:'Mestizo'
};

//console.log(animal)

let misObjetos = [
	{a:1,b:2},
  {a:1,b:5},
  {a:1,b:7},
  {a:1,b:12},
  {a:1,b:9}
];

for (let i of misObjetos){
	//console.log(`El valor del atributo a es: ${i.a}`);
}

let numeros = [1,1,1,1,1];

function promedio(array){
    try{
        if(!array.isArray )
        {
            throw TypeError('argument is not an array');
        }
        suma = 0;
        resultado = 0;
          for(let i of array){
            suma += i;
            
        }
        return resultado = suma / array.length;

    }catch(e){
        console.log(e.TypeError)
        
    }

	
}

let promedioNum = promedio(numeros);
console.log(`Promedio: ${promedioNum}`);


let misProductos = [
	{nombre:'Usb 32GB',precio:1200},
  {nombre:'Mouse ',precio:9000},

];

function addAtributo(objetos){
iterador = 0;
	for(let i of objetos){
  	i.id = iterador;
    iterador ++;
  }

}

addAtributo(misProductos);

console.log(misProductos);


