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
import { SolicitudesService } from '../solicitudes.service';
import { DatePipe } from '@angular/common';
var ListarComponent = /** @class */ (function () {
    function ListarComponent(datePipe, solicitudesService) {
        var _this = this;
        this.datePipe = datePipe;
        this.solicitudesService = solicitudesService;
        this.fechas = '';
        this.solicitudes = [];
        this.fechas = $('#fech').val();
        this.form = {
            fech: ''
        };
        this.fecha = '';
        solicitudesService.getAll().subscribe(function (data) {
            console.log(data);
            _this.solicitudes = data;
        });
    }
    ListarComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.js-basic-exampl').DataTable({
                "paging": true,
                "searching": false,
                "oLanguage": {
                    "sProcessing": "Procesando...",
                    "sLengthMenu": "Mostrar _MENU_ registros",
                    "sZeroRecords": "No se encontraron resultados",
                    "sEmptyTable": "Ning�n dato disponible en esta tabla",
                    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix": "",
                    "sSearch": "Buscar:",
                    "sUrl": "",
                    "sInfoThousands": ",",
                    "sLoadingRecords": "Cargando..."
                },
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Ultimo",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                }
            });
            // Exportable table
        });
        $(function () {
            $('.selectpicker').selectpicker();
            // Datetimepicker plugin
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
                lang: 'es'
                /*
              }).on('change', function (e, date) {
              console.log($('#fech').val())
              console.log(e.val()+' '+date)
              date.solicitudesService.getAll().subscribe(data => {
                console.log(data)
                this.solicitudes=data;
              });*/
            });
        });
    };
    ListarComponent.prototype.mostrarpdf = function (solicitud) {
        localStorage.removeItem('solicitudaimprimir');
        localStorage.setItem('solicitudaimprimir', JSON.stringify(solicitud));
    };
    ListarComponent.prototype.actualizar = function (solicitud) {
        localStorage.removeItem('solicitudamodificar');
        localStorage.setItem('solicitudamodificar', JSON.stringify(solicitud));
    };
    ListarComponent.prototype.buscaPaciente = function (event) {
        var _this = this;
        console.log($('#fech').val() + " " + event.target.value);
        if ($('#fech').val() === '') {
            this.fecha = null;
            console.log(this.fecha);
        }
        else {
            this.fecha = $('#fech').val();
        }
        this.solicitudesService.filtrarPaciente(event.target.value, this.fecha).subscribe(function (data) {
            console.log(data);
            _this.solicitudes = data;
        });
    };
    ListarComponent = __decorate([
        Component({
            selector: 'app-listar',
            templateUrl: './listar.component.html',
            styleUrls: ['./listar.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [DatePipe, SolicitudesService])
    ], ListarComponent);
    return ListarComponent;
}());
export { ListarComponent };
//# sourceMappingURL=listar.component.js.map