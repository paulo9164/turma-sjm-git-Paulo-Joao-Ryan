<script>
function adicionarContacto() {
    let nome = prompt("Nome do contacto:");
    let telefone = prompt("Telefone:");

    if (nome && telefone) {
        let lista = document.getElementById("lista");