interface Props {
  total: number;
}

export function TotalAmount({ total }: Props) {
  const handleClick = () => {
    console.log("Total cost for tickets:", total);
  };

  return (
    <div className="my-4">
      <p>TOTAL: ${total}</p>
      <button
        className="bg-slate-700 text-slate-100 p-2"
        disabled={total === 0}
        onClick={handleClick}
      >
        Get Tickets
      </button>
    </div>
  );
}
