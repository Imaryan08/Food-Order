let cart = JSON.parse(localStorage.getItem('key')) || [];
let bill = JSON.parse(localStorage.getItem('total')) || 0;

appendData(cart);

function appendData(cart){
    document.querySelector('#cart').innerHTML = null;
    if(cart.length == 0)
        document.querySelector('#count').innerHTML = ``;

    if(bill == 0){
        let total = document.querySelector('#total');
        total.innerHTML = `Total Bill Amount: ₹${bill}`;
    }

    cart.map(function(elem,index){
        
        total = document.querySelector('#total');
        total.innerHTML = `Total Bill Amount: ₹${bill} `;


        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = elem.strMealThumb;

        let name = document.createElement('h2');
        name.innerHTML = elem.strMeal;

        let price = document.createElement('h3');
        price.innerHTML = ` Price: ₹${elem.price}`;

        let cartBtn = document.createElement('button');
        cartBtn.innerHTML = 'remove';
        cartBtn.setAttribute('id','addToCart');

        div.append(image, name, price, cartBtn);
        document.querySelector('#cart').append(div);

        document.querySelector('#count').innerHTML = `<span style='color: red'>(${cart.length})</span>`;

        cartBtn.addEventListener('click',function(){
            cart.splice(index,1);
            bill -= elem.price;
            
            localStorage.setItem('total',JSON.stringify(bill));

            localStorage.setItem('key',JSON.stringify(cart));
            appendData(cart);
        });
    });


}

function placeOrder(){
    window.location.href = '/checkout.html';
}