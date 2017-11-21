/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través
// de la variable `data`
//console.log(data);

//SANTIAGO- SCL
//Enrollment por generación

var SclStudentsGen20162=data.SCL["2016-2"].students;
var SclStudentsGen20172=data.SCL["2017-2"].students;
var SclStudentsGen20171=data.SCL["2017-1"].students;

(function (){
   var container = document.getElementById('sclgen20171');
       var total = SclStudentsGen20172.length;
       var div = document.createElement('div');
         var nodoParrafo = document.createTextNode(total);
             div.appendChild(nodoParrafo);
             container.appendChild(div);

}());

//Dessertion por generación

(function(){
var dessertion= SclStudentsGen20172.filter((student)=>{return student.active==false})
var totalDessertion= dessertion.length;
var container = document.getElementById('sclgen20172dessert');
var div = document.createElement('div');
   var nodoParrafo = document.createTextNode(totalDessertion);
   div.appendChild(nodoParrafo);
   container.appendChild(div);

}());

//-Supera TECH > 70% por sprint

(function(){
var dessertion= SclStudentsGen20162.filter((student)=>{return student.active==false})
var totalDessertion= dessertion.length;
var container = document.getElementById('sclgen20162dessert');
var div = document.createElement('div');
   var nodoParrafo = document.createTextNode(totalDessertion);
   div.appendChild(nodoParrafo);
   container.appendChild(div);

}());



(function (){
   var container = document.getElementById('sclgen20162');
       var total = SclStudentsGen20162.length;
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

//Promedio de los profesores generación 2017-2

   var container = document.getElementById('teacher');
   var sumaProf = 0;
   var promProf = 0;
       for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
       sumaProf += data.SCL['2017-2'].ratings[i].teacher;
       promProf = sumaProf / data.SCL['2017-2'].ratings.length;
       }

       //console.log(sumaProf+' suma y promedio '+promProf);

       var promedioProfes =  promProf;

       var promedio = document.createElement('h1');
       var nodoPromedio = document.createTextNode(promedioProfes);
           promedio.appendChild(nodoPromedio);
           teacher.appendChild(promedio);


   //Promedio de los jedi master generación 2017-2

   var container = document.getElementById('jedi');
   var sumaJedi = 0;
   var promJedi = 0;
       for(var i = 0; i < data.SCL['2017-2'].ratings.length; i++){
       sumaJedi += data.SCL['2017-2'].ratings[i].jedi;
       promJedi = sumaJedi / data.SCL['2017-2'].ratings.length;
       }

       //console.log(sumaJedi+' suma y promedio '+promJedi);

       var promedioJedis = promJedi;

       var promedio = document.createElement('h1');
       var nodoPromedio = document.createTextNode(promedioJedis);
           promedio.appendChild(nodoPromedio);
           jedi.appendChild(promedio);