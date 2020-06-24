var Yes = 1;
var No  = -1;
var y   = 1;
var n = -1;
var score = 0;

var numberOfChoice = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfChoice; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    if(buttonInnerHTML === "Yes"){
      score--;
    }    
    else{
      score++;
    }
    getResult(buttonInnerHTML,score);
    
  });

}

document.addEventListener("keypress", function(event){

   
       
    if(event.key === "y"){
      score--;
    }    
    else{
      score++;
    }
    
    getResult(event.key,score);
  
});

function getResult(data,score){
if((data === 'y') || (data === 'n') || (data === "Yes") || (data === "No")){
    document.querySelector("h2").innerHTML = "Do you have breathing problem";
    document.querySelector("h1").style.color = "blue"; 
        
    document.addEventListener("keypress", function(event){
        
      if(event.key === "y"){
        score--;
      }    
      else{
        score++;
      }
      
        getResult1(event.key,score);

       
       
    });
    for (var i = 0; i < numberOfChoice; i++) {

        document.querySelectorAll(".btn")[i].addEventListener("click", function() {
      
          var buttonInnerHTML = this.innerHTML;
          if(buttonInnerHTML === "Yes"){
            score--;
          }    
          else{
            score++;
          }      
          
          getResult1(buttonInnerHTML,score);
        });
      
      }
      
    
}
}


function getResult1(data,score){
    if((data === 'y') || (data === 'n') || (data === "Yes") || (data === "No")){
        document.querySelector("h2").innerHTML = "Do you have any sort of cough";
        document.querySelector("h1").style.color = "yellow"; 
        
        document.addEventListener("keypress", function(event){
        
          if(event.key === "y"){
            score--;
          }    
          else{
            score++;
          }    
           
            getResult2(event.key,score);
                
                      
           
        });
    
        for (var i = 0; i < numberOfChoice; i++) {

            document.querySelectorAll(".btn")[i].addEventListener("click", function() {
                
              var buttonInnerHTML = this.innerHTML;
              if(buttonInnerHTML === "Yes"){
                score--;
              }    
              else{
                score++;
              }      
              
              getResult2(buttonInnerHTML,score);
            });
          
          }
          
        
    }
    }

function getResult2(data,score){
    if((data === 'y') || (data === 'n') || (data === "Yes") || (data === "No")) { 
          document.querySelector("h2").innerHTML = "Do you have running nose";
          document.querySelector("h1").style.color = "red"; 
        
                       
          document.addEventListener("keypress", function(event){
        
            if(event.key === "y"){
              score--;
            }    
            else{
              score++;
            }    
            
        
            getResult3(event.key,score);
                
                      
           
        });
    
        for (var i = 0; i < numberOfChoice; i++) {

            document.querySelectorAll(".btn")[i].addEventListener("click", function() {
                
              var buttonInnerHTML = this.innerHTML;
              if(buttonInnerHTML === "Yes"){
                score--;
              }    
              else{
                score++;
              } 
                   
              getResult3(buttonInnerHTML,score);
            });
          
          }           
            
     }
 }


 function getResult3(data,score){
    if((data === 'y') || (data === "n") || (data === "Yes") || (data === "No")){
      document.querySelector("h2").innerHTML = "Do you have any outside country travel history of last 14 days";
      document.querySelector("h1").style.color = "lightblue"; 
    
                   
      document.addEventListener("keypress", function(event){
    
        if(event.key === "y"){
          score--;
        }    
        else{
          score++;
        }    
       
        setTimeout(getFinalResult,1000,score);
            
                  
       
    });

    for (var i = 0; i < numberOfChoice; i++) {

        document.querySelectorAll(".btn")[i].addEventListener("click", function() {
            
          var buttonInnerHTML = this.innerHTML;
          if(buttonInnerHTML === "Yes"){
            score--;
          }    
          else{
            score++;
          }
          
          setTimeout(getFinalResult,1000,score);
        });
      
      }                 
    }
 }


function getFinalResult(score){
  for (var i = 0; i < numberOfChoice; i++) {

    document.querySelectorAll(".btn")[i].style.opacity = "0";
  }
  if(score >= 3){
    
    document.querySelector("h2").style.color = "green";
    document.querySelector("h2").innerHTML = "No need to worry ,You are completely fine!!!!";
  }
  else if(score >= 2 && score < 3){
    document.querySelector("h2").style.color = "lightgreen";
    document.querySelector("h2").innerHTML = "You are not well , but it might not be covid19,so contact the doctor ";
  }
  else if(score < 2 && score >= 0){
    document.querySelector("h2").style.color = "yellow";
    document.querySelector("h2").innerHTML = " Alert! You have some symptomps of corona virus ,so reach the doctor";
  }
  else{
    document.querySelector("h2").style.color = "red";
    document.querySelector("h2").innerHTML = " Alert! You are at Risk.......";
  }
}