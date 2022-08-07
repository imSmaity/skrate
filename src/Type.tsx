export type OverviewType = {
	profile_views: number;
	mentorship_sessions: number;
	jobs_applied: number;
	skills_verified: number;
};
export type NewJobsType = {
	role: string;
	organization_name: string;
	location: string;
	date_posted: string;
};
export type UpcomingSessionsType = {
	mentor_name: string;
	timings: string;
	date: string;
	session_type: string;
};

export type Data = {
	full_name: string;
	dashboard_stats: OverviewType;
	upcoming_sessions: Array<UpcomingSessionsType>;
	job_postings: Array<NewJobsType>;
};
