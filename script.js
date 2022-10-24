quote = document.getElementById("motivation");

var formDetails = document.getElementById('expense_details_form');



formDetails.addEventListener('submit', handle_submit_form);
function handle_submit_form(event){
    event.preventDefault();
    expense_name = event.target.elements['name'].value;
    expense_amount = event.target.elements['amount'].value;
    mood_photo = event.target.elements['photo'].value;
    quoteGen = event.target.elements['day'].value;
    if(quoteGen=="monday" || quoteGen=="Monday"){
        quote.innerHTML = "Get exercised!";
    }
    else{
        alert("error");
    }
    document.getElementById("mood").src = mood_photo;
    for(var i = 0; i< formDetails.length; i++){
        formDetails.elements[i].value ="";
    }

    var exCard = create_expense_card(expense_name, expense_amount);

    var money_container = document.getElementById('money_container');

    if(money_container.children.length===0){
        getElementById('title').innerHTML = "My expense list";
    }
    document.querySelector('#money_container').appendChild(exCard);
    
}
function create_expense_card(expense_name, expense_amount){

    var card = document.createElement('div');

    card.className = 'card';
    var cardTitle = document.createElement('h2');
    cardTitle.innerText = expense_name;
    card.appendChild(cardTitle);

    var expense = document.createElement('h2');
    expense.innerText = expense_amount;
    card.appendChild(expense);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText ="Remove";
    deleteBtn.addEventListener('click', deleteFunction);
    card.appendChild(deleteBtn);

return card;
}
function deleteFunction(event){
    var card = event.target.parentElement;
    card.remove();
}