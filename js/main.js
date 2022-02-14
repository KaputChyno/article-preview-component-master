document.addEventListener('DOMContentLoaded', function(){
    let bouton_share = document.querySelector('.share_card');

    bouton_share.addEventListener('click', function(){
        this.classList.toggle('active');
    });
});