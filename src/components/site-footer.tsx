import { BackToTop } from "@/components/back-to-top";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  copy: Dictionary["footer"];
};

export function SiteFooter({ copy }: Props) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <b>{copy.brand}</b><br />
          <small>{copy.office} · <a className="footer-mail" href="mailto:s.viparecycling@gmail.com">s.viparecycling@gmail.com</a></small><br />
          <small>{copy.disclaimer}</small>
        </div>
        <BackToTop label={copy.backTop} />
      </div>
    </footer>
  );
}
