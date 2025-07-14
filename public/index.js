const valorantForm = document.getElementById("form-valorant");
const siegeForm = document.getElementById("form-siege");
const csgoForm = document.getElementById("form-csgo");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;

function playerAgeCheck(ageValue) {
  const ageNumber = parseInt(ageValue);
  return !isNaN(ageNumber) && ageNumber >= 16;
}

function showToast(formType, msg, bgColor = "#333") {
  const toast = document.getElementById(`toast-${formType}`);
  toast.innerText = msg;
  toast.style.backgroundColor = bgColor;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 4000);
}

function validateForm(formType, form) {
  let valid = true;

  const teamName = document.getElementById(`${formType}-team-name`);
  const teamNameMsg = document.getElementById(`message-${formType}-teamname`);

  const captainName = document.getElementById(`${formType}-captain-name`);
  const captainMsg = document.getElementById(`message-${formType}-captain`);

  const captainTag = document.getElementById(`${formType}-captain-tag`);
  const captainTagMsg = document.getElementById(`message-${formType}-captaintag`);

  const email = document.getElementById(`${formType}-email`);
  const emailMsg = document.getElementById(`message-${formType}-email`);

  const age = document.getElementById(`${formType}-age`);
  const ageMsg = document.getElementById(`message-${formType}-age`);

  // Player 1
  const player1Name = document.getElementById(`${formType}-player1-name`);
  const player1NameMsg = document.getElementById(`message-${formType}-player1`);
  const player1Tag = document.getElementById(`${formType}-player1-tag`);
  const player1TagMsg = document.getElementById(`message-${formType}-player1tag`);

  // Player 2
  const player2Name = document.getElementById(`${formType}-player2-name`);
  const player2NameMsg = document.getElementById(`message-${formType}-player2`);
  const player2Tag = document.getElementById(`${formType}-player2-tag`);
  const player2TagMsg = document.getElementById(`message-${formType}-player2tag`);

  // Player 3
  const player3Name = document.getElementById(`${formType}-player3-name`);
  const player3NameMsg = document.getElementById(`message-${formType}-player3`);
  const player3Tag = document.getElementById(`${formType}-player3-tag`);
  const player3TagMsg = document.getElementById(`message-${formType}-player3tag`);

  // Player 4
  const player4Name = document.getElementById(`${formType}-player4-name`);
  const player4NameMsg = document.getElementById(`message-${formType}-player4`);
  const player4Tag = document.getElementById(`${formType}-player4-tag`);
  const player4TagMsg = document.getElementById(`message-${formType}-player4tag`);


  // Team Name validation
  if (teamName.value.trim() === "") {
    teamNameMsg.textContent = "Blank team name!";
    valid = false;
  } else if (!nameRegex.test(teamName.value.trim())) {
    teamNameMsg.textContent = "Letters only!";
    valid = false;
  } else {
    teamNameMsg.textContent = "";
  }

  // Captain Name validation
  if (captainName.value.trim() === "") {
    captainMsg.textContent = "Blank name!";
    valid = false;
  } else if (!nameRegex.test(captainName.value.trim())) {
    captainMsg.textContent = "Letters only!";
    valid = false;
  } else {
    captainMsg.textContent = "";
  }

  // Captain Tag validation
  if (captainTag.value.trim() === "") {
    captainTagMsg.textContent = "Blank tag!";
    valid = false;
  } else {
    captainTagMsg.textContent = "";
  }

  // Email validation
  if (email.value.trim() === "") {
    emailMsg.textContent = "Blank email!";
    valid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailMsg.textContent = "Invalid email!";
    valid = false;
  } else {
    emailMsg.textContent = "";
  }

  // Age validation
  if (age.value.trim() === "") {
    ageMsg.textContent = "Blank input!";
    valid = false;
  } else if (!playerAgeCheck(age.value.trim())) {
    ageMsg.textContent = "Age must be 16 or older.";
    valid = false;
  } else {
    ageMsg.textContent = "";
  }

  // Player 1 validation
  if (player1Name.value.trim() === "") {
    player1NameMsg.textContent = "Blank name!";
    valid = false;
  } else if (!nameRegex.test(player1Name.value.trim())) {
    player1NameMsg.textContent = "Letters only!";
    valid = false;
  } else {
    player1NameMsg.textContent = "";
  }

  if (player1Tag.value.trim() === "") {
    player1TagMsg.textContent = "Blank tag!";
    valid = false;
  } else {
    player1TagMsg.textContent = "";
  }

  // Player 2 validation
  if (player2Name.value.trim() === "") {
    player2NameMsg.textContent = "Blank name!";
    valid = false;
  } else if (!nameRegex.test(player2Name.value.trim())) {
    player2NameMsg.textContent = "Letters only!";
    valid = false;
  } else {
    player2NameMsg.textContent = "";
  }

  if (player2Tag.value.trim() === "") {
    player2TagMsg.textContent = "Blank tag!";
    valid = false;
  } else {
    player2TagMsg.textContent = "";
  }

  // Player 3 validation
  if (player3Name.value.trim() === "") {
    player3NameMsg.textContent = "Blank name!";
    valid = false;
  } else if (!nameRegex.test(player3Name.value.trim())) {
    player3NameMsg.textContent = "Letters only!";
    valid = false;
  } else {
    player3NameMsg.textContent = "";
  }

  if (player3Tag.value.trim() === "") {
    player3TagMsg.textContent = "Blank tag!";
    valid = false;
  } else {
    player3TagMsg.textContent = "";
  }

  // Player 4 validation
  if (player4Name.value.trim() === "") {
    player4NameMsg.textContent = "Blank name!";
    valid = false;
  } else if (!nameRegex.test(player4Name.value.trim())) {
    player4NameMsg.textContent = "Letters only!";
    valid = false;
  } else {
    player4NameMsg.textContent = "";
  }

  if (player4Tag.value.trim() === "") {
    player4TagMsg.textContent = "Blank tag!";
    valid = false;
  } else {
    player4TagMsg.textContent = "";
  }

  return valid;
}

