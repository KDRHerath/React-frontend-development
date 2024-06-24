function validation(value){
    let error = ""
    const mail_patton = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (!mail_patton.test(value)){
        error = "E-mail is doesn't match"
    }else{
        error ="";
    }
    return error
}

export default validation