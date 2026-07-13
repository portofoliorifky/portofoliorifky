const btn=document.getElementById("themeBtn");
btn.onclick=()=>document.body.classList.toggle("light");

const topBtn=document.getElementById("topBtn");
window.onscroll=()=>{
 topBtn.style.display=window.scrollY>200?"block":"none";
 document.querySelectorAll("section").forEach(s=>{
   if(s.getBoundingClientRect().top<window.innerHeight-100){
      s.animate([{opacity:0,transform:"translateY(30px)"},{opacity:1,transform:"translateY(0)"}],{duration:500,fill:"forwards"});
   }
 });
};
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
window.onload = function () {

    setTimeout(function(){
        document.getElementById("welcomeGif").style.display = "none";
    }, 3000); // Hilang setelah 3 detik

}