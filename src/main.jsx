import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Droplets,
  Factory,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wind,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const navItems = ['Products', 'Process', 'Applications', 'Company', 'Contact'];

const productLinks = {
  amazon: 'https://www.amazon.in/s?k=LILYCOOL+honeycomb+cooling+pad',
  flipkart: 'https://www.flipkart.com/search?q=LILYCOOL%20honeycomb%20cooling%20pad',
};

const products = [
  {
    name: 'Honeycomb Cooling Pads',
    size: 'Standard and custom sizes',
    description:
      'High water absorption cellulose media for desert coolers, domestic air coolers and replacement pad needs.',
    specs: ['Fine finish', 'Size customization', 'Long lasting life'],
    tone: 'rose',
  },
  {
    name: 'Industrial Evaporative Pads',
    size: 'Commercial cooling systems',
    description:
      'Corrugated pad structures designed for strong airflow, water retention and dependable cooling capacity.',
    specs: ['Excellent retention', 'Durable build', 'Technical support'],
    tone: 'teal',
  },
  {
    name: 'Greenhouse Cooling Media',
    size: 'Agriculture and livestock',
    description:
      'Eco-friendly cooling pad media for poly houses, poultry farms, dairy farms, hatcheries and breeding areas.',
    specs: ['Eco-friendly material', 'Odourless', 'Low maintenance'],
    tone: 'green',
  },
];

const advantages = [
  'ROHS compliant against harmful substances',
  'Excellent water retention quality for superb cooling',
  'No biological buildup on edges',
  'Longlife, economical and durable',
  'Standard and customised sizes with complete technical support',
  'Own manufacturing plant with state-of-the-art machinery',
];

const applications = [
  'Evaporative air cooling systems',
  'Household air coolers',
  'Industrial and commercial cooling applications',
  'Poly houses and green houses',
  'Horticulture and mushroom farming',
  'Floriculture',
  'Poultry farms and hatcheries',
  'Live stock and dairy farms',
  'Breeding areas',
  'Turbine air-intake',
  'Spray painting booths',
];

const contacts = [
  { icon: Phone, label: 'Call', value: '+91 9414188530, 9314029303, 7014718031, 9887090308', href: 'tel:+919414188530' },
  { icon: Mail, label: 'Email', value: 'lilycoolers@gmail.com', href: 'mailto:lilycoolers@gmail.com' },
  {
    icon: MapPin,
    label: 'Visit',
    value: 'C-402 & 403, Road No. 6, Indraprastha Industrial Area, Kota - 324005, Rajasthan, India',
    href: 'https://maps.google.com/?q=C-402%20%26403%2C%20Road%20No.%206%2C%20Indraprastha%20Industrial%20Area%2C%20Kota%20324005%20Rajasthan',
  },
];

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Infocom home">
        <img src="/infocom-logo.png" alt="Infocom" />
      </a>
      <nav className={open ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Enquire <ChevronRight size={16} />
      </a>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="cooling-pad">
        {Array.from({ length: 34 }).map((_, index) => (
          <span key={index} style={{ '--i': index, '--x': index % 6, '--y': Math.floor(index / 6) }} />
        ))}
      </div>
      <div className="water-orbit orbit-one" />
      <div className="water-orbit orbit-two" />
      <div className="air-stream stream-a" />
      <div className="air-stream stream-b" />
      <div className="air-stream stream-c" />
      <div className="temperature-chip chip-hot">42°C</div>
      <div className="temperature-chip chip-cool">28°C</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy" data-reveal>
        <h1>Evaporative cooling pads built for cleaner, stronger airflow.</h1>
        <p>
          Infocom manufactures, supplies, exports and designs high-quality evaporative cooling pads for industrial,
          commercial, agricultural and domestic cooling applications.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#products">
            View Products <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href="/infocom-catalog.pdf" target="_blank" rel="noreferrer">
            Open Catalog
          </a>
        </div>
      </div>
      <HeroGraphic />
    </section>
  );
}

