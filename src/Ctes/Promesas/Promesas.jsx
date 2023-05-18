




const Promesas = () => {
    


    const Promesas = (estado) => {

      return new Promise( (resolve, reject) => {

            if(estado){
                resolve('promesa cumplida')
            }else{

                reject('promesa rechazada')
            }
      }

    )}

    Promesas(false)
      .then((res)=> {

        console.log(res)
      })
      .catch((err)=>{

        console.log(err)
      })
  
      const colors = ['withe','red','blue','yellow','pink']

      const call_colors = (estado) => {

        return new Promise( (resolve, reject) => {
  
              if(estado){
                  resolve(colors)
              }else{
  
                  reject('Color no econtrado')
              }
        }
  
      )}

      call_colors(true).then((res)=> {

        console.table(res)
      })
      .catch((err)=>{

        console.log(err)
      })
        
      .finally(() => {console.log('proceso finalizado')})
  


  
    return (
    <div></div>
  )
}

export default Promesas