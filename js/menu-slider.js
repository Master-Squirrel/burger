var allSliderItems = document.querySelectorAll(".accordion__item");
var AllSliderHorizontItems = document.querySelectorAll(".team__item");


function hideAllMenuTabs(e) {

    allSliderItems.forEach(function (e) {
        e.classList.remove('accordion__item--active');
        
    })

}

function hideAllMenuHorizontTabs() {

    AllSliderHorizontItems.forEach(function (e) {
        e.classList.remove('team__item--active');
        
    })

}


allSliderItems.forEach(function (e) {
    
    e.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllMenuTabs(e);
       
    })

    e.addEventListener('click', function(){
        e.classList.add('accordion__item--active');
    })
      
})

AllSliderHorizontItems.forEach(function (e) {
    
    e.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllMenuHorizontTabs();
       
    })

    e.addEventListener('click', function(){
        e.classList.add('team__item--active');
    })
      
})