import { Box, Typography, Grid, Button } from '@mui/material';
import { UpcomingSessionsType } from '../Type';
import arrow from '../Assets/image/arrow.png';
import pp2 from '../Assets/image/pp2.png';

const UpcomingSessions = ({
	data,
}: {
	data: Array<UpcomingSessionsType> | undefined;
}) => {
	return (
		<Box>
			<Typography>Upcoming Sessions</Typography>
			{data?.map((value: UpcomingSessionsType) => {
				return (
					<Grid container key={value.mentor_name}>
						<Grid item lg={1}>
							<img src={pp2} alt='...' />
						</Grid>
						<Grid item lg={2}>
							<Typography>{value.mentor_name}</Typography>
							<Typography>Flutter</Typography>
						</Grid>
						<Grid item lg={3}>
							<Typography>{value.timings}</Typography>
							<Typography>{value.date}</Typography>
						</Grid>
						<Grid item lg={3}>
							<Button
								variant='contained'
								sx={{
									color: 'black',
									backgroundColor:
										value.session_type === 'Mentorship' ? '#E8C9D1' : '#91AEE1',
									textTransform: 'none',
									boxShadow: 0,
								}}>
								{value.session_type}
							</Button>
						</Grid>
						<Grid item lg={3}>
							<img src={arrow} alt='...' />
						</Grid>
					</Grid>
				);
			})}
		</Box>
	);
};

export default UpcomingSessions;
