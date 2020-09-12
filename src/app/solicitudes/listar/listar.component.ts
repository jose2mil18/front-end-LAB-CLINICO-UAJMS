import { Component, OnInit, ViewEncapsulation, ElementRef, OnDestroy, AfterViewInit  } from '@angular/core';
import {SolicitudesService} from '../solicitudes.service';
import {PacientesService} from '../../pacientes/pacientes.service';
import {Examen, Solicitud,Examen_solicitado, Persona, Usuario, Area, Paciente} from '../../models'
import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { httpFactory } from '@angular/http/src/http_module';
import { SelectItem } from 'primeng/primeng';

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import * as global from '../../shared/variables_global'; //<== HERE
declare const $: any;
declare const addFooters: any;
declare const validatefechas:any;
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  
  encapsulation: ViewEncapsulation.None
})

export class ListarComponent implements OnInit{



  inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
palabra:string='word';

solicitudes_paciente:Solicitud[]=[]


pacientes:Paciente[]

brands:any[]
brands2:any[]
 
rootNode: any;
form;
fecha:String;
  solicitud:Solicitud=new Solicitud()
solicitudes:Solicitud[]=[];
cols:any[];
currentUser:Usuario
datetime:Date;
fechita:string;
texto:string;
areas:Area[]
fecha_solicitud_minima:String

  constructor(private datePipe: DatePipe,  private titleCasePipe: TitleCasePipe, public solicitudesService:SolicitudesService, public pacientesService:PacientesService,private node:ElementRef) { 
    this.form={
      fech:'',
      fecha_inicio:'',
      fecha_fin:this.datePipe.transform(new Date(),"yyyy-MM-dd"),
      caracter_nombre:''
      ,cedula:'',
      estado_solicitud:'',
      resultados:''
    }
    this.solicitudesService.minimaFecha().subscribe(data=>{
      this.fecha_solicitud_minima=data
      console.log(this.fecha_solicitud_minima)
      this.form.fecha_inicio=data
      console.log(this.form.fecha_inicio)
    })
    this.solicitudesService.getAllAreas().subscribe(data=>{
      this.areas=data;
    })
    console.log(this.inventory.find(e => e.quantity === 5).name);
console.log(this.titleCasePipe.transform(this.palabra));
    this.datetime=new Date();
   
this.fechita=this.datePipe.transform(new Date(),"yyyy-MM-dd")

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.texto="Usuario: "+this.currentUser.personal_laboratorio.persona.nombre+" "+this.currentUser.personal_laboratorio.persona.ap+" "+this.currentUser.personal_laboratorio.persona.am;
this.rootNode=node;
this.fecha=$('#datepicker').val();
this.listar()

this.form.fecha_inicio=this.fecha_solicitud_minima

this.fecha='';

  }
listar(){
  this. solicitudesService.getAll().subscribe(data => {
    console.log(data)
    this.solicitudes=data;
    for(let i=0;i<this.solicitudes.length; i++){
      console.log(this.solicitudes[i].examenes_solicitados.length)
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    
   // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
    }
  });
}
  ngOnInit() {
  
 
 
  





    this.fecha='29-11-2019'
    $(function() {
      $('#datepicker').datepicker();
      $.datepicker.regional['es']={
          closeText: 'Cerrar',
          prevText: '&#x3c;Ant',
          nextText: 'Sig&#x3e;',
          currentText: 'Hoy',
          monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
          'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
          monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
          'Jul','Ago','Sep','Oct','Nov','Dic'],
          dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
          dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
          dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
          weekHeader: 'Sm',
          dateFormat: 'dd-mm-yy',
          changeYear: true,
          firstDay: 1,
          isRTL: false,
          showMonthAfterYear: false,
          yearSuffix: ''};
          $.datepicker.setDefaults($.datepicker.regional['es']);
    });
    this.brands = [
      { label: 'Registrado', value: 'Registrado' },
      { label: 'Sin Registrar', value: 'Sin Registrar' },
      { label: 'Pendiente', value: 'Pendiente' }
   
  ];
  this.brands2 = [
    { label: 'Entregado', value: 'Entregado' },
    { label: 'Recibido', value: 'Recibido' }
 
];
    this.cols = [
      
      { field: "nombres_paciente", header: 'Paciente' },
   
      { field: 'estado', header: 'Resultados' }
  ];
    //var el=$(this.rootNode.nativeElemnt).find('.solicitudes')[0]
/*
    $(function () {
      $('.js-basic-example').dataTable(
        {
         
          searching:false
      }
      );

    
  });

   */  
   
