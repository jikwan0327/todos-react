import axios from "axios";

const registerDB = (id, password) => {
    return function () {
        axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "/member",
            data: {
                accountId: id,
                password: password,
            },
        })
            .then((res) => {
                if (res) {
                    window.location.href = "/login";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default registerDB;
