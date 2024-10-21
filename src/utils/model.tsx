export const modal = (id : string) => { 
 const modal = document.getElementById(id) as HTMLDialogElement
    modal && modal.showModal()

 }
