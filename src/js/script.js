/*------------------------------promo_humburger-------------------------------------------*/
document.querySelector('.hamburger').addEventListener('click', function(){
    document.querySelector('.menu').classList.add('active');
});

document.querySelector('.menu__close').addEventListener('click', function(){
    document.querySelector('.menu').classList.remove('active');
});

/*-------------------------------------percents_skills------------------------------------*/
const percs = document.querySelectorAll('.skills__progressPerc'),
      progBars = document.querySelectorAll('.skills__progressBar span');

percs.forEach((item, i) =>{
    progBars[i].style.width = item.innerHTML;
});

/*------------------------------------contacts_validate-------------------------------------*/
const inputs = document.querySelectorAll('.inputField');
const validator = new JustValidate(document.querySelector('.contacts__form'));

validator
    .addField(document.querySelector('.contacts__name input'),[
        {
            rule: 'required',
            errorMessage: 'Пожалуйста введите свое имя',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Введите 2 символов',
        }
    ],
    {
        errorFieldCssClass: ['form__errorInput'],
        errorLabelCssClass: ['form__errorMessage'],
    })
    .addField(document.querySelector('.contacts__email input'),[
        {
            rule: 'required',
            errorMessage: 'Пожалуйста, введите свою почту',
        },
        {
            rule: 'email',
            errorMessage: 'Неправильно введен адрес почты',
        }
    ],
    {
        errorFieldCssClass: ['form__errorInput'],
        errorLabelCssClass: ['form__errorMessage'],
    })
    .addField(document.querySelector('.contacts__bottom input'),[
        {
            rule: 'required',
            errorMessage: 'Пожалуйста, подтвердите свое согласие',
        }
    ],
    {
        errorLabelCssClass: ['policy__errorMessage'],
    })
    .onSuccess(function(e){
        e.preventDefault();
        fetch('mailer/smart.php',{
            method: 'POST',
            body: new FormData(document.querySelector('.contacts__form')),
        }).then(function(){
            for(let i = 0; i < inputs.length; i++){
                inputs[i].value = '';
            }
            document.querySelector('.contacts__bottom input').checked = false;
        });
        return false;
    });