import { Component, OnInit } from '@angular/core';

import {Examen, Solicitud,Examen_solicitado, Persona, Usuario, Area, Paciente,Factura} from '../../models'
import { DatePipe,  TitleCasePipe, UpperCasePipe } from '@angular/common';
import {Utils} from '../../utilidades/utils'
import {NavigationStart, Router} from '@angular/router';
declare const $: any;
import { SolicitudesService } from '../solicitudes.service';

import * as global from '../../shared/variables_global'; //<== HERE
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
 codigoQr:string="";
  constructor(private datePipe:DatePipe , private solicitudesService:SolicitudesService,private router: Router) {
 
    this.costo_total_en_letras=''
    this.datetime=new Date();
    this.fechita=this.datePipe.transform(new Date(),"dd-MM-yyyy HH:mm")
  

    this.solicitud=JSON.parse(localStorage.getItem('solicitudfacturar'))
    console.log(this.solicitud)
    let letras;
    if(this.solicitud.factura.cod_factura==0)
    {
    this.solicitudesService.generarFactura(this.solicitud).subscribe(data=>{
      console.log(data)
      this.form=data;
      this.codigoQr=this.form.factura.dosificacion.nit+this.form.factura.cod_factura+this.form.factura.dosificacion.autorizacion+this.form.factura.dosificacion.fecha_limite_emision+this.form.costoTotal+this.form.factura.cod_control+this.form.paciente.cedula
      let letras = this.u.numeroALetras(this.solicitud.costoTotal, {
       plural: "BOLIVIANOS",
       singular: "BOLIVIANO",
       centPlural: "CENTAVOS",
       centSingular: "CENTAVO"
   });
     
   this.costo_total_en_letras=letras
    
    })
    
  }
  else{

    this.form=JSON.parse(localStorage.getItem('solicitudfacturar'));
    this.codigoQr=this.form.factura.dosificacion.nit+this.form.factura.cod_factura+this.form.factura.dosificacion.autorizacion+this.form.factura.dosificacion.fecha_limite_emision+this.form.costoTotal+this.form.factura.cod_control+this.form.paciente.cedula
    letras = this.u.numeroALetras(this.solicitud.costoTotal, {
     plural: "BOLIVIANOS",
     singular: "BOLIVIANO",
     centPlural: "CENTAVOS",
     centSingular: "CENTAVO"
 });
 
 this.costo_total_en_letras=letras
  }

 

   }
klp(){
 window.print()
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
      fdfd
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
        
salir(){

  window.location.href='http://localhost:4200/solicitudes/listar'
}
}
