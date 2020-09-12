import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jsPDF';  
import html2canvas from 'html2canvas';
import { Solicitud, Usuario } from '../../models';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-reporte-orina',
  templateUrl: './reporte-orina.component.html',
  styleUrls: ['./reporte-orina.component.css']
})
export class ReporteOrinaComponent implements OnInit {
  solicitud:Solicitud;
  currentUser:Usuario;
  
  fechita:string;
      constructor(private datePipe:DatePipe) { 
    
        this.fechita=this.datePipe.transform(new Date(),"dd-MM-yyyy HH:mm")
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
        let pdf = new jsPDF('l', 'mm', [237, 160]),margin = 10;
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
  