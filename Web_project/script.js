const head1 = document.getElementById("head1");
const head = document.getElementById("head");
const body = document.getElementById("main");
const loader = document.querySelector("#loading");

function fun() {
    head1.style.color=`white`;
    head.style.color=`white`;
    const indianCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Ahmedabad", "Lucknow", "Surat", "Kanpur", "Nagpur","Visakhapatnam","Indore", "Thane", "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana","Coimbatore", "Agra", "Madurai", "Nashik", "Faridabad", "Meerut", "Rajkot","Varanasi", "Srinagar", "Vijayawada"];
    const inp = document.getElementById("inp").value.trim();
    const cityName = inp.charAt(0).toUpperCase() + inp.slice(1).toLowerCase();
if (inp) {
// document.getElementById("inp").value = "";
if (indianCities.includes(cityName)) {
    head1.innerHTML = '';
    displayLoading()
    fetch(`https://api.weatherapi.com/v1/current.json?key=7463a52c5037408b8e0173310232012&q=${cityName}`)
    .then(function(response) {
    return response.json();})
    .then(function(data) {
    setTimeout(()=>{
    hideLoading()
    var temp = data?.current?.feelslike_c
    var weatherCondition = data?.current?.condition?.text
    head.innerHTML=`${cityName}`
    head1.innerHTML = `${temp}°C | ${weatherCondition}`;

    switch (weatherCondition) {
        case 'Sunny':
        body.style.backgroundImage = "url('Sunny.jpg')";
        body.style.backgroundSize = `100%`;
        body.style.backgroundRepeat = `no-repeat`;
        break;
        case 'Cloudy':
        body.style.backgroundImage = "url('Cloudy.jpg')";
        body.style.backgroundSize = `100%`;
        body.style.backgroundRepeat = `no-repeat`;
        break;
        case 'Light rain':
        body.style.backgroundImage = "url('Rainy.jpg')";
        body.style.backgroundSize = `100%`;
        body.style.backgroundRepeat = `no-repeat`;
        break;
        case 'Mist':
        body.style.backgroundImage = "url('Windy.jpg')";
        body.style.backgroundSize = `100%`;
        body.style.backgroundRepeat = `no-repeat`;
        break;
        case 'Thundery outbreaks possible':
        body.style.backgroundImage = "url('Stormy.jpg')";
        body.style.backgroundSize = `100%`;
        body.style.backgroundRepeat = `no-repeat`;
        break;
        case 'Heavy snow':
        body.style.backgroundImage = "url('Snowy.jpg')";
        body.style.backgroundSize = `100%`;
        body.style.backgroundRepeat = `no-repeat`;
        break;
        default:
            body.style.backgroundImage = "url('/Web_project/background1.jpg')";
            body.style.backgroundSize = `100%`;
            body.style.backgroundRepeat = `no-repeat`;  
    }
},300);
    // const body = document.getElementById("main");
    // body.style.backgroundImage = `url('${data?.current?.condition?.icon}')`;
    // body.style.backgroundSize = `100%`;
    // body.style.backgroundRepeat = `no-repeat`;
  });
// const temp = Math.floor(Math.random() * 40);
// const weather = ["Cloudy", "Rainy", "Sunny","Windy","Stormy","Snowy"];
// const weatherCondition = weather[Math.floor(Math.random() * weather.length)];
// const head = document.getElementById("head");
// head.innerHTML = `${cityName}`;
// head.style.color = `white`;
// head1.style.color = `white`;
}
else{
    window.alert("Please enter a valid Indian city name.");
}
} else {
window.alert("Please enter the input");
}
}

// show loading
function displayLoading() {
    loader.classList.add("display");
}

// hide loading 
function hideLoading() {
    loader.classList.remove("display");
}

//Contact js
function saver(){
    var user_name = document.getElementById("name").value
    var user_mail = document.getElementById("email").value
    var user_msg = document.getElementById("message").value
    localStorage.setItem("user_name",user_name);
    localStorage.setItem("user_mail",user_mail);
    localStorage.setItem("user_msg",user_msg);
}

//Login js
let pass = document.getElementById("pass");
let email=document.getElementById("email")
let img=document.querySelector("img")
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");

