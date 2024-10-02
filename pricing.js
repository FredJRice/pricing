'use strict';

let views =[
    {
    view: '10K pageviews',
    price: 8
    },
    {
    view: '50K PAGEVIEWS',
    price: 12
    },
    {
    view: '100K PAGEVIEWS',
    price: 16
    },
    {
    view: '500K PAGEVIEWS',
    price: 24
    },
    {
    view: '1M PAGEVIEWS',
    price: 36
    }
];

let page_views = document.querySelector('#pageviews')
let price = document.querySelector('#price')
let slider = document.querySelector('#slider')
let checkbox = document.querySelector('#checkbox')


slider.addEventListener('change', displayPrice )

checkbox.addEventListener('change', displayPrice )


function displayPrice() {
    if(checkbox.checked){
        page_views.innerHTML = views[slider.value].view;
        price.innerHTML = '$'+((views[slider.value].price) * 0.75)*12
    }else{
        page_views.innerHTML = views[slider.value].view;
        price.innerHTML = '$'+views[slider.value].price;
    }
}