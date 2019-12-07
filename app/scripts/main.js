import Bouncer from "formbouncerjs";
import messages from "./components/formMessages";

var validate = new Bouncer("form", {
  messages: messages,
  // Form Submission
  disableSubmit: true, // If true, native form submission is suppressed even when form validates

  // Custom Events
  emitEvents: true // If true, emits custom events
});

// Detect a successful form validation
document.addEventListener(
  "bouncerFormValid",
  function(event) {
    // The successfully validated form
    var form = event.target;

    console.log(form);
    // If `disableSubmit` is true, you might use this to submit the form with Ajax
  },
  false
);