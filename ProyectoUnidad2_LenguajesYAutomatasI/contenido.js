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



  /*

\/\*.*?\*\/ <-- REEMPLAZAR COMENTARIO


  (<title>.*<\/title>) <-- EXPRESION QUE VALIDA TODO .... PERO NO SE MUESTRA EN EL HTMLSS

  function titulo(){
  var titu = document.querySelector("title");
  var buscartitulo = titu.match(/(?!<title>)\w+(?=<\/title>)/gi);
  document.getElementById("serchtitulo") = buscartitulo;
};