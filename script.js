// ===== Time-based Greeting =====
window.onload = function () {
    const greeting = document.getElementById("greeting");
    if (greeting) {
        const hour = new Date().getHours();
        if (hour < 12) greeting.textContent = "Good Morning, Founder!";
        else if (hour < 18) greeting.textContent = "Good Afternoon, Founder!";
        else greeting.textContent = "Good Evening, Founder!";
    }
};

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Newsletter Email Validation =====
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("newsletterEmail").value;
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
            document.getElementById("newsletterEmail").value = "";
        }
    });
}

// ===== Login / Logout System =====
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        localStorage.setItem("loggedIn", "true");
        alert("You are now logged in!");
        window.location.href = "dashboard.html";
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        alert("You have been logged out.");
        window.location.href = "index.html";
    });
}



// ===== Dashboard Access Check =====
if (window.location.pathname.includes("dashboard.html")) {
    if (!localStorage.getItem("loggedIn")) {
        document.getElementById("dashboardContent").style.display = "none";
        document.getElementById("accessDenied").style.display = "block";
    }
}
// Easter egg to open hidden philosophy page
let logoClickCount = 0;

document.getElementById("logo").addEventListener("click", function() {
    logoClickCount++;
    if (logoClickCount === 3) { // triple click
        document.getElementById("secretLink").click();
        logoClickCount = 0; // reset counter after opening
    }
});

(function(){
  var btn = document.getElementById('subscribeBtn');
  if (!btn) return;

  btn.addEventListener('click', function(e){
    e.preventDefault && e.preventDefault();

    var emailEl = document.getElementById('newsletterEmail');
    var email = emailEl ? emailEl.value.trim() : '';

    if (!email) {
      alert('Please enter your email address.');
      emailEl && emailEl.focus();
      return;
    }

    var at = email.indexOf('@');
    if (at < 2 || email.indexOf('.') < at + 2) {
      alert('Please enter a valid email address.');
      emailEl && emailEl.focus();
      return;
    }

    alert('✅ Thank you for subscribing!');
    if (emailEl) emailEl.value = '';
  });
})();

