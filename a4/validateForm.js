var frmvalidator = new Validator("myform"); 
  frmvalidator.addValidation("FirstName","req","Please enter your First Name"); 
  frmvalidator.addValidation("FirstName","maxlen=20","Max length for FirstName is 20"); 
  frmvalidator.addValidation("LastName","req");                         
  frmvalidator.addValidation("LastName","maxlen=20"); 

  frmvalidator.addValidation("Email","maxlen=50"); 
  frmvalidator.addValidation("Email","req"); 
  frmvalidator.addValidation("Email","email"); 

  frmvalidator.addValidation("Phone","maxlen=50"); 
  frmvalidator.addValidation("Phone","numeric"); 

  frmvalidator.addValidation("Address","maxlen=50"); 
  frmvalidator.addValidation("Country","dontselect=000"); 

function validate (){
//1) Create variable

var validFirstname=false;

//2) read value from HTML

var firstname = document.getElementById('firstname').value;

//3) Do validation

if (firstname === '' || firstname === "null" || firstname.length > 20){

    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";

}
else
   validFirstname = true;

//4) Send error message to HTML

document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field

return (validFirstname);



}
