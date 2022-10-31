let msg = '';


class Common {

    msg = '';

    getMessage(){
        return this.msg;
    }

    setMessage(p){
        this.msg = p;
    }
}

module.exports = new Common();

//Function

//modules.exports = function(param){

   // if(param){
     //   msg = param;
    //}
    //return msg;
//}