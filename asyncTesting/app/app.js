let input1 = {
    'firstName' : 'Ashish',
    'lastName' : 'Bhalla'
}


let getInput1 = (callback) =>{
    setTimeout(() =>{
        let name = input1.firstName + ' ' + input1.lastName;
        callback(name)
    },500)
}


module.exports = {
    getInput1
}