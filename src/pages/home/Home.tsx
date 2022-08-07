import { CircularProgress, Grid } from '@mui/material';
import { useContext } from 'react';
import NewJobs from '../../components/NewJobs';
import Overview from '../../components/Overview';
import UpcomingSessions from '../../components/UpcomingSessions';
import { DataContext } from '../../Start';

const Home = () => {
	const { data } = useContext(DataContext);

	if (data.isLoading) return <CircularProgress />;
	return (
		<Grid container>
			<Grid item lg={6}>
				<Overview data={data.data?.dashboard_stats} />
			</Grid>
			<Grid item lg={6}>
				<NewJobs data={data.data?.job_postings} />
			</Grid>
			<Grid item lg={6}>
				<UpcomingSessions data={data.data?.upcoming_sessions} />
			</Grid>
		</Grid>
	);
};

export default Home;
