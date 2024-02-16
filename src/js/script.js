/*-----------------------------------------translate----------------------------------------*/
const select = document.querySelector('.changeLang');
const allLang = ['en', 'ru', 'ua'];
const aboutMe__skills_item = document.querySelectorAll('.aboutMe__skillsItem');
const resume__item = document.querySelectorAll('.resume__item');
const skills__item = document.querySelectorAll('.skills__item');
const skills__progress_item = document.querySelectorAll('.skills__progressItem');
const price__item = document.querySelectorAll('.price__item');

/* let name_required = "Пожалуйста введите свое имя", 
    name_length = "Введите 2 символов", 
    email_required = "Пожалуйста, введите свою почту", 
    email_email = "Неправильно введен адрес почты", 
    policy_required = "Пожалуйста, подтвердите свое согласие"; */

select.addEventListener('change', changeURLLang);

function changeURLLang(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLang(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    //console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    for(let key in langSect){
        let elems = document.querySelectorAll('.' + key + '_lang');
        for(let i = 0; i < elems.length; i++){
            if(elems[i]){
                elems[i].innerHTML = langSect[key][hash];
            }
        }
    }
    //document.querySelector('.promo__subtitle_lang').innerHTML = langArr['promo__subtitle'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.' + key + '_lang');
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }

    for(let i = 0; i < aboutMe__skills_item.length; i++){
        for(let key in langAboutMeSkills[i]){
            let title = document.querySelectorAll('.' + key + '_lang');
            let text = document.querySelectorAll('.' + key + '_lang');
            if(title[i] && text[i]){
                title[i].innerHTML = langAboutMeSkills[i][key][hash];
                text[i].innerHTML = langAboutMeSkills[i][key][hash];
            }
        }
    }

    for(let i = 0; i < resume__item.length; i++){
        for(let key in langResume[i]){
            let title = document.querySelectorAll('.' + key + '_lang');
            let location = document.querySelectorAll('.' + key + '_lang');
            let text = document.querySelectorAll('.' + key + '_lang');
            if(title[i] && location[0] && text[i]){
                title[i].innerHTML = langResume[i][key][hash];
                location[i].innerHTML = langResume[i][key][hash];
                text[i].innerHTML = langResume[i][key][hash];
            }
        }
    }

    for(let i = 0; i < skills__item.length; i++){
        for(let key in langSkills[i]){
            let desc = document.querySelectorAll('.' + key + '_lang');
            if(desc[i]){
                desc[i].innerHTML = langSkills[i][key][hash];
            }
        }
    }

    for(let i = 0; i < skills__progress_item.length; i++){
        for(let key in langSkillsProgress[i]){
            let title = document.querySelectorAll('.' + key + '_lang');
            if(title[i]){
                title[i].innerHTML = langSkillsProgress[i][key][hash];
            }
        }
    }

    for(let i = 0; i < price__item.length; i++){
        for(let key in langPrice[i]){
            let title = document.querySelectorAll('.' + key + '_lang');
            let cost = document.querySelectorAll('.' + key + '_lang');
            let desc = document.querySelectorAll('.' + key + '_lang');
            if(title[i] && cost[i] && desc[i]){
                title[i].innerHTML = langPrice[i][key][hash];
                cost[i].innerHTML = langPrice[i][key][hash];
                desc[i].innerHTML = langPrice[i][key][hash];
            }
        }
    }

    /* name_required = langError['name_required'][hash];
    name_length = langError['name_length'][hash];
    email_required = langError['email_required'][hash];
    email_email = langError['email_email'][hash];
    policy_required = langError['policy_required'][hash]; */
}

changeLang();

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
/* const inputs = document.querySelectorAll('.inputField');
const validator = new JustValidate(document.querySelector('.contacts__form'));

validator
    .addField(document.querySelector('.contacts__name input'),[
        {
            rule: 'required',
            errorMessage: name_required,
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: name_length,
        }
    ],
    {
        errorFieldCssClass: ['form__errorInput'],
        errorLabelCssClass: ['form__errorMessage'],
    })
    .addField(document.querySelector('.contacts__email input'),[
        {
            rule: 'required',
            errorMessage: email_required,
        },
        {
            rule: 'email',
            errorMessage: email_email,
        }
    ],
    {
        errorFieldCssClass: ['form__errorInput'],
        errorLabelCssClass: ['form__errorMessage'],
    })
    .addField(document.querySelector('.contacts__bottom input'),[
        {
            rule: 'required',
            errorMessage: policy_required,
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
    }); */

/*---------------------------------fadeIn/fadeOut------------------------------*/
function fadeIn(modal, time, disp){
    modal.style.opacity = 0;
    modal.style.display = disp || 'block';
    modal.style.transition = `${time}ms opacity`;
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 10);
}

function fadeOut(modal, time){
    modal.style.opacity = 1;
    modal.style.transition = `${time}ms opacity`;
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, time);
}

/*--------------------------------pageup----------------------------------------------*/
window.addEventListener('scroll', function(){
    if(this.scrollY > 1600){
        if(document.querySelector('.pageup').style.display != 'block'){
            fadeIn(document.querySelector('.pageup'), 400);
        }
    } else{
        if(document.querySelector('.pageup').style.display != 'none'){
            fadeOut(document.querySelector('.pageup'), 400);
        }
    }
});

/*-------------------------------------------animate--------------------------------------*/
new WOW().init();