import request from '../utils/request.js';

class User {
    register(params){
        return request({
              url: "/users/register",
              method: "post",
              data: params
            });
    }

}

export default User;