const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", function () {
    // input-un növünü dəyiş
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // ikonun görünüşünü dəyiş (göz və ya göz-bağlı)
    this.classList.toggle("fa-eye-slash");
  });document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Forma göndərilməsini bloklayır
  
    // Əgər yoxlama keçibsə (istəyə görə əlavə edə bilərsiniz)
    // Məsələn: istifadəçi adı və şifrə yoxlaması
  
    // Yönləndir
    window.location.href = 'table/table.html';
  });
  