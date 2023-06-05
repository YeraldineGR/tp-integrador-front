
const resumen = document.getElementById("buttongreenB2");

const cantDeTickets = document.getElementById("cantidad");

const selectCategoria = document.getElementById("ImputSelect");

const texto = document.getElementById('total');

resumen.addEventListener('click' , function(event){
    event.preventDefault();

    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("ImputSelect").value;

    let totalAPagar;
    let subtotal = 200*cantidad;


    if (categoria == 'Estudiante') {
        totalAPagar = subtotal*0.2;
        
    } else if (categoria == 'Trainee') {
        totalAPagar = subtotal*0.5;
                
    } else {
        totalAPagar = subtotal*0.85;
        console.log(`Total a pagar $ ${totalAPagar}`);
    } 
                          
    texto.textContent += totalAPagar;
    return;
        
});