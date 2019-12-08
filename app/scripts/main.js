import Bouncer from "formbouncerjs";
import messages from "./components/formMessages";

let items = [];

const validate = new Bouncer("form", {
  messages: messages,
  // Form Submission
  disableSubmit: true, // If true, native form submission is suppressed even when form validates
  // Custom Events
  emitEvents: true // If true, emits custom events
});
// Detect a successful form validation
document.addEventListener(
  "bouncerFormValid",
  function(e) {
    // The successfully validated form
    const form = e.target;
    // If `disableSubmit` is true, you might use this to submit the form with Ajax
    addItem(form);
  },
  false
);

function addItem(form) {
  let item = {
    id: Date.now(),
    nome: form.elements.name.value,
    email: form.elements.email.value
  };
  items.push(item);
  form.reset();
  localStorage.setItem("Items", JSON.stringify(items));
  printItem(items);
}

const printItem = els => {
  const theItems = els
    .map(item => {
      return `
    <h2>${item.nome}</h2>
    <p>${item.email}</p>
  `;
    })
    .join(" ");

  const container = document.getElementById("container");
  container.innerHTML = theItems;
  document.body.append(container);
};
