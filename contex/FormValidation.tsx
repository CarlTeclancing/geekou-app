let firstName: string;
let lastName: string;
let email: string;
let number: string;
let password: string;
let e: string;

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