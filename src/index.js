import React from "react";
import {createRoot} from "react-dom/client";
import Chatter from "./Chatter.js";
import {auth, database as db} from "./firebase.js";
import {child, get, ref} from 'firebase/database';
import {setUser} from './reducers/userSlice';
import store from './store';
import {CircularProgress} from "@mui/material";

const root = createRoot(document.getElementById("app"));

root.render(<CircularProgress />);

auth.onAuthStateChanged(user => {
    if (user) {
        get(child(ref(db), `users/${user.uid}`)).then(snapshot => {
            const data = snapshot.val();
            
            store.dispatch(setUser({
                uid: user.uid,
                ...data
            }));

            root.render(<Chatter />);
        });
    } else {
        store.dispatch(setUser({}));
        root.render(<Chatter />);
    }
});