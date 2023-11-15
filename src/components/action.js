export const changeUserName = (name) => {
    console.log(name);
    return {
     type: "CHANGE_USERNAME",
     payload: name
    }
   }