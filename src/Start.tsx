import { Box, Button, Grid } from '@mui/material';
import { createContext, useEffect, useReducer, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import reducer from './reducer';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import { Data } from './Type';
import Shuffle from './pages/Shuffle/Shuffle';
import { getAuth } from 'firebase/auth';
import SignIn from './auth/SignIn';

interface IContextProps {
	state: any;
	dispatch: ({ type }: { type: string; payload: object }) => void;
}
interface DataState {
	isLoading: boolean;
	error: string | null;
	data: Data | null;
}
const initialState = () => {
	return { isLogin: false };
};

const Redirect = ({ to }: { to: string }) => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(to);
	}, [to]);
	return null;
};
const Start = () => {
	const [state, dispatch] = useReducer(reducer, initialState());
	const [data, setData] = useState<DataState>({
		isLoading: true,
		error: null,
		data: null,
	});

	const [isLogin, setIsLogin] = useState<boolean>(false);
	useEffect(() => {
		axios
			.get('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
			.then((res) => {
				setData({ isLoading: false, error: null, data: res.data });
			})
			.catch((err) => {
				setData({ isLoading: false, error: err, data: null });
			});
	}, []);

	if (state.isLogin)
		return (
			<BrowserRouter>
				<UserContext.Provider value={{ state, dispatch }}>
					<DataContext.Provider value={{ data, setData }}>
						<Grid container>
							<Grid item xs={12}>
								<Header />
							</Grid>
							<Grid item xs={1}>
								<Navbar />
							</Grid>
							<Grid item xs={11}>
								<Routes>
									<Route path='/' element={<Redirect to='/home' />} />
									<Route path='/home' element={<Home />} />

									<Route path='/shuffle' element={<Shuffle />} />
									<Route path='*' element={<div>404 Page Not Found!</div>} />
								</Routes>
							</Grid>
						</Grid>
					</DataContext.Provider>
				</UserContext.Provider>
			</BrowserRouter>
		);
	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<Box>
				<SignIn />
			</Box>
		</UserContext.Provider>
	);
};

export const UserContext = createContext({} as IContextProps);
export const DataContext = createContext(
	{} as { data: DataState; setData: Function }
);
export default Start;
