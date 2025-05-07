
document.body.innerHTML = `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div id="container">
          <h1 id="header"><strong>SOBIE conference newsletter. 📩</strong></h1>
          <h4>Enter your email to subscribe to SOBIE conference for the latest updates.</h4>
          <form>
            <input 
              type="email" 
              class="form-control input-lg" 
              placeholder="Enter your Email 📧" 
              id="mail" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$"
            >
            <button 
              type="button" 
              class="btn btn-lg" 
              id="sign">
              Click here to sign up.
            </button>
          </form>
        </div>
        <p id="finalText"></p>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
`;

function signUp() {
  const mail = document.getElementById("mail").value;
  document.getElementById("container").style.display = "none";
  document.getElementById("finalText").innerHTML =
    "Thank you " + mail + ", you have successfully signed up!";
}


document.getElementById("sign").addEventListener("click", signUp);

function cancel() {
  document.getElementById("container").style.display = "none";
}
