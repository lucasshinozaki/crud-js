var selectedRow = null

function registrar() {
    if (validate()) {
        var formDados =  lendoDados();
        if (selectedRow == null)
            insertNewRecord(formDados);
        else
            updateRecord(formDados);
        resetForm();
    }
}

function lendoDados() {
    var formDados = {};
    formDados["nome"] = document.getElementById("nome").value;
    formDados["salario"] = document.getElementById("salario").value;
    formDados["cidade"] = document.getElementById("cidade").value;
    return formDados;
}

function insertNewRecord(dados) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = dados.nome;
    cell3 = newRow.insertCell(1);
    cell3.innerHTML = dados.salario;
    cell4 = newRow.insertCell(2);
    cell4.innerHTML = dados.cidade;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("salario").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.salario;
    selectedRow.cells[2].innerHTML = formData.cidade;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("ValidandoNome").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("ValidandoNome").classList.contains("hide"))
            document.getElementById("ValidandoNome").classList.add("hide");
    }
    return isValid;
}