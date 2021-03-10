//converter  scripts

document
  .getElementById("converterForm")
  .addEventListener("submit", function (e) {
    //   hide results
    document.getElementById("results").style.display = "none";

    // show loader
    document.getElementById("loading-gif").style.display = "block";

    setTimeout(calculateResult, 2000);

    e.preventDefault();
  });

//calculate results
function calculateResult() {
  // html variables
  const yardAmount = document.getElementById("yardamount");

  const metreAmount = document.getElementById("metreamount");

  const yardInput = parseFloat(yardAmount.value) * 0.9144;

  if (isFinite(yardInput)) {
    metreAmount.value = yardInput;

    //   show results
    document.getElementById("results").style.display = "block";

    // hide loader
    document.getElementById("loading-gif").style.display = "none";
  } else {
    // show error
    showError("Please Input a Number");
  }
}

// show error
function showError(error) {
  //   hide results
  document.getElementById("results").style.display = "none";

  // hide loader
  document.getElementById("loading-gif").style.display = "none";
  //   create a div
  const errorDiv = document.createElement("div");

  //get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //create class
  errorDiv.className = "alert alert-danger";

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 2s
  setTimeout(clearError, 2000);
}

// clear error
function clearError() {
  document.querySelector(".alert").remove();
}
