interface Props {
  total: number;
}

export function TotalAmount({ total }: Props) {
  const handleSubmit = () => {
    console.log("Total cost for tickets:", total);
  };

  return (
    <div className="my-4">
      <p>TOTAL: ${total}</p>
      <form>
        <div>
          <label hidden htmlFor="first-name">
            First Name
          </label>
          <input
            className="border-2 border-slate-400"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            required
            type="text"
          />
          <label hidden htmlFor="last-name">
            Last Name
          </label>
          <input
            className="border-2 border-slate-400"
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            required
            type="text"
          />
          <label hidden htmlFor="address">
            Address Name
          </label>
          <input
            className="border-2 border-slate-400"
            id="address"
            name="address"
            placeholder="Address"
            required
            type="text"
          />
        </div>
        <div>
          <p className="font-bold">Payment Details</p>
          <label hidden htmlFor="cc">
            Credit Card
          </label>
          <input
            className="border-2 border-slate-400"
            id="cc"
            maxLength={16}
            name="cc"
            placeholder="0000 0000 0000 0000"
            required
            type="text"
          />
          <label hidden htmlFor="expiry">
            Expiry
          </label>
          <input
            className="border-2 border-slate-400"
            id="expiry"
            maxLength={4}
            name="expiry"
            placeholder="MM/YY"
            required
            type="text"
          />
          <label hidden htmlFor="ccv">
            CCV
          </label>
          <input
            className="border-2 border-slate-400"
            id="ccv"
            maxLength={3}
            name="ccv"
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
