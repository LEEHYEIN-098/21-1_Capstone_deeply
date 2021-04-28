'use strict';

function reader(file, onData) {
    console.log(`File is ${[file.name, file.size, file.type, file.lastModified].join(' ')}`);
    // Handle 0 size files.
    if (file.size === 0) {
        console.error('File is empty, please select a non-empty file');
        return;
    }
    const chunkSize = 16384;
    var fileReader = new FileReader();
    let offset = 0;
    fileReader.addEventListener('error', error => console.error('Error reading file:', error));
    fileReader.addEventListener('abort', event => console.log('File reading aborted:', event));
    fileReader.addEventListener('load', async function(e) {
        //console.log('FileRead.onload ', e);
        await onData(e.target.result);
        offset += e.target.result.byteLength;
        if (offset < file.size) {
            readSlice(offset);
        }
    });
    const readSlice = o => {
        console.log('read slice, offset: ', o, ' chunk size: ', chunkSize);
        const slice = file.slice(offset, o + chunkSize);
        fileReader.readAsArrayBuffer(slice);
    };
    readSlice(0);
    return fileReader;
}
