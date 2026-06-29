import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function MobileWaBar() {
  return (
    <div className="wa-bar">
      <a className="btn btn-wa" href={waLink} target="_blank" rel="noopener">
        <WhatsAppIcon width={20} height={20} />
        Start planning on WhatsApp
      </a>
    </div>
  );
}
