import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jsPDF';  
import html2canvas from 'html2canvas';
import { Solicitud , Usuario, Institucion} from '../../models';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-reporte-analisis',
  templateUrl: './reporte-analisis.component.html',
  styleUrls: ['./reporte-analisis.component.css']
})
export class ReporteAnalisisComponent implements OnInit {
  solicitud:Solicitud;
  currentUser:Usuario;
  notaFinal:string="";
fechita:string;
    constructor(private datePipe:DatePipe) { 
  
      this.fechita=this.datePipe.transform(new Date(),"dd-MM-yyyy HH:mm")
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.solicitud=JSON.parse(localStorage.getItem('solicitudaimprimir'));

      for(let i=0; i<this.solicitud.examenes_solicitados.length;i++)
      {
        this.notaFinal=this.notaFinal+this.solicitud.examenes_solicitados[i].nota;
      }
      console.log(this.solicitud)
    }
  
    ngOnInit() {
    }
  
    public captureScreen()  
    {  
      var data = document.getElementById('contentToConvert');  
     html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 237;   
        var pageHeight = 160;    
        var pagewidth=237;
        var margins = {
          bottom:3,
          top:3,
          left:3,
          right:3
     };
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('l', 'mm', [237, 320]),margin = 10;
        var width = pdf.internal.pageSize.getWidth(); 
   
var height = pdf.internal.pageSize.getHeight();
      console.log(pdf.internal.pageSize.getHeight())
      
        console.log(pdf.internal.pageSize.getHeight())

        var position = 0;  
        pdf.addImage(contentDataURL, 'JPEG', 0, position,width, height,'center')  
        pdf.save('MYPdf.pdf'); // Generated PDF   
      });  
    
    } 
  }
  