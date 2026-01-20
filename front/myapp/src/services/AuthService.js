const API_URL = "http://localhost:8080/api/auth";
const TOKEN_KEY = "jwt";

const AuthService = {
 
  async login(email, password) {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

  
    if (!response.ok) {
      
      throw new Error("Λάθος email ή κωδικός");
    }

    const token = await response.text();
    localStorage.setItem(TOKEN_KEY, token);

    return token;
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  },

 
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },


  isAuthenticated() {
    return !!localStorage.getItem(TOKEN_KEY);
  },


  getAuthHeader() {
    const token = this.getToken();
    return token ? { Authorization: "Bearer " + token } : {};
  },
};

export default AuthService;
