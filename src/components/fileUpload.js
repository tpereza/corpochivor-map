import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function FileUpload({onFileUpload}) {
    const [file, setFile] = useState(null);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFile(value);
        
        let sheets = [];
        if(name === 'file') {
            let reader = new FileReader();
            reader.readAsArrayBuffer(target.files[0]);
            reader.onloadend = (e) => {
                let data = new Uint8Array(e.target.result);
                let workbook = XLSX.read(data, {type: 'array'});

                workbook.SheetNames.forEach((sheetName) => {
                    let sheet_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                    onFileUpload(sheet_object);
                });
            }
        }

    }
  
    return (
      <input 
        required
        type='file'
        name='file'
        id='file'
        onChange={handleInputChange}
        placeholder="Archivos de excel"
      />
    );
  }
  
  export default FileUpload;