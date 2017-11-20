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
   var container = document.getElementById('sclgen20162');
       var total = SclStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

(function (){
   var container = document.getElementById('sclgen20172');
       var total = SclStudentsGen20172.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

(function (){
   var container = document.getElementById('sclgen20171');
       var total = SclStudentsGen20171.length;
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

(function (){
   var container = document.getElementById('aqp2016');
       var total = AqpStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

//LIMA-LIM
//Por generación
var LimStudentsGen20162=data.LIM["2016-2"].students;
var LimStudentsGen20171=data.LIM["2017-1"].students;
var LimStudentsGen20172=data.LIM["2017-2"].students;

(function (){
   var container = document.getElementById('lim2016');
       var total = LimStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

//MÉXICO - CDMX
//Por generación
var CdmxStudentsGen20172=data.CDMX["2017-2"].students;
var CdmxStudentsGen20171=data.CDMX["2017-1"].students;

(function (){
   var container = document.getElementById('cdmx2016');
       var total = CdmxStudentsGen20162.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());
