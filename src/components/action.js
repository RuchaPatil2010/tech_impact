export const changeUser = (user) => {
    console.log(user);
    return {
     type: "CHANGE_USER",
     payload: user
    }
   }

//    export const changeName = (name) => {
//     console.log(name);
//     return {
//      type: "CHANGE_NAME",
//      payload: name
//     }
//    }