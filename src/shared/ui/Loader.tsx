import { HashLoader } from "react-spinners";
const Loader = () => {
    console.log("Рендер меня")
    return (
        <div className="absolute centered">
            <HashLoader/>
        </div>
    );
};

export default Loader;