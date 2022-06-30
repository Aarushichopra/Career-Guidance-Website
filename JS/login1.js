$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
    });
    });
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
function validateform(){  
    var name=document.myform.email.value;  
    var password=document.myform.password.value;  
    
    if ((name==null || name=="")||(password.length<4)){  
    alert("Enter the credentials correctly!"); 
    return 1;    
    } 
    else
    {
        return 0;
    }
    // else
    // {
    //     alert("to another page")
    //     clickdone();
        
    // }
} 

// function clickdone()
// {
//     let url = "Career-Guidance\JS\interest.js";
//    window.location(url);
//     // window.location.href="../Career-Guidance/interest.html";
// }
