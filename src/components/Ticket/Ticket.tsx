import type { Ticket as TicketType } from "../../types";
import { convertCentsToDollars } from "../../utilities/convertCentsToDollars";

interface Props {
  ticket: TicketType;
}

export function Ticket({ ticket }: Props) {
  return (
    <div key={ticket.type}>
      <p>{ticket.name}</p>
      <p>{ticket.description}</p>
      <p>{`$${convertCentsToDollars(ticket.cost)}`}</p>
    </div>
  );
}
