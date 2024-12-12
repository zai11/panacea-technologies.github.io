let hamburgerHover = false;

document.addEventListener("click", function(evnt){
    if (hamburgerHover && ($('#hamburger-menu').css('display') === 'none'))
        $('#hamburger-menu').css('display', 'flex');
    else
        $('#hamburger-menu').css('display', 'none');
});