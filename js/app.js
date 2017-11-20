/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través
// de la variable `data`
//console.log(data);

//SANTIAGO- SCL
//Por generación
var SclStudentsGen20162=data.SCL["2016-2"].students;
var SclStudentsGen20172=data.SCL["2017-2"].students;
var SclStudentsGen20171=data.SCL["2017-1"].students;

(function (){
   var container = document.getElementById('sclgen2016');
       var total = SclStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());
//AREQUIPA - AQP
//Por generación
var AqpStudentsGen20162=data.AQP["2016-2"].students;
var AqpStudentsGen20171=data.AQP["2017-1"].students;

(function (){
   var container = document.getElementById('aqp2016');
       var total = AqpStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

//AREQUIPA - AQP
//Por generación
var AqpStudentsGen20162=data.AQP["2016-2"].students;
var AqpStudentsGen20171=data.AQP["2017-1"].students;

(function (){
   var container = document.getElementById('aqp2016');
       var total = AqpStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

//AREQUIPA - AQP
//Por generación
var AqpStudentsGen20162=data.AQP["2016-2"].students;
var AqpStudentsGen20171=data.AQP["2017-1"].students;

(function (){
   var container = document.getElementById('aqp2016');
       var total = AqpStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());
