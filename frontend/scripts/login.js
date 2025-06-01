document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = this.email.value;
  const senha = this.senha.value;

  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const data = await res.json();

  if (res.ok) {
    // Redireciona ao painel
    window.location.href = "./painel.html";
  } else {
    document.getElementById("msgErro").innerText = data.msg;
  }
});