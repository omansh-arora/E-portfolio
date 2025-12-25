const sectBtn = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');

function setActiveSection(sectionId) {
    if (!sectionId) {
        return;
    }

    sections.forEach((section) => {
        section.classList.remove('active1');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active1');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function PageTransitions(){
    //Button click to navigate to pages or sections
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            const page = this.dataset.page;
            const sectionId = this.dataset.id;
            if(page){
                window.location.href = page;
            } else if (sectionId) {
                setActiveSection(sectionId);
            }

            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }
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
