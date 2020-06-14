
class AuthService {
  logout() {
  console.log("this was clicked")
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("token"));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();