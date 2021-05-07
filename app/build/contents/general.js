// Bootstrap style validation
(function() {
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
})();

$("[data-toggle=tooltip").tooltip();
// $(function() {
//     $('#login-btn').on('click', function() {
//         if ($('#login-email-input').val() == "") { $('#login-email .invalid-feedback').text('Please provide email') }
//     })
//     $('#signin-btn').on('click', function() {
//         if ($('#signin-email-input').val() == "") { $('#signin-email .invalid-feedback').text('Please provide email') }
//         if ($('#signin-password-input').val() == "") { $('#signin-password .invalid-feedback').text('Please provide password') }
//         if ($('#signin-confirm-password-input').val() == $('#signin-password-input').val()) {
//             if ($('#signin-confirm-password-input').val() == "") {
//                 $('#signin-confirm-password .invalid-feedback').text()
//             }
//             else { document.getElementById("signin-confirm-password-input").setCustomValidity('') }
//         }
//         else {
//             document.getElementById("signin-confirm-password-input").setCustomValidity('Password not same')
//             $('#signin-confirm-password .invalid-feedback').text('Must be the same with the above password')
//         }
//     })
// })
