function recogerDatos(){
    let nombreCliente = document.getElementById("nomest").value;
    let emailw = document.getElementById("celest").value;
    let asunto = document.getElementById("asunto").value;

    let mensajeFinal1="el cliente con nombre: "+ nombreCliente;
    let mensajeFinal2="Email del cliente: "+ emailw;
    let mensajeFinal3="Asunto del cliente=: "+ asunto;
    
    console.log(mensajeFinal1);
    console.log(mensajeFinal2);
    console.log(mensajeFinal3);

}