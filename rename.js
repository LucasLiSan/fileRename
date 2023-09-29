function renameAndSaveFiles() {
    // Pega o valor do input "RM"
    const rmValue = document.getElementById('rmInput').value;

    // Pega os inputs de arquivo
    const fileInput1 = document.getElementById('fileInput1');
    const fileInput2 = document.getElementById('fileInput2');

    // Renomeia e salva os arquivos
    renameAndSave(fileInput1, 'FichaMatricula.Frente', rmValue);
    renameAndSave(fileInput2, 'FichaMatricula.Verso', rmValue);
}

function renameAndSave(inputElement, label, rmValue) {
    const files = inputElement.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const newName = `${rmValue}.${label}.${i + 1}.${file.name.split('.').pop()}`;
        const blob = new Blob([file], { type: file.type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = newName;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}