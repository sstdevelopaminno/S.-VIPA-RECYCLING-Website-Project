"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export function QuoteForm({ copy }: { copy: Dictionary["quoteForm"] }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const generated = [
      copy.template.hello,
      `${copy.template.name}: ${data.get("name")}`,
      `${copy.template.phone}: ${data.get("phone")}`,
      `${copy.template.material}: ${data.get("material")}`,
      `${copy.template.details}: ${data.get("details") || "-"}`,
    ].join("\n");

    setMessage(generated);
    try {
      await navigator.clipboard.writeText(generated);
      setStatus(copy.copied);
    } catch {
      setStatus(copy.generated);
    }
  }

  return (
    <form className="form-box" onSubmit={submit}>
      <h3>{copy.title}</h3>
      <p>{copy.intro}</p>
      <div className="fields">
        <div className="field">
          <label htmlFor="name">{copy.name}</label>
          <input id="name" name="name" placeholder={copy.namePlaceholder} maxLength={100} required />
        </div>
        <div className="field">
          <label htmlFor="phone">{copy.phone}</label>
          <input id="phone" name="phone" placeholder={copy.phonePlaceholder} maxLength={25} required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="material">{copy.material}</label>
        <select id="material" name="material" required defaultValue="">
          <option value="" disabled>{copy.materialPlaceholder}</option>
          {copy.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="details">{copy.details}</label>
        <textarea name="details" id="details" placeholder={copy.detailsPlaceholder} />
      </div>
      <button className="form-button" type="submit">{copy.submit}</button>
      {status ? <div className="result show" role="status"><b>{status}</b><pre>{message}</pre></div> : null}
      <p className="form-disclaimer">{copy.disclaimer} <a className="email-inline" href="mailto:s.viparecycling@gmail.com">s.viparecycling@gmail.com</a></p>
    </form>
  );
}
