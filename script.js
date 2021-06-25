function getHistorty(){
    return document.getElementById('history-value').innerText
}

function displayHistory(num){
    document.getElementById('history-value').innerText=num
}



function getOutput(){
    return document.getElementById('output-value').innerText
}  


function displayOutput(num){
    if(num==''){
        document.getElementById('output-value').innerText=num

    }
    else if(num=='-' && getOutput()==''){
        document.getElementById('output-value').innerText=num

    }
    else{
   answer= document.getElementById('output-value')
   answer.innerText=format(num)
    }
}

function format(num){
    if(num=='')
    return ''
    value=Number(num)
    val=value.toLocaleString('en-US')
    return val
}


function formatReverse(num){
    return Number(num.replace(/,/g,''))

}


operate=document.getElementsByClassName('operator')
for(i=0;i<operate.length;++i){
    operate[i].addEventListener('click',function(){
    if(this.id=='AC'){
        displayOutput('')
        displayHistory('')
    }
    else if(this.id=='Ce'){
        output=formatReverse(getOutput()).toString()
        
        if(output){
            output=output.substr(0,output.length-1)
            if(output=='-')
            output=''
            displayOutput(output)
        }
    }
    else if(this.id=='-' && getOutput()==''){
        displayOutput(this.id)
    }
    else{
        output=getOutput()
        his=getHistorty()
        
         
        if(output=='' && his!=''){
            if(isNaN(his[-1])){
                his=his.substr(0,his.length-1)
            }
        }
        if(output!="" || his!=''){
            output==''?output:formatReverse(output)
            his=his+output
            
            if(this.id=='='){
                res=eval(his)
                displayOutput(res)
                displayHistory('')
            }
            else{
                his=his+this.id
                displayOutput('')
                displayHistory(his)
            }
            
        }
    }
    });
}
num=document.getElementsByClassName('num')
for(i=0;i<num.length;++i){
    num[i].addEventListener('click',function(){
        
        output=getOutput()
            if(output=='-'){
                
                output=(Number(this.id)-(2*Number(this.id)))
                displayOutput(output)
                
            }
        else {

            output=formatReverse(getOutput())
            if(output!=NaN){
            output=output+this.id
          
            }
            
            displayOutput(output)
        }
    });
}
