import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";



const FeaturedJob = ({ featuredJob }) => {

    // console.log(featuredJob);
    const { id, logo, job_title, company_name, remote_or_onsite, contact_information, educational_requirements, experience, job_description, job_responsibility, job_type, location, salary } = featuredJob;

    return (
        <div>
            <div className="border-2 h-full border-[#dacbff] rounded-lg py-5 px-3 text-left ps-8">
                <img className="w-[200px] rounded-lg" src={logo} alt="" />
                <h1 className="font-bold py-2 ">{job_title}</h1>
                <h2 className="pb-2 text-gray-400">{company_name}</h2>
                <div className="flex gap-2 mb-2">
                    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm">
                        <div className="bg-white m-[2px]">
                            <p className="py-1 px-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">{remote_or_onsite}</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm">
                        <div className="bg-white m-[2px]">
                            <p className="py-1 px-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">{job_type}</p>
                        </div>
                    </div>
                </div>
                <p className="text-gray-400">{experience}</p>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                        <CiLocationOn />
                        <p className="text-gray-400">{location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiDollar />
                        <p className="text-gray-400"> Salary: {salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className="py-2 px-3 mt-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg text-white font-semibold border-none">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedJob;