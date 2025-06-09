class landing{
    database={
        "milan":{username:"milan",password:"milan123"},
        "mini":{username:"milan",password:"mini123"},
        "manu":{username:"milan",password:"manu123"}
    }
    // method
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    // getData
    getData(){
       this.database=JSON.parse(localStorage.getItem("database"))
    }

    // register
    register(){
        this.getData()

        if(reguser.value==""||regpswd.value==""){
            alert("please fill the form completely")
        }
        else{
            if(reguser.value in this.database)
           {
            alert("account already exist")
           }
           else{
            this.database[reguser.value]={username:reguser.value,password:regpswd.value}
            this.saveData()
            alert("register succesfull")
            window.location="login.html"
           }

        }
    
    }
    login(){
        this.getData()
        console.log(this.database);
        
        
            if(loguser.value==""||logpswd.value=="")
            {
            alert("please fill the form completely")
            }
        else{
            if(loguser.value in this.database)
           {
            if(this.database[loguser.value].password==logpswd.value)
            {
            localStorage.setItem("user",loguser.value)
            alert("login succesfull")
           
            window.location="home.html"
            }
           else{
            alert("incorect password")
           }
           }
            else{
            alert("PLease register")
            window.location="register.html"
           }

        

        }
    }
}
const obj = new landing()
obj.getData()