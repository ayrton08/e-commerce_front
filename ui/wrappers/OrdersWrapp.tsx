import { CardTitle } from "ui/label/styled";

export const OrdersWrapp = ({ children, status }: any) => {
  return (
    <div className="overflow-x-auto hidden md:flex flex-col w-full md:w-3/4 lg:w-2/3 animate__animated animate__fadeIn self-center mt-8 mb-48 order">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Order Id</th>
            <th>Created at</th>
            <th>Status</th>
            <th>Link to Pay</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
