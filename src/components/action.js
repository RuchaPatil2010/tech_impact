export const changeUser = (user) => {
    console.log(user);
    return {
     type: "CHANGE_USER",
     payload: user
    }
}