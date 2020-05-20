import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jsPDF';  
import html2canvas from 'html2canvas';
import { Solicitud } from '../../models';
@Component({
  selector: 'app-reporte-hemograma',
  templateUrl: './reporte-hemograma.component.html',
  styleUrls: ['./reporte-hemograma.component.css']
})
export class ReporteHemogramaComponent implements OnInit {
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
          bottom:2,
          top:2,
          left:2,
          right:2
     };
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('l', 'mm', [237, 160]),margin = 10;
        var width = pdf.internal.pageSize.getWidth(); 
      console.log(pdf.internal.pageSize.getHeight())
      
        console.log("asfestewidth"+width+" " )
        console.log(pdf.internal.pageSize.getHeight())
  pdf.text(45, 45, 'letter');
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight,pageHeight, margins, 'center')  
        pdf.save('MYPdf.pdf'); // Generated PDF   
      });  
    
    } 
  }
  