import { useParams } from "react-router";
import { getInvoice } from "../data";

export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceid, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <p>{invoice.name}: {invoice.number}</p>
      <h2>Total Due: {invoice.amount}</h2>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}