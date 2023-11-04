import { Link } from "react-router-dom";
import error from "../assets/image/error3.png"


const Error = () => {
    return (
        <div>
            <div className="mt-10 flex items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <img src={error} alt="" className="w-1/2" />
                    <p className="text-xl font-semibold">Go back to <Link to ="/" className="text-blue-400">home</Link></p>
                </div>
            </div>            
        </div>
    );
};

export default Error;