import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jsPDF';  
import html2canvas from 'html2canvas';
import { Solicitud } from '../../models';
@Component({
  selector: 'app-reporte-analisis',
  templateUrl: './reporte-analisis.component.html',
  styleUrls: ['./reporte-analisis.component.css']
})
export class ReporteAnalisisComponent implements OnInit {
  solicitud:Solicitud;
    constructor() { 
  
      this.solicitud=JSON.parse(localStorage.getItem('solicitudaimprimir'));
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
  