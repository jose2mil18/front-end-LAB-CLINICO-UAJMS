import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(function () {
          $('#form_validation').validate({
              rules: {
                  'checkbox': {
                      required: true
                  },
                  'gender': {
                      required: true
                  }
              },
              highlight: function (input) {
                  $(input).parents('.form-line').addClass('error');
              },
              unhighlight: function (input) {
                  $(input).parents('.form-line').removeClass('error');
              },
              errorPlacement: function (error, element) {
                  $(element).parents('.form-group').append(error);
                  
                  console.log( 'kl'+$(element).parents('.form-group').val())
              }
          });

          // Advanced Form Validation
          $('#form_advanced_validation').validate({
              rules: {
                  'date': {
                      customdate: true
                  },
                  'creditcard': {
                      creditcard: true
                  }
              },
              highlight: function (input) {
                  $(input).parents('.form-line').addClass('error');
              },
              unhighlight: function (input) {
                  $(input).parents('.form-line').removeClass('error');
              },
              errorPlacement: function (error, element) {
                  $(element).parents('.form-group').append(error);
                  console.log( $(element).parents('.form-group').val())
              }
          });

          // Custom Validations
          // Date
          $.validator.addMethod('customdate', function (value, element) {
                  return value.match(/^\d\d\d\d?-\d\d?-\d\d$/);
              },
              'Please enter a date in the format YYYY-MM-DD.'
          );

          // Credit card
          $.validator.addMethod('creditcard', function (value, element) {
                  return value.match(/^\d\d\d\d?-\d\d\d\d?-\d\d\d\d?-\d\d\d\d$/);
              },
              'Please enter a credit card in the format XXXX-XXXX-XXXX-XXXX.'
          );
      });
  }

}
