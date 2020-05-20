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
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            defaultDate: '2018-01-12',
            editable: true,
            droppable: true,
            drop: function () {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2018-11-01',
                    className: 'b-l b-2x b-greensea'
                },
                {
                    title: 'Long Event',
                    start: '2018-01-07',
                    end: '2018-01-10',
                    className: 'bg-cyan'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-01-09T16:00:00',
                    className: 'b-l b-2x b-lightred'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2018-12-16T16:00:00',
                    className: 'b-l b-2x b-success'
                },
                {
                    title: 'Conference',
                    start: '2018-01-11',
                    end: '2018-01-13',
                    className: 'b-l b-2x b-primary'
                },
                {
                    title: 'Meeting',
                    start: '2018-01-12T10:30:00',
                    end: '2018-01-12 T12:30:00',
                    className: 'b-l b-2x b-amethyst'
                },
                {
                    title: 'Lunch',
                    start: '2018-01-12T12:00:00',
                    className: 'b-l b-2x b-primary'
                },
                {
                    title: 'Meeting',
                    start: '2018-01-12T14:30:00',
                    className: 'b-l b-2x b-drank'
                },
                {
                    title: 'Happy Hour',
                    start: '2018-01-12T17:30:00',
                    className: 'b-l b-2x b-lightred'
                },
                {
                    title: 'Dinner',
                    start: '2018-12-12T20:00:00',
                    className: 'b-l b-2x b-amethyst'
                },
                {
                    title: 'Birthday Party',
                    start: '2018-01-13T07:00:00',
                    className: 'b-l b-2x b-primary'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2018-01-28',
                    className: 'b-l b-2x b-greensea'
                }
            ]
        });
        // Hide default header
        // $('.fc-header').hide();
        // Previous month action
        $('#cal-prev').on('click', function () {
            $('#calendar').fullCalendar('prev');
        });
        // Next month action
        $('#cal-next').on('click', function () {
            $('#calendar').fullCalendar('next');
        });
        // Change to month view
        $('#change-view-month').on('click', function () {
            $('#calendar').fullCalendar('changeView', 'month');
            // safari fix
            $('#content .main').fadeOut(0, function () {
                setTimeout(function () {
                    $('#content .main').css({ 'display': 'table' });
                }, 0);
            });
        });
        // Change to week view
        $('#change-view-week').on('click', function () {
            $('#calendar').fullCalendar('changeView', 'agendaWeek');
            // safari fix
            $('#content .main').fadeOut(0, function () {
                setTimeout(function () {
                    $('#content .main').css({ 'display': 'table' });
                }, 0);
            });
        });
        // Change to day view
        $('#change-view-day').on('click', function () {
            $('#calendar').fullCalendar('changeView', 'agendaDay');
            // safari fix
            $('#content .main').fadeOut(0, function () {
                setTimeout(function () {
                    $('#content .main').css({ 'display': 'table' });
                }, 0);
            });
        });
        // Change to today view
        $('#change-view-today').on('click', function () {
            $('#calendar').fullCalendar('today');
        });
        /* initialize the external events
         -----------------------------------------------------------------*/
        $('#external-events .event-control').each(function () {
            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()),
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0 //  original position after the drag
            });
        });
        $('#external-events .event-control .event-remove').on('click', function () {
            $(this).parent().remove();
        });
        // Submitting new event form
        $('#add-event').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var newEvent = $('<div class="event-control p-10 mb-10">' + $('#event-title').val() + '<a class="pull-right text-muted event-remove"><i class="fa fa-trash-o"></i></a></div>');
            $('#external-events .event-control:last').after(newEvent);
            $('#external-events .event-control').each(function () {
                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()),
                    stick: true // maintain when user navigates (see docs on the renderEvent method)
                });
                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true,
                    revertDuration: 0 // original position after the drag
                });
            });
            $('#external-events .event-control .event-remove').on('click', function () {
                $(this).parent().remove();
            });
            form[0].reset();
            $('#cal-new-event').modal('hide');
        });
    };
    CalendarComponent = __decorate([
        Component({
            selector: 'app-calendar',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());
export { CalendarComponent };
//# sourceMappingURL=calendar.component.js.map