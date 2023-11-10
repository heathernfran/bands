import { useId } from "react";

interface Props {
  total: number;
}

export function TotalAmount({ total }: Props) {
  const firstNameId = useId();
  const lastNameId = useId();
  const addressId = useId();
  const ccId = useId();
  const expiryId = useId();
  const cvvId = useId();

  const handleSubmit = () => {
    console.log("Total cost for tickets:", total);
  };

  return (
    <div className="my-4">
      <p>TOTAL: ${total}</p>
      <form>
        <div>
          <label hidden htmlFor={firstNameId}>
            First Name
          </label>
          <input
            className="border-2 border-slate-400"
            id={firstNameId}
            name={firstNameId}
            placeholder="First Name"
            required
            type="text"
          />
          <label hidden htmlFor={lastNameId}>
            Last Name
          </label>
          <input
            className="border-2 border-slate-400"
            id={lastNameId}
            name={lastNameId}
            placeholder="Last Name"
            required
            type="text"
          />
          <label hidden htmlFor={addressId}>
            Address
          </label>
          <input
            className="border-2 border-slate-400"
            id={addressId}
            name={addressId}
            placeholder="Address"
            required
            type="text"
          />
        </div>
        <div>
          <p className="font-bold">Payment Details</p>
          <label hidden htmlFor={ccId}>
            Credit Card
          </label>
          <input
            className="border-2 border-slate-400"
            id={ccId}
            maxLength={16}
            name={ccId}
            placeholder="0000 0000 0000 0000"
            required
            type="text"
          />
          <label hidden htmlFor={expiryId}>
            Expiry
          </label>
          <input
            className="border-2 border-slate-400"
            id={expiryId}
            maxLength={4}
            name={expiryId}
            placeholder="MM/YY"
            required
            type="text"
          />
          <label hidden htmlFor={cvvId}>
            CCV
          </label>
          <input
            className="border-2 border-slate-400"
            id={cvvId}
            maxLength={3}
            name={cvvId}
            placeholder="CCV"
            required
            type="text"
          />
        </div>
        <button
          className="bg-slate-700 text-slate-100 p-2"
          disabled={total === 0}
          onSubmit={handleSubmit}
          type="submit"
        >
          Get Tickets
        </button>
      </form>
    </div>
  );
}
