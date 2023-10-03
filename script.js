let inputCount = 0;

        function addFileInput() {
            inputCount++;
            const dynamicInputs = document.getElementById('dynamicInputs');
            const newInput = document.createElement('div');
            newInput.innerHTML = `<label for="fileInput${inputCount}">Nome do Arquivo ${inputCount}:</label>
                                  <input class="nomes" type="text" id="fileNameInput${inputCount}" placeholder="Digite o nome do arquivo">
                                  <input type="file" id="fileInput${inputCount}" multiple><br>`;
            dynamicInputs.appendChild(newInput);
        }

        function renameAndSaveFiles() {
            // Pega o valor do input "RM"
            const rmValue = document.getElementById('rmInput').value;

            for (let i = 1; i <= inputCount; i++) {
                const fileNameInput = document.getElementById(`fileNameInput${i}`);
                const inputElement = document.getElementById(`fileInput${i}`);
                const fileName = fileNameInput.value || `Arquivo${i}`; // Use o valor do campo de entrada ou um nome padrão

                renameAndSave(inputElement, fileName, rmValue);
            }
        }

        function renameAndSave(inputElement, fileName, rmValue) {
            const files = inputElement.files;

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const newName = `${rmValue}.${fileName}.${i + 1}.${file.name.split('.').pop()}`;
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