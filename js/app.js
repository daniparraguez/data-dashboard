/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través
// de la variable `data`
//console.log(data);

(function (){
   var container = document.getElementById('scl2016-2');
   var students = data.SCL["2016-2"].students;

       var total = students.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

