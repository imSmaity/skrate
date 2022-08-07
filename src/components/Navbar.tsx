import { Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DataContext } from '../Start';
import { NewJobsType, UpcomingSessionsType } from '../Type';

function positionChangeing(
	arr: Array<UpcomingSessionsType | NewJobsType> | []
) {
	let currentIndex = arr.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[arr[currentIndex], arr[randomIndex]] = [
			arr[randomIndex],
			arr[currentIndex],
		];
	}

	return arr;
}

const Navbar = () => {
	const { data, setData } = useContext(DataContext);

	const positionChange = () => {
		if (data !== null) {
			const upcoming_sessions = positionChangeing(
				data.data?.upcoming_sessions || []
			);
			const job_postings = positionChangeing(data.data?.job_postings || []);
			setData({ ...data, upcoming_sessions, job_postings });
		}
	};
	return (
		<>
			<Link to='/home'>
				<Box sx={{ display: 'flex', m: 2 }}>
					<HomeIcon sx={{ m: 1 }} />
					<Typography component={'div'} sx={{ m: 1 }}>
						Home
					</Typography>
				</Box>
			</Link>
			<Link to='/shuffle' onClick={positionChange}>
				<Box sx={{ display: 'flex', m: 2 }}>
					<DashboardIcon sx={{ m: 1 }} />
					<Typography component={'div'} sx={{ m: 1 }}>
						Shuffle
					</Typography>
				</Box>
			</Link>
		</>
	);
};

export default Navbar;
