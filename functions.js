let hamburgerHover = false;

document.addEventListener("click", function(evnt){
    if (hamburgerHover && ($('#hamburger-menu').css('display') === 'none'))
        $('#hamburger-menu').css('display', 'flex');
    else
        $('#hamburger-menu').css('display', 'none');
});

function serviceClick (obj) {
    console.log(obj);
    console.log(obj.style.transform);
    obj.style.transform = obj.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    obj.style.boxShadow = obj.style.boxShadow === 'rgb(170, 170, 170) -5px 5px 5px' ? 'rgb(170, 170, 170) 5px 5px 5px' : 'rgb(170, 170, 170) -5px 5px 5px';
}