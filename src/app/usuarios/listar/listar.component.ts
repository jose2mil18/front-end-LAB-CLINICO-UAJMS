import { Component, OnInit, ViewChild, ElementRef , ViewEncapsulation } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {UsuariosService} from '../usuarios.service'
import {Paciente, Usuario} from '../../models'
import { SelectItem } from 'primeng/primeng';
import * as jspdf from 'jsPDF'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import 'jspdf-autotable';
declare const $: any;

declare var Stimulsoft: any;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  
  encapsulation: ViewEncapsulation.None
})

export class ListarComponent implements OnInit {
  numero:number
  options: any;
  designer: any;
  cols:any[];
  brands:SelectItem[];
  pageActual: number = 1;
  @ViewChild('dataTable') table;
  dataTable: any;
  currentUser:Usuario;
usuarios:Usuario[];

rootNode: any;
  constructor(private usuariosService:UsuariosService, private router: Router, private node:ElementRef) { 
this.numero=1;
this.rootNode=node;

   
    usuariosService.getAll().subscribe(data => {
      
    
      this.usuarios=data;
      for(let i=0;i<this.usuarios.length; i++)
     {
       this.usuarios[i].nombres=this.usuarios[i].personal_laboratorio.persona.nombre+" "+this.usuarios[i].personal_laboratorio.persona.ap+" "+this.usuarios[i].personal_laboratorio.persona.am
     }
      
    });
  
   
  }

  ngOnInit() {
    this.cols = [
      { field: 'cedula', header: 'Cedula' },
      { field: 'nombres', header: 'Usuario' },
      { field: 'estado', header: 'Estado' }
  ];
  this.brands = [
    { label: 'Todos', value: null },
    { label: 'Habilitado', value: 'habilitado' },
    { label: 'Deshabilitado', value: 'deshabilitado' }
 
];
    //var el=$(this.rootNodhje.nativeElemnt).find('.js-basic-example')[0]

    
  }

  mostrarformparamodificar(paciente){
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }

  actualizar(user)
  {
    
    localStorage.setItem('usuarioamodificar', JSON.stringify(user));
  }
  exportPdf() {
    let doc = new jsPDF();
let col = ["#", "Cedula", "Usuario","Rol","estado"];
let rows = [];
for(let i=0; i<this.usuarios.length; i++){
    let temp = [i+1,this.usuarios[i].cedula, this.usuarios[i].nombres,this.usuarios[i].roles[0].nombre,this.usuarios[i].estado];
    rows.push(temp);
}
doc.autoTable(col, rows);
doc.save('usuarios.pdf');
}
c(){
alert(this.numero)
  //window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/areas.pdf'
//.html?parametro=5
window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/areas.pdf?parametro='+this.numero
  /*
  console.log('Loading Designer view');

    console.log('Set full screen mode for the designer');
    this.options = new Stimulsoft.Designer.StiDesignerOptions();
    this.options.appearance.fullScreenMode = false;

    console.log('Create the report designer with specified options');
    this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

    console.log('Edit report template in the designer');
    this.designer.report = new Stimulsoft.Report.StiReport();

    console.log('Load report from url');
    this.designer.report.loadFile('/reports/Report.mrt');
    this.designer.report.renderAsync(function () {
			var data = this.designer.report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);
			(<any>Object).saveAs(data, "Report.pdf", "application/pdf");
		})
    console.log('Rendering the designer to selected element');
    this.designer.renderHtml('designer');

    console.log('Loading completed successfully!');
    */
}
}