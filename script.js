let menuIconEl=document.querySelector('#menu-icon');
let navbarEl=document.querySelector('.navbar');
let sectionsEls=document.querySelectorAll('section');
let navLinksEls=document.querySelectorAll('header nav a');
let fromEmailEl=document.getElementById("email").value;


window.onscroll=()=>{
    sectionsEls.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinksEls.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIconEl.onclick=()=>{
    menuIconEl.classList.toggle('fa-x');
    navbarEl.classList.toggle('active');
}


// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "stepansidorov3234@gmail.com",
//         Password : "",
//         To : 'stepansidorov3234@gmail.com',
//         From : fromEmailEl,
//         Subject : "New Contact Form Enquiry",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }