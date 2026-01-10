import Fail from "./Fail";
import Pass from "./Pass";

function Result({ marks , color , name }) {

    if (marks >= 50) {
        return <Pass marks={marks} color={color} name={name} />;
    } else {
        return <Fail marks={marks} color={color} name={name} />;
    }

}

export default Result;