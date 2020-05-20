import { Component, OnInit } from '@angular/core';

import {Examen, Solicitud,Examen_solicitado, Persona, Usuario, Area, Paciente,Factura} from '../../models'
import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';
import {Utils} from '../../utilidades/utils'

import html2canvas from 'html2canvas';
declare const $: any;
import * as jsPDF from 'jsPDF'; 
import { SolicitudesService } from '../solicitudes.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  data:any;
  costo_total_en_letras:string;
form:Solicitud=new Solicitud();
u:Utils=new Utils()
datetime:Date;
fechita:string;
 solicitud:Solicitud=new Solicitud();
  constructor(private datePipe:DatePipe , private solicitudesService:SolicitudesService) {
 
    this.costo_total_en_letras=''
    this.datetime=new Date();
    this.fechita=this.datePipe.transform(new Date(),"dd-MM-yyyy HH:mm")
  

    this.solicitud=JSON.parse(localStorage.getItem('solicitudfacturar'))
    console.log(this.solicitud)
    if(this.solicitud.factura.cod_factura==0)
    {
    this.solicitudesService.generarFactura(this.solicitud).subscribe(data=>{
      console.log(data)
      this.form=data;
    })
    
  }
  else{
    console.log("klp")
    this.form=JSON.parse(localStorage.getItem('solicitudfacturar'));
  }
    let letras = this.u.numeroALetras(this.solicitud.costoTotal, {
      plural: "BOLIVIANOS",
      singular: "BOLIVIANO",
      centPlural: "CENTAVOS",
      centSingular: "CENTAVO"
  });
   this.costo_total_en_letras=letras

 console.log(letras)

   }
klp(){
  var printContents = document.getElementById('body').innerHTML;
            let w = window.open();
            w.document.write(printContents);
            w.document.close(); // necessary for IE >= 10
            w.focus(); // necessary for IE >= 10
        w.print();
        w.close();
            return true;
  /*
  $('#buttons_panel').hide();
  var data = document.getElementById('body');  
     html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 216;   
        var pageHeight = 160;    
        var pagewidth=237;
        var margins = {
          bottom:2,
          top:4,
          left:2,
          right:2
     };
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  

        let pdf = new jsPDF('p', 'mm',"letter"),
        margin = 10;
        var width = pdf.internal.pageSize.getWidth(); 
      console.log(pdf.internal.pageSize.getHeight())
      
        console.log("asfestewidth"+width+" " )
        console.log(pdf.internal.pageSize.getHeight())
  pdf.text(45, 45, 'letter');
        var position = 0
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, margins, 'center')  
      //  window.open(pdf.output('datauristring'))
     // pdf.autoPrint({variant: 'non-conform'});
        pdf.save('MYPdf.pdf'); // Generated PDF  
     
        $("#buttons_panel").show(); 
      });  
      */
}
  ngOnInit() {
    


  }
  imprim1(imp1){
    var printContents = document.getElementById('body').innerHTML;
            let w = window.open();
            w.document.write(printContents);
            w.document.close(); // necessary for IE >= 10
            w.focus(); // necessary for IE >= 10
        w.print();
        w.close();
            return true;
          }
            onPrint(){
              
    $(document).ready(function() {
              $('#buttons_panel').hide();
              window.print();
              $("#buttons_panel").show();
    })
          }
        

}
