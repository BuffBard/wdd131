
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const guestContainer = document.querySelector("#guestContainer");
const guestCode = document.querySelector("#guestCode");
const studentContainer = document.querySelector("#studentContainer");
const studentID = document.querySelector("#studentID");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = travelRange.value;

  if (value==="guest"){
    guestContainer.hidden=false;
    guestCode.required=true;
  } else {
    guestContainer.hidden=true;
    guestCode.required=false;
  }
  if (value==="student"){
    studentContainer.hidden=false;
    studentID.required=true;
  } else {
    studentContainer.hidden=true;
    studentID.required=false;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const studentID = form.studentID.value.trim();
  const guestCode = form.guestCode.value.trim();

  // Validate the input
  // Looks like the required box gets called first so these are not seen
  // If there were proper codes, these could be used to compare
  if (type === "guest" && guestCode != "EVENT131"){
    output.textContent="Please add a proper guest code.";
    return;
  }
  
  if (type === "student" && studentID.length!=9) {
    output.textContent = "Please add a proper student ID.";
    return;
  }


  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${availableDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          