    $(function () {
      $('.js-basic-exampl').dataTable(
        {
          "searching": false
        }
      );

      // Exportable table
    
  });

  $(function () {
    $('.selectpicker').selectpicker();
    // Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm',
        clearButton: true,
        weekStart: 1
    });

    $('.timepicker').bootstrapMaterialDatePicker({
      format: 'HH:mm',
      clearButton: true,
      date: false
  });

    $('.fechapicker').bootstrapMaterialDatePicker({
      dateFormat: 'yyyy-mm-dd',
      clearButton: true,
      weekStart: 1,
      time: false,
      lang: 'es'
      /*
    }).on('change', function (e, date) {
    console.log($('#fech').val()) 
    console.log(e.val()+' '+date) 
    date.solicitudesService.getAll().subscribe(data => {
      console.log(data)
      this.solicitudes=data;
    });*/
  });
});

  }

  actualizar(solicitud:Solicitud){
    
    localStorage.removeItem('solicitudamodificar'); 
    localStorage.setItem('solicitudamodificar', JSON.stringify(solicitud));
  }
  facturar(solicitud:Solicitud){
    
    localStorage.removeItem('solicitudamodificar'); 
    localStorage.setItem('solicitudfacturar', JSON.stringify(solicitud));
  }

  busca_pacientes(){
    console.log(this.form.caracter_nombre);
    this.pacientesService.buscarPacientePorCaracterDeNombres(this.form.caracter_nombre, this.form.resultados).subscribe(data=>{
      this.pacientes=data
    
      for(let i=0;i<this.pacientes.length; i++)
      {
        this.pacientes[i].nombres=this.pacientes[i].persona.nombre+" "+this.pacientes[i].persona.ap+" "+this.pacientes[i].persona.am
     // this.pacientes[i].fnac=this.datePipe.transform(this.pacientes[i].fnac,"dd-MM-yyyy")
       
    }
       
      console.log(this.pacientes)
    })//----------------------------------
    for(let i=0;i<this.pacientes.length; i++)
    {
      if(this.pacientes[i].nombres==this.form.caracter_nombre){
        this.form.cedula=this.pacientes[i].cedula
      }
      else{
        this.form.cedula=''
      }
     }
  
     console.log(this.form.cedula)
     if(this.form.cedula !='' || this.form.caracter_nombre == '')
     {
    this.solicitudesService.filtrarPaciente(this.form.cedula,  this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(data => {
      console.log(data);
      console.log(this.form.cedula)
      this.solicitudes=data;

      for(let i=0;i<this.solicitudes.length; i++){
        this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
      }
    
   
    });
     }
    





  }
  filtro_completo(formu : NgForm){
    //console.log(this.form.fech)
 if(this.form.resultados == null)
 {
   this.form.resultados=""
 }
 if(this.form.estado_solicitud == null)
 {
   this.form.estado_solicitud=""
 }
  
     console.log(this.form.estado_solicitud)
     validatefechas()
     if(formu.valid && ($('#fecha_inicio').val() <=$('#fecha_fin').val()) )
     {
       
    $('#addevent').removeClass('show');
    this.solicitudesService.filtrarPaciente(this.form.cedula,  this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(data => {
      console.log(data);
      console.log(this.form.cedula)
      this.solicitudes=data;

      for(let i=0;i<this.solicitudes.length; i++){
        this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
      }
    
   
    });
  }
    
  }
  buscaPaciente() { // without type info

 
if(this.form.caracter_nombre != "")
{
  
  console.log("ajfdjf"+this.form.caracter_nombre)
  this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(data => {
    console.log(data);
    this.solicitudes=data;
    for(let i=0;i<this.solicitudes.length; i++){
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    }
  });
}
else{
  this. solicitudesService.getAll().subscribe(data => {
    console.log(data)
    this.solicitudes=data;
    for(let i=0;i<this.solicitudes.length; i++){
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    }
  });
  }
  
}

buscar_por_fecha(fech){
  console.log(fech)
  this. solicitudesService.filtrarPorFechaSolicitud(fech).subscribe(data => {
    console.log(data)
    this.solicitudes=data;
    for(let i=0;i<this.solicitudes.length; i++){
      console.log(this.solicitudes[i].examenes_solicitados.length)
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    
   // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
    }
  });
}
funcion(event: any){
  alert(event.target.value)
}

exportPdf() {
  console.log(this.form.fecha_fin)
  if(this.datePipe.transform(this.form.fecha_inicio,"yyyy-MM-dd") == this.datePipe.transform(new Date(),"yyyy-MM-dd")  || this.datePipe.transform(this.form.fecha_final,"yyyy-MM-dd") == this.datePipe.transform(new Date(),"yyyy-MM-dd") )
  {
  
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&estado_solicitud='+this.form.estado_solicitud+'&resultados='+this.form.resultados+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';

  }
  else
  {
  window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&cedula='+this.form.cedula+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&fecha_inicio='+this.form.fecha_inicio+'&fecha_fin='+this.form.fecha_fin+'&estado_solicitud='+this.form.estado_solicitud+'&resultados='+this.form.resultados+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
  }

  /*
  let examenes=""
  let doc = new jsPDF();
  @gmail.com
//doc.text('Hello world!', 10, 10)
var logo = new Image();
logo.src = 'assets/images/logo.svg';
doc.addImage(logo, 'JPEG', 15, 40,148,210);
let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
let rows = [];
for(let i=0; i<this.solicitudes.length; i++){
  examenes=""
  if(this.solicitudes[i].examenes_solicitados.length>0){
    for(let j=0;j<this.solicitudes[i].examenes_solicitados.length; j++){
      console.log(i+" "+j)
      console.log(this.solicitudes[i].examenes_solicitados.length)
examenes=examenes+this.solicitudes[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
    }
  }
  let temp = [i+1,this.solicitudes[i].nombres_paciente,this.solicitudes[i].estado,this.solicitudes[i].fecha,examenes];
  rows.push(temp);
}
doc.autoTable({
  head: [['Name', 'Email', 'Country']],
  body: [
      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Norway'],
      // ...
  ]
});
doc.autoTable({
  head: [col],
  body: [
      rows
  ]
});
doc.save('solicitudes.pdf');
}
a(){
  
  let doc = new jsPDF();
  var img = new Image()
  img.src = 'assets/images/logo-original-labclinico.png'
  doc.addImage(img, 'png', 10, 12, 12, 15)
  doc.text( 'This text is rotated\rand centered around\rthis point.', 10,180, 'center' );
  doc.setFontSize(12);
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
doc.addPage();
var pageCount = doc.internal.getNumberOfPages();
for(let i = 0; i < pageCount; i++) { 
doc.setPage(i); 
doc.text(10,10, doc.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);

}

doc.save('solicitudes.pdf');
}
buscar_por_rango_fechas(){
  console.log(this.form.fecha_inicio+"  "+this.form.fecha_fin)
  this. solicitudesService.filtrarPorRangoFecha(this.form.fecha_inicio, this.form.fecha_fin).subscribe(data => {
    console.log(data)
    this.solicitudes=data;
    for(let i=0;i<this.solicitudes.length; i++){
      console.log(this.solicitudes[i].examenes_solicitados.length)
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    
   // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
    }
});
*/
}
/*
public captureScreen()  
{  

  
 
  let examenes=""
  let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
  let rows = [];
  for(let i=0; i<this.solicitudes.length; i++){
    examenes=""
    if(this.solicitudes[i].examenes_solicitados.length>0){
      for(let j=0;j<this.solicitudes[i].examenes_solicitados.length; j++){
        console.log(i+" "+j)
        console.log(this.solicitudes[i].examenes_solicitados.length)
  examenes=examenes+this.solicitudes[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
      }
    }
    let temp = [i+1,this.solicitudes[i].nombres_paciente,this.solicitudes[i].estado,this.solicitudes[i].fecha,examenes];
    rows.push(temp);
  }
  var data = document.getElementById('contentToConvert');  
  
 
     var pdf = new jsPDF('p', 'mm', 'letter'),margin = 10;
     pdf.page=1;
     var pageCount = pdf.internal.getNumberOfPages();
     for(let i = 0; i < pageCount; i++) { 
      var str = "Pagina " + pdf.page+" - "+this.fechita;
      pdf.text(str, 50, pdf.internal.pageSize.height - 10);//key is the interal pageSize function
    
     // pdf.setPage(i); 
      //pdf.text(10,10, pdf.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);
      
      }
     var img = new Image();
     img.src = 'assets/images/logo-original-labclinico.png';
     var width = pdf.internal.pageSize.getWidth(); 
   console.log(pdf.internal.pageSize.getHeight())
   
     console.log("asfestewidth"+width+" " )
     console.log(pdf.internal.pageSize.getHeight())
pdf.text(30, 20, 'Laboratorio de Analisis Clinico UAJMS');

pdf.text(55, 45, 'Lista de solicitudes de analisis clinicos');

pdf.text(10, 55, this.texto);

     var position =10;  
     pdf.addImage(img, 'PNG', 10, position, 20, 25)  

     //tabla
    


/*
for(let i = 0; i < pageCount; i++) { 

  pdf.page ++;
  
  var str = "Pagina " + pdf.page+" - "+this.fechita;
  pdf.text(str, 50, pdf.internal.pageSize.height - 10);//key is the interal pageSize function


  //pdf.setPage(i); 
  //pdf.text(10,10, pdf.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);
  
  }
  
pdf.save("pdf.pdf");

} 
*/
/*
b(){
  var doc = new jsPDF('p', 'pt', 'letter');
        doc.page = 1; // use this as a counter.
        var totalPages = 10; // define total amount of pages
        // HEADER
        doc.setFontSize(20);//optional
        doc.setTextColor(40);//optional
        doc.setFontStyle('normal');//optional
        doc.text("Report", 50, 22);// set your margins
        
doc.text(10, 55, this.texto);
        // FOOTER
        var str = "Page " + doc.page  + " of " +  totalPages;
        doc.setFontSize(10);// optional
        doc.text(str, 50, doc.internal.pageSize.height - 10);//key is the interal pageSize function


       

        //Add new page and increase page count
        doc.addPage();
        doc.page ++;
        
        var str = "Page " + doc.page  + " of " +  totalPages;
        doc.text(str, 50, doc.internal.pageSize.height - 10);//key is the interal pageSize function
     
        doc.save("footer.pdf");
}
*/
prueba() { 
alert(this.form.fech)
}
buscarPaciente(){
  for(let i=0; i<this.solicitudes.length; i++){
if(this.solicitudes[i].paciente.persona.nombre == this.form.caracter_nombre){
  this.solicitudes_paciente.push(this.solicitudes[i])
}

  }
  if(this.solicitudes_paciente.length>0){

    
  this.solicitudes=this.solicitudes_paciente;
  for(let i=0;i<this.solicitudes.length; i++){
    console.log(this.solicitudes[i].examenes_solicitados.length)
    this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
  
 // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
  }
  }
  else{
    for(let i=0;i<this.solicitudes.length; i++){
      console.log(this.solicitudes[i].examenes_solicitados.length)
      this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
    
   // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
    }
  }
  console.log(this.solicitudes)
}
ver(s){
  this.solicitud=s
  this.fecha_entregas=s.fecha_entrega

}
enviar(formsolicitud:NgForm){
if(formsolicitud.valid)
{
  window.location.href="https://www.google.com"
}
}
keyPressHandler(e) {
  if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();

      // Perform your custom logic here if any
  }
}
fecha_entregas:string=""
cambiar_estado(solicitud){
  
let e=$('#fecha_entregas').val();

solicitud.fecha_entrega=this.datePipe.transform(e,'dd-MM-yyyy')

  solicitud.fecha=this.datePipe.transform(solicitud.fecha,'dd-MM-yyyy')

this.solicitudesService.modificar(solicitud).subscribe(data=>{
this.fecha_entregas=data.fecha_entrega
this.solicitud=data
 this.listar()

})
}
cerrar(){
 this.listar()
}
}
