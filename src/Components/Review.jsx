import person1 from "../img/pexels-guilherme-almeida-1858175.jpg"

const Review = () => {
    return ( 
        <div className="mt-5 w-1/2 h-56 rounded-xl shadow-3xl">
            <div className="flex justify-between">
                <div className="w-48 flex justify-center items-center h-56 bg-priGreen">
                    <img src={person1} alt={person1}  className="w-32 h-32 rounded-full"/>
                </div>
                <div className="p-5 w-96">
                    <p className="mt-10 font-bold text-secBlack">Jane Doe</p>
                    <p className="text-sm text-priGray mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iusto porro tempore quisquam eius perspiciatis animi architecto dolor quod repellendus?</p>
                    <div>
                    
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Review;