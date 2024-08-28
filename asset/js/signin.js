const emailbox =document.getElementById("emailbox")
const passwordlogin =document.getElementById("passwordlogin")


const users= [

    {
        Email:"Peter@gmail.com",
        password: "Peter1"
    },

    {
        Email:"Okey@gmail.com",
        password: "Okey1"
    },
    {
        Email : "prince@gmail.com",
        password : "prince419"
    },


]

// const newusers =[
//     {
//         Email : "prince@gmail.com",
//         Password : "prince419"
//     }
// ]


// users.push(newusers)
    

function signbutton(){
    let email = emailbox.value
    let password= passwordlogin.value
    
    for (let i =2; i<users.length; i++){
        if (email==users[i].Email && password==users[i].password){
            alert (" Signed up Successful")
        }
    
        else{
            alert ("Sign in Failed")
        }
    }
    }

    location.href = "about.html"
 

