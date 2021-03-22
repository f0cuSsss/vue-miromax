export function validEmail(email) {
    const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(String(email).toLowerCase());
}

export function validPhone(phone) {
    const checkPhone = /^(((\+38\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+38\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+38\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return checkPhone.test(String(phone).toLowerCase())
}