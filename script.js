function calcPercentage(){
        
    const OVERALL_TOTAL = 300;
    
    console.log("Inside js");
    // Retrieve marks from html using DOM
    var mark1=Number(document.getElementById("mark1").value);
    var mark2=Number(document.getElementById("mark2").value);
    var mark3=Number(document.getElementById("mark3").value);
    
    //Calculate percentage 
    var percentage = ((mark1+mark2+mark3)/OVERALL_TOTAL)*100;

    document.getElementById("outName").innerText = document.getElementById("name").value
    document.getElementById("outClass").innerText = document.getElementById("class").value
    //Format the percentage with a % symbol and set the value to a label in html
    var val = percentage.toPrecision(4);
    document.getElementById("percentage").innerText=  getFormattedOutput(percentage.toPrecision(4));
    
    var markIndicator; 
    
    if(val<40){
        
        markIndicator="red";
    }
    else if(val>41 && val< 70){
        
        markIndicator="green";
    }
    else{
        markIndicator="white";
    }
    
    document.getElementById("percentage").style.color=markIndicator;
    document.getElementById("inputData").hidden=true;
    document.getElementById("showReport").hidden=false;
   }

   function getFormattedOutput(percentage){
       return(percentage + "%");
   }
