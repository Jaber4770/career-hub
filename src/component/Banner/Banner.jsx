

const Banner = () => {
    return (
        <div className="bg-[#F9F9FF]">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-7xl leading-snug">One Step <br /> Close To Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Dream Job</span></h1>
                    <p className="my-10">Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="rounded-lg py-3 px-5 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</button>
                </div>
                <div>
                    <img src="/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;