function MarketplaceButtons({ compact = false }) {
  return (
    <div className={compact ? 'market-buttons compact' : 'market-buttons'}>
      <a href={productLinks.amazon} target="_blank" rel="noreferrer">
        Amazon <ArrowUpRight size={16} />
      </a>
      <a href={productLinks.flipkart} target="_blank" rel="noreferrer">
        Flipkart <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <article className={`product-card ${product.tone}`} data-reveal style={{ '--delay': `${index * 90}ms` }}>
      <div className="product-visual">
        <div className="pad-slab">
          {Array.from({ length: 24 }).map((_, cellIndex) => (
            <span key={cellIndex} />
          ))}
        </div>
      </div>
      <div className="product-body">
        <p className="product-size">{product.size}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul>
          {product.specs.map((spec) => (
            <li key={spec}>
              <Check size={16} /> {spec}
            </li>
          ))}
        </ul>
        <MarketplaceButtons compact />
      </div>
    </article>
  );
}

function Products() {
  return (
    <section className="section products" id="products">
      <div className="section-heading" data-reveal>
        <p>Product Range</p>
        <h2>Cooling media for everyday coolers and serious industrial air movement.</h2>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process" id="process">
      <div className="process-copy" data-reveal>
        <p>How Evaporative Cooling Works</p>
        <h2>Hot dry air passes through wet corrugated media, then leaves cooler and moist.</h2>
        <p>
          The cooling process happens in the core pile cushion. When outside hot and dry air is pumped through the pad,
          water in the thin membrane absorbs heat and turns into vapor, naturally reducing the incoming air temperature.
        </p>
      </div>
      <div className="process-rail" data-reveal>
        <div className="process-node hot">
          <Zap size={26} />
          <span>Hot Air</span>
        </div>
        <div className="animated-flow" />
        <div className="process-node water">
          <Droplets size={26} />
          <span>Water Film</span>
        </div>
        <div className="animated-flow delay" />
        <div className="process-node cool">
          <Wind size={26} />
          <span>Cool Air</span>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section why" id="company">
      <div className="why-panel" data-reveal>
        <div className="why-icon">
          <ShieldCheck size={34} />
        </div>
        <h2>Quality-focused manufacturing from Kota, Rajasthan.</h2>
        <p>
          Infocom focuses on effective high-quality products made with water absorbing papers, chemical treatment and
          opposite-sequence corrugation to support airflow, cooling capacity and product life.
        </p>
      </div>
      <div className="advantage-list">
        {advantages.map((item, index) => (
          <div className="advantage-item" data-reveal key={item} style={{ '--delay': `${index * 55}ms` }}>
            <Check size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Applications() {
  const highlighted = useMemo(() => applications.slice(0, 6), []);
  const rest = useMemo(() => applications.slice(6), []);

  return (
    <section className="section applications" id="applications">
      <div className="section-heading" data-reveal>
        <p>Applications</p>
        <h2>Made for environments where cooling performance needs to stay dependable.</h2>
      </div>
      <div className="application-stage" data-reveal>
        <div className="application-wheel" aria-hidden="true">
          {highlighted.map((item, index) => (
            <span key={item} style={{ '--i': index }}>
              {index % 2 === 0 ? <Factory size={20} /> : <Leaf size={20} />}
            </span>
          ))}
        </div>
        <div className="application-list">
          {[...highlighted, ...rest].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="commitment" data-reveal>
      <div>
        <Sparkles size={28} />
        <h2>Our Endeavor</h2>
      </div>
      <p>
        Customer satisfaction is the prime motto. Infocom specializes in evaporative cooling pads of the highest quality
        at competitive rates with service that stands second to none.
      </p>
      <div className="commitment-grid">
        <span>The customer comes first.</span>
        <span>Our most valuable assets are our people and our reputation.</span>
        <span>Teamwork is essential.</span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-copy" data-reveal>
        <p>Contact Info</p>
        <h2>Talk to Infocom for cooling pad supply, custom sizes and technical support.</h2>
        <MarketplaceButtons />
      </div>
      <div className="contact-cards">
        {contacts.map(({ icon: Icon, label, value, href }, index) => (
          <a className="contact-card" href={href} key={label} data-reveal style={{ '--delay': `${index * 80}ms` }}>
            <Icon size={24} />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src="/infocom-logo.png" alt="Infocom" />
      <p>Manufacturer, Supplier, Exporter, Designer and Service Provider of Evaporative Cooling Pads.</p>
      <span>© 2026 Infocom. All Rights Reserved.</span>
    </footer>
  );
}

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Process />
        <WhyUs />
        <Applications />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
