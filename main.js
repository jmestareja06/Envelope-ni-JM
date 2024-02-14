
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
}
from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9E_eUKJt-6GeAcr_wfX4KI_uwplCZ9oA",
  authDomain: "ichikafirstfirebase.firebaseapp.com",
  projectId: "ichikafirstfirebase",
  storageBucket: "ichikafirstfirebase.appspot.com",
  messagingSenderId: "481938032741",
  appId: "1:481938032741:web:91f0ac6680e62d0a485e8c",
  measurementId: "G-75S951307E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  
  const db = getFirestore();
  const name1 = document.getElementById("input1");
    const sb = document.getElementById("submit");

  async function savedocument(){



    const ref = doc(db, "collection", "document");
    setDoc(
    ref, {
    
    NAME: input1.value,
    
    })
    
    };
sb.addEventListener("click", savedocument);