interface Props {
  total: number;
}

export function TotalAmount({ total }: Props) {
  const handleClick = () => {
    console.log("Total cost for tickets:", total);
  };

  return (
    <>
      <p>Total amount for tickets: ${total}</p>
      <button onClick={handleClick}>Purchase Tickets</button>
    </>
  );
}
