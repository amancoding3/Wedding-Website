function checkedOnClick(el){

    // Select all checkboxes by class
    var checkboxesList = document.getElementsByClassName("checkoption");
    for (var i = 0; i < checkboxesList.length; i++) {
         checkboxesList.item(i).checked = false; // Uncheck all checkboxes
    }

    el.checked = true; // Checked clicked checkbox
}
const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

   const dateInput = document.getElementById('date');

// ✅ Using UTC (universal coordinated time)
dateInput.value = new Date().toISOString().split('T')[0];

console.log(new Date().toISOString().split('T')[0]);
