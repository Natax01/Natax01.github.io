let doc_header = document.querySelector('header'),
doc_nav = document.querySelector('nav');

window.addEventListener('scroll',function() {
    if(window.scrollY < 50){
        doc_header.classList.remove("active");
    }else{
        doc_header.classList.add("active");
    }
});
function open_nav() {
    doc_nav.classList.add('active');
}
function close_nav(){
    doc_nav.classList.remove("active");
}
let in_post = false;
let doc_art = document.querySelector('.arti');
if(in_post){
    doc_art.classList.add("post-view");
}