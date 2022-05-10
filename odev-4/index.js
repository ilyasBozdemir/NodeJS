const fs = require('fs');

const create = (fileName) => {
    fs.open(fileName, 'w', function(error, file){
        if(error) throw error;
    });
}
const read = (fileName) => {
    fs.readFile(fileName, 'utf-8', function(error, data){
        if(error) throw error;
        console.log(data)
    });
}

const add = (fileName, data) => {
    fs.writeFile(fileName, data, 'utf-8', (error) => {
        if(error) throw error;
    });
}

const remove = (fileName) => {
    fs.unlink(fileName, (error) => {
        if(error) throw error;
    });
}

const fileName = 'employees.json';
const dataText = '{"name": "Employee 1", "salary": 2000}';

create(fileName);
add(fileName, dataText);
read(fileName);
remove(fileName);