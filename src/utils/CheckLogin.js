export const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("admin")
}

export const logIn = (jwt) => {
    localStorage.setItem("jwt", jwt);
}

export const isLogin = localStorage.getItem("jwt") ? true : false;


export const isAdmin = () => (localStorage.getItem("admin") ? true : false);
