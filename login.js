function LoginUser()
    {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    google.script.run.withSuccessHandler(function(output) 
    {
      if(output == 'TRUE')
      {
        window.location.replace('faruq.html')
      }
      else if(output == 'FALSE')
      {
        document.getElementById("errorMessage").innerHTML = "Invalid data";
      }
    }).checkLogin(username, password);
    }