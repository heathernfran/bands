import type { Band } from "../../types";

interface Props {
  band: Band;
}

export function BandForm({ band }: Props) {
  return (
    <div>
      <h1>{band.name}</h1>
      <p>{band.description_blurb}</p>
      <p>{band.date}</p>
      <p>{band.location}</p>
      <img
        alt={`Learn more about ${band.name} concerts`}
        src={`${band.imgUrl}`}
      />
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}
