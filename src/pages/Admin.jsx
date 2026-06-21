import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwYdH0hd_Fv07jI_o2ro_ZhLdd5qp4oXJgsTuVspqXI0WMfDjXfxYnohHWlbp1B-UTADw/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.slice(1));
      });
  }, []);

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order[8] === "Pending"
  ).length;

  const completedOrders = orders.filter(
    (order) => order[8] === "Completed"
  ).length;

  const handleLogin = () => {
    if (password === "renuka123") {
      setIsAuthenticated(true);
    } else {
      alert("Wrong Password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-4">
            Admin Login
          </h1>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-amber-800 text-white py-3 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Total Orders
          </h2>
          <p className="text-4xl mt-3">
            {totalOrders}
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Pending Orders
          </h2>
          <p className="text-4xl mt-3">
            {pendingOrders}
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Completed Orders
          </h2>
          <p className="text-4xl mt-3">
            {completedOrders}
          </p>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Recent Orders
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Artwork</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{order[1]}</td>
                <td className="p-3">{order[5]}</td>
                <td className="p-3">{order[8]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;