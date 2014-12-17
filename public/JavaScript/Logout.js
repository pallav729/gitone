    $(document).ready(function (){
      $("#logout").click(function(event) {
        event.preventDefault(); 
        $.get('logout', function(html) {
         window.location.replace("/");    
        });
      });
    });

