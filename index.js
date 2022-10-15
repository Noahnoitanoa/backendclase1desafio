class Contenedor{

    #productos;
    constructor() {
        this.#productos = []
   }
    

   save(objeto) {
    this.#productos.push(objeto)
    }

   
    getById(id){
      const objetoBuscado = productos.find((p)=>p.id===id)
      if(objetoBuscado===undefined){
          return null
      }else{
          return objetoBuscado
      }
     }

     getAll(){
        return  this.#productosproductos
    }

    deleteById(id){
        for (let i=0;i<productos.length;i++){
            if (productos[i].id===id){
                productos.splice(i, 1)
            }
        }
    }

    deleteAll(){
        productos.splice(0, productos.length+1)
    }

  }


  const prodTest = new Contenedor
  
  console.log('Guarda datos (método save)')
  prodTest.save(1, '111', 300, './img/pintauñas pack.jpg')
  prodTest.save(2, '111', 250, './img/set iniciacion acrilico.jpg')
  console.log(productos)

  console.log('Devuelve el elemento con id')
  console.log(prodTest.getById(2))

  console.log('Retorno array con todos sus elementos')
  console.log(prodTest.getAll())

  
