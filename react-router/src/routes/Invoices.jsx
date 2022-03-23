import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          borderBottom: "solid 1px",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            className={({isActive}) => {
            let classN = isActive ? "text-purple-500 " : "text-blue-500 ";
            return classN + "flex flex-co pb-1";
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}