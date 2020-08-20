window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.about__tab'),
          tabsContent = document.querySelectorAll('.about__content'),
          tabsParent = document.querySelector('.about__tabs');

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('about__tab_active');
        })
    
    }

    function showTabContent (i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('about__tab_active');
    }
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('about__tab')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })

    
})