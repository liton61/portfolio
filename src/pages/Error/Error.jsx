import { Link } from 'react-router-dom';
import error from '../../assets/4O4.png'

const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <img src={error} alt="" />
                <div className="flex justify-center items-center mt-5">
                    <Link to="/">
                        <button className="text-lg font-semibold bg-green-400 px-3 py-2 rounded">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;