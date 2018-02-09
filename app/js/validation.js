'use strict';

window.validate = (function() {
  
  var paymentForm = document.querySelector('form');
  var submitBtn = paymentForm.querySelector('button[type=submit]');
  var numInputs = paymentForm.querySelectorAll('input.payment-form__card-number');
  var textInput = paymentForm.querySelector('input.payment-form__card-user');
  var passwordInput = paymentForm.querySelectorAll('input.payment-form__user-cvv2');
  var errorStyle = '1px solid red';
  var normalStyle = '1px solid #e4e9ee';

  submitBtn.addEventListener('click', function(evt) {

    if (!textInput.validity.valid) {
      textInput.style.border = errorStyle;
    } else {
      textInput.style.border = normalStyle;
    }

    for (var i = 0;i < passwordInput.length;i++) {

      if (!passwordInput[i].validity.valid) {
          passwordInput[i].style.border = errorStyle;
        } else {
          passwordInput[i].style.border = normalStyle;
        }
    }

    for (var j = 0;j < numInputs.length;j++) {

      if (!numInputs[j].validity.valid)
        {
          numInputs[j].style.border = errorStyle;
        } else {
          numInputs[j].style.border = normalStyle;
        }
    }
  });
})();
