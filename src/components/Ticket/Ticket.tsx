import { useId, useState } from "react";
import type { Ticket as TicketType } from "../../types";
import { convertCentsToDollars } from "../../utilities/convertCentsToDollars";

interface Props {
  handleTotal: Function;
  ticket: TicketType;
}

export function Ticket({ handleTotal, ticket }: Props) {
  const ticketsId = useId();

  const [previousnumberOfTickets, setPreviousNumberOfTickets] = useState(0);
  const [ticketCost] = useState(convertCentsToDollars(ticket.cost));

  const handleChange = (e: any) => {
    if (e.target.value < previousnumberOfTickets) {
      handleTotal(ticketCost, true);
    } else {
      handleTotal(ticketCost);
    }

    setPreviousNumberOfTickets(e.target.value);
  };

  return (
    <div className="my-4">
      <p className="text-lg">{ticket.name.toUpperCase()}</p>
      <p>{ticket.description}</p>
      <p>{`$${ticketCost}`}</p>
      <label hidden htmlFor={ticketsId}>
        Tickets
      </label>
      <input
        className="border-2 border-slate-400"
        id={ticketsId}
        max={100}
        min={0}
        name={ticketsId}
        onChange={handleChange}
        type="number"
      />
    </div>
  );
}
