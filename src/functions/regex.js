const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const emailValidation = email => {
  if (
    emailRegex.test(email) &&
    email.indexOf('@elpoli.edu.co') !== -1 &&
    email.substr(email.length - 3, email.length) === '.co'
  ) {
    return true
  } else {
    return false
  }
};

export const passwordValidation = password => {
    if(password.length < 8){
        return false
    }else{
        return true
    }
}
