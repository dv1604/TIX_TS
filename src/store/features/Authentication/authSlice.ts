import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// User type
interface User {
    name: string;
    phoneNumber: string;
    email?: string;
}

// Authentication state
interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
    emailAdded: boolean
}

const storedUser = localStorage.getItem("user");

const initialState: AuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: Boolean(storedUser),
    error: null,
    emailAdded: storedUser && JSON.parse(storedUser).email ? true : false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<{ name: string; phoneNumber: string }>) => {
            const { name, phoneNumber } = action.payload;

            if (!name.trim() || phoneNumber.length !== 10) {
                state.error = "Invalid name or phone number!";
                return;
            }

            const newUser: User = { name, phoneNumber };
            state.user = newUser;
            state.isAuthenticated = false;
            state.error = null;
            state.isAuthenticated = true;
            state.emailAdded = false;
            localStorage.setItem("user", JSON.stringify(newUser));
        },

        addEmail: (state, action: PayloadAction<{ email: string;  redirectPath?: string }>) => {

            const {email,redirectPath} = action.payload;

            if (!state.user) {
                state.error = "User not found!";
                return;
            }
            
            if (!email.includes("@")) {
                state.error = "Invalid email!";
                return;
            }

            state.user.email = email;
            state.isAuthenticated = true;
            state.emailAdded = true;
            localStorage.setItem("user", JSON.stringify(state.user));
            state.error = null;

            // Redirect to payment or home after login
            if (redirectPath) {
                window.location.href = redirectPath; // Redirect to intended page
            } else {
                window.location.href = "/";
            }
        },

        login: (state, action: PayloadAction<{ phoneNumber: string; password: string; redirectPath?: string }>) => {
            const { phoneNumber, password,redirectPath } = action.payload;

            const storedUserData = localStorage.getItem("user");
            if (!storedUserData) {
                state.error = "User does not exist!";
                return;
            }

            const storedUser: User = JSON.parse(storedUserData);

            if (storedUser.phoneNumber !== phoneNumber) {
                state.error = "User not found!";
                return;
            }

            if (storedUser.phoneNumber !== password) {
                state.error = "Incorrect password!";
                return;
            }

            state.user = storedUser;
            state.isAuthenticated = true;
            state.error = null;

            // Redirect to payment or home after login
            if (redirectPath) {
                window.location.href = redirectPath; // Redirect to intended page
            } else {
                window.location.href = "/";
            }
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem("user");
        },

        resetError: (state) => {
            state.error = null;
        },
    },
});

export const { signUp, addEmail, login, logout, resetError } = authSlice.actions;
export default authSlice.reducer;
