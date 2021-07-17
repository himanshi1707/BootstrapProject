document.getElementById('loginbtn').addEventListener('click',function(){
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let message=document.getElementById('message').value;

    debugger
    document.getElementById('name_error').innerText='';
    document.getElementById('email_error').innerText='';
    document.getElementById('message_error').innerText='';

    if(username=='')
    {
        document.getElementById('name_error').innerText='Username field can not be empty';
        document.getElementById('name_error').style.color='red';
        // console.log(document.getElementById('name_error').value)

    }
    else if(email=='')
    {
        document.getElementById('email_error').innerText='Email field can not be empty';
        document.getElementById('email_error').style.color='red';
    }
    else if(message=='')
    {
        document.getElementById('message_error').innerText='Message field can not be empty';
        document.getElementById('message_error').style.color='red';
    }
    else{
        alert('Submitted');
    }
});


































