let profile_menu = document.querySelector('.profile-menu')
let profile_pic = document.querySelector('.profile-pic')
let noti_btn= document.querySelector('.dropdown-notifications')
let noti_menu = document.querySelector('.menu-notifications ')
let mes_btn = document.querySelector('.dropdown-messages')
let mes_menu = document.querySelector('.menu-messages')
let drk_btn = document.querySelector('.dark-btn')

let dropdown = []


mes_btn.addEventListener('click',()=>{
    if (dropdown.length > 0){
        for (let d of dropdown){
            d.classList.remove('open')
            dropdown.pop()
        }
    }
    else{
        mes_menu.classList.add('open')
        dropdown.push(mes_menu)
    }
})
noti_btn.addEventListener('click',function(){
    if (dropdown.length > 0){
        for (let d of dropdown){
            d.classList.remove('open')
            dropdown.pop()

        }
    }
    else{
        noti_menu.classList.add('open');  
        dropdown.push(noti_menu) 
    }
})
profile_pic.addEventListener('click',()=>{
    if (dropdown.length > 0){
        for (let d of dropdown){
            d.classList.remove('open')
            dropdown.pop()

        }
    }
    else{
        profile_menu.classList.add('open')
        dropdown.push(profile_menu)
    }
})

function dark_theme(){
    document.body.classList.toggle('dark-theme')
}