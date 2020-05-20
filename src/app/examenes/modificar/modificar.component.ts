import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Router} from '@angular/router'
import {ExamenesService} from '../examenes.service'
import {FormControl, FormBuilder, FormGroup, Validators, NgForm, FormArray } from '@angular/forms';
import {Examen, Valor_referencia, Area, Institucion, Resultados_por_defecto, Precio_examen} from '../../models'

import { LowerCasePipe, TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
import {CapitalizePipe} from '../../pipes/capitalize.pipe'
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { debounceTime } from 'rxjs/operators';
declare const $: any;


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  
  control=new FormControl('')
index:number=0
 
  mostrar:string="none";
  indice:number=0;
examen:Examen;
formGroup:FormGroup;
otroFormGroup:FormGroup;
instituciones:Institucion[];
valores_referenciaArr: FormArray
areas:Area[];
personas:any[]
productForm:FormGroup
examensito:Examen=new Examen()
array:number[]
subexamenes:Examen[]=[]
  constructor(private titleCasePipe:TitleCasePipe ,private datePipe: DatePipe,private fb: FormBuilder, private examenesService : ExamenesService, private router:Router) { 
   
    this.subexamenes[0]=new Examen()
    this.control.valueChanges.pipe(debounceTime(450)).subscribe(value=>{
      console.log("hola"+value)
      this.examenesService.subexamensPorCaracter(value,3).subscribe(examenes=>{
     
this.subexamenes=examenes
console.log(this.subexamenes)
      })
      
  })
    
 
		// Add an initial pet form-entry.
    this.examen=new Examen()
    this.examensito.valores_referencia=[]
    this.examensito.valores_referencia[0]=new Valor_referencia()
    this.examen= JSON.parse(localStorage.getItem('examen'));
 this.examenesService.obtenerExamen(this.examen.cod_examen).subscribe(examen=>{
   this.examen=examen
 })
    this.examenesService.getInstitucionesConPrecio().subscribe(i=> {
      this.instituciones=i
      console.log(this.instituciones)
          })
    this.personas=[]

    this.personas=[{nombre:'Adultos', valor:'A.'}, {nombre:'Niños', valor:'N.'}, {nombre:'Masculino', valor:'M.'}, {nombre:'Femenino', valor:'F.'}]
   
    this.examen.resultados_por_defecto=[];
    this.examen.precios=[];
    this.examen.valores_referencia=[];
    this.examen.subexamenes=[]

    examenesService.getAllAreas().subscribe(data => {
      this.areas=data;
    });
  }

  ngOnInit() {

    this.formGroup = this.fb.group({
      nombre: this.examen.nombre,
      area:this.fb.group({
        nombre: '',
        cod_area:this.examen.cod_area
       }),
       unidades:this.examen.unidades,
   
    
       //valores_referencia_subexamen: this.fb.array([]),
 
        precios:this.fb.array([]),
        resultados_por_defecto:this.fb.array([]),
        subexamenes:this.fb.array([]),
    });

   
   

    this.formGroup.valueChanges.pipe(debounceTime(500))
.subscribe(value => {
  console.log(value);
  console.log(this.otroFormGroup.value)
 
});

this.otroFormGroup=this.fb.group(this.formGroup)
this.examenesService.obtenerExamen(1).subscribe(examen=>{
  
this.otroFormGroup=this.fb.group(examen)
console.log(this.otroFormGroup.value)
})


    $(function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    });

  }
  i_valor_r:number=0;
  agregarValoresReferencia() {
    this.examen.valores_referencia.push(new Valor_referencia())
    this.examen.valores_referencia[this.examen.valores_referencia.length-1].cod_examen=this.examen.cod_examen

   
  }
  removerValoresReferencia(indice) {

  // this.examen.valores_referencia.splice(indice,1)
   this.examen.valores_referencia[indice].estado=false;
   //this.examen.valores_referencia.push(this.examen.valores_referencia[indice])
  // this.examen.valores_referencia.splice(indice,1);


  
   
  }
  agregarResultados() {
    this.examen.resultados_por_defecto.push(new Resultados_por_defecto())
  
  }
  removerResultados(indice){
    this.examen.resultados_por_defecto.splice(indice,1);
  }
  
  agregarPrecio() {
    this.examen.precios.push(new Precio_examen())
    this.examen.precios[this.examen.precios.length-1].cod_examen=this.examen.cod_examen
  }
  removerPrecio(indice){
    this.examen.precios[indice].estado=false;
    //this.examen.precios.unshift(this.examen.precios[indice])
    //this.examen.precios.splice(indice,1)
    
  }
  agregarsubexamen() {
    
    this.examen.subexamenes.push(new Examen())
    this.examen.subexamenes[this.examen.subexamenes.length-1].cod_area=this.examen.cod_area
    
  }
  removersubexamen(indice){
    //this.examen.subexamenes.splice(indice,1);
    this.examen.subexamenes[indice].estado=false
  }

  
