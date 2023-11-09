export interface Band {
  name: string;
  id: string;
  date: number;
  location: string;
  description_blurb: string;
  imgUrl: string;
  ticketTypes: Ticket[];
}

export interface Ticket {
  type: string;
  name: string;
  description: string;
  cost: number;
}
