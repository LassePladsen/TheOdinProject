let ask = (question, yes, no) => Boolean(question) ? yes() : no();

ask(
  "Do you agree?",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
);