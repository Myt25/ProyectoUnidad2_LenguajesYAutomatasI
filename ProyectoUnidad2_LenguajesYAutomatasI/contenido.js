function mostrarcodigo(urlva) {
    var valor = document.getElementById("urlva").value;
    var deducion = /(https:)\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    //var deducion = /(view-source:)https(:)\/\//
    if (deducion.test(valor)) {
        alert('Direccion URL valida');

        function makeHttpObject() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
            throw new Error("Could not create HTTP request object.");
        }
        
        var request = makeHttpObject();
        request.open("GET", valor, true);
        request.send(null);
        request.onreadystatechange = function() {

            // Si se establecion correctamente la conexion
            if (request.readyState === XMLHttpRequest.DONE) {

                // Si la respuesta es exitosa
                if (request.status === 200) {

                    // Creamos un nuevo "Document"
                    var doc = document.implementation.createHTMLDocument("doc");
                    // Inyectamos el texto html recibido
                    doc.documentElement.innerHTML = request.responseText;


                    // Reemplazamos el body actual por el nuevo.
                    document.body.innerHTML = doc.body.innerText;

                }
            }
        };

    } else {
        alert('Dirección URL no válida ');
    }
}

function Reemplazar(){
   var texto = document.getElementById("texto").value;
   var texto_nuevo = texto.replace(/(https:)\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, " La URL fue acortada por: https://www.ejemplo.com");
   document.getElementById("reemplazotexto").innerHTML = texto_nuevo;
};

function reemplazocomentario(){
  var coment = document.getElementById("borrarcomentario").value;
  var coment2 = coment.replace(/(\/\*.*?\*\/)/g, "El comentario se ha reemplazado ");
  document.getElementById("comentario").innerHTML = coment2;
};
function buscar(){
    var str = document.getElementById("buscarIMG").value;
    let txt = str.match(/([0-9-,_A-Za-z]+[.]+["jpg$"]+["png$"]+["gif$"])/g);
    document.getElementById("mostrarextension").innerHTML = txt;

};

function titulox(){
var busquedatit = document.getElementById("etiquetatitulo").value;
var encontrar = busquedatit.match(/(?!<title>)\w+(?=<\/title>)/gi);
document.getElementById("tituloencontrado").innerHTML = encontrar;
};
  /*

\/\*.*?\*\/ <-- REEMPLAZAR COMENTARIO


  (<title>.*<\/title>) <-- EXPRESION QUE VALIDA TODO .... PERO NO SE MUESTRA EN EL HTMLSS

  function titulo(){
  var titu = document.querySelector("title");
  var buscartitulo = titu.match(/(?!<title>)\w+(?=<\/title>)/gi);
  document.getElementById("serchtitulo") = buscartitulo;
};
