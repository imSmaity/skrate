import { SIGN_IN, SIGN_OUT } from './constants';

const recucer = (
	state = { isLogin: false },
	action: { type: string; payload: object }
) => {
	if (action.type === SIGN_IN) return { isLogin: true, ...action.payload };
	if (action.type === SIGN_OUT) return { isLogin: false, ...action.payload };
	return state;
};

export default recucer;
