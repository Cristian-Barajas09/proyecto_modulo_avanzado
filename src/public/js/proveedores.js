$("#delete").click(function (e) {
    let idProveedor = $(this).data('id');

    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/proveedores/proveedor/${idProveedor}`
    })
    .done(response =>{
        console.log(response);
        location.href = "http://localhost:3000/proveedores";
    })
});





$("#update").click(function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value
    let categoria = document.getElementById("categoria").value

    const updateProveedor = {
        nombre,
        categoria,
    }

    let idProveedor = $(this).data('id');
    $.ajax({
        type:"PUT",
        url: `http://localhost:3000/proveedores/proveedor/${idProveedor}`,
        "content-type":"application/json",
        data:updateProveedor
    })
    .done(res => {
        console.log(res);
        location.href = "http://localhost:3000/proveedores";
    })
});