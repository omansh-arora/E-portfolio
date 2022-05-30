const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');

const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click acive class
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click',(e)=>{

        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) => {

                btn.classList.remove('active');

            })
            e.target.classList.add('active')
        
            //hide other secions
            sections.forEach((section)=>{

                section.classList.remove('active1')

            })

            const element = document.getElementById(id)
            element.classList.add('active1')
        }

    })

    //Toggle theme
    const themeBtn = document.querySelector(".theme-btn")
    themeBtn.addEventListener('click',()=>{
        let element = document.body
        element.classList.toggle('light-mode')

    })

    const submitBtn = document.querySelector(".main-btn")
    submitBtn.addEventListener('click',()=>{
            

    })
    

 
}


PageTransitions();
