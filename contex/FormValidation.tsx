let firstName;
let lastName;
let email;
let number;
let password;
let e;

export const validateInput = (value: string): string => {
    // Example: Ensure input is not empty
    if (!value.trim()) {
        return "This field cannot be empty";
    }
    return "";
};




export {
    firstName,
    lastName,
    email,
    number,
    password,
    e
    
}