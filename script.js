let fileInputs = [];
let fileLabels = [];

function newOpts() {
    const nInputs = parseInt(document.getElementById("qtdM").value, 10);
    const display = document.getElementById("displayData");

    let inpt = "";

    for (let i = 1; i <= nInputs; i++) {
        inpt += `<input type="text" id="fileLabel${i}" class="label"> <input type="file" id="fileInput${i}" multiple><br>`;
    }

    fileInputs = [];
    fileLabels = [];

    display.innerHTML = inpt;
}

function renameAndSaveFiles() {
    const denoValue = document.getElementById('denominador').value;

    for (let i = 1; i <= fileInputs.length; i++) {
        const inputElement = document.getElementById(`fileInput${i}`);
        const labelElement = document.getElementById(`fileLabel${i}`);

        if (inputElement.files.length > 0) {
            const label = labelElement.value;
            renameAndSave(inputElement, label, denoValue);
        }
    }
}

function renameAndSave(inputElement, label, denoValue) {
    const files = inputElement.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const newName = `${denoValue}.${label}.${i + 1}.${file.name.split('.').pop()}`;
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
        console.log(newName);
    }
}