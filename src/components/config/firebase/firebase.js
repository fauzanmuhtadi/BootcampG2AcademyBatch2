import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const readConfig = key => {
    return process.env["REACT_APP_FIREBASE_" + key]
}

const config = {
    apiKey: readConfig("API_KEY"),
    authDomain: readConfig("AUTH_DOMAIN"),
    databaseURL: readConfig("DATABASE_URL"),
    projectId: readConfig("PROJECT_ID"),
    storageBucket: readConfig("STORAGE_BUCKET")
}

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()

        this.fieldValue = app.firestore.FieldValue;
        this.db = app.firestore()
    }

    createFirebaseUser = (obj) => {
        return this.auth.createUserWithEmailAndPassword(obj.email, obj.password)
    }

    borrowersDb = () => this.db.collection('borrowers')
    booksDb = () => this.db.collection('books')
    committeesDb = () => this.db.collection('committees')
}

export default Firebase;