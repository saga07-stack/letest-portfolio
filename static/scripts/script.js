// alert('hello')

$(function(){
    $('#carousel').slick({
        dots: true,
        initialSlide: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        // swipe: true
        centerMode: true,
        swipeToSlide: true,
        arrows: false,
        adaptiveHeight: true,
        infinite: true
    })
})

let button = document.querySelector('button');
button.addEventListener('click', ()=>console.log('hello') );

document.querySelectorAll('.navLinks').forEach(link => 
    link.addEventListener('click', (e)=>{
        document.querySelectorAll('.navLinks')
        .forEach( link => link.classList.remove('activeNavLink'))
        e.target.classList.add('activeNavLink');
}))


document.querySelector('#leave-me-your-info-form').addEventListener('submit', (e)=>handleFormSubmission(e))

function handleFormSubmission(e){
    e.preventDefault();
    let name = e.target.name.value
    let email = e.target.email.value
    let subject = e.target.subject.value
    let message = e.target.message.value
    console.log(`\x1b[94mFull Name: ${name}\nE-Mail: ${email}\nSubject: ${subject}\nMessage: ${message} \x1b[0m`);
    alert('Information Submitted.')
}

