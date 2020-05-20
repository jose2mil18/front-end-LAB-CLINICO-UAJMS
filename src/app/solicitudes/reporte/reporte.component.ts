import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jsPDF';  
import html2canvas from 'html2canvas';
import { Solicitud } from '../../models';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
solicitud:Solicitud;
  constructor() { 

    this.solicitud=JSON.parse(localStorage.getItem('solicitudaimprimir'));
  }

  ngOnInit() {
  }

  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
   html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'letter'),margin = 0.5;
pdf.text(45, 45, '');
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  
  } 
}
