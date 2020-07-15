import { Component, OnInit } from '@angular/core';
import { Usuario, Persona, Personal } from '../../models';
import {PacientesService} from '../../pacientes/pacientes.service'
import {SolicitudesService} from '../../solicitudes/solicitudes.service'
import {UsuariosService} from '../../usuarios/usuarios.service'

declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    
    alphas:string[]; 
currentUser:Usuario
num_pacientes:number;
num_solicitudes:number;
num_solicitudes_pendientes:number;
num_doctores:number;
cambiarRol() {
    alert("klp")
}
  constructor( private pacienteService : PacientesService, private solicitudesService: SolicitudesService, private usuariosService:UsuariosService) { 
    

    pacienteService.contar().subscribe(data => {
          this.num_pacientes=data;
      });
      solicitudesService.numSolicitudes().subscribe(data => {
        this.num_solicitudes=data;
    });
    solicitudesService.numSolicitudesPendientes().subscribe(data => {
        this.num_solicitudes_pendientes=data;
    });
          usuariosService.numDoctores().subscribe(data => {
            this.num_doctores=data;
        });   
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  
  }

  ngOnInit() {
    $("body").removeClass("authentication sidebar-collapse");
      $(function() {
        
          Jknob();
          initCounters();
          initSparkline();
          menuToggle();
      });

    
      function Jknob() {
          $('.knob').knob({
              draw: function() {
                  // 'tron" case
                  if (this.$.data('skin') === 'tron') {

                      const a = this.angle(this.cv) // Angle
                      , r = true;

                      let sa = this.startAngle // Previous start angle
                          ,
                          sat = this.startAngle // Start angle
                          ,
                          ea // Previous end angle
                          , eat = sat + a // End angle
                          ;

                      this.g.lineWidth = this.lineWidth;

                      this.o.cursor &&
                      (sat = eat - 0.3) &&
                      (eat = eat + 0.3);

                      if (this.o.displayPrevious) {
                          ea = this.startAngle + this.angle(this.value);
                          this.o.cursor &&
                          (sa = ea - 0.3) &&
                          (ea = ea + 0.3);
                          this.g.beginPath();
                          this.g.strokeStyle = this.previousColor;
                          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                          this.g.stroke();
                      }

                      this.g.beginPath();
                      this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                      this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                      this.g.stroke();

                      this.g.lineWidth = 2;
                      this.g.beginPath();
                      this.g.strokeStyle = this.o.fgColor;
                      this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                      this.g.stroke();

                      return false;
                  }
              }
          });
      }

      // Counters JS
      function initCounters() {
          $('.count-to').countTo();
      }

      // Sparkline
      function initSparkline() {
          $('.sparkline').each(function() {
              const $this = $(this);
              $this.sparkline('html', $this.data());
          });
      }

      $(window).on('scroll', function() {
          $('.card .sparkline').each(function() {
              const imagePos = $(this).offset().top;

              const topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow + 400) {
                  $(this).addClass('pullUp');
              }
          });
      });

  

      // Customized line Index page
      $('#linecustom1').sparkline('html',
          {
              height: '35px',
              width: '100%',
              lineColor: '#e5d1e4',
              fillColor: '#f3e8f2',
              minSpotColor: true,
              maxSpotColor: true,
              spotColor: '#e2a8df',
              spotRadius: 1
          });
      $('#linecustom2').sparkline('html',
          {
              height: '35px',
              width: '100%',
              lineColor: '#c9e3f4',
              fillColor: '#dfeefa',
              minSpotColor: true,
              maxSpotColor: true,
              spotColor: '#8dbfe0',
              spotRadius: 1
          });
      $('#linecustom3').sparkline('html',
          {
              height: '35px',
              width: '100%',
              lineColor: '#efded3',
              fillColor: '#f8f0ea',
              minSpotColor: true,
              maxSpotColor: true,
              spotColor: '#e0b89d',
              spotRadius: 1
          });

      // Keep active
      $.each($('.menu .list li.active'), function(i, val) {
          const $activeAnchors = $(val).find('a:eq(0)');

          $activeAnchors.addClass('toggled');
          $activeAnchors.next().show();
      });

      $('.ml-menu li a').on('click', function () {
          $(this).addClass('toggled');
      });

      $('.sidebar .menu .list').slimscroll({
        height: 'calc(100vh - 65px)',
        color: 'rgba(0,0,0,0.2)',
        position: 'left',
        size: '2px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
    });
    
    $('.ls-toggle-btn').on('click', function() {
        $('body').toggleClass('ls-toggle-menu');
    });

    $('.boxs-close').on('click', function(){
        const element = $(this);
        const cards = element.parents('.card');
        cards.addClass('closed').fadeOut();
    });

    function menuToggle() {
      // Collapse or Expand Menu
      $('.menu-toggle').on('click', function(e) {
        const $this = $(this);
        const $content = $this.next();

        if ($($this.parents('ul')[0]).hasClass('list')) {
            const $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
            $.each($('.menu-toggle.toggled').not($not).next(), function(i, val) {
                if ($(val).is(':visible')) {
                        $(val).prev().toggleClass('toggled');
                        $(val).slideUp();
                    }
                });
        }

            $this.toggleClass('toggled');
            $content.slideToggle(320);
      });
    }
  }

}
