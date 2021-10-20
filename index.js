'use strict'

var topProfileBtn = document.getElementById('inner_profile_btn');
var sideBarList = document.getElementById('list_menu');
var sidebarAccordion = Array.from(sideBarList.querySelectorAll('.list-side'))



topProfileBtn.addEventListener('click', function(){
    var topProfileBox = document.getElementById('out_profile');
    var caret = this.querySelector('.icon__');
    
    caret.classList.toggle('active__')
    topProfileBox.classList.toggle('shown_')
})

sidebarAccordion.forEach(function(list){
    var accordionPanel = list.querySelector('.div_box')
    if(accordionPanel){
        var icon = list.querySelector('.cion')
        list.addEventListener('click', function(){
            accordionPanel.classList.toggle('show__')
            icon.classList.toggle('active__')
        })
    }
})