// create a listener

// // step 1 find id element
// let myAbout = document.getElementById('myAbout');
// console.log(myAbout);

// // step 2 put listener on it

// myAbout.onclick(function() {
//   let node = document.createElement("p");
//   let textnode = document.createTextNode("My name is Thanhthanh, and I am a 9th "
//   + "grader. I like to read and code, and I am currently trying to find ideas " +
//   "for the next Great American novel. If I'm not reading, coding, or daydreaming, " +
//   "you can likely find me taking a nap.");
//   node.appendChild(textnode);
//   myAbout.appendChild(node);
// })

window.onscroll = function () { myFunction() };

var topNav = document.getElementById("navHeader");
var sticky = topNav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        topNav.classList.add("sticky")
    } else {
        topNav.classList.remove("sticky");
    }
}
