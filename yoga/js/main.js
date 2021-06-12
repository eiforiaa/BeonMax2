//  window.addEventListener('load') //Сейчас страница загружается. И только тогда код выполнится
/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function(){
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for (let i = a; i< tabContent.length; i++) {
             tabContent[i].classList.remove('show'); // удалить класс show
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide'); // удалить класс show
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) {
        let target  = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});