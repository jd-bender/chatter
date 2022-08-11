import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from "firebase/database";
import databaseSecrets from "../databaseSecrets";

const app = initializeApp(databaseSecrets);

const database = getDatabase(app);

export {database, ref, onValue};