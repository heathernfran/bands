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

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("Total cost for tickets:", total);
  };

  return (
    <div className="my-4">
      <p className="text-xl my-2">TOTAL: ${total}</p>
      <form>
        <div>
          <label className="block" htmlFor={firstNameId}>
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
          <label className="block" htmlFor={lastNameId}>
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
          <label className="block" htmlFor={addressId}>
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
          <label className="block" htmlFor={ccId}>
            Credit Card
          </label>
          <input
            className="border-2 border-slate-400"
            id={ccId}
            maxLength={16}
            name={ccId}
            pattern="[0-9]{13,16}"
            placeholder="0000 0000 0000 0000"
            required
            type="text"
          />
          <label className="block" htmlFor={expiryId}>
            Expiry
          </label>
          <input
            className="border-2 border-slate-400"
            id={expiryId}
            maxLength={5}
            name={expiryId}
            pattern="(0[1-9]|1[0-2])\/\d{2}"
            placeholder="MM/YY"
            required
            type="text"
          />
          <label className="block" htmlFor={cvvId}>
            CVV
          </label>
          <input
            className="border-2 border-slate-400"
            id={cvvId}
            maxLength={3}
            name={cvvId}
            pattern="\d{3,4}"
            placeholder="CCV"
            required
            type="text"
          />
        </div>
        <button
          className={`text-xl p-2 ${
            total === 0
              ? "bg-slate-300 text-black"
              : "bg-slate-700 text-slate-100"
          }`}
          disabled={total === 0}
          onClick={handleClick}
        >
          Get Tickets
        </button>
      </form>
    </div>
  );
}
