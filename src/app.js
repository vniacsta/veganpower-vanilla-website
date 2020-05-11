function thanksForSubscribing() {
  let name = prompt("What's your name?");
  let veganElement = prompt("Are you vegan?");

  veganElement = veganElement.toLowerCase();

  if (veganElement === "yes" || "y") {
    alert(
      `Hi ${name}, so happy to meet a fellow vegan 🌱 thanks for subscribing and have a great healthy day 🥰`
    );
  } else {
    alert(`Thanks for subscribing, ${name} 🥰`);
  }
}

function submitingContactForm() {
  alert(
    "Thanks for getting in touch! Please email me at vania@veganpower.pt 👌"
  );
}

let newsletterElement = document.querySelector(".subscribing-btn");
newsletterElement.addEventListener("click", thanksForSubscribing);

let contactFormElement = document.querySelector(".form-submit-btn");
contactFormElement.addEventListener("click", submitingContactForm);
