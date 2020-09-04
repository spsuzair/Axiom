function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());

if(re.test(input.value.trim())){
    showSuccess(input);
}else{
    showError(input,`${getFieldId(input.id)} please provide Valid email`);
}


}


//All functions



//Function to show error

function showError(input,message) {
    const formControl=input.parentElement;
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    
    }
    
    
    //Function to show success
    
    function showSuccess(input,message) {
        const formControl=input.parentElement;
        formControl.className ='form-control success';
        const small = formControl.querySelector('small');
        small.innerText = message;
        
        }
//function to check data
function checkRequired(inputArray) {
 inputArray.forEach(function(input) {
    if (input.value ===''){
        showError(input,`${getFieldId(input.id)} is required`);
    }else{
        showSuccess(input);
    }
});
}
//function to check password match
function checkPasswordMatch (input1,input2){
    if (input1.value !==input2.value) {
showError(input2,"password not match");
    }

}

//Function to check length of input
function checkLength(input,min,max){
    if (input.value.length<min) {
        showError(input,`${getFieldId(input.id)} need to  atleast ${min} characters`);
    }else if (input.value.length>max) {
        showError(input,`${getFieldId(input.id)} not less than${max} characters`);
    } else{
        showSuccess(input);
    }
}

//function to get id of input field
function getFieldId(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
 
}

//This is event listner for form submit
form.addEventListener('submit',function(e) {
e.preventDefault();
checkRequired([username,email,password,password2]);
checkLength(username,3,10);
checkLength(password,6,30);
validateEmail(email);
checkPasswordMatch(password,password2);
})