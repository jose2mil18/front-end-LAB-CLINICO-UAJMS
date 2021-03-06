import { Component, OnInit,  ElementRef } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {PacientesService} from '../pacientes.service'
import {Paciente, Usuario, Persona} from '../../models'

import {FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { DatePipe } from '@angular/common';

import { SelectItem } from 'primeng/primeng';
declare const $: any;
import * as glob from '../../shared/variables_global'; //<== HERE
import {debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  
  control=new FormControl('')
  
  controlCedula=new FormControl('')
  controlEdad=new FormControl('')
  controlProcedencia=new FormControl('')
  procedencia:string;
  sexo:string;
  fechaklp:string="2019-10-10";
  selectedPacientes: Paciente[];
  brands:SelectItem[];
  cadena:string="a"+"b"+"c"
  first: number = 0;
  transactions: {
    date: Date,
    label: string,
    amount: number
  }[];
  dtOptions: DataTables.Settings = {};
  currentUser:Usuario;
pacientes:Paciente[]=[];
settings
data=[]
rootNode: any;
columnDefs=[]
rowData=[];
cols:any[];
paciente:Paciente=new Paciente();
edad:number=-1
cedula:string="";
nombres:string="";
  constructor(public datePipe:DatePipe, private pacientesService:PacientesService, private router: Router, private node:ElementRef) { 

   // $('input').attr('autocomplete','off');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   this.procedencia=""
   this.sexo="";
   this.control.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
    console.log("hola"+value)
    this.nombres=value
    this.filtro_completo()
}) 
this.controlCedula.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
  console.log("hola"+value)
  this.cedula=value
  this.filtro_completo()
})
this.controlProcedencia.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
  console.log("hola"+value)
  this.procedencia=value
  this.filtro_completo()
})
this.controlEdad.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
  console.log("hola"+value)
  if(value==''){
    this.edad=-1
  }
  this.edad=value
  this.filtro_completo()
})

this.filtro_completo()
    let list = [4, 5, 6];

    this.columnDefs = [
      {headerName: 'Nombre', field: 'persona.nombre'},
      {headerName: 'Procedencia', field: 'procedencia'},
      {headerName: 'Sexo', field: 'sexo'}
  ];

 
  
this.rootNode=node;

   
  
   
  }

  ngOnInit(): void {
  
   
    this.cols = [
      {field:'cedula', header:'Cedula'},
      { field: 'nombres', header: 'Paciente' },
      { field: 'edad', header: 'Edad' },
      { field: 'procedencia', header: 'Procedencia' },
      


      
      { field: 'sexo', header: 'Sexo' }

  ];
  this.brands = [
    { label: 'Masculino', value: 'M' },
    { label: 'Femenino', value: 'F' }
 
];


 

    this.transactions = [
      {
        date: new Date(2017, 10, 10, 13, 10, 15),
        label: 'Third transaction',
        amount: 130
      },
      {
        date: new Date(2017, 7, 3, 9, 35, 0),
        label: 'Second transaction',
        amount: 130
      },
      {
        date: new Date(2017, 3, 27, 15, 43, 10),
        label: 'First transaction',
        amount: 130
      }
    ];
 

    $(function () {
      $('.js-basic-example').dataTable(
        {
         
      }
      );

      // Exportable table
      /*
      $('.js-basic-example').dataTable({
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      });

       mostrarformparamodificar(paciente){
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }
      */
  });
  }

  actualizar(paciente){

    
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }
  ver(paciente){

   this.paciente=paciente;
  }
  verhistorialclinico(paciente){

    
    localStorage.setItem('paciente', JSON.stringify(paciente));
    localStorage.setItem('cedula', paciente.cedula);
  }
filtro_completo(){

if($('#edad').val()==''){
  this.edad=-1
}
if(this.sexo==null){
  this.sexo=""
}

console.log(this.nombres)
console.log(this.procedencia)
  this.pacientesService.filtro(this.procedencia, this.sexo,this.edad, this.cedula, this.nombres).subscribe(data => {
 
    this.pacientes=data;
      for(let i=0;i<this.pacientes.length; i++)
      {
        this.pacientes[i].persona.apellidos=this.pacientes[i].persona.ap+" "+this.pacientes[i].persona.am
        this.pacientes[i].nombres=this.pacientes[i].persona.nombre+" "+this.pacientes[i].persona.ap+" "+this.pacientes[i].persona.am
     // this.pacientes[i].fnac=this.datePipe.transform(this.pacientes[i].fnac,"dd-MM-yyyy")
       }
  });
}
crear_backup(){
  
}
exportdoc() {
  window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/pacientes.html?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&procedencia='+this.procedencia+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&sexo='+this.sexo+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
}
 exportPdf() {
   if(this.edad==undefined)
   {
     this.edad=0;
   }
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/pacientes.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&procedencia='+this.procedencia+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&sexo='+this.sexo+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&edad='+this.edad+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
 
//window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/pacientes.pdf?nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre
    /*
    let doc = new jsPDF();
let col = ["#", "Cedula", "Paciente","Edad", "Procedencia", "sexo"];
let rows = [];
for(let i=0; i<this.pacientes.length; i++){
    let temp = [i+1,this.pacientes[i].cedula, this.pacientes[i].nombres,this.pacientes[i].edad, this.pacientes[i].procedencia, this.pacientes[i].sexo];
    rows.push(temp);
}
doc.autoTable(col, rows);
doc.save('pacientes.pdf');
*/
}
/*
exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.getCars());
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}
*/
parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
}
