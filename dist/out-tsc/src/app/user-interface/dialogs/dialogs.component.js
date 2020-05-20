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
var DialogsComponent = /** @class */ (function () {
    function DialogsComponent() {
    }
    DialogsComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.js-sweetalert button').on('click', function () {
                var type = $(this).data('type');
                if (type === 'basic') {
                    showBasicMessage();
                }
                else if (type === 'with-title') {
                    showWithTitleMessage();
                }
                else if (type === 'success') {
                    showSuccessMessage();
                }
                else if (type === 'confirm') {
                    showConfirmMessage();
                }
                else if (type === 'cancel') {
                    showCancelMessage();
                }
                else if (type === 'with-custom-icon') {
                    showWithCustomIconMessage();
                }
                else if (type === 'html-message') {
                    showHtmlMessage();
                }
                else if (type === 'autoclose-timer') {
                    showAutoCloseTimerMessage();
                }
                else if (type === 'prompt') {
                    showPromptMessage();
                }
                else if (type === 'ajax-loader') {
                    showAjaxLoaderMessage();
                }
            });
        });
        // These codes takes from http://t4t5.github.io/sweetalert/
        function showBasicMessage() {
            swal('Here\'s a message!');
        }
        function showWithTitleMessage() {
            swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
        }
        function showSuccessMessage() {
            swal('Good job!', 'You clicked the button!', 'success');
        }
        function showConfirmMessage() {
            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                closeOnConfirm: false
            }, function () {
                swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
            });
        }
        function showCancelMessage() {
            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel plx!',
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                }
                else {
                    swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
        }
        function showWithCustomIconMessage() {
            swal({
                title: 'Sweet!',
                text: 'Here\'s a custom image.',
                imageUrl: 'assets/images/sm/avatar2.jpg'
            });
        }
        function showHtmlMessage() {
            swal({
                title: 'HTML <small>Title</small>!',
                text: 'A custom <span style=\'color: #CC0000\'>html<span> message.',
                html: true
            });
        }
        function showAutoCloseTimerMessage() {
            swal({
                title: 'Auto close alert!',
                text: 'I will close in 2 seconds.',
                timer: 2000,
                showConfirmButton: false
            });
        }
        function showPromptMessage() {
            swal({
                title: 'An input!',
                text: 'Write something interesting:',
                type: 'input',
                showCancelButton: true,
                closeOnConfirm: false,
                animation: 'slide-from-top',
                inputPlaceholder: 'Write something'
            }, function (inputValue) {
                if (inputValue === false) {
                    return false;
                }
                if (inputValue === '') {
                    swal.showInputError('You need to write something!');
                    return false;
                }
                swal('Nice!', 'You wrote: ' + inputValue, 'success');
            });
        }
        function showAjaxLoaderMessage() {
            swal({
                title: 'Ajax request example',
                text: 'Submit to run ajax request',
                type: 'info',
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
            }, function () {
                setTimeout(function () {
                    swal('Ajax request finished!');
                }, 2000);
            });
        }
    };
    DialogsComponent = __decorate([
        Component({
            selector: 'app-dialogs',
            templateUrl: './dialogs.component.html',
            styleUrls: ['./dialogs.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], DialogsComponent);
    return DialogsComponent;
}());
export { DialogsComponent };
//# sourceMappingURL=dialogs.component.js.map