function rotate()
{
    let b=pass.getAttribute("type","password");
    console.log(b);
        if(b=="password"){
            pass.setAttribute("type","type")
        }
        else{
            pass.setAttribute("type","password")
        }
        img1.classList.toggle("rot")
        img1.classList.toggle("rotrev")
        img2.classList.toggle("rot2")
        img2.classList.toggle("rot2rev")
}
function validation1(){
    let email1 = email.value;
    let pass1 = pass.value;
    email.value="";
    pass.value="";
    var validEmail=localStorage.getItem("Email");
    var validPass=localStorage.getItem("Pass");
    if(validEmail==email1 && validPass==pass1){
      window.alert("Login Successful");
    }
    else{
      window.alert("Login Unsuccessful check Your Email and Password");
    }
    
}

//Signup js
let name1 = document.getElementById("name");
let phone1 = document.getElementById("phone");
let email1 = document.getElementById("email1");
let pass1 = document.getElementById("pass1");
let cnpass1 = document.getElementById("cnpass");

  
function getValue() {
  nameValue=name1.value;
  phoneValue = phone1.value;
  emailValue = email1.value;
  passValue = pass1.value;
  cnpassValue = cnpass1.value;
  if(nameValue){
    if (nameValue == "") {
      setError(name1, "Please Don't leave empty");
    } else if (nameValue.length < 3 || nameValue.length > 20) {
      setError(name1, "Invalid Input");
    } else {
      setSuccess(name1);
    }
  }
  if (phoneValue) {
    if (phoneNumCondition(phoneValue)) {
      setSuccess(phone1);
    } else {
      setError(phone1, "Invalid Phone Number");
    }
  }
  if (emailValue) {
    if (emailCondition(emailValue)) {
      setSuccess(email1);
    } else {
      setError(email1, "Invalid email ID");
    }
  }
  if (passValue) {
    if (passwordCondition(passValue)) {
      setSuccess(pass1);
    } else {
      setError(pass1, "Invalid Password");
    }
  }
}

function validation() {
  let name2 = name1.value.trim();
  let phone2 = phone1.value.trim();
  let email2 = email1.value.trim();
  let pass2 = pass1.value.trim();
  let cnpass2 = cnpass1.value.trim();

  if(phoneNumCondition(phone2)==true && emailCondition(email2)==true && passwordCondition(pass2)==true && cnPasswordCondition(cnpass2)==true){
  //Session Storage
  localStorage.setItem("Name",name2);
  localStorage.setItem("Phone",phone2);
  localStorage.setItem("Email",email2);
  localStorage.setItem("Pass",cnpass2);
}

  if (name2 == "") {
      setError(name1, "Please Don't leave empty");
    } else if (name2.length < 3 || name2.length > 20) {
      setError(name1, "Invalid Input");
    } else {
      setSuccess(name1);
    }

  if (phone2 == "") {
    setError(phone1, "Please Don't leave empty");
  } else if (!phoneNumCondition(phone2)) {
    setError(phone1, "Invalid phone number");
  } else {
    setSuccess(phone1);
  }

  if (email2 == "") {
    setError(email1, "Please Don't leave empty");
  } else if (!emailCondition(email2)) {
    setError(email1, "Invalid email ID");
  } else {
    setSuccess(email1);
  }

  if (pass2 == "") {
    setError(pass1, "Please Don't leave empty");
  } else if (!passwordCondition(pass2)) {
    setError(pass1, "Invalid Password");
  } else {
    setSuccess(pass1);
  }

  if (cnpass2 == "") {
    setError(cnpass1, "Please Don't leave empty");
  } else if (pass2 != cnpass2) {
    setError(cnpass1, "Password Dosen't matched");
  } else {
    setSuccess(cnpass1);
  }
}
function phoneNumCondition(input) {
  let regExp = /^[6-9]{1}[0-9]{9}$/;
  let val1 = regExp.test(input);
  return val1;
}
function emailCondition(input) {
  let regExp = /^[a-z 0-9._]+@gmail.com$/;
  let val2 = regExp.test(input);
  return val2;
}
function passwordCondition(input) {
  let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let val3 = regExp.test(input);
  return val3;
}
function cnPasswordCondition(input) {
  let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  let val4 = regExp.test(input);
  return val4;
}

function setError(input, msg) {
  let parent = input.parentElement;
  parent.querySelector("small").innerText = msg;
  parent.classList.add("error");
  parent.classList.remove("success");
}
function setSuccess(input) {
  let parent = input.parentElement;
  parent.classList.add("success");
  parent.classList.remove("error");
}
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});