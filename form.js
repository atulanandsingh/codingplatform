function sendData(){
    var username= document.getElementById("username").Value;
    var password= document.getElementById("password").Value;

    var httpr=new XMLHttpRequest();
    httpr.open("POST","./form/form.php",true);
    httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpr.onreadystatechange=function(){
        if(httpr.readyState==4 && httpr.status==200){
        //4 is show that server is responding and 200 show that server is ok
        document.getElementById("response").innerHTML=httpr.responseText;

        }
    }
    htttpr.send("username"+name+"&password"+password)

}