function checked(a, b){
    if(a == undefined && b == 1){
        return "checked"
    }else{
        if(a == b){
            return "checked";
        } else{
            return "";
        }
    }
    
}

function printError(errors, campo){
    message = "";
    if(errors === undefined){
    }else{
        errors.forEach(element => {
            if(element.path === campo){
                message = element.message;
            }
        });
    }
    return message
}

module.exports = { checked, printError }