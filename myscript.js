let validName = false;
let validEmail = false;

  function increment(){
    event.preventDefault();
    var atual = document.getElementById("total").value;
    var novo = atual - (-1); 
    document.getElementById("total").value = novo;
    
  }
  
  function decrement(){
    event.preventDefault();
    var atual = document.getElementById("total").value;
    if(atual > 0) { 
      var novo = atual - 1;
      document.getElementById("total").value = novo;
    }
  }

 
  $(document).ready(function(){
    $('.input-name').on('input', function(){
      validateSubmitButton()
    });

    $('.input-email').on('input', function(){
       validateSubmitButton()
    });

    function validateSubmitButton(){
      $('#send').prop('disabled', !($("#myform").valid()));
    }
  

    
    $("#send").click(function(event){
      event.preventDefault();
      $(this).addClass("hidden")
      $('.success-msg-container').removeClass("hidden")
    })
    
    
    $("#myform").validate({
      errorElement: 'span',
      rules: {
        
        name: {
          required:true,
          minlength: 10
        },
        email: {
          minlength: 5,
          required: true,
          email: true
        }
      },
      
      messages:{
        name:{
              minlength:"Por favor, informe seu nome completo.",
              required:"Por favor, informe seu nome completo."
        },
        email:{
               required:"Por favor, informe seu melhor e-mail."
        }    
      }
    });
  });

  
