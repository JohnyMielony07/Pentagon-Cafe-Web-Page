function expandNav() {
    var elem = document.getElementById('aside');
    
    if(elem.getAttribute('class') != 'unhide'){
        elem.className = 'unhide';
    }
    else {
        elem.className = 'hide';
    }
}



document.getElementById('hamburger').addEventListener('click',function() {
    expandNav();
}, false);

