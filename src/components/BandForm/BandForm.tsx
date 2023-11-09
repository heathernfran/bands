import { sanitize } from "isomorphic-dompurify";

import type { Band } from "../../types";

interface Props {
  band: Band;
}

export function BandForm({ band }: Props) {
  return (
    <div>
      <h1>{band.name}</h1>
      <p>{band.date}</p>
      <p>{band.location}</p>
      <img
        alt={`Learn more about ${band.name} concerts`}
        src={`${band.imgUrl}`}
      />
      <div
        dangerouslySetInnerHTML={{ __html: sanitize(band.description_blurb) }}
      />

      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}
