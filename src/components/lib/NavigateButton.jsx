import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";

const NavigateButton = ({url, displayText}) => {
    // alert(JSON.stringify(displayText));
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/${url}`);
    }

    return (
        <Button onClick={handleClick}>
            {displayText}
        </Button>
    );
}

export default NavigateButton;