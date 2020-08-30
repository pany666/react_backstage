export default{
    setUser:function(userInfo){
        localStorage.setItem('userInfo',JSON.stringify(userInfo));
    },
    getUser:function(){
       return JSON.parse(localStorage.getItem('userInfo') || '{}');
    },
    removeUser:function(){
        localStorage.removeItem('userInfo');
    }
}