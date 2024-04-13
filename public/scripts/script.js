var myInput = document.getElementById("E-mail");
          var myInput = document.getElementById("Gender");
          var select = document.getElementById("bdating");
          var select = document.getElementById("bmonth");
          var number = document.getElementById("byear");
          
          
          
          myInput.onblur = function() {
            document.getElementById("message").style.display = "none";
          }
          myInput.onkeyup = function()
          
          
          
          {
           
            var email = /[@]/g;
            if(myInput.value.match(email)) {  
              email.classList.remove("valid");
              email.classList.add("invalid");
            } else {
              email.classList.remove("invalid");
              email.classList.add("valid");
            }
          
          
            var gender = /[male]/g;
            if(myInput.value.match(gender)) {  
              gender.classList.remove("valid");
              gender.classList.add("invalid");
            } else {
              gender.classList.remove("invalid");
              gender.classList.add("valid");
            }
          
          
          
            var gender = /[female]/g;
            if(myInput.value.match(gender)) {  
              number.classList.remove("valid");
              number.classList.add("invalid");
            } else {
              number.classList.remove("invalid");
              number.classList.add("valid");
            }
          
          
            var gender = /[other]/g;
            if(myInput.value.match(gender)) {  
              number.classList.remove("invalid");
              number.classList.add("valid");
            } else {
              number.classList.remove("valid");
              number.classList.add("invalid");
            }
          
          
          
          
            var bdateing = /[01-31]/g;
            if(myInput.value.match(bdating)) {  
              number.classList.remove("invalid");
              number.classList.add("valid");
            } else {
              number.classList.remove("valid");
              number.classList.add("invalid");
            }
          
          
          if(myInput.value.length >= 0o1) {
              length.classList.remove("valid");
              length.classList.add("invalid");
            } else {
              length.classList.remove("invalid");
              length.classList.add("valid");
            }
           
          
          if(myInput.value.length <= 31) {
              length.classList.remove("valid");
              length.classList.add("invalid");
            } else {
              length.classList.remove("invalid");
              length.classList.add("valid");
            }
           
           
           var byear = /[01-2023]/g;
            if(myInput.value.match(byear)) {  
              number.classList.remove("invalid");
              number.classList.add("invalid");
            } else {
              number.classList.remove("invalid");
              number.classList.add("invalid");
            }
          
           if(myInput.value.length > 2023) {
              length.classList.remove("invalid");
              length.classList.add("valid");
            } else {
              length.classList.remove("valid");
              length.classList.add("invalid");
            }
          
          
           if(myInput.value.length <1956) {
              length.classList.remove("invalid");
              length.classList.add("valid");
            } else {
              length.classList.remove("valid");
              length.classList.add("invalid");
            }
          
          }
          