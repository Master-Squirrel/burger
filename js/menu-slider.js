var allSliderItems = document.querySelectorAll(".accordion__item");
var AllSliderHorizontItems = document.querySelectorAll(".team__item");


function hideAllMenuTabs() {

    allSliderItems.forEach(function (item) {
        console.log(item);
        item.classList.remove('accordion__item--active');
        item.children[1].classList.add('visually-hidden');
      })

}

function hideAllMenuHorizontTabs() {

    AllSliderHorizontItems.forEach(function (e) {
        
        e.classList.remove('team__item--active');
        
    })

}


allSliderItems.forEach(function (item) {
    
    item.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllMenuTabs();
    
       
    })

    item.addEventListener('click', function(){
        item.classList.add('accordion__item--active');
        item.children[1].classList.remove('visually-hidden');
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