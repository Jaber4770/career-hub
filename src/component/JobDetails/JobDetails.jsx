import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { CiDollar } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utils/Utils";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idINT = parseInt(id)
    const job = jobs.find(job => job.id === idINT);

    const handleApplyJob = () => {
        saveJobApplication(idINT);
        toast.success("You have applied Successfully!");
    }

    return (
        <div className="">
            <div className="">
                <div className="bg-style1 relative bg-[#7E90FE] bg-opacity-5">
                    <h1 className="text-3xl font-bold text-center h-56 flex justify-center items-center">Job Details</h1>
                </div>
                <div className="grid grid-cols-3 container mx-auto my-20">
                    <div className="col-span-2">
                        <div>
                            <h3 className="font-semibold">Job Description:</h3>
                            <p className="text-gray-500">{job.job_description}</p>
                        </div>
                        <div className="py-5">
                            <h3 className="font-semibold">Job Responsibility:</h3>
                            <p className="text-gray-500">{job.job_responsibility}</p>
                        </div>
                        <div className="pb-5">
                            <h3 className="font-semibold pb-5">Educational Requirements:</h3>
                            <p className="text-gray-500">{job.educational_requirements}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold pb-5">Experiences:</h3>
                            <p className="text-gray-500">{job.experiences}</p>
                        </div>
                    </div>
                    <div className="ms-8">
                        <div className="col-1 bg-[#7E90FE] rounded-lg p-5 bg-opacity-20">
                            <div>
                                <h3 className="font-bold">Job Details</h3>
                                <hr className="my-4" />
                                <p className=" text-gray-600"><span className="font-semibold text-black"><CiDollar className="inline me-2" />
                                 Salary:</span> {job.salary}</p>
                                <p className="py-2 text-gray-600"><span className="font-semibold text-black"><SlCalender className="inline me-2" />Job Title: </span>{job.job_title}</p>
                                <h3 className="font-semibold py-3">Contact Information</h3>
                                <hr className="pb-3" />
                                <p className=" text-gray-600"><span className="font-semibold text-black"><FiPhone className="inline me-2" />Phone: </span>{job.contact_information.phone}</p>
                                <p className=" text-gray-600 my-2"><span className="font-semibold text-black"><MdOutlineEmail className="inline me-2" />Email: </span>{job.contact_information.email}</p>
                                <p className=" text-gray-600"><span className="font-semibold text-black"><IoLocationOutline className="inline me-2" />Address: </span>{job.contact_information.address}</p>
                            </div>
                        </div>
                        <button onClick={handleApplyJob} className="px-3 py-2 text-white font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg w-full mt-5">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;