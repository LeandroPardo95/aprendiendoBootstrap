const d = document;
export default function menu(){
    const $btn = d.querySelector('.hamburger'),
        $nav = d.querySelector('nav');

        console.log($nav)

        d.addEventListener('click',(e) => {
            console.log($btn)
            if(e.target.matches('.hamburger *')){
                $nav.classList.toggle('is-active');
                $btn.classList.toggle('is-active');
            }
        })

}