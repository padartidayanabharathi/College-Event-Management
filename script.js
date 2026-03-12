function toggleMenu(){

let menu=document.getElementById("menu");

menu.style.width = menu.style.width==="200px" ? "0":"200px";

}

function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

document.getElementById(id).classList.add("active");
/* close menu automatically */
document.getElementById("menu").style.width="0";


}

function closeEvent(){
  document.getElementById("eventPopup").style.display="none";
}
function showDetails(event) {
  let title = '';
  let text = '';

  if(event === 'coding') {
    title = 'Coding Contest';
    text = 'Test your coding skills! Cash prize: ₹5000. Venue: Lab 101. Timing: 10 AM - 1 PM.';
  } else if(event === 'dance') {
    title = 'Dance Battle';
    text = 'Show your moves on stage! Cash prize: ₹3000. Venue: Main Auditorium. Timing: 2 PM - 5 PM.';
  } else if(event === 'music') {
    title = 'Music Show';
    text = 'Sing or play your instruments! Cash prize: ₹4000. Venue: Music Room. Timing: 4 PM - 7 PM.';
  } else if(event === 'photo') {
    title = 'Photography';
    text = 'Capture amazing moments! Best photo prize: ₹2000. Venue: Campus Grounds. Timing: 9 AM - 5 PM.';
  } else if(event === 'sing') {
    title = 'Singing';
    text = 'Showcase your singing talent! Cash prize: ₹3500. Venue: Auditorium. Timing: 3 PM - 6 PM.';
  } else if(event === 'quiz') {
    title = 'Quiz';
    text = 'Test your knowledge! Cash prize: ₹2500. Venue: Seminar Hall. Timing: 11 AM - 2 PM.';
  }
else if(event === 'Football') {
    title = 'Football Tournament';
    text = 'Inter-college football tournament. Prize: Trophy & ₹3000. Venue: Main Ground. Timing: 2 PM - 5 PM.';
  } else if(event === 'Badminton') {
    title = 'Badminton Match';
    text = 'Knockout badminton matches. Cash prize: ₹2500. Venue: Badminton Court. Timing: 11 AM - 2 PM.';
  } else if(event === 'Cricket') {
    title = 'Cricket Match';
    text = 'Friendly cricket match between departments. Prize: ₹2000. Venue: Cricket Ground. Timing: 9 AM - 1 PM.';
  }
  document.getElementById('popupTitle').innerText = title;
  document.getElementById('popupText').innerText = text;
  document.getElementById('popup').style.display = 'flex';
}

function closeSportsDetails() {
    document.getElementById("guestPopup").style.display = "none";
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function addWishlist(name){

let ul=document.getElementById("wish");

let li=document.createElement("li");

li.innerHTML=name+" ❌";

li.onclick=function(){li.remove();}

ul.appendChild(li);

alert(name + " added to wishlist");

}


function showMenu(stall){

let box=document.getElementById("menuDetails");

if(stall==="biryani"){

box.innerHTML="Chicken Biryani ₹150 <br> Veg Biryani ₹120";

}

if(stall==="burger"){

box.innerHTML="Cheese Burger ₹100 <br> Veg Burger ₹80";

}
if(stall==="pizza"){

box.innerHTML="Cheese Pizza ₹200 <br> Choclate Pizza ₹300";

}
if(stall==="ice"){

box.innerHTML="Vanilla ₹100 <br> Chocolate ₹80 <br> Strawberry ₹180 <br> Butterscotch ₹200 <br>" ;

}

}
function showGuest(id){

let name="";
let details="";

if(id=="guest1"){
name="Dr. Rajesh Kumar";
details="AI Research Scientist from IIT Hyderabad. Specializes in Machine Learning and Data Science.";
}

if(id=="guest2"){
name="Priya Sharma";
details="Founder of TechSpark Startup. Works in innovation and entrepreneurship.";
}

if(id=="guest3"){
name="Arjun Reddy";
details="Senior Software Architect at Infosys. Expert in Cloud Computing and System Design.";
}

document.getElementById("guestName").innerText=name;
document.getElementById("guestDetails").innerText=details;

document.getElementById("guestPopup").style.display="flex";

}

function closeGuest(){
document.getElementById("guestPopup").style.display="none";
}