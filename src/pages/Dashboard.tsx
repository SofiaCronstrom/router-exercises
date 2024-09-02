import { Link, Outlet } from "react-router-dom";
import '../components/Navigation.css'
export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav className="dashB">
      <Link to="settings">Settings</Link>
      <Link to="stats">Stats</Link>
      </nav>
      <Outlet />
    </>
  );
}
