import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import type { Session } from "~/datatypes/sessions.model";
import type { User } from "~/datatypes/users.model";

interface AuthContextType {
  userId: string | undefined;
  sessionId: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (email: string, password: string) => Promise<void>;
  logout: (sessionId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("http://localhost:8787/api/v1/auth/me", {
          credentials: "include"
        })

        if (!res.ok) {
          setIsAuthenticated(false)
          console.error("Failed to check authentication status", await res.text());
          throw new Error("Failed to check authentication status");
        } else {
          const data: { user: Partial<User>, session: Session } = await res.json();
          setUser(data.user as User);
          setIsAuthenticated(true);
        }
      } catch {
        setIsAuthenticated(false)
        console.error("Error checking authentication status");
        throw new Error("Error checking authentication status");
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [sessionId, setSessionId] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      // const response = await fetch("https://atlas-api.moshimoshi8246.workers.dev/api/v1/auth/login", {
      const response = await fetch("http://localhost:8787/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }); 
      if (!response.ok) {
        console.error("Login failed", await response.text());
        return alert("Login failed. Please check your credentials and try again.");
      }
      const data: { user: Partial<User>, message: string, sessionId: string } = await response.json();
      
      console.log(data);
      setUser(data.user as User);
      setUserId(data.user?.id);
      setSessionId(data.sessionId);
      setIsAuthenticated(true);
      navigate("/app");
      return alert("Login successful!");

    } catch (error) {
      console.error("Error occurred during login", error);
      return alert("Login failed. Please try again.");
    }
  };
  const logout = async (sessionId: string) => {
    console.log("Logging out with sessionId:", sessionId);
    try {
      const response = await fetch("http://localhost:8787/api/v1/auth/logout", {
      // const response = await fetch("https://atlas-api.moshimoshi8246.workers.dev/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'sessionId': sessionId  }),
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Logout failed", await response.text());
        return alert("Logout failed. Please try again.");
      }

      const data = await response.json();
      console.log(data);

      // Clear user state and navigate to login page
      setUserId(undefined);
      setSessionId("");
      setIsAuthenticated(false);
      navigate("/login");
      return alert("Logout successful!");

    } catch (error) {
      console.error("Error occurred during logout", error);
      return alert("Logout failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ userId, sessionId, isAuthenticated, login, logout, loading, setLoading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
