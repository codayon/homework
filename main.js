let fullNameInput = document.getElementById("fullName");
let commentInput = document.getElementById("comment");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let inject = document.getElementById("inject");
let warning = document.getElementById("warning");
let array = [];

function display() {
  inject.innerHTML = "";
  array.forEach((item) => {
    inject.innerHTML += `<div class="info"><h3>${item.fullName}</h3><p>${item.comment}</p></div>`;
  });
}

submit.addEventListener("click", () => {
  let fullNameValue = fullNameInput.value.trim();
  let commentValue = commentInput.value.trim();
  if (fullNameValue === "" || commentValue === "") {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
    array.push({
      fullName: fullNameInput.value,
      comment: commentInput.value,
    });
    display();
    fullNameInput.value = "";
    commentInput.value = "";
  }
});

reset.addEventListener("click", () => {
  inject.innerHTML = "";
  array = [];
  fullNameInput.value = "";
  commentInput.value = "";
  warning.style.display = "none";
});
