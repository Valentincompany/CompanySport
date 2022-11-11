const $form = document.querySelector("#form")

$form.addEventListener("submit",handleSubmit)

 async function handleSubmit (event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method:this.method,
        body:form,
        Headers:{
            "accept":"application/json"
        }
    })
    if (response.ok){
        form.reset()
        alert("gracias por contactarnos, pronto le llegara su respuesta")
    }
}