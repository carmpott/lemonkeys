document.getElementById('myform').addEventListener('submit', validateForm);

function validateForm(event) 
{
    removeErrorMessages();
   if(validateFirstName() &&
      validateLastName() && 
      validatePhoneNumber() &&
      valdidateEmail()
      )
    {
        return true;
    }
    else
      {
        event.preventDefault();
        return false;
      }
  
}

function showError(element_id, message)
{
  var element = document.getElementById(element_id);
  var error_div = document.createElement('div');
  error_div.id = element_id+'_error';
  error_div.className='error';
  error_div.innerHTML = message;
  element.parentNode.insertBefore(error_div, element.nextSibling);
  
}
function removeElementsByClass(rootElement,className)
{
    var elements = rootElement.getElementsByClassName(className);
    while(elements.length > 0)
    {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function removeErrorMessages()
{
  removeElementsByClass(document.getElementById('myform'), 'error');
}

function validatePhoneNumber() 
{
    var phone = document.getElementById('myform_phone').value;
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!phone || !re.test(phone))
      {
        showError("myform_phone", "Please enter a valid phone number");
        return false;
      }
  return true;
}

function validateFirstName()
{
  var first_name =      document.getElementById('myform_firstname').value;
  if(!first_name || first_name.length < 2)
    {
       showError("myform_firstname", "Please enter your First Name");
       return false;
    }
    return true;
}
function validateLastName()
{
  var last_name = document.getElementById('myform_lastname').value;
  if(!last_name || last_name.length < 2)
    {
       showError("myform_lastname", "Please enter your Last Name");
       return false;
    }
    return true;
}

function validateEmail()
{
  var email = document.getElementById('myform_email').value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !re.test(email)) 
        {
      showError("myform_email", "Please enter a valid email");
      return false;
    }
    return true;
  
}

