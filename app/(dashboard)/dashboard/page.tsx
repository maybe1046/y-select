import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard Home Page</div>

      <ul>
        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
      </ul>
    </>
  );
};

export default Dashboard;
