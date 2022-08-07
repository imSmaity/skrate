import { Box } from '@mui/material';
import SignIn from '../auth/SignIn';
import logo from '../Assets/image/Light_PNG 2.svg';

const Header = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Box>
				<img src={logo} alt='...' style={{ width: '10rem', height: '5rem' }} />
			</Box>
			<Box>
				<SignIn />
			</Box>
		</Box>
	);
};

export default Header;
