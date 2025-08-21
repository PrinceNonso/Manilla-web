const partners = [
  "/p2b.svg",
  "/keiretsu.svg",
  "/hacken.svg",
  "/thresohold.png",
  "/chainalysis.svg",
  "/coinstore.svg",
  "/biconomy.svg",
  "/mexc.svg",
  "/sayfer.svg",
];

export default function Partner() {
  return (
    <div className="pt-4 pb-16 bg-white overflow-hidden">
      <div className="marquee flex items-center whitespace-nowrap">
        {partners.concat(partners).map((partner, i) => (
          <div key={i} className="px-4 min-w-[150px] flex-shrink-0">
            <img src={partner} alt={partner} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
