window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}


                                 var score = 0;
                                
                                
                                
                                    function disable(){
                                    if(document.getElementById("q3_7").checked ==true){
                                        document.getElementById("q3_1").disabled = true;
                                        document.getElementById("q3_2").disabled = true;
                                        document.getElementById("q3_3").disabled = true;
                                        document.getElementById("q3_4").disabled = true;
                                        document.getElementById("q3_5").disabled = true;
                                        document.getElementById("q3_6").disabled = true;
                                    }
                                    else{
                                        document.getElementById("q3_1").disabled = false;
                                        document.getElementById("q3_2").disabled = false;
                                        document.getElementById("q3_3").disabled = false;
                                        document.getElementById("q3_4").disabled = false;
                                        document.getElementById("q3_5").disabled = false;
                                        document.getElementById("q3_6").disabled = false;
                                    }
                                 }
                                
                                function disable2(){
                                    if(document.getElementById("q5_5").checked ==true){
                                        document.getElementById("q5_1").disabled = true;
                                        document.getElementById("q5_2").disabled = true;
                                        document.getElementById("q5_3").disabled = true;
                                        document.getElementById("q5_4").disabled = true;
                                        
                                    }
                                    else{
                                        document.getElementById("q5_1").disabled = false;
                                        document.getElementById("q5_2").disabled = false;
                                        document.getElementById("q5_3").disabled = false;
                                        document.getElementById("q5_4").disabled = false;
                                       
                                    }
                                 }
                                
                                
                               function add5(){
                                        score=score+5;
                                        
                                        }
                                
                                
                                function add4(){
                                        score=score+4;
                                        
                                        
                                    }
                                 function add3(){
                                        score=score+3;
                                        
                                        
                                    }                                

                                 function add2(){
                                        score=score+2;
                                       
                                        
                                    }
                                  function add1(){
                                        score=score+1;
                                        
                                        
                                    }  
                                    
                                function calculate(){
                                    alert(score+"/40");
                                }
                              
jQuery.noConflict();
jQuery.ready(function() {
     $("div").click(function() {alert("Welcome to Tutorialspoint!");});
         });
   
});     