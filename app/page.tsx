import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Featured product", href: "#featured-product" },
  { label: "How we work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand header-brand" href="#top" aria-label="ARCAUR home">
          <Image
            className="header-logo"
            src="/arcaur-logo.png"
            alt="ARCAUR — Supply for elevated stays."
            width={92}
            height={92}
            priority
          />
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Thoughtful supply for hospitality</p>
          <h1>Make space<br /><em>feel considered.</em></h1>
          <p className="hero-intro">
            ARCAUR connects hospitality spaces with carefully selected products
            and supply support for stays that feel more welcoming, comfortable,
            and complete.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#featured-product">
              Explore our first product <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#about">Discover ARCAUR <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative acoustic wall detail">
          <div className="hero-art-glow" />
          <div className="hero-arch">
            <div className="hero-arch-inner">
              <span className="hero-panel hero-panel-one" />
              <span className="hero-panel hero-panel-two" />
              <span className="hero-panel hero-panel-three" />
              <span className="hero-panel hero-panel-four" />
              <span className="hero-panel hero-panel-five" />
              <span className="hero-panel hero-panel-six" />
              <span className="hero-panel hero-panel-seven" />
            </div>
          </div>
          <p className="hero-art-note">Material direction<br /><strong>01 / 01</strong></p>
        </div>

        <div className="hero-footnote"><span>01</span><span>ARCAUR / 2026</span></div>
      </section>

      <section className="statement section-shell" id="about">
        <div className="section-label"><span>01</span><span>About ARCAUR</span></div>
        <div className="statement-grid">
          <h2>Details matter<br />when people <em>stay.</em></h2>
          <div className="statement-copy">
            <p>
              We believe elevated stays are shaped by more than appearance.
              They are shaped by the feeling of a room, the quality of a detail,
              and the confidence behind every supply decision.
            </p>
            <p>
              ARCAUR is being built as a trusted supply partner for hotels,
              villas, lodges, and other hospitality spaces — starting with
              considered materials that bring practical and visual value.
            </p>
            <a className="text-link" href="#contact">Talk to us about your space <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="product-section section-shell" id="featured-product">
        <div className="section-label"><span>02</span><span>First material direction</span></div>
        <div className="product-heading">
          <div>
            <p className="eyebrow"><span /> Coming first</p>
            <h2>Wooden acoustic<br /><em>wall panel.</em></h2>
          </div>
          <p className="product-heading-copy">
            A considered wall finish for spaces where atmosphere, warmth, and
            acoustic comfort belong together.
          </p>
        </div>

        <div className="product-card">
          <div className="product-placeholder" role="img" aria-label="Placeholder for wooden acoustic wall panel photograph">
            <div className="placeholder-lines" aria-hidden="true">
              {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
            </div>
            <div className="placeholder-message">
              <span className="placeholder-icon" aria-hidden="true">+</span>
              <span>Product photograph<br />to be added</span>
            </div>
          </div>
          <div className="product-details">
            <p className="product-index">ARCAUR / PRODUCT 001</p>
            <h3>Warmth in the background.</h3>
            <p>
              This first product will be presented here with its real image,
              available finishes, specifications, and ordering information once
              confirmed.
            </p>
            <div className="detail-list">
              <div><span>Application</span><strong>Hospitality interiors</strong></div>
              <div><span>Status</span><strong>Product details coming soon</strong></div>
              <div><span>Enquiries</span><strong>Contact ARCAUR</strong></div>
            </div>
            <a className="button button-outline" href="#contact">Request product information <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="process-section section-shell" id="how-we-work">
        <div className="section-label"><span>03</span><span>How we work</span></div>
        <div className="process-intro">
          <h2>Simple, clear,<br /><em>built on trust.</em></h2>
          <p>Good supply starts with understanding what a space needs — and being honest about what can be delivered.</p>
        </div>
        <div className="process-grid">
          <article><span>01</span><h3>Understand</h3><p>We listen to the space, the brief, and the people it needs to serve.</p></article>
          <article><span>02</span><h3>Source</h3><p>We identify suitable products and confirm the details that matter.</p></article>
          <article><span>03</span><h3>Support</h3><p>We keep communication clear from first enquiry through to supply.</p></article>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-card">
          <p className="eyebrow"><span /> Get in touch</p>
          <h2>Let&apos;s create a<br /><em>better stay.</em></h2>
          <p>Contact details will be added here. For now, this is the place for your main ARCAUR email, phone number, and location.</p>
          <a className="button button-gold" href="mailto:contact@arcaur.example">Contact ARCAUR <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-mark" aria-hidden="true">A<span>R</span></div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand brand-light" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-mark-line brand-mark-line-one" />
              <span className="brand-mark-line brand-mark-line-two" />
            </span>
            <span className="brand-copy">
              <span className="brand-name">ARCAUR</span>
              <span className="brand-tagline">Supply for elevated stays.</span>
            </span>
          </a>
          <p>Considered supply for hospitality spaces.</p>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Contact details</p>
          <p>To be added<br />Email · Phone · Location</p>
        </div>
        <div className="footer-meta">
          <p>© 2026 ARCAUR LTD</p>
          <p>Built with care.</p>
        </div>
      </footer>
    </main>
  );
}
