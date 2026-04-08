<script>
function adicionarContacto() {
    let nome = prompt("Nome do contacto:");
    let telefone = prompt("Telefone:");

    if (nome && telefone) {
        let lista = document.getElementById("lista");

        let novo = document.createElement("div");
        novo.classList.add("contacto");

         novo.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
        `;



