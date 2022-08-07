import { SIGN_IN, SIGN_OUT } from './constants';

const recucer = (state = {}, action: { type: string; payload: object }) => {
	if (action.type === SIGN_IN) return { ...action.payload };
	if (action.type === SIGN_OUT) return { ...action.payload };
	return state;
};

export default recucer;
