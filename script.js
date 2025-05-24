const input = document.querySelector(".dob");

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  if (input.value == "") {
    alert("enter your date of birth");
  } else {
    //birth year date
    const today = new Date();
    const birthdate = new Date(input.value);

    const year = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    const day = today.getDate() - birthdate.getDate();
    console.log(year);

    result.innerHTML = `your age is ${year} years !! ${month} months !! ${day} days`;
  }
});
