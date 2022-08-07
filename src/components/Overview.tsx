import { Typography, Box, Grid } from '@mui/material';

import { OverviewType } from '../Type';

const Overview = ({ data }: { data: OverviewType | undefined }) => {
	return (
		<Box sx={{ border: '1px solid gray', p: 5, m: 2 }}>
			<Typography>Overview</Typography>
			<Grid container>
				<Grid item lg={6} sx={{ display: 'flex' }}>
					<Typography>Profile Views</Typography>
					<Typography>{data?.profile_views}</Typography>
				</Grid>
				<Grid item lg={6} sx={{ display: 'flex' }}>
					<Typography>Mentorship Sessions</Typography>
					<Typography>{data?.mentorship_sessions}</Typography>
				</Grid>
				<Grid item lg={6} sx={{ display: 'flex' }}>
					<Typography>Jobs Applied</Typography>
					<Typography>{data?.jobs_applied}</Typography>
				</Grid>
				<Grid item lg={6} sx={{ display: 'flex' }}>
					<Typography>Skills Verified</Typography>
					<Typography>{data?.skills_verified}</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Overview;
