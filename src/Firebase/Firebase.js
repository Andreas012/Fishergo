import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, query, getDocs, where, orderBy, limit } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDvey03MUVYudgCCFeHG7wqwUWJQb5qwV0",
    authDomain: "fishtagram-e8483.firebaseapp.com",
    databaseURL: "https://fishtagram-e8483.firebaseio.com",
    projectId: "fishtagram-e8483",
    storageBucket: "fishtagram-e8483.appspot.com",
    messagingSenderId: "237859823077",
    appId: "1:237859823077:web:09c2ee936422224e0b230c"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app)

export { auth }

export const CreateCard = async (file, fishName, name, location, weight, length, lure) => {
    try {
        const docRef = await addDoc(collection(db, "cards"), {
            fishName: fishName,
            name: name,
            location: location,
            weight: weight,
            length: length,
            lure: lure,
            date: new Date().toISOString()
        });
        const storageRef = ref(storage, docRef.id);
        uploadBytes(storageRef, file).then((snapshot) => {
            return;
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const GetCards = async () => {

    const q = query(collection(db, "cards"));
    const querySnapshot = await getDocs(q);
    let cards = [];

    querySnapshot.forEach(async (doc) => {
        cards.push({ [doc.id]: doc.data() });
    });

    return cards;
}

export const GetImageUrl = (id) => {
    return getDownloadURL(ref(storage, id));
}

export const CreateUserProfile = async (name, uid) => {
    try {
        await addDoc(collection(db, "users"), {
            name: name,
            uid: uid
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const GetUserProfile = async (uid) => {
    // Get user from uid
    const user = await query(collection(db, "users"), where("uid", "==", uid));
    const snapShot = await getDocs(user);

    let userProfile;
    snapShot.forEach((doc) => {
        userProfile = doc.data();
    });

    return userProfile;
}

export const login = (e, email, password) => {
    e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            return true;
        })
        .catch(err => {
            return err.code;
        })
}

export const Logout = () => {
    signOut(auth).then(() => {
        return true;
    }).catch((error) => {
        return error.code;
    });
}

export const GetTopList = async () => {
    const scores = await query(collection(db, "cards"), orderBy("weight", "desc"), limit(10));
    const snapShot = await getDocs(scores);

    let topScores = [];
    snapShot.forEach((doc) => {
        topScores.push(doc.data());
    });

    return topScores;
}