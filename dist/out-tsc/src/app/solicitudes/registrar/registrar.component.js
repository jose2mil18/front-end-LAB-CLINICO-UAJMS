var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { Paciente } from '../../models';
import { PacientesService } from '../../pacientes/pacientes.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SolicitudesService } from '../solicitudes.service';
var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(datePipe, pacientesService, solicitudesService, router) {
        var _this = this;
        this.datePipe = datePipe;
        this.pacientesService = pacientesService;
        this.solicitudesService = solicitudesService;
        this.router = router;
        this.show = false;
        this.seleccionado = 3;
        this.areas = [];
        this.postas = [];
        this.examenes = [];
        this.cadena = '';
        this.i = 0;
        this.IsmodelShow = false;
        $('.selectpicker').selectpicker({
            style: 'btn-info',
            size: 4
        });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form = {
            resultados: '',
            cod_solicitud: 0,
            paciente: new Paciente(),
            institucion: '',
            doctor: '',
            fecha: '',
            fecha_entrega: '',
            examenes: [],
            cedula_personal: this.currentUser.personal.cedula
        };
        console.log(this.seleccionado);
        solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
        });
        solicitudesService.getPostas().subscribe(function (data) {
            _this.postas = data;
        });
    }
    RegistrarComponent.prototype.listarExamenesdeArea = function (newValue) {
        var _this = this;
        console.log(newValue);
        this.solicitudesService.obtenerexamenesporarea(newValue).subscribe(function (data1) {
            _this.examenes = data1;
            console.log(data1);
        });
        // ... do other stuff here ...
    };
    RegistrarComponent.prototype.examenseleccionar = function (newValue) {
        var _this = this;
        console.log('eseeee' + newValue);
        this.solicitudesService.obtenerExamen(newValue).subscribe(function (examenseleccionado) {
            _this.examen = examenseleccionado;
            console.log(_this.examen);
            _this.form.examenes[_this.i] = _this.examen;
            ;
            _this.i++;
        });
    };
    RegistrarComponent.prototype.ngAfterViewInit = function () {
        $('.selectpicker').selectpicker();
    };
    RegistrarComponent.prototype.ngAfterViewChecked = function () {
        $('.selectpicker').selectpicker('refresh');
    };
    RegistrarComponent.prototype.ngOnInit = function () {
        this.datePipe.transform(this.form.fecha, "yyyy-MM-dd");
        this.datePipe.transform(this.form.fecha_entrega, "yyyy-MM-dd");
        $(function () {
            $('.selectpicker').selectpicker();
            $('.datetimepicker').bootstrapMaterialDatePicker({
                format: 'dddd DD MMMM YYYY - HH:mm',
                clearButton: true,
                weekStart: 1
            });
            $('.timepicker').bootstrapMaterialDatePicker({
                format: 'HH:mm',
                clearButton: true,
                date: false
            });
            $('.fechapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
            }).on('change', function (e, date) {
            });
            $('.fechaentregapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
            }).on('change', function (e, date) {
            });
        });
        $('.selectpicker').selectpicker();
        $(function () {
            $('.colorpicker').colorpicker();
            // Masked Input
            var $demoMaskedInput = $('.demo-masked-input');
            // Date
            $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });
            // Time
            $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
            $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });
            // Date Time
            $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: 'datetime', hourFormat: '24' });
            // Mobile Phone Number
            $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
            // Phone Number
            $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
            // Dollar Money
            $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
            // IP Address
            $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });
            // Credit Card
            $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });
            // Email
            $demoMaskedInput.find('.email').inputmask({ alias: 'email' });
            // Serial Key
            $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
            // Multi-select
            $('#optgroup').multiSelect({ selectableOptgroup: true });
            // noUISlider
            var sliderBasic = document.getElementById('nouislider_basic_example');
            noUiSlider.create(sliderBasic, {
                start: [30],
                connect: 'lower',
                step: 1,
                range: {
                    'min': [0],
                    'max': [100]
                }
            });
            getNoUISliderValue(sliderBasic, true);
            // Range Example
            var rangeSlider = document.getElementById('nouislider_range_example');
            noUiSlider.create(rangeSlider, {
                start: [32500, 62500],
                connect: true,
                range: {
                    'min': 25000,
                    'max': 100000
                }
            });
            getNoUISliderValue(rangeSlider, false);
        });
        // Get noUISlider Value and write on
        function getNoUISliderValue(slider, percentage) {
            slider.noUiSlider.on('update', function () {
                var val = slider.noUiSlider.get();
                if (percentage) {
                    // val = parseInt(val);
                    val += '%';
                }
                $(slider).parent().find('span.js-nouislider-value').text(val);
            });
        }
    };
    RegistrarComponent.prototype.buscar_paciente = function () {
        var _this = this;
        this.show = true;
        this.pacientesService.getByCedula(this.form.paciente.cedula).subscribe(function (data) {
            console.log(data);
            _this.pacientebuscado = data;
        }, function (error) {
        });
    };
    RegistrarComponent.prototype.close = function () {
        this.IsmodelShow = true; // set false while you need open your model popup
        // do your more code
    };
    RegistrarComponent.prototype.guardar_solicitud = function () {
        var _this = this;
        console.log($('#fecha').val() + ' ' + $('#fecha_entrega').val());
        this.form.fecha = $('#fecha').val();
        this.form.fecha_entrega = $('#fecha_entrega').val();
        this.solicitudesService.guardar(this.form)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/solicitudes/listar']);
        });
    };
    RegistrarComponent.prototype.quitar_examen = function (cod_examen, i) {
        this.bandera = false;
        console.log('esefasdf' + this.form.examenes.length);
        if (this.form.examenes.length > 1) {
            this.form.examenes.splice(i, 1);
            this.i--;
        }
        else {
            this.bandera = true;
        }
    };
    RegistrarComponent = __decorate([
        Component({
            selector: 'app-registrar',
            templateUrl: './registrar.component.html',
            styleUrls: ['./registrar.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [DatePipe, PacientesService, SolicitudesService, Router])
    ], RegistrarComponent);
    return RegistrarComponent;
}());
export { RegistrarComponent };
//# sourceMappingURL=registrar.component.js.map