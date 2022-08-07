import { Box, Button, Grid, Typography } from '@mui/material';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { SIGN_IN, SIGN_OUT } from '../constants';
import { auth, provider } from '../Firebase';
import { UserContext } from '../Start';
import bg from '../Assets/image/bg.svg';

const SignIn = () => {
	const { state, dispatch } = useContext(UserContext);

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
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
	const signout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				dispatch({ type: SIGN_OUT, payload: {} });
			})
			.catch((error) => {});
	};
	if (state.isLogin)
		return (
			<Button
				variant='contained'
				onClick={signout}
				sx={{
					color: 'white',
					boxShadow: 0,
					backgroundColor: '#4F65F6',
					textTransform: 'none',
				}}>
				Sign Out
			</Button>
		);
	return <NewSignin signInWithGoogle={signInWithGoogle} />;
};

const NewSignin = ({ signInWithGoogle }: { signInWithGoogle: () => void }) => {
	return (
		<Grid container>
			<Grid item xs={6}>
				<Box sx={{ mt: 30, ml: 5 }}>
					<Typography>Welcome Back to Skrate!!</Typography>
					<Button
						variant='contained'
						sx={{
							color: 'white',
							backgroundColor: '#4F65F6',
							textTransform: 'none',
							mt: 1,
						}}
						onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
				</Box>
			</Grid>
			<Grid item xs={6}>
				<img src={bg} alt='...' style={{ width: '35rem', height: '40rem' }} />
			</Grid>
		</Grid>
	);
};
export default SignIn;
