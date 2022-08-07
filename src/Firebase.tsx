import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCD6kC37K1lyYLic2_ZquM8TvkSaLG8LbE',
	authDomain: 'job-view-ede27.firebaseapp.com',
	projectId: 'job-view-ede27',
	storageBucket: 'job-view-ede27.appspot.com',
	messagingSenderId: '885471073038',
	appId: '1:885471073038:web:04d6e2d5f66da33af23d5f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
