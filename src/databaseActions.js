import {set, update, ref} from 'firebase/database';
import {createUserWithEmailAndPassword, updateEmail} from 'firebase/auth';
import {database, auth} from './firebase';

const createUserAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const setDB = (path, data) => {
    return set(ref(database, path), data);
};

const updateDB = (path, data) => {
    return update(ref(database, path), data);
};

const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
};

export {createUserAccount, setDB, updateDB, updateUserEmail};