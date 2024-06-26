

const SingleJobCategory = ({Category}) => {
    const { logo, category_name, availability} = Category;
    return (
        <div className="border-2 border-[#dacbff] bg-[#faf8ff] rounded-lg py-5 px-3">
            <img className="bg-indigo-100 w-[70px] p-5 rounded-lg" src={logo} alt="" />
            <h1 className="font-bold py-4">{category_name}</h1> 
            <p className="text-gray-400">{availability}</p>           
        </div>
    );
};

export default SingleJobCategory;