function activateBlurEvents(formType) {
  const fields = [
    "team-name",
    "captain-name",
    "captain-tag",
    "email",
    "age",
    "player1-name",
    "player1-tag",
    "player2-name",
    "player2-tag",
    "player3-name",
    "player3-tag",
    "player4-name",
    "player4-tag",
  ];

  fields.forEach((field) => {
    const input = document.getElementById(`${formType}-${field}`);
    const msg = document.getElementById(`message-${formType}-${field.replace(/-/g, "")}`);
    if (!input || !msg) return;

    input.addEventListener("blur", () => {
      validateForm(formType, null);
    });
  });
}

async function handleSubmit(event, formType, form, url) {
  event.preventDefault();

  if (!form.dataset.blurEventsActivated) {
    activateBlurEvents(formType);
    form.dataset.blurEventsActivated = "true";
  }

  if (!validateForm(formType, form)) {
    showToast(formType, "Please fix the errors before submitting.", "#f44336");
    return;
  }

  showToast(formType, "Sending...", "black");

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      form.reset();
      window.location.href = "sending.html";
    } else {
      showToast(formType, "Server error. Try again later.", "#f44336");
    }
  } catch (error) {
    console.error(error);
    showToast(formType, "Connection error. Try again later.", "#f44336");
  }
}

if (valorantForm) {
  valorantForm.addEventListener("submit", (e) =>
    handleSubmit(e, "valorant", valorantForm, "http://localhost:3000/sendValorant")
  );
}

if (siegeForm) {
  siegeForm.addEventListener("submit", (e) =>
    handleSubmit(e, "siege", siegeForm, "http://localhost:3000/sendSiege")
  );
}

if (csgoForm) {
  csgoForm.addEventListener("submit", (e) =>
    handleSubmit(e, "csgo", csgoForm, "http://localhost:3000/sendCsgo")
  );
}
