// components/Sidebar.jsx
import { isAuthenticatedAtom } from "@/app/atoms";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
const Sidebar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const handleClick = () => {
    if (confirm("Are you sure you wanna leave?")) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      router.push("/admin/login");
    }
  };
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Pending Farmers", path: "/admin/pending-farmers" },
    { name: "Manage Users", path: "/admin/manage-users" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col h-screen">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="mt-10 flex-grow">
        {menuItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              router.pathname === item.path
                ? "bg-gray-200 text-gray-700"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleClick}
        className="mx-4 p-2 rounded-md text-md text-white bg-red-600 font-bold mb-4"
      >
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
