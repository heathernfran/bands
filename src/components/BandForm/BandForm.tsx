import { useState } from "react";
import { sanitize } from "isomorphic-dompurify";

import { Ticket } from "../Ticket";
import { TotalAmount } from "../TotalAmount";
import type { Band } from "../../types";
import { formatDate } from "../../utilities/formatDate";

interface Props {
  band: Band;
}

export function BandForm({ band }: Props) {
  const [total, setTotal] = useState(0);

  const handleTotal = (amountPerTicket: number, increment: boolean = false) => {
    if (increment) {
      setTotal((previousTotal) => previousTotal + amountPerTicket);
    } else {
      setTotal((previousTotal) => previousTotal - amountPerTicket);
    }
  };

  return (
    <div className="grid grid-cols-2 mx-4 my-12">
      <div>
        <h1 className="font-extrabold text-3xl">{band.name}</h1>
        <p>{formatDate(band.date)}</p>
        <p>{band.location}</p>
        <img
          alt={`Learn more about ${band.name} concerts`}
          src={`${band.imgUrl}`}
        />
        <div
          dangerouslySetInnerHTML={{ __html: sanitize(band.description_blurb) }}
        />
      </div>

      <div className="bg-slate-100 p-4">
        <h2 className="font-bold text-2xl">Select Tickets</h2>
        {band.ticketTypes.map((ticket) => (
          <Ticket
            handleTotal={handleTotal}
            key={`${band.id}_${ticket.name}`}
            ticket={ticket}
          />
        ))}

        <TotalAmount total={total} />
      </div>
    </div>
  );
}
