const fileInputs = [];
const fileLabels = [];

function newOpts (){
    var nInputs = document.getElementById("qtdM").value;
    const display = document.getElementById("displayData");
    
    let inpt = "";
    let inptContador = 3;
    while (nInputs > 0) {
        inpt += '<input type="text" for="fileInput${inptContador}" id="fileLabel${inptContador}" class="label"> <input type="file" id="fileInput${inptContador}" multiple><br>';

        fileInputs.push(document.getElementById(`fileInput${inptContador}`));
        fileLabels.push(document.getElementById(`fileLabel${inptContador}`)).value;

        inptContador ++;
        nInputs --;
    }
    display.innerHTML = inpt;

}

function renameAndSaveFiles() {
    // Pega o valor do input "RM"
    const denoValue = document.getElementById('denominador').value;

    for (let i = 0; i < fileInputs.length; i++) {
        renameAndSave(fileInputs[i], fileLabels[i], denoValue);
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
    }
}



    //<div class="content-item">
    //    <input type="text" for="fileInput2" class="label">
    //    <input type="file" id="fileInput2" multiple><br>
    //</div>