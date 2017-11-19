/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
(function(){
   var container = document.getElementById('container');
   var students = data.SCL["2016-2"].students;

       var total = students.length;
       var parrafo = document.createElement('p');
         var nodoParrafo = document.createTextNode(total);
             parrafo.appendChild(nodoParrafo);
             container.appendChild(parrafo);

}());