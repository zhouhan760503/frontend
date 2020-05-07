import { Req } from "../utils/request.js" 

class User extends Req{
  constructor(){
    super();
  };
 
  //登录
  login(options){
    return new Promise( (resolve, reject) => {
      let props = {
          url : "/api/user/wx",
          type: "GET",
          data: options,
          sCallBack: res => {
            resolve(res);
          },
          eCallBack: err => {
            reject(err);
          }
      }
      this.request(props);
    });
  };
}

export { User }