const isEmailValid = (email) => {
    const emailRegex = /^(?!.*<script)[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
};

const isPasswordValid = (password) => {
    const passwordRegex = /^(?!.*<script)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password);
};

const isNameValid = (name) => {
    const nameRegex = /^(?!.*<script)[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{3,25}$/;
    return nameRegex.test(name);
};
export {isEmailValid, isPasswordValid, isNameValid};
