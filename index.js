const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('OKI, AHORA PICALE AL BOTON')
    alert('PARA MAS INFORMACIÓN HABLAME 👀 ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

document.getElementById("yesBtn").addEventListener("click", function() {
    document.querySelector("img").src = "monito2.jpg";
});