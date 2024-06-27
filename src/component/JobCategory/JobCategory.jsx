import { useEffect, useState } from "react";
import SingleJobCategory from "../SingleJobCategory/SingleJobCategory";


const JobCategory = () => {

    const [Categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    }, [])

    return (
        <div className="my-20 container mx-auto">
            <div className="text-center">
                <h1 className="font-bold text-5xl">Job Category List</h1>
                <p className="py-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    Categorys.map(Category => <SingleJobCategory key={Category.id} Category={Category}></SingleJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;