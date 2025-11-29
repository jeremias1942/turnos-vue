import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Obtener datos del usuario logueado
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login"); // Si no hay usuario, lo redirige
      } else {
        setUser(currentUser);
      }
    });

    return () => unsub();
  }, []);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      {user && (
        <>
          <p>Bienvenido, <b>{user.displayName}</b></p>
          <p>Email: {user.email}</p>

          <img 
            src={user.photoURL} 
            alt="avatar" 
            style={{ width: 80, borderRadius: "50%", marginTop: 10 }}
          />

          <br /><br />
          <button onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}
