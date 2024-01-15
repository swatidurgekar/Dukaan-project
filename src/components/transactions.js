import "./transactions.css";

const Transactions = () => {
  const arr = new Array(10).fill(null);

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Order Date</th>
          <th>Order Amount</th>
          <th>Transaction fees</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((_, index) => {
          return (
            <tr>
              <td className="hash">#281209</td>
              <td>7 July, 2023</td>
              <td>1,278.23</td>
              <td className="rupees">Rs.22</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;
