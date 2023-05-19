
const btn = document.querySelector('.btn');
const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');
const btn_3 = document.querySelector('.btn_3');

const show = document.querySelector('.show_message');
show.innerHTML = `<p >ХОТИТЕ УЗНАТЬ РАЗМЕРЫ ЭКРАНА?<br> НАЖМИТЕ НА КНОПКУ</p>`

btn_1.addEventListener('click', () => {
    btn_1.classList.toggle('btn--turn');
    showField({  "ширина монитора" : window.screen.width, "высота монитора": window.screen.height });
});

btn_2.addEventListener('click', () => {
    btn_2.classList.toggle('btn--turn');
    showField({  "ширина монитора" : window.innerWidth, "высота монитора": window.innerHeight });
});

btn_3.addEventListener('click', () => {
    btn_3.classList.toggle('btn--turn');
    showField({  "ширина монитора" : document.documentElement.clientWidth, "высота монитора": document.documentElement.clientHeight});
});

const showField = (message) => {
    show.innerHTML = " ";                                       //    в варианте с alert  закоментировать строку
    let field = [];
    for (const key in message) {
        field.push(`<li><b>${key}</b>: ${message[key]}</li>`);  //    в варианте с alert  закоментировать строку
    };                                                          //    в варианте с alert  закоментировать строку 
    show.innerHTML = ` <ul>${field.join('')}</ul>`;             //    в варианте с alert  закоментировать строку
        //field.push(`  ${key}:  ${message[key]}`);
   // }; 
    //show.innerHTML = alert(field);
}









