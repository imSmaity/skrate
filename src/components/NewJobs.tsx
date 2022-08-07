import { Box, Grid, Typography } from '@mui/material';
import { NewJobsType } from '../Type';
import profilePic from '../Assets/image/IMG.png';
import arrow from '../Assets/image/arrow.png';

const NewJobs = ({ data }: { data: Array<NewJobsType> | undefined }) => {
	return (
		<Box>
			<Typography>New Jobs</Typography>
			{data?.map((value: NewJobsType, i: number) => {
				return (
					<Grid container key={i}>
						<Grid item lg={3}>
							<img src={profilePic} alt='...' />
						</Grid>
						<Grid item lg={3}>
							<Typography>{value.role}</Typography>
							<Typography>{value.organization_name}</Typography>
							<Typography>{value.location}</Typography>
						</Grid>
						<Grid item lg={3}>
							<Typography>{value.date_posted}</Typography>
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

export default NewJobs;
