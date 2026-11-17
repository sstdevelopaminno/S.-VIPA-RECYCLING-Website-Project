export type IconName =
  | "coins"
  | "recycle"
  | "truck"
  | "leaf"
  | "box"
  | "can"
  | "bottle"
  | "paper"
  | "glass"
  | "chip"
  | "scale"
  | "shield"
  | "phone"
  | "quote"
  | "location";

export function Icon({ name }: { name: string }) {
  return (
    <svg aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconSprite() {
  return (
    <svg className="icon-sprite" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <symbol id="i-coins" viewBox="0 0 24 24">
        <ellipse cx="8" cy="5" rx="6" ry="2.5" />
        <path d="M2 5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5M2 9v4c0 1.4 2.7 2.5 6 2.5 1.3 0 2-.2 3-.5" />
        <ellipse cx="16" cy="13.5" rx="6" ry="2.5" />
        <path d="M10 13.5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5m-12 2.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5" />
      </symbol>
      <symbol id="i-recycle" viewBox="0 0 24 24">
        <path d="m7 2 4 0 2.2 4.2m-2.6 1.5-5.2 0L3 11.7 1 8m2 0 2.4-4.2c.6-1 1.2-1.8 2-1.8m11.8 6.5 2.5 3.8-2.4 4.5m-3-1.2 2.6-4.7-2.2-4.1 4.1-.1m-6.1 15h-5L6 17.9m1.7-2.2 2.6 4.4h4.3l-2.1 3.1m0-3.1h4.2c1.6 0 2.4-.8 3.3-2.1" />
      </symbol>
      <symbol id="i-truck" viewBox="0 0 24 24">
        <path d="M1 5h13v12H1zM14 9h4l4 4v4h-8z" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><path d="M4 9h7M4 12h5" />
      </symbol>
      <symbol id="i-leaf" viewBox="0 0 24 24"><path d="M20 3C9 3 4 8 4 15c0 4 3 6 7 6 7 0 10-10 9-18Z" /><path d="M3 21c2-5 7-10 14-13" /></symbol>
      <symbol id="i-box" viewBox="0 0 24 24"><path d="m12 2 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V7M12 12v10" /><path d="m8 4 9 5" /></symbol>
      <symbol id="i-can" viewBox="0 0 24 24"><path d="M7 4h10l1.5 3v12c0 1-1 2-2 2h-9c-1 0-2-1-2-2V7zM8 4V2h8v2M5.5 7h13M6 18h12" /><path d="M9 10v6M15 10v6" /></symbol>
      <symbol id="i-bottle" viewBox="0 0 24 24"><path d="M9 2h6v4H9zM9 6v2c0 2-3 2-3 5v8c0 1 1 1 2 1h8c1 0 2 0 2-1v-8c0-3-3-3-3-5V6M7 14h10M7 18h10" /></symbol>
      <symbol id="i-paper" viewBox="0 0 24 24"><path d="M4 3h11l5 5v13H4zM15 3v5h5M7 12h10M7 16h10M7 19h7" /></symbol>
      <symbol id="i-glass" viewBox="0 0 24 24"><path d="M7 2v4L5 9v12h7V9l-2-3V2zm10 0v4l-2 3v12h7V9l-2-3V2" /><path d="M5 12h7M15 12h7" /></symbol>
      <symbol id="i-chip" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="1" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /></symbol>
      <symbol id="i-scale" viewBox="0 0 24 24"><path d="M12 3v18m-7 0h14M5 7h14M7 7 3 16h8L7 7Zm10 0-4 9h8l-4-9ZM9 3h6" /></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="m12 2 9 4v6c0 6-4 9-9 11-5-2-9-5-9-11V6z" /><path d="m8.3 12.2 2.7 2.5 5-5" /></symbol>
      <symbol id="i-phone" viewBox="0 0 24 24"><path d="M7.4 3.6 5 2C3.7 1.5 2.5 3 2.2 4.3c-1.3 6 8.5 17.4 15.5 17.4 1.1 0 3.2-2.2 3.3-3.5l-3-2.8c-.8-.8-1.7-.3-2.5.2l-1.7 1c-2.8-1.5-5.3-4-6.7-6.7l1.3-1.9c.5-.8.5-1.6-1-2.4Z" /><path d="M15 3c3.5.6 5.7 2.8 6 6M14 7c2 .4 3.1 1.3 3.5 3.1" /></symbol>
      <symbol id="i-quote" viewBox="0 0 24 24"><path d="M5 2h10l4 4v16H5zM15 2v5h4M9 12h6M9 16h4M9 9h3" /></symbol>
      <symbol id="i-location" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></symbol>
    </svg>
  );
}
