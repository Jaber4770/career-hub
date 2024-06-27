import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../Utils/Utils";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobID = getStoredJobApplicaton();
        if (jobs.length > 0) {
            const jobApplied = jobs.filter(job => storedJobID.includes(job.id));
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, []);

    const handleJobFilter = filter => { 
        if(filter === "all"){
            setDisplayJobs(appliedJobs);
        }
        else if( filter === "remote"){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if(filter === "onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }

    }



    return (
        <div>
            <div className="bg-style1 relative bg-[#7E90FE] bg-opacity-5">
                <h1 className="text-3xl font-bold text-center h-56 flex justify-center items-center">Applied Jobs</h1>
            </div>
            <div className="mt-10 pb-14 container mx-auto flex justify-end">
                <details className="dropdown">
                    <summary className="bg-gray-200 px-5 py-3 rounded-lg m-1 font-bold">Filter</summary>
                    <ul className="menu dropdown-content rounded-box z-[1] w-32 p-2 shadow">
                        <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="container mx-auto my-20">
                {
                    displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;