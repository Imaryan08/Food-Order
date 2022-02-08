    var totalAmt = localStorage.getItem("total");
    console.log(totalAmt);
    var amount = document.querySelector("#amount");
    amount.innerText = `₹${totalAmt}`;
    amount.style.background = "lightgray";
    amount.style.padding = "3px 5px";
    amount.style.borderRadius = "5px";


    document.querySelector('#btn').addEventListener('click',function(){

        document.querySelector('#btn').style.background = 'green';
        document.querySelector('#btn').style.color = 'white';

        alert('Order is accepted');

        setTimeout(function(){
            alert('Your order is being cooked');
        },3000)

        setTimeout(function(){
            alert('Your order is ready');
        },8000)

        setTimeout(function(){
            alert('Order is out for delivery');
        },10000)

        setTimeout(function(){
            alert('Order Delivered');
            window.location.href = 'index.html';
            localStorage.removeItem('key');
            localStorage.removeItem('total');
        },12000)
    });
