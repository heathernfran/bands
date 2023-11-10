import { useState } from "react";
import { sanitize } from "dompurify";

import { Ticket } from "../Ticket";
import { TotalAmount } from "../TotalAmount";
import type { Band } from "../../types";
import { formatDate } from "../../utilities/formatDate";

interface Props {
  band: Band;
}

export function BandForm({ band }: Props) {
  const [total, setTotal] = useState(0);

  const handleTotal = (amountPerTicket: number, decrease: boolean = false) => {
    if (decrease) {
      setTotal((previousTotal) => previousTotal - amountPerTicket);
    } else {
      setTotal((previousTotal) => previousTotal + amountPerTicket);
    }
  };

  return (
    <div>
      <h1>{band.name}</h1>
      <p>{formatDate(band.date)}</p>
      <p>{band.location}</p>
      <img
        alt={`Learn more about ${band.name} concerts`}
        src={`${band.imgUrl}`}
      />
      <div
        dangerouslySetInnerHTML={{ __html: sanitize(band.description_blurb) }}
      />

      {band.ticketTypes.map((ticket) => (
        <Ticket
          handleTotal={handleTotal}
          key={`${band.id}_${ticket.name}`}
          ticket={ticket}
        />
      ))}

      <TotalAmount total={total} />
    </div>
  );
}
