import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [jobs, setJobs] = useState(6);

    useEffect(() => {
        fetch('/public/data/jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    return (
        <div className="my-20 container mx-auto">
            <div className="text-center">
                <h1 className="font-bold text-5xl">Featured Jobs</h1>
                <p className="py-5 text-gray-400">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-3 gap-4">
                    {
                        featuredJobs.slice(0, jobs).map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
                    }
                </div>
                <div className={jobs === featuredJobs.length && "hidden"}>
                    <button
                        onClick={() => setJobs(featuredJobs.length)}
                        className="py-2 px-3 font-semibold text-white my-5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">See more</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;