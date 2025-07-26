import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            error
            <Button onClick={() => navigate("/")} type='primary'>go back</Button>
        </div>
    );
};

export default ErrorPage;