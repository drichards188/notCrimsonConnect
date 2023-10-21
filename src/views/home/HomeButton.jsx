import { useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    return (
        <button type="button" onClick={handleClick}>
            Go home
        </button>
    );
}

export default HomeButton;