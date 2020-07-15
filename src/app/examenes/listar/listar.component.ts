import { Component, OnInit } from '@angular/core';
import {Examen} from '../../models/examen';
import {Area, Valor_referencia, Usuario} from '../../models';
import {ExamenesService} from '../examenes.service'
import * as jspdf from 'jsPDF'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import{SolicitudesService } from '../../solicitudes/solicitudes.service'
import 'jspdf-autotable';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  areas:Area[]
examenes:Examen[];
brands:SelectItem[];
area:Area;
currentUser:Usuario;
cols:any[];
form
e:Examen=new Examen();
  constructor(private solicitudesService:SolicitudesService, public examenesService:ExamenesService) { 
    this.solicitudesService.getAllAreas().subscribe(data=>{
      this.areas=data;
      console.log(this.areas)
    })
    this.area=new Area()
    this.form={
      fech:'',
      caracter_nombre_examen:'',
      estado_solicitud:'',
      cedula:'',
      prueba:'Agrupar',
      nombre_area:''
    }
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(this.currentUser)
    examenesService.getAll(this.area.nombre, this.form.caracter_nombre_examen).subscribe(data => {
      
    
      this.examenes=data;
      for(let i=0; i<this.examenes.length; i++)
      {
        this.examenes[i].valor_referencia="";
        this.examenes[i].nombre_area=this.examenes[i].area.nombre;
        if(this.examenes[i].valores_referencia.length>0)
        {
          for(let j=0; j<this.examenes[i].valores_referencia.length; j++)
          {
      this.examenes[i].valor_referencia= this.examenes[i].valores_referencia[j].tipo_persona+" "+this.examenes[i].valores_referencia[j].valor_inicial+"-"+this.examenes[i].valores_referencia[j].valor_final+" "+this.examenes[i].valor_referencia
          }
        }
      }
      
    });
  }

  ngOnInit() {
    this.cols = [
      {field:'nombre', header:'Examen'},
      { field: 'nombre_area', header: 'Area' },
      { field: 'unidades', header: 'Unidades' },
      
      { field: 'valor_referencia', header: 'Valor referencia' },
      
  ];
  this.brands = [
    { label: 'Todos', value: null },
    
    { label: 'Parasitologia', value: 'Parasitologia ' },
    { label: 'Serologia', value: 'Serologia' },
    { label: 'Hematologia', value: 'hematologia' },
    { label: 'Bacteorologia', value: 'Bacteorologia' },
    
    { label: 'Quimica Sanguinea', value: 'Quimica Sanguinea' }
    ,
    
    { label: 'Uroanalisis', value: 'Uroanalisis' }
 
];
  }

  filtro_completo()
  {
    if(this.form.nombre_area==null)
  {
    this.form.nombre_area=""
  }
    console.log(this.form.fech)
    console.log(this.area.nombre+" "+this.area.cod_area)
    this.examenesService.getAll(this.form.nombre_area, this.form.caracter_nombre_examen).subscribe(data=>{
      this.examenes=data
      for(let i=0; i<this.examenes.length; i++)
      {
        this.examenes[i].valor_referencia="";
        this.examenes[i].nombre_area=this.examenes[i].area.nombre;
        if(this.examenes[i].valores_referencia.length>0)
        {
          for(let j=0; j<this.examenes[i].valores_referencia.length; j++)
          {
      this.examenes[i].valor_referencia= this.examenes[i].valores_referencia[j].tipo_persona+" "+this.examenes[i].valores_referencia[j].valor_inicial+"-"+this.examenes[i].valores_referencia[j].valor_final+" "+this.examenes[i].valor_referencia
          }
        }
      }

      console.log(this.examenes.length)
    })
  
  }
  exportPdf() {
    window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/examenes_ofertados.pdf?am_usuario='+this.currentUser.personal_laboratorio.persona.am+'&ap_usuario='+this.currentUser.personal_laboratorio.persona.ap+'&nombre_usuario='+this.currentUser.personal_laboratorio.persona.nombre+'&nombre_area='+this.form.nombre_area+'&caracter_nombre_examen='+this.form.caracter_nombre_examen+'&j_username='+'jasperadmin'+'&j_password='+'jasperadmin';
   }
   actualizar(examen){

    localStorage.setItem('examen', JSON.stringify(examen));
   }

   ver(e){
     this.e=e;
   }
}
