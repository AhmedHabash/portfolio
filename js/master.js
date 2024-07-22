// let em = document.querySelector("[name = email]");
// console.log(em)
// document.forms[0].onsubmit = function (e) {
//    let emailvalid = false;
//   if (em.value != "" && em.value.length <= 20) {
//     emailvalid = true;
//   }
//   if (emailvalid === false) {
//     e.preventDefault();
//   }
// };

let email_fild = document.querySelector(" [name=email] ");
let full_name = document.querySelector("[name = fullname]");

document.forms[0].onsubmit = function (e) {
  let valid_name = false;
  let valid_email = false;
  if (full_name.value != "") {
    valid_name = true;
  }
  if (email_fild.value != "" && email_fild.value.length <= 25) {
    valid_email = true;
  }
  if (valid_name === false || valid_email === false) {
    e.preventDefault();
  }
};
