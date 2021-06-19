// Code By Webdevtrick ( https://webdevtrick.com )
const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;
	
	fetch(`https://v6.exchangerate-api.com/v6/09718208eda4d5f30360dd75/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.conversion_rates[to_currency];
		rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	})
}

calculate();

const rateEl1 = document.getElementById('item1');
function fix1(){
	var item="MMK";
	  fetch(`https://v6.exchangerate-api.com/v6/09718208eda4d5f30360dd75/latest/USD`)
	.then(res => res.json())
		.then(res => {
		const rate = res.conversion_rates[item];
		rateEl1.innerText = `1 USD = ${rate} ${item}`
})
}
fix1();

const rateEl2 = document.getElementById('item2');
function fix2(){
	var item="CNY";
	  fetch(`https://v6.exchangerate-api.com/v6/09718208eda4d5f30360dd75/latest/USD`)
	.then(res => res.json())
		.then(res => {
		const rate = res.conversion_rates[item];
		rateEl2.innerText = `1 USD = ${rate} ${item}`
})
}
fix2();

const rateEl3 = document.getElementById('item3');
function fix3(){
	var item="JPY";
	  fetch(`https://v6.exchangerate-api.com/v6/09718208eda4d5f30360dd75/latest/USD`)
	.then(res => res.json())
		.then(res => {
		const rate = res.conversion_rates[item];
		rateEl3.innerText = `1 USD = ${rate} ${item}`
})
}
fix3();

const rateEl4 = document.getElementById('item4');
function fix4(){
	var item="SGD";
	  fetch(`https://v6.exchangerate-api.com/v6/09718208eda4d5f30360dd75/latest/USD`)
	.then(res => res.json())
		.then(res => {
		const rate = res.conversion_rates[item];
		rateEl4.innerText = `1 USD = ${rate} ${item}`
})
}
fix4();

const rateEl5 = document.getElementById('item5');
function fix5(){
	var item="THB";
	  fetch(`https://v6.exchangerate-api.com/v6/09718208eda4d5f30360dd75/latest/USD`)
	.then(res => res.json())
		.then(res => {
		const rate = res.conversion_rates[item];
		rateEl5.innerText = `1 USD = ${rate} ${item}`
})
}
fix5();