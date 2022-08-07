import { createContext, useReducer } from 'react';
import SignIn from './auth/SignIn';
import reducer from './reducer';

interface IContextProps {
	state: object;
	dispatch: ({ type }: { type: string; payload: object }) => void;
}

const initialState = () => {
	return {};
};
const Start = () => {
	const [state, dispatch] = useReducer(reducer, initialState());
	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<SignIn />
		</UserContext.Provider>
	);
};

export const UserContext = createContext({} as IContextProps);
export default Start;
