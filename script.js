const input = document.querySelector(".dob");

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const substraction = function (a, b) {
  if (a > b) {
    return a - b;
  } else if (a < b) {
    return b - a;
  } else {
    return 0;
  }
};

btn.addEventListener("click", function () {
  const today = new Date();
  const birthdate = new Date(input.value);

  //current date..
  let y2 = today.getFullYear();
  let m2 = today.getMonth();
  let d2 = today.getDate();
  //birth date...
  let y1 = birthdate.getFullYear();
  let m1 = birthdate.getMonth();
  let d1 = birthdate.getDate();

  if (input.value == "") {
    alert("enter your date of birth");
  } else {
    //how old are you
    const year = y2 - y1;
    const month = substraction(m2, m1);
    const day = substraction(d1, d2);

    result.innerHTML = `your age is ${year} years !! ${month} months !! ${day} days`;
  }
});
