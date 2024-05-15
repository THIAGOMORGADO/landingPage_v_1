import firebase, { getApps, initializeApp } from 'firebase/app';
import 'firebase/auth'; // Adicione outros serviços conforme necessário
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDQ1E33NcGvLeGwuJk_fRcwbRVvcGBaut0",
  authDomain: "portifolio-e1bc7.firebaseapp.com",
  projectId: "portifolio-e1bc7",
  storageBucket: "portifolio-e1bc7.appspot.com",
  messagingSenderId: "1034799786493",
  appId: "1:1034799786493:web:4313b2e2939c1a608a5194",
  measurementId: "G-5G1FEBPM19"
};
// Verifica se nenhuma instância do Firebase foi inicializada
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Exporta a instância de autenticação
export const auth = getAuth();

export default firebase;