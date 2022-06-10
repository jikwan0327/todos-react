import axios from "axios";

const registerDB = (id, password) => {
    return function () {
        axios({
            method: "post",
            url: "http://10.156.147.203:8080/member",
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
