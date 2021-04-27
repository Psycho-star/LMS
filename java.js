var i=0;
var head = ["OBJECTIVE","OBJECTIVE 1","OBJECTIVE 2","OBJECTIVE 3","OBJECTIVE 4","OBJECTIVE 5",];
var disc = ["Discripton","understand the principles of creating an effective web page, including an in-depth consideration of information architecture",
"develop a web page using HTML and CSS.",
"develop responsive web pages with the help of CSS and Javascript.",
"demonstrate the JavaScript functions and events.",
"construct websites using text, images, links, lists, and tables for navigation and layout"];
function topic(n){
document.getElementById("slide").innerHTML = head[n];
document.getElementById("slidedis").innerHTML=disc[n];
    i=n;
}
function plus(m){
i+=m;
if(i>5){
i=1;}
else if(i<1){
i=5;}
document.getElementById("slide").innerHTML = head[i];
document.getElementById("slidedis").innerHTML=disc[i];
}
function submit(){
    alert("Your Feedback Is Submited Successfully");
    document.getElementById("feed").value='';
}