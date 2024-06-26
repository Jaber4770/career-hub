

const FeaturedJob = ({ featuredJob }) => {

    // console.log(featuredJob);
    const {logo, job_title, company_name, remote_or_onsite, contact_information, educational_requirements, experience, job_description, job_responsibility, job_type, location, salary} = featuredJob;

    return (
        <div>
            <div className="border-2 h-full border-[#dacbff] rounded-lg py-5 px-3">
                <img className="w-[200px] rounded-lg" src={logo} alt="" />
                <h1 className="font-bold py-4">{job_title}</h1>
                <h2 className="font-bold py-4">{company_name}</h2>
                {/* <p className="text-gray-400">{job_description}</p> */}
                {/* <p className="text-gray-400">{job_responsibility}</p> */}
                <p className="text-gray-400">{remote_or_onsite}</p>
                {/* <p className="text-gray-400">{contact_information}</p> */}
                {/* <p className="text-gray-400">{educational_requirements}</p> */}
                <p className="text-gray-400">{experience}</p>
                <p className="text-gray-400">{job_type}</p>
                <p className="text-gray-400">{salary}</p>
                <p className="text-gray-400">{location}</p>
            </div>
        </div>
    );
};

export default FeaturedJob;