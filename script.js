

let balance=document.getElementsByClassName("balance")
let money_plus=document.getElementsByClassName("money-plus")
let money_minus=document.getElementsByClassName("money-minus")
let text=document.getElementById("text")
let amount=document.getElementById("amount")
let form = document.getElementById('form');

// console.log(balance)
// console.log(money_plus)
// console.log(money_minus)
// console.log(history)
// console.log(text)
// console.log(amount)

const Transactions=[];

function addtransaction(newtransaction){
   console.log(newtransaction)
    const sign = newtransaction.amount<0?"-":"+";
    const list1 = document.createElement("li");   
    list1.classList.add(
    newtransaction.amount<0?"minus":"plus");
    //console.log(list1);    

    //create li node
    list1.innerHTML=`<span>${newtransaction.text}</span><span>${sign}${Math.abs(newtransaction.amount)}</span><button class="delete-btn" onclick = "">x</button>`;

    document.getElementById('list').appendChild(list1);
  
}

//addtransaction(Transactions);

function addTransactions(e){
    e.preventDefault();
    console.log(text.value)
if(text.value=="" &&+amount.value=="")
    {
        alert("please enter Text and Value");
    } 
    else{
        const transactions = {
            id: getID(),
            text: text.value,
            amount : +amount.value
        };
        Transactions.push(transactions);
        addtransaction(transactions);
         updateValues();
        text.value = "";
        amount.value = "";
    }
}

function getID(){
 var random_id=Math.floor(Math.random()*10000000);
 return random_id;
}
function updateValues(){
    console.log(Transactions);
    const amounts =Transactions.map(key => key.amount);
    const total = amounts.reduce((acc,item)=>(acc+=item),0);
    document.getElementById('total').innerHTML=total;
    const income=amounts.filter(items=>items>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    console.log(income);
    document.getElementById('income_money').innerHTML=income;
    const newexpense=amounts.filter(items => items<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    document.getElementById('expense_money').innerHTML=newexpense;

    
    
    console.log(amounts);
    // const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    // console.log(total);
    // const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc+=item),0).toFixed(2);
    // console.log(income);
    // const expense = amounts.filter(item => item <0).reduce((acc,item)=>(acc+=item), 0).toFixed(2)*-1
    // console.log(expense)
    // console.log (balance.innerText = `$${total}`);
    // document.getElementsByClassName("money-plus").innerHTML = `$${income}`;
    //  money_minus.innerHTML = `$${expense}`;
    

}
  

function init(){

    list.innerHTML = "";
    const v = Transactions.forEach(addtransaction);
    console.log(v);
    updateValues();   

}
init();

form.addEventListener("submit", addTransactions);