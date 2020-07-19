var botui = new BotUI('hello-world');
/* User Score to calculate chances*/
let score=0;

botui.message.add({
    delay:1000,
    loading:true,
    content: 'Hello Welcome to the Self Assesment'
})
.then(function () { // wait till previous message has been shown.
    return botui.message.add({
    delay: 500,
    loading: true,
    
    content: 'Here,we will check the probability of You being Corona postive'
  });
})
.then(function() { 
    
     return(   botui.action.button({
         
    action: [
      { // show only one button
        cssClass:"button",
        text: "Okay Let's go",
        value: 'sure'
      }
    ]
  })
     );
    
})
.then(function(res){
    let message;
    if(res.value === "sure"){
        message= "Yey! it's a good start";
        
    }
    
    return botui.message.add({
        delay:500,
        loading: true,
        content: message
    });
})
.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content: "Do you have any trouble in breathing"
    });
    return( botui.action.button({
      action:[
          {
          cssClass:"button",
          text: "Yes I have!",
          value: "yes"
      },
      {   cssClass:"button",
          text: "No I don't have",
          value: "no"
      }
    ]
    })
    );
})
.then(function(res){
    let msg;
    if(res.value === "yes"){
        msg= "Oh! that's a concern";
        score+=30;

    }
    else{
        msg="Ok fine!";
    }
    return(botui.message.add({
      delay:500,
      loading:true,
      content:msg
    }));
})

.then(function(){
  botui.message.add({
   delay:100,
   loading:true,
   content: "Do you have fever!"    
  });
  return(botui.action.button({
      action: [
          { cssClass:"button",
            text: "mild fever",
            value: "med"  
          },
          {   cssClass:"button",
              text: "high fever",
              value: "high"
          },
          {   cssClass:"button",
              text: "no fever",
              value: "low"
          }
      ]
  })
  );
})
.then(function(res){
    let msg;
    if(res.value==="med"){
        msg="Some point of concerns, take care";
        score+=15;
    }
    else if(res.value==="high"){
     msg="Oh! not a Good sign!!!";   
     score+=30;
    }
    else{
        msg="Great! no need to worry!!";
    }
    return(botui.message.add({
        delay:1000,
        loading: true,
        content: msg
    }) 
    );
    
})
.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content:"Do you had any lungs or heart disease history"
    });
    return(botui.action.button({
        action: [
            {   cssClass:"button",
                text:"Yes I had",
                value:"yes"
            },
            {   cssClass:"button",
                text: "No",
                value:"no"
            }
        ]
    })
    );
})
.then(function(res){
    let msg;
    if(res.value === "yes"){
        msg="Oh!, you need to take care";
        score+=30;
        
        
    }
    else{
        msg="Great!, Carry on";

    }
    return(botui.message.add({
        delay:500,
        loading:true,
        content:msg
    })
    );
    
})
.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content:"Do you have any sort of cough"
    });
    return(botui.action.button({
     action:[
         {   cssClass:"button",
             text:"Yes I have",
             value: "yes"
         },
         {   cssClass:"button",
             text:"No I don't have",
             value:"no"
         }
     ]
    })
    );
})
.then(function(res){
    let msg;
    if(res.value==="yes"){
        msg="Oh! take care";
        score+=30;
    }
    else{
        msg="Ok,Great";
        
    }
    return(botui.message.add({
        delay:500,
        loading:true,
        content:msg
    })
    );
})
.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content:"Are you suffering from running nose problem"
    });
    return(botui.action.button({
     action:[
         {   cssClass:"button",
             text:"Yes I am",
             value: "yes"
         },
         {   cssClass:"button",
             text:"No I am not",
             value:"no"
         }
     ]
    })
    );
})
.then(function(res){
    let msg;
    if(res.value==="yes"){
        msg="Oh! take care";
        score+=30;
    }
    else{
        msg="Ok,Great";
        
    }
    return(botui.message.add({
        delay:500,
        loading:true,
        content:msg
    })
    );
})

.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content:"Do you feel tirdness?"
    });
    return(botui.action.button({
     action:[
         {   cssClass:"button",
             text:"Yes I do",
             value: "yes"
         },
         {   cssClass:"button",
             text:"No I don't",
             value:"no"
         }
     ]
    })
    );
})
.then(function(res){
    let msg;
    if(res.value==="yes"){
        msg="Oh! take care";
        score+=30;
    }
    else{
        msg="Ok,Carry on";
        
    }
    return(botui.message.add({
        delay:500,
        loading:true,
        content:msg
    })
    );
})
.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content:"Do you are facing difficulty in breathing?"
    });
    return(botui.action.button({
     action:[
         {   cssClass:"button",
             text:"Yes I am",
             value: "yes"
         },
         {   cssClass:"button",
             text:"No I am not",
             value:"no"
         }
     ]
    })
    );
})
.then(function(res){
    let msg;
    if(res.value==="yes"){
        msg="Ok! you need to take care";
        score+=30;
    }
    else{
        msg="Ok,Carry on";
        
    }
    return(botui.message.add({
        delay:500,
        loading:true,
        content:msg
    })
    );
})
.then(function(){
    botui.message.add({
        delay:100,
        loading:true,
        content:"Let's see result of Assesment"
    });
    return(botui.action.button({
        action:[{
            text: "Yes,why not!",
            value:"yes"
        }]
    }));
})
.then(() => {
 document.getElementById("result").style.display="block";
 document.getElementById("hello-world").style.display="none";
 let perc;
 let msg="";
 perc=Math.floor(score*100/210);
 if(perc>=75){
     msg="Alert!!!, You have serious symptomps of being Corona postive,Kindly consult the mediacal authorities";
 }
 else if(perc>=50 && perc <75){
     msg="You might be Corona Postive as you have some symptomps of Covid-19 virus, So undergo your medical checkup";
 }
 else{
     msg="Great!!!, You are completely fine, No serious symptomps of Corona Virus found out, so keep up the good work";
 }
 document.getElementById("result").innerHTML=`<div>
 <div class="jumbotron" style="font-family: 'Merriweather Sans', sans-serif;font-size:1.6rem;text-align:center;border-radius:10px;margin:200px 0px;">
  ${msg}<br>
  <a class="btn btn-danger btn-lg" href="index.html" role="button" style="margin-top:40px;">Home</a>
</div>`;
});
