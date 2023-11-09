import { sanitize } from "dompurify";

import type { Band } from "../../types";
import { formatDate } from "../../utilities/formatDate";

interface Props {
  band: Band;
}

export function BandForm({ band }: Props) {
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
        <p key={ticket.name}>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}
