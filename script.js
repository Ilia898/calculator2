function appendOperation(operation) {
  document.querySelector(".displayArea").innerHTML += operation;
}

function calculateResult() {
  const container = document.querySelector(".displayArea");
  const result = eval(container.innerHTML);
  container.innerHTML = result;
}

function precentOperation() {
  const container = document.querySelector(".displayArea");
  const value = parseFloat(container.innerHTML) / 100;
  container.innerHTML = value;
}

function deleteAll() {
  const container = document.querySelector(".displayArea");

  container.innerHTML = "";
}

function deleteLast() {
  const container = document.querySelector(".displayArea");

  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}
