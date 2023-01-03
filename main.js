let span = document.querySelectorAll('span');
let headerCurr= document.querySelector('.header .current');
let headerRemenent= document.querySelector('.header .remenent');
let back = document.querySelector('back');
let leftNum = 0;
let rightNum = 0;
let operator = '';
let result = 0;
if(localStorage.getItem('result')){
    headerCurr.innerHTML = localStorage.getItem('result');
}
document.addEventListener('click',e=>{

    if(!isNaN(e.target.className) ){
        headerCurr.append(e.target.className) ;
    }else if (e.target.className === 'plus'||e.target.className === 'minus'||e.target.className === 'divide'||e.target.className === 'multiplay'){
            operator = e.target.className
            leftNum=+(headerCurr.innerHTML) ;
            headerRemenent.innerHTML=headerCurr.innerHTML;
            switch (operator) {
                case 'plus':
                    headerRemenent.append('+');
                    break;
                    case 'minus':
                        headerRemenent.append('-');
                        break;
                case 'multiplay':
                headerRemenent.append('*');
                
                break;
                case 'divide':
                    headerRemenent.append('/');
                    break;
                    
                    default:
                        console.log("error");
                        break;
                    }
                    headerCurr.innerHTML ='';
                
    }else if(e.target.className ==='equal'){
        if(headerRemenent.innerHTML!==''){

            rightNum=+(headerCurr.innerHTML); 
            headerRemenent.append(rightNum)
            switch (operator) {
            case 'plus':
            result = leftNum+rightNum;
            break;
            case 'minus':
            result = leftNum-rightNum;
            break;
            case 'multiplay':
            result = leftNum*rightNum;
            break;
            case 'divide':
            result = leftNum/rightNum;
            break;
        
            default:
                console.log("error");
                break;
        }
        result = result.toFixed(2)
        headerCurr.innerHTML = result;
        localStorage.setItem('result',result)
        window.setTimeout(()=>{
            headerRemenent.innerHTML = ''
            headerCurr.innerHTML = result;
            leftNum=result;
        },1000)
        
        leftNum = result;
        rightNum=0;
    }else{
    }
    }
    else if(e.target.className === 'ac'){
        headerCurr.innerHTML=''
        headerRemenent.innerHTML=''
        localStorage.removeItem('result')
    }
    else if (e.target.classList.contains('back') ){
        if(headerCurr.innerHTML.length === 1||headerCurr.innerHTML.length===0){
            headerCurr.innerHTML = ''
        }else{
            headerCurr.innerHTML=headerCurr.innerHTML.slice(0,headerCurr.innerHTML.length-1);
        }
    }
})