import { Component, OnInit, ViewChild, ElementRef , ViewEncapsulation } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {DosificacionesService} from '../dosificaciones.service'
import {Paciente, Usuario, Rol} from '../../models'
import { SelectItem } from 'primeng/primeng';
import * as jspdf from 'jsPDF'; 
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
//import swal from 'sweetalert2'

declare const $: any;
declare const showConfirmMessage:any
declare var Stimulsoft: any;

declare const Swal: any;
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
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
form:Usuario;
rootNode: any;
roles:Rol[]=[]
usuario:Usuario=new Usuario()
dosificaciones:any[]
photoSelected:string | ArrayBuffer//muestra la imagen que el usuario sube
imageUrl: string = "http://localhost:9898/api/file/";
  constructor(private dosificacionesService:DosificacionesService, private router: Router, private node:ElementRef) { 
    
    this.dosificacionesService.getAll().subscribe(data=>{
 this.dosificaciones=data;
      console.log(data)
       })

  }

  ngOnInit() {
  }

}