agregarValoresReferencia_de_subexamen(i) {
  this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
  this.examen.subexamenes[i].valores_referencia[this.examen.subexamenes[i].valores_referencia.length-1].cod_examen=this.examen.subexamenes[i].cod_examen
}
removerValoresReferencia_de_subexamen(indice_subexamen, indice_valor_referencia_de_subexamen) {
 // this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
 //this.examen.subexamenes[indice_subexamen].valores_referencia.splice(indice_valor_referencia_de_subexamen,1);
 this.examen.subexamenes[indice_subexamen].valores_referencia[indice_valor_referencia_de_subexamen].estado=false
}
agregarsubexamenalsubexamen(indice_subexamen) {
    
  this.examen.subexamenes[indice_subexamen].subexamenes.push(new Examen())
  
}
removersubexamendelsubexamen(indice_subexamen,posicion){
 
  //this.examen.subexamenes[indice_subexamen].subexamenes.splice(posicion,1)
  this.examen.subexamenes[indice_subexamen].subexamenes[posicion].estado=false
}
agregarValoresReferencia_de_subexamen_de_subexamen(i,ii) {
  this.examen.subexamenes[i].subexamenes[ii].valores_referencia.push(new Valor_referencia())
}
removerValoresReferencia_de_subexamen_de_subexamen(i,ii, indice_valor_referencia_de_subexamen_nivel2) {
  // this.examen.subexamenes[i].valores_referencia.push(new Valor_referencia())
  //this.examen.subexamenes[i].subexamenes[ii].valores_referencia.splice(indice_valor_referencia_de_subexamen_nivel2,1);
  this.examen.subexamenes[i].subexamenes[ii].valores_referencia[indice_valor_referencia_de_subexamen_nivel2].estado=false
}

  onSubmit(form : NgForm){
    console.log(this.examen);
    if(form.valid){
      this.examenesService.modificar(this.examen).subscribe(data =>{
        console.log(data);
        alert("examen "+ data.nombre+" guardado")
        
        this.router.navigate(['/examenes/listar']);
    })
    
  }
}

// I remove the pet at the given index.  indice_valor_referencia_de_subexamen

cambio(valor,i){
console.log(valor)
if(valor.target.value=='' ){
  this.examen.subexamenes[i]=new Examen()
}
  this.examenesService.subexamensPorCaracter(valor.target.value, this.examen.cod_area).subscribe(examenes=>{
     
    this.subexamenes=examenes
    console.log(this.subexamenes)
    if(this.subexamenes.length==1 && this.subexamenes[0].nombre==valor.target.value)
    {
this.examen.subexamenes[i]=this.subexamenes[0]
    }
          })
        
}
cambio2(valor,i,ii){
  console.log(valor)
  if(valor.target.value=='' ){
    this.examen.subexamenes[i].subexamenes[ii]=new Examen()
  }
    this.examenesService.subexamensPorCaracter(valor.target.value, this.examen.cod_area).subscribe(examenes=>{
       
      this.subexamenes=examenes
      console.log(this.subexamenes)
      if(this.subexamenes.length==1 && this.subexamenes[0].nombre==valor.target.value)
      {
  this.examen.subexamenes[i].subexamenes[ii]=this.subexamenes[0]
      }
            })
          
  }
  asignarcod_area(i){
    //alert(i.target.value)
this.examen.area.cod_area=i.target.value
    
    }

}