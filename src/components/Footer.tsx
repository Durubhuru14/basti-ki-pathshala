import logo from "@/assets/logo.webp";

export default function Footer() {
  const policies = [
    { label: "Terms of Use", href: "/" },
    { label: "Privacy", href: "/" },
  ];

  const socials = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://x.com" },
  ];

  return (
    <footer className="w-full px-4 py-8 bg-muted text-muted-foreground">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Policy Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
          <img
            src={logo}
            alt="Logo"
            className="size-12 rounded-full bg-gray-100"
          />
          <ul className="flex gap-4">
            {policies.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Social Links */}
        <ul className="flex gap-4 justify-center sm:justify-end">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:underline hover:text-primary transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
