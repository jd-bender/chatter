import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from "firebase/database";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import databaseSecrets from "../databaseSecrets";

const app = initializeApp(databaseSecrets);

const database = getDatabase(app);
const auth = getAuth(app);

export {database, ref, onValue, auth, createUserWithEmailAndPassword};