async function getDishes(){
    
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese');

    let data = await res.json();
    console.log('data:', data.meals)
    append(data.meals);
}

getDishes()

let key = JSON.parse(localStorage.getItem('key')) || [];
let counter = 0;
let total = JSON.parse(localStorage.getItem('total')) || 0;
let cart = JSON.parse(localStorage.getItem('key')) || [];



function append(data){
    if(cart.length == 0)
        document.querySelector('#count').innerHTML = ``;
    else
    document.querySelector('#count').innerHTML = `<span style='color: red'>(${cart.length})</span>`;

    data.map(function(elem){

        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = elem.strMealThumb;

        let name = document.createElement('h2');
        name.innerHTML = elem.strMeal;

        let price = document.createElement('h3');
        let Price = Math.floor((Math.random()*500)+1);
        price.innerHTML = ` Price: ₹${Price}`;

        let cart = document.createElement('button');
        cart.innerHTML = 'add to cart';
        cart.setAttribute('id','addToCart');

        div.append(image, name, price, cart);
        document.querySelector('#menu').append(div);

        // Add to cart button functioning
        cart.addEventListener('click', function(){
            cart = JSON.parse(localStorage.getItem('key')) || [];

            total += Price;
            elem.price = Price;
            key.push(elem);
            localStorage.setItem('key',JSON.stringify(key));
            localStorage.setItem('total',total);
            document.querySelector('#count').innerHTML = `<span style='color: red'>(${++cart.length})</span>`;
        })

    })

}