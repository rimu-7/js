const user ={
    username:"jesse",
    price:999,
    welcomMessage:function(){
        console.log(`${this.username}, welcome to website`);
        
    }

}

user.welcomMessage()