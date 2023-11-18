import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Error404() { 
    const navigate = useNavigate();

    useEffect(() => {
        SetTimeout(() => {
            navigate("/home");
        }, 3000);
    }, []);

    return <div>
        404 - Page not found
    </div>;
}

export default Error404;
