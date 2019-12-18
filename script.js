var numbers=[1,2,3,4,5,6,7,8,9];
var upperCase=['A','B','C','D','E','F','G','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','Y','Z'];
var lowerCase=['a','b','c','d','e','f','g','i','j','k','l','m','o','p','q','r','s','t','u','v','w','y','z'];
var specialChar=["!","@","#","$","%","^","&","*","(",")","-","+","<",">"];
var chars=[];

function passwordLength(){
    do{
        var length=prompt("Please select the length of password between 8 to 128 !!!")
    }
    while(length < 8 || length > 128 )
    return length;
}
// passwordLength();
// userInput();
function userInput(){
    do{
        var upperAlphabet=confirm("do you uppercase in your password");
        var lowerAlphabet=confirm("do you lowecase in your password");
        var digit=confirm("do you number in your password");
        var specialcahracter=confirm("do you special character in your password");
        if(upperAlphabet===false && lowerAlphabet===false && digit===false && specialcahracter===false)
        {
            alert("please select one special charater")
        }
        else
        {
            break;
        }
    }
    while(true);

    if(upperAlphabet===true)
    {
        chars.push.apply(chars, upperCase);
    }
    if(lowerAlphabet===true)
    {
        chars.push.apply(chars, lowerCase);
    }
    if(digit===true)
    {
        chars.push.apply(chars, numbers);
    }
    if(specialcahracter)
    {
        chars.push.apply(chars, specialChar);  
    }
}

var length = passwordLength();
userInput();
function createPassword(){
    
    var password="";
    for(var i = 0; i< length; i++)
    {
        let characters=Math.floor(Math.random()* chars.length);
        password += chars[characters]
    }
    return password;
  }

 function generatePassword(){
   var password =createPassword();
   var generate=document.querySelector('#password-textarea');
   generate.textContent= password;


}
function copyClipboard(){
    var generate=document.querySelector('#password-textarea');
    generate.select();
    document.execCommand("copy");
    alert("Copied the text: " + generate.value);

}
// 


        
    
            



