// plugins/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOleEWlqhGNurHhdVClrZalwfhCOx9Bho",
    authDomain: "prueba-tecnica-ssr.firebaseapp.com",
    projectId: "prueba-tecnica-ssr",
    storageBucket: "prueba-tecnica-ssr.appspot.com",
    messagingSenderId: "970591369904",
    appId: "1:970591369904:web:4327f929da54b88e469975",
    measurementId: "G-XLZHM1FTP5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
