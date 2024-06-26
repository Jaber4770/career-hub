import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);

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
                <div className="grid grid-cols-2 gap-4">
                    {
                        featuredJobs.map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;