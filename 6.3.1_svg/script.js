/* Сверстать кнопку, которая 
будет содержать в себе icon_01
При клике на кнопку иконка должна 
меняться на icon_02. 
Повторный клик меняет иконку обратно. */

const btn = document.querySelector('.btn');
const btn_change = document.querySelector('.btn_icon1');

btn.addEventListener('click', () => {
    btn_change.classList.toggle('btn_icon2');
    
});