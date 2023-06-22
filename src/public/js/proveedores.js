// $("#delete").click(function (e) {
//     let idProveedor = $(this).data('id');

//     $.ajax({
//         type: "DELETE",
//         url: `http://localhost:3000/proveedores/proveedor/${idProveedor}`
//     })
//     .done(response =>{
//         console.log(response);
//         location.href = "http://localhost:3000/proveedores";
//     })
// });

$("#delete").click(function(e){
    let idProveedor = $(this).data('id');
    console.log(idProveedor)
})




// $("#update").click(function (e) {
//     e.preventDefault();
//     let nombre = document.getElementById("nombre").value
//     let categoria =document.getElementById("categoria").value
//     let cantidad =document.getElementById("cantidad").value
//     let precio =document.getElementById("precio").value
//     let proveedor =document.getElementById("proveedor").value

//     const updateProduct = {
//         nombre,
//         categoria,
//         cantidad,
//         precio,
//         proveedor
//     }

//     let idProduct = $(this).data('id');
//     console.log(idProduct)
//     $.ajax({
//         type:"PUT",
//         url: `http://localhost:3000/proveedores/proveedor/${idProduct}`,
//         "content-type":"application/json",
//         data:updateProduct
//     })
//     .done(res => {
//         console.log(res);
//         location.href = "http://localhost:3000/proveedor";
//     })
// });