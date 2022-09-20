import {update, ref} from 'firebase/database';
import {updateEmail} from 'firebase/auth';
import {database, auth} from './firebase';

const updateDB = (path, data) => {
    return update(ref(database, path), data);
};

const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
};

export {updateDB, updateUserEmail};