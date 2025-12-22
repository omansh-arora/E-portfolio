const sectBtn = document.querySelectorAll('.control');

function PageTransitions(){
    //Button click to navigate to pages
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            const page = this.dataset.page;
            if(page){
                window.location.href = page;
            }
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Toggle theme
    const themeBtn = document.querySelector(".theme-btn")
    themeBtn.addEventListener('click',()=>{
        let element = document.body
        element.classList.toggle('light-mode')
        // Save theme preference to localStorage
        if(element.classList.contains('light-mode')){
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.setItem('theme', 'dark-mode');
        }
    })

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        document.body.classList.add(savedTheme);
    }
}

PageTransitions();
