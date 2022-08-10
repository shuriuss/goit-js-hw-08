import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';


const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(handler, 500));
form.addEventListener('submit', submit)


function handler() {
    
    const data = {
        email: form.email.value,
        message: form.message.value
    };
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function save() {
    const dataSave = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
       if (dataSave) {
        form.email.value = dataSave.email;
        form.message.value = dataSave.message;
    }
}
save()

function submit(event) {
    event.preventDefault()
       
    const data = {
        email: form.email.value,
        message: form.message.value
    };
    if (!(data.email && data.message)){
        alert('Введіть данні')
        return
    }

    console.log(`Пошта: ${data.email}`);
    console.log(`Повідомлення: ${data.message}`);
    localStorage.removeItem(LOCALSTORAGE_KEY)
    event.currentTarget.reset()
}






