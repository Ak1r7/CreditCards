const card_number_input = document.querySelector(".card-number-input") 
const card_holder_input = document.querySelector(".card-holder-input") 
const month_input = document.querySelector(".month-input") 
const year_input = document.querySelector(".year-input") 
const cvv_input = document.querySelector(".cvv-input") 
const submit_btn = document.querySelector(".submit-btn") 
const card_number_box = document.querySelector(".card-number-box") 
 
const card_holder_name = document.querySelector('.card-holder-name') 
const exp_month = document.querySelector('.exp-month') 
const exp_year = document.querySelector('.exp-year') 
 
card_number_input.addEventListener('input', ()=> { 
    card_number_box.textContent = card_number_input.value; 
}); 
 
card_holder_input.addEventListener('input', () =>{ 
    card_holder_name.textContent = card_holder_input.value; 
}); 
 
month_input.addEventListener('change', () =>{ 
    exp_month.textContent = month_input.value; 
}); 
 
year_input.addEventListener('change', () =>{ 
    exp_year    .textContent = year_input.value; 
});