//llamar dentro de una constante al form
const $form = document.querySelector("#form")
//escuchar el evento sumbit del form
$form.addEventListener("submit",handleSubmit)

 async function handleSubmit (event) {
    event.preventDefault()
    //guardar la informacion del form
    const form = new FormData(this)

    const response = await fetch(this.action, {
        method:this.method,
        body: form, 
        headers: {
            "Accept":"application/json"
        }
    })
    if (response.ok){
        this.reset()
        swal ( "Gracias por Contactarnos" ,  "Pronto recibira un mail con una respuesta" ,  "success" )
    }
}   