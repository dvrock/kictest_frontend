import axios from 'axios';







const Ewelogistics = () => {

    const responseHandler = response => {

        console.log(' log request here', response);

        console.log(' log request here response.data', response.data);

        if (response?.data?.status == 200) {
            console.log('Response Status', response.data.status);
            return response;
        }
        else {
            return response;
        }
    };

    const handleError = async error => {

        console.log(' Response Error Here', error?.message);

        if (error.response.status == 401) {

        }
        else if (!error?.response && error?.message == 'Network Error') {
            alert('Please Check Your Internet Connection.');
            throw error;
        } else if (error?.response?.status == 500) {
            alert('Internal Server Error.');
            throw error.response;
        }
        else {
            console.log('error', error?.response);
            throw error.response;
        }
    };

    const instance = axios.create({
        baseURL: "http://localhost:3000"
    });
    instance.interceptors.request.use(async config => {

        console.log(' log request here', config);

        let token = null;

        return config;
    });

    instance.interceptors.response.use(
        response => responseHandler(response),
        error => handleError(error),
    );

    return instance;
};

export { Ewelogistics };