const BUSINESS_EMAIL="johnpro5540@gmail.com";
const menuBtn=document.querySelector(".menu-btn"),
nav=document.querySelector("#nav-links");

if(menuBtn){
  menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
}

document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();

  const d=new FormData(this);

  const subject=encodeURIComponent("Career Services Inquiry");

  const body=encodeURIComponent(
    `Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\nMessage:\n${d.get("message")}`
  );

  window.location.href=
    `https://mail.google.com/mail/?view=cm&fs=1&to=${BUSINESS_EMAIL}&su=${subject}&body=${body}`;
});
