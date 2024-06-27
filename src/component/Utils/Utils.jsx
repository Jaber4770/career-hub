const getStoredJobApplicaton = () => {
    const stroedJobApplication = localStorage.getItem("job-applications");
    if(stroedJobApplication){
        return JSON.parse(stroedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const stroedJobApplication = getStoredJobApplicaton();
    const exists = stroedJobApplication.find(jobId => jobId === id);
    if(!exists){
        stroedJobApplication.push(id);
        localStorage.setItem("job-applications", JSON.stringify(stroedJobApplication));
    }
}

export {saveJobApplication, getStoredJobApplicaton};