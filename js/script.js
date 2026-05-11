function getInfo(){
      
    //alert("Testing for getInfo");
    let name = prompt("Enter Your Name: ");
    let favFood = prompt("Your Favourite Food: ");

    if(name == "" || favFood == "") {
      document.getElementById("secId").innerHTML=
    `<h2>Input Empty </h2>`
    }
    else {
          document.getElementById("secId").innerHTML=
          `<h2>My Name is ${name}. I like ${favFood}</h2>`

    }
}