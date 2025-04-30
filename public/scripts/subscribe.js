$(document).ready(() => {
    $("#outputCard").hide();
  
    'use strict';
  
    const forms = $(".needs-validation");
  
    forms.each(function () {
      $(this).on("submit", function (event) {
        if (!this.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault(); 
  
          const userData = {
            first: $("#validationCustom01").val(),
            last: $("#validationCustom02").val(),
            email: $("#validationCustomEmail").val()
          };
  
          $("#outputBox").html(`
            <p><strong>First Name:</strong> ${userData.first}</p>
            <p><strong>Last Name:</strong> ${userData.last}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
          `);
  
          $("#outputCard").show();
  
          console.log("Submitted User Info:", userData);
          setTimeout(() => {
            window.location.href = "/subscribe/success";
          }, 2000);
        }
  
        this.classList.add("was-validated");
      });
    });
  });