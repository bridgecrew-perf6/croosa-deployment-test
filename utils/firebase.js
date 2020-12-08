import firebase from 'firebase/app'
import 'firebase/auth'

const app = !firebase.apps.length ? (
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_SOTORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MESUREMENT_ID,
    }) 
) : (firebase.app())

export default app