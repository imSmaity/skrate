import { Button } from '@mui/material';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { SIGN_IN } from '../constants';
import { auth, provider } from '../Firebase';
import { UserContext } from '../Start';

const SignIn = () => {
	const { state, dispatch } = useContext(UserContext);

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				console.log(res);
				dispatch({ type: SIGN_IN, payload: res.user });
			})
			.then((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getAuth().onAuthStateChanged((user) => {
			if (user) {
				dispatch({ type: SIGN_IN, payload: user });
			}
		});
	}, []);

	if (state)
		return (
			<Button
				variant='contained'
				sx={{
					color: 'white',
					boxShadow: 0,
					backgroundColor: '#4F65F6',
					textTransform: 'none',
				}}>
				Sign Out
			</Button>
		);
	return (
		<Button
			variant='contained'
			sx={{ color: 'white', backgroundColor: '#4F65F6', textTransform: 'none' }}
			onClick={signInWithGoogle}>
			Sign In
		</Button>
	);
};

export default SignIn;
