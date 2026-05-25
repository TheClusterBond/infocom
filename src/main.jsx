import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Check,
  Droplets,
  Factory,
  Gauge,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Printer,
  Ruler,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ThermometerSun,
  Wind,
  X,
} from 'lucide-react';
import './styles.css';

const amazonLink = 'https://www.amazon.in/s?k=LILYCOOL+honeycomb+cooling+pad';
const flipkartLink = '#coming-soon';
const pmcaLink = 'https://www.pmcagroup.com/';

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'oem', label: 'OEM & Applications' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'specs', label: 'Specs & Data' },
];
const routeIds = [...pages.map((page) => page.id), 'contact', 'coming-soon'];

const media = {
  video: '/media/hero-honeycomb.mp4',
  texture: '/media/honeycomb-texture.jpg',
  stack: '/media/cooling-pad-stack.jpg',
  three: '/media/cooling-pad-three.jpg',
  range: '/media/cooling-pad-range.jpg',
  pair: '/media/cooling-pad-pair.jpg',
  frame: '/media/cooling-pad-frame.jpg',
  factoryExterior: '/media/factory-exterior-blue.jpg',
  factoryFloor: '/media/factory-production-floor.jpg',
  factoryDispatch: '/media/factory-dispatch-pads.jpg',
  factoryMap: '/media/factory-map-outline.png',
};

const contacts = [
  { icon: Phone, label: 'Call', value: '+91 9414188530, 9314029303, 7014718031, 9887090308', href: 'tel:+919414188530' },
  { icon: Mail, label: 'Email', value: 'lilycoolers@gmail.com', href: 'mailto:lilycoolers@gmail.com' },
  {
    icon: MapPin,
    label: 'Factory',
    value: 'C-402 & 403, Road No. 6, Indraprastha Industrial Area, Kota - 324005, Rajasthan, India',
    href: 'https://maps.google.com/?q=C-402%20%26403%2C%20Road%20No.%206%2C%20Indraprastha%20Industrial%20Area%2C%20Kota%20324005%20Rajasthan',
  },
];

const whyBlocks = [
  {
    icon: ShieldCheck,
    title: '100% Odorless Cellulose Cooling Pads',
    text:
      'The most common customer complaint in the air cooler market is the "swamp smell." We eliminate this at the source. Our honeycomb pads are made from premium, chemically treated virgin cellulose paper that is completely odorless from the very first use. Infused with anti-bacterial and anti-fungal agents, they actively resist algae buildup and keep the air hygienic.',
  },
  {
    icon: Wind,
    title: 'High-Efficiency Evaporative Cooling',
    text:
      'A cooler is only as good as its water retention. Our pads are precision-cut to maximize the water-to-air contact area. This highly efficient evaporative media ensures maximum temperature drops while keeping air pressure resistance low, meaning your blower motors work less and last longer.',
  },
  {
    icon: Ruler,
    title: 'Custom Size Cooler Pads',
    text:
      'No two cooler designs are exactly alike, and we never force you to design around standard sizes. Whether you are building a compact room cooler or an industrial HVAC duct system, we cut, shape, and dye to your exact blueprints.',
  },
];

const productTiers = [
  {
    name: 'EverCool',
    label: 'Premium flagship grade',
    image: media.stack,
    headline: 'EverCool: The Peak of Thermal Efficiency.',
    intro:
      'EverCool represents the pinnacle of our manufacturing. Engineered using premium, globally sourced cellulose material, this pad is designed for premium cooling experience that ensures maximum water retention and the highest temperature drop.',
    advantage: 'Exceptional cooling delta and extended material longevity.',
  },
  {
    name: 'SuperCool',
    label: 'Heavy-duty OEM workhorse',
    image: media.range,
    headline: 'SuperCool: Reliable High-Performance.',
    intro:
      'SuperCool offers the ideal equilibrium between extreme performance and procurement viability. Designed for the rigors of heavy, continuous daily usage, SuperCool pads provide the consistent airflow and thermal exchange rates that major brands require to maintain their market reputation.',
    advantage: 'Unshakable durability and reliable water-to-air thermal exchange.',
  },
  {
    name: 'AC Deluxe',
    label: 'Mass-market excellence',
    image: media.frame,
    headline: 'AC Deluxe: Market-Standard Excellence.',
    intro:
      "AC Deluxe is our answer to the competitive mass-market sector. We have refined our production process to deliver Infocom's signature manufacturing quality at an aggressive, scalable price point.",
    advantage: 'High-value, reliable cooling output for mass-market affordability.',
  },
];

const applications = [
  'OEM air cooler manufacturing',
  'Industrial HVAC duct systems',
  'Residential replacement pads',
  'Poly houses and green houses',
  'Poultry farms and hatcheries',
  'Dairy and livestock cooling',
  'Spray painting booths',
  'Turbine air-intake systems',
];

const specs = [
  ['Media', 'Chemically treated virgin cellulose paper'],
  ['Odor profile', '100% odorless from first use'],
  ['Treatment', 'Anti-bacterial and anti-fungal agents'],
  ['Custom sizing', 'Blueprint-based length, height and thickness'],
  ['Flute angles', 'Adjustable from 45 degrees to 60 degrees'],
  ['Color options', 'Custom dyeing for OEM branding'],
  ['Use cases', 'OEM, industrial, agricultural and home replacement'],
  ['Support', 'Technical specification requests through Infocom'],
];

const scienceSteps = [
  [
    Droplets,
    'The Process',
    "Water flows steadily down the corrugated surface of the pad. Simultaneously, hot, dry air from outside is pulled through the pad by the cooler's blower motor.",
  ],
  [
    Layers3,
    'Geometric Precision',
    'The unique, mathematically calibrated flute design of our honeycomb matrix forces the air to navigate a complex path. This drastically increases the surface area of water-to-air contact.',
  ],
  [
    ThermometerSun,
    'The Result',
    'As the dry air passes through, the water evaporates, pulling the sensible heat out of the air. This highly efficient thermal exchange produces a continuous stream of incredibly cool, fresh air.',
  ],
];

const woodWoolAdvantages = [
  [
    'Significantly Longer Operational Life',
    "Wood wool degrades, compresses, and breaks down rapidly. Infocom's resin-cured cellulose matrix maintains its structural integrity season after season, offering a dramatically longer lifespan.",
  ],
  [
    'Zero Sagging or Void Formation',
    'As wood grass gets wet, it sags, creating large empty gaps where hot air bypasses the water entirely. Our rigid honeycomb geometry never sags, guaranteeing 100% consistent thermal efficiency across the entire surface area.',
  ],
  [
    'Superior Hygiene & Air Quality',
    'Wood wool is prone to rotting and releasing a foul "swamp" odor. Infocom pads are treated with advanced anti-bacterial and anti-fungal agents, remaining completely odorless and hygienic from day one.',
  ],
  [
    'Lower Maintenance',
    'Our fluted design acts as a natural particulate filter and is easily self-cleaning as water washes over it, whereas wood grass acts as a trap for dust, debris, and scaling.',
  ],
];

const clientLogos = ['Bajaj', 'Voltas', 'Symphony', 'Havells', 'Crompton'];
const certifications = ['ISO 9001:2008', 'RoHS'];

const packagingHighlights = [
  [Printer, 'High-volume printing', 'Integrated packaging and print capability for branded, consistent supply at industrial scale.'],
  [Boxes, 'Packaging solutions', 'Corrugated, carton and packaging workflows available from the same Kota industrial premises.'],
  [PackageCheck, 'Single-campus coordination', 'Cooling media, packaging and dispatch planning can move together for smoother OEM supply runs.'],
];

const factoryPhotos = [
  {
    image: media.factoryExterior,
    title: 'Factory exterior',
    text: 'Blue-roofed production block and landscaped industrial campus in Kota.',
  },
  {
    image: media.factoryFloor,
    title: 'Production floor',
    text: 'Large, clean manufacturing bay with pad processing equipment and staging zones.',
  },
  {
    image: media.factoryDispatch,
    title: 'Finished pad staging',
    text: 'Honeycomb cooling pads and packed stock prepared for dispatch.',
  },
];

function useHashPage() {
  const getInitial = () => {
    const id = window.location.hash.replace('#', '');
    return routeIds.includes(id) ? id : 'home';
  };
  const [activePage, setActivePage] = useState(getInitial);

  useEffect(() => {
    const onHash = () => setActivePage(getInitial());
    window.addEventListener('hashchange', onHash);
    window.addEventListener('popstate', onHash);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('popstate', onHash);
    };
  }, []);

  const navigate = (id) => {
    window.history.pushState(null, '', `#${id}`);
    setActivePage(id);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return [activePage, navigate];
}

function useReveal(activePage) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activePage]);
}

function Header({ activePage, navigate }) {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    navigate(id);
    setOpen(false);
  };

  return (
    <header className="header-shell">
      <div className="utility-header">
        <a href={amazonLink} target="_blank" rel="noreferrer">
          <ShoppingBag size={16} /> Amazon
        </a>
        <button type="button" onClick={() => go('coming-soon')}>
          <ShoppingBag size={16} /> Flipkart
        </button>
        <button type="button" className="utility-contact" onClick={() => go('contact')}>
          <Phone size={16} /> Contact Us
        </button>
      </div>
      <div className="main-nav">
        <button className="logo-button" type="button" onClick={() => go('home')} aria-label="Go to home">
          <img src="/infocom-logo.png" alt="Infocom" />
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className={activePage === page.id ? 'active' : ''}
              onClick={() => go(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function PageHero({ title, subtitle, children, image = media.texture }) {
  return (
    <section className="page-hero" data-reveal>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
      </div>
      <img src={image} alt="" />
    </section>
  );
}

function ButtonRow({ children }) {
  return <div className="button-row">{children}</div>;
}

function Button({ children, onClick, href, variant = 'primary' }) {
  if (href) {
    return (
      <a className={`button ${variant}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children} <ArrowRight size={17} />
      </a>
    );
  }
  return (
    <button className={`button ${variant}`} type="button" onClick={onClick}>
      {children} <ArrowRight size={17} />
    </button>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="home-hero" data-reveal>
        <video className="hero-video" src={media.video} autoPlay muted loop playsInline poster={media.texture} />
        <div className="hero-shade" />
        <div className="hero-content">
          <h1>India's Trusted Honeycomb Cooling Pad Manufacturer.</h1>
          <p>
            Welcome to Infocom. We manufacture high-performance honeycomb cooling pads trusted by India's leading OEM
            brands. Odorless, durable, and built for massive scale. Uncompromising quality. Infinite customization.
            Massive manufacturing capacity.
          </p>
          <ButtonRow>
            <Button onClick={() => navigate('contact')}>Partner With Us</Button>
            <Button href={amazonLink} variant="secondary">Buy Replacement Pads</Button>
          </ButtonRow>
        </div>
        <div className="hero-proof">
          <span>OEM ready</span>
          <span>Odorless media</span>
          <span>Custom cut</span>
        </div>
      </section>

      <section className="section split-heading">
        <div data-reveal>
          <p className="section-kicker">Why Infocom?</p>
          <h2>Why Leading Brands Rely on Infocom.</h2>
        </div>
        <p data-reveal>Solving the Biggest Bottlenecks in Cooler Manufacturing.</p>
      </section>

      <section className="feature-grid section compact-top">
        {whyBlocks.map(({ icon: Icon, title, text }, index) => (
          <article className="feature-card" key={title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
            <Icon size={30} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section center-cta" data-reveal>
        <Button onClick={() => navigate('specs')} variant="outline">Read Our Tech Specs & Performance Data</Button>
      </section>

      <section className="section product-overview">
        <div className="section-title" data-reveal>
          <p className="section-kicker">Our Products</p>
          <h2>Three Grades of Quality. Zero Compromises.</h2>
          <p>
            From premium imported materials to highly affordable mass-market solutions, we manufacture cooling pads to
            match your specific product lines and profit margins.
          </p>
        </div>
        <div className="tier-strip">
          {productTiers.map((tier, index) => (
            <article className="tier-card" data-reveal key={tier.name} style={{ '--delay': `${index * 70}ms` }}>
              <img src={tier.image} alt={`${tier.name} cooling pad`} />
              <p>{tier.label}</p>
              <h3>{tier.name}</h3>
              <span>{tier.advantage}</span>
            </article>
          ))}
        </div>
        <ButtonRow>
          <Button onClick={() => navigate('products')} variant="outline">Explore All Product Tiers</Button>
        </ButtonRow>
      </section>

      <section className="section image-band" data-reveal>
        <img src={media.pair} alt="Honeycomb cooling pads ready for manufacturing" />
        <div>
          <p className="section-kicker">Supply Chain Strength</p>
          <h2>Massive Production Capacity for Unbroken Supply Chains.</h2>
          <p>
            The biggest risk to an OEM cooler manufacturer is a vendor bottleneck during the peak summer season.
            Operating out of our extensive facility in Kota, Rajasthan, Infocom is built for volume. With OEM-scale CFT
            production capability, we have the infrastructure to absorb massive industrial orders without dropping our
            quality standards. Partnering with us means your assembly line gets exactly what it needs, exactly when it
            needs it.
          </p>
          <Button onClick={() => navigate('infrastructure')} variant="secondary">Our Infrastructure</Button>
        </div>
      </section>

      <section className="section trust-section" data-reveal>
        <p className="section-kicker">Trusted by the best</p>
        <h2>The Manufacturing Backbone for Leading Brands.</h2>
        <p>
          We are proud to supply the core cooling technology for some of the largest and most respected names in the
          Indian air cooling industry including but not limited to Bajaj, Voltas, Crompton Greaves, Symphony etc.
        </p>
        <LogoCloud items={clientLogos} />
        <Button onClick={() => navigate('oem')} variant="outline">See Our OEM & Industrial Solutions</Button>
      </section>

      <section className="section retail-section" data-reveal>
        <div>
          <ShoppingBag size={34} />
          <h2>Need Replacement Cooler Pads for Your Home?</h2>
          <p>
            Don't downgrade your home cooler with cheap, local market pads that smell and degrade quickly. Get the exact
            same factory-grade, anti-bacterial honeycomb replacement pads the big brands use, delivered straight to your
            door. Compatible with all major cooler sizes.
          </p>
        </div>
        <ButtonRow>
          <Button href={amazonLink}>Buy on Amazon</Button>
          <Button href={flipkartLink} variant="secondary">Buy on Flipkart</Button>
        </ButtonRow>
      </section>

      <section className="section packaging-section" data-reveal>
        <div>
          <p className="section-kicker">Same Premises, Broader Industrial Capability</p>
          <h2>Large Scale Packaging and Printing Solution.</h2>
          <p>
            Infocom is backed by a wider Kota-based industrial ecosystem that includes Ampi Packaging Pvt. Ltd.,
            providing large-scale packaging and printing support from the same premises. For OEM partners, that means
            cooling media supply, branded packaging coordination, and dispatch readiness can be planned as one production
            conversation.
          </p>
        </div>
        <div className="packaging-grid">
          {packagingHighlights.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta" data-reveal>
        <h2>Let's Discuss Your Next Production Run.</h2>
        <p>
          Speak directly with our manufacturing team about bulk pricing, custom dimensions, and securing your supply
          chain for the upcoming season.
        </p>
        <Button onClick={() => navigate('contact')}>Contact us Today</Button>
      </section>
    </>
  );
}

function AboutPage({ navigate }) {
  return (
    <>
      <PageHero
        title="The Core Inside India's Best Air Coolers."
        subtitle="Infocom engineers and manufactures high-efficiency evaporative cooling media for the nation's top OEM air cooler brands. Headquartered in Kota, Rajasthan, we operate at the intersection of thermal engineering and industrial-scale production."
        image={media.stack}
      />
      <section className="section editorial-grid">
        <article data-reveal>
          <h2>Designed to Outperform. Built to Outlast.</h2>
          <p>
            We view the honeycomb cooling pad as the thermodynamic centrepiece of a cooler. Every product that leaves
            our facility is built around three core tenets designed to protect your brand's reputation and reduce your
            post-market liability.
          </p>
        </article>
        {[
          ['Absolute Customization', "Standardization slows down innovation. From bespoke flute angles to custom dye colors and exact machine-cut dimensions, we manufacture pads that integrate flawlessly into any OEM's existing blueprint."],
          ['Hygienic & Odorless Media', 'Using chemically treated, high-grade cellulose, we have eradicated the smell factor. Our pads are anti-fungal, eco-friendly, and deliver pure air from the moment of installation.'],
          ['High-Yield Evaporation', 'By perfecting the geometric cross-section and resin-curing process of our honeycomb matrices, we maximize water retention while minimizing air resistance.'],
        ].map(([title, text], index) => (
          <article className="plain-card" data-reveal style={{ '--delay': `${index * 70}ms` }} key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="section image-band reverse" data-reveal>
        <img src={media.texture} alt="Close-up honeycomb cellulose media" />
        <div>
          <h2>State-of-the-Art Production at Industrial Scale.</h2>
          <p>
            Scale means less without consistency. Our manufacturing plant in Kota is equipped with advanced resin-curing,
            paper-heating, and corrugation technology. We maintain rigid quality control checkpoints at every stage of
            production from raw paper procurement to the final thermal-gluing sequence.
          </p>
          <p>
            This localized, high-tech infrastructure gives us the capability to output CFT volumes with zero degradation
            in product quality. Whether it is peak summer demand or off-season stockpiling, Infocom possesses the
            bandwidth to fulfill massive bulk orders on time, every time.
          </p>
        </div>
      </section>
      <section className="section legacy" data-reveal>
        <h2>Backed by Six Decades of Efficiency.</h2>
        <p>
          A supply chain is only as secure as the company behind it. Infocom operates with deep roots in Kota dating back
          to 1956.
        </p>
        <p>
          Founded on the uncompromising principles of ethics, sincerity, and innovation, we span multiple sectors,
          including industrial packaging & printing (Ampi Packaging Pvt. Ltd.), corporate law (Chatter & Company),
          healthcare (PMC American Hospital) etc.
        </p>
        <p>
          For our OEM partners, this legacy translates into stability and discipline. When you source your cooling media
          from Infocom, you are partnering with a corporate house that possesses the infrastructure and integrity to
          secure your supply lines for decades to come.
        </p>
        <Button href={pmcaLink} variant="outline">Learn More About us</Button>
      </section>
      <section className="section final-cta" data-reveal>
        <h2>Secure Your Supply Chain Today.</h2>
        <p>
          Engage directly with our manufacturing leadership to discuss volume pricing, custom prototypes, and production
          timelines for your upcoming product lines.
        </p>
        <Button onClick={() => navigate('contact')}>Contact Us</Button>
      </section>
    </>
  );
}

function ProductsPage({ navigate }) {
  return (
    <>
      <PageHero
        title="Precision-Engineered Evaporative Cooling Solution."
        subtitle="Infocom offers three distinct tiers of evaporative media. Every pad is manufactured with our signature anti-bacterial, odorless cellulose matrix, dirt resistant and weightlessness ensuring consistent thermal exchange across the entire operational lifespan."
        image={media.three}
      />
      <section className="section product-detail-list">
        {productTiers.map((tier, index) => (
          <article className="product-detail" data-reveal key={tier.name}>
            <img src={tier.image} alt={`${tier.name} cooling pad`} />
            <div>
              <p className="section-kicker">{tier.name}</p>
              <h2>{tier.headline}</h2>
              <p>{tier.intro}</p>
              <ul>
                <li>
                  <Check size={18} /> <strong>Key Advantage:</strong> {tier.advantage}
                </li>
              </ul>
              <Button onClick={() => navigate('contact')} variant={index === 0 ? 'primary' : 'outline'}>
                Request {tier.name} Technical Specs
              </Button>
            </div>
          </article>
        ))}
      </section>
      <section className="section customization" data-reveal>
        <h2>Bespoke Manufacturing: Any Size, Any Color, Any Specification.</h2>
        <div className="custom-list">
          {[
            ['Distributor', 'To increase the spread of water, we can add distributors as well, which highly improves the effectiveness and efficiency. We can accomplish this without any supply chain bottlenecks or other troubles.'],
            ['Custom Dimensions', 'We manufacture to your specific blueprints, ensuring a perfect fit for zero assembly-line friction.'],
            ['Color Matching', "We offer custom dyeing to match your cooler's internal branding or aesthetics."],
            ['Material Specs', 'We can adjust flute angles from 45 degrees to 60 degrees and heights based on your required air-pressure drop and saturation needs.'],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Button onClick={() => navigate('contact')}>Discuss Custom Dimensions & Prototypes</Button>
      </section>
      <QualitySection />
      <section className="section retail-section" data-reveal>
        <div>
          <h2>Looking for Replacements for Your Home Cooler?</h2>
          <p>
            Don't settle for substandard pads that degrade in a single season. Get the same factory-grade,
            high-efficiency honeycomb pads that the top cooler brands use. Shop Infocom direct.
          </p>
        </div>
        <ButtonRow>
          <Button href={amazonLink}>Buy on Amazon</Button>
          <Button href={flipkartLink} variant="secondary">Buy on Flipkart</Button>
        </ButtonRow>
      </section>
    </>
  );
}

function QualitySection() {
  return (
    <section className="section quality" data-reveal>
      <h2>Why Our Pads Perform.</h2>
      <div>
        {[
          ['Anti-Bacterial Matrix', 'Every pad, regardless of tier, is treated to resist algae and bacterial growth, keeping the airflow hygienic for your end customers.'],
          ['100% Odorless', 'Our virgin cellulose processing eliminates the chemical smells associated with lower-grade cooling pads.'],
          ['Eco-Friendly', 'Sustainable, recyclable, and designed for maximum energy efficiency.'],
        ].map(([title, text]) => (
          <article key={title}>
            <BadgeCheck size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OEMPage({ navigate }) {
  return (
    <>
      <PageHero
        title="OEM & Industrial Applications."
        subtitle="High-volume honeycomb cooling pads engineered for brand consistency, assembly-line fitment, hygienic airflow, and dependable evaporative performance."
        image={media.pair}
      />
      <section className="section oem-grid">
        <article className="dark-panel" data-reveal>
          <Handshake size={34} />
          <h2>Built for OEM cooler brands.</h2>
          <p>
            We support leading air cooler manufacturers with custom dimensions, color matching, distributor-ready pad
            assemblies, stable seasonal supply and specification-led production.
          </p>
          <Button onClick={() => navigate('contact')} variant="secondary">Start an OEM Discussion</Button>
        </article>
        <div className="application-list">
          {applications.map((item, index) => (
            <span key={item} data-reveal style={{ '--delay': `${index * 35}ms` }}>
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="section image-band" data-reveal>
        <img src={media.frame} alt="Cooling pad with side support" />
        <div>
          <h2>Industrial solutions without vendor bottlenecks.</h2>
          <p>
            Infocom is structured for peak-season demand, custom production runs and recurring supply schedules. Our
            process keeps OEM assembly lines moving while protecting the customer's end-use experience.
          </p>
          <Button onClick={() => navigate('specs')} variant="outline">View Specs & Data</Button>
        </div>
      </section>
      <section className="section client-section" data-reveal>
        <p className="section-kicker">Our Clients</p>
        <h2>Trusted by India's major cooling brands.</h2>
        <LogoCloud items={clientLogos} className="client-logos" />
      </section>
    </>
  );
}

function InfrastructurePage({ navigate }) {
  return (
    <>
      <PageHero
        title="Infrastructure for Scale, Consistency and Speed."
        subtitle="Operating out of Kota, Rajasthan, Infocom combines advanced resin-curing, paper-heating, corrugation and thermal-gluing workflows with practical quality gates."
        image={media.factoryExterior}
      />
      <section className="section factory-map-section" data-reveal>
        <div>
          <p className="section-kicker">Kota Industrial Campus</p>
          <h2>Factory footprint mapped for scale.</h2>
          <p>
            The outlined satellite view shows the Infocom manufacturing premises inside the Indraprastha Industrial Area,
            giving OEM partners a clear sense of the campus footprint behind our production, storage and dispatch
            capability.
          </p>
        </div>
        <figure className="factory-map-card">
          <img src={media.factoryMap} alt="Satellite map outlining the Infocom factory premises" />
          <figcaption>Outlined factory premises in Kota, Rajasthan</figcaption>
        </figure>
      </section>
      <section className="section factory-gallery-section">
        <div className="section-title" data-reveal>
          <div>
            <p className="section-kicker">Factory Photos</p>
            <h2>Real production spaces, not stock visuals.</h2>
          </div>
          <p>
            Exterior, production-floor and finished-pad staging views from the same operating premises used for
            high-volume cooling pad supply.
          </p>
        </div>
        <div className="factory-photo-grid">
          {factoryPhotos.map((photo, index) => (
            <article key={photo.title} data-reveal style={{ '--delay': `${index * 70}ms` }}>
              <img src={photo.image} alt={photo.title} />
              <div>
                <h3>{photo.title}</h3>
                <p>{photo.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section infra-cards">
        {[
          [Factory, 'Kota Manufacturing Base', 'A production facility designed for bulk OEM and industrial cooling pad orders.'],
          [Settings2, 'Process Control', 'Resin-curing, corrugation, paper heating and thermal gluing managed with repeatable quality checks.'],
          [Boxes, 'Supply Reliability', 'Volume-first planning to support peak summer demand and off-season stockpiling.'],
          [PackageCheck, 'Final Inspection', 'Raw paper selection through final dispatch follows structured quality control checkpoints.'],
        ].map(([Icon, title, text], index) => (
          <article data-reveal style={{ '--delay': `${index * 60}ms` }} key={title}>
            <Icon size={30} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="section final-cta" data-reveal>
        <h2>Plan a production run with confidence.</h2>
        <p>Talk to Infocom about bulk pricing, delivery timelines, custom dimensions and seasonal supply security.</p>
        <Button onClick={() => navigate('contact')}>Contact Manufacturing Team</Button>
      </section>
    </>
  );
}

function LogoCloud({ items, className = '' }) {
  return (
    <div className={`logo-cloud ${className}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function PerformanceChart({ type }) {
  const efficiency = type === 'efficiency';
  const curves = efficiency
    ? [
        ['300 mm', 'M70 66 C 180 78, 330 91, 450 95', '#171012'],
        ['200 mm', 'M70 86 C 175 100, 320 113, 450 124', '#2d2527'],
        ['150 mm', 'M70 112 C 170 138, 315 161, 450 174', '#493538'],
        ['100 mm', 'M70 149 C 170 180, 315 211, 450 223', '#720026'],
        ['75 mm', 'M70 186 C 175 218, 315 250, 450 260', '#a7134a'],
      ]
    : [
        ['300 mm', 'M70 260 C 170 220, 280 145, 450 54', '#171012'],
        ['200 mm', 'M70 265 C 180 235, 305 175, 450 116', '#2d2527'],
        ['150 mm', 'M70 270 C 190 245, 310 196, 450 150', '#493538'],
        ['100 mm', 'M70 274 C 190 254, 305 230, 450 206', '#720026'],
        ['75 mm', 'M70 277 C 200 263, 320 248, 450 234', '#a7134a'],
      ];
  const yLabel = efficiency ? '% Saturation Efficiency (%E)' : 'Pressure Drop (Pa)';
  const xTicks = ['0.0', '1.0', '2.0', '3.0', '4.0', '5.0'];

  return (
    <figure className="performance-chart" data-reveal>
      <svg viewBox="0 0 560 390" role="img" aria-label={efficiency ? 'Saturation efficiency versus face velocity chart' : 'Air pressure drop versus face velocity chart'}>
        <rect x="0" y="0" width="560" height="390" rx="8" />
        <g className="grid">
          {Array.from({ length: 6 }, (_, index) => (
            <line key={`v-${index}`} x1={70 + index * 80} x2={70 + index * 80} y1="54" y2="300" />
          ))}
          {Array.from({ length: 6 }, (_, index) => (
            <line key={`h-${index}`} x1="70" x2="470" y1={54 + index * 49.2} y2={54 + index * 49.2} />
          ))}
        </g>
        <line className="axis" x1="70" x2="470" y1="300" y2="300" />
        <line className="axis" x1="70" x2="70" y1="54" y2="300" />
        <text className="chart-title" x="70" y="34">{yLabel}</text>
        <text className="axis-label" x="242" y="350">Air Face Velocity (m/s)</text>
        {xTicks.map((tick, index) => (
          <text key={tick} className="tick" x={70 + index * 80} y="323">{tick}</text>
        ))}
        {(efficiency ? ['100', '90', '80', '70', '60', '50'] : ['500', '400', '300', '200', '100', '0']).map((tick, index) => (
          <text key={tick} className="tick ytick" x="54" y={60 + index * 49.2}>{tick}</text>
        ))}
        <g className="curve-area">
          {curves.map(([label, d, color], index) => (
            <g key={label}>
              <path d={d} stroke={color} />
              <text x="486" y={efficiency ? 72 + index * 42 : 62 + index * 54}>{label}</text>
            </g>
          ))}
        </g>
      </svg>
      <figcaption>
        <strong>{efficiency ? 'Saturation Efficiency vs. Face Velocity' : 'Air Pressure Drop vs. Face Velocity'}</strong>
        <span>
          {efficiency
            ? "Even as the cooler's fan speed increases, Infocom pads maintain strong water saturation efficiency across product tiers."
            : "The aerodynamic flute design creates minimal air resistance, helping blower motors avoid excess load and electricity consumption."}
        </span>
      </figcaption>
    </figure>
  );
}

function SpecsPage({ navigate }) {
  return (
    <>
      <PageHero
        title="Specs & Performance Data."
        subtitle="A concise technical overview for procurement teams, product engineers and OEM decision-makers evaluating Infocom cooling pad media."
        image={media.range}
      />
      <section className="section specs-layout">
        <div className="spec-table" data-reveal>
          {specs.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <aside className="spec-card" data-reveal>
          <BarChart3 size={34} />
          <h2>Request grade-wise technical sheets.</h2>
          <p>
            Share your cooler model, target dimensions, airflow requirement and procurement volume. Our team will help
            match EverCool, SuperCool or AC Deluxe to your performance and pricing needs.
          </p>
          <Button onClick={() => navigate('contact')}>Request Technical Specs</Button>
        </aside>
      </section>
      <section className="section science-section">
        <div className="section-title" data-reveal>
          <div>
            <p className="section-kicker">The Science of Infocom Cooling</p>
            <h2>How It Works: The Enthalpy of Vaporization.</h2>
          </div>
          <p>
            Our honeycomb cooling pads operate on a fundamental thermodynamic principle: the enthalpy of vaporization.
            By converting liquid water into water vapor, the system absorbs massive amounts of heat from the surrounding
            air without requiring the heavy energy consumption of traditional refrigerants.
          </p>
        </div>
        <div className="science-steps">
          {scienceSteps.map(([Icon, title, text], index) => (
            <article key={title} data-reveal style={{ '--delay': `${index * 70}ms` }}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <aside className="performance-output" data-reveal>
          <Gauge size={30} />
          <div>
            <strong>Performance Output</strong>
            <p>
              Under standard operating conditions, Infocom cooling pads are engineered to easily achieve an ambient
              temperature drop of 10°C to 20°C, delivering maximum thermal relief with minimal power consumption.
            </p>
          </div>
        </aside>
      </section>
      <section className="section wood-wool-section" data-reveal>
        <div>
          <p className="section-kicker">Honeycomb Media vs. Wood Wool (Grass) Pads</p>
          <h2>The Generational Upgrade in Cooling Technology.</h2>
          <p>
            Why industry leaders have permanently transitioned from traditional wood wool (aspen/grass) pads to Infocom
            cellulose honeycomb media.
          </p>
        </div>
        <div className="comparison-list">
          {woodWoolAdvantages.map(([title, text]) => (
            <article key={title}>
              <Check size={19} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section data-section">
        <div className="section-title" data-reveal>
          <div>
            <p className="section-kicker">Section 4: The Efficiency Data</p>
            <h2>Thermodynamic Performance Curves.</h2>
          </div>
          <p>
            Two core data views for OEM engineers evaluating cooling efficiency, blower load, and airflow behavior at
            different face velocities.
          </p>
        </div>
        <div className="chart-grid">
          <PerformanceChart type="efficiency" />
          <PerformanceChart type="pressure" />
        </div>
      </section>
      <section className="section certification-section" data-reveal>
        <div>
          <p className="section-kicker">Certifications</p>
          <h2>Quality and compliance signals for OEM procurement.</h2>
        </div>
        <LogoCloud items={certifications} className="certification-logos" />
      </section>
      <QualitySection />
    </>
  );
}

function ContactPage() {
  return (
    <section className="section contact-page" data-reveal>
      <div>
        <p className="section-kicker">Contact Us</p>
        <h1>Let's Discuss Your Next Production Run.</h1>
        <p>
          Speak directly with our manufacturing team about bulk pricing, custom dimensions, and securing your supply
          chain for the upcoming season.
        </p>
        <ButtonRow>
          <Button href={amazonLink} variant="outline">Amazon Store</Button>
          <Button href={flipkartLink} variant="outline">Flipkart Store</Button>
        </ButtonRow>
      </div>
      <div className="contact-stack">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a href={href} key={label} className="contact-card">
            <Icon size={24} />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function ComingSoonPage({ navigate }) {
  return (
    <section className="section coming-soon-page" data-reveal>
      <div className="coming-soon-mark">
        <img src="/infocom-logo.png" alt="Infocom" />
      </div>
      <p className="section-kicker">Flipkart Store</p>
      <h1>Coming Soon.</h1>
      <p>
        Our Flipkart storefront is being prepared with the same care as our cooling media. Until it goes live, you can
        shop replacement pads on Amazon or speak with Infocom directly for bulk and custom requirements.
      </p>
      <ButtonRow>
        <Button href={amazonLink}>Shop on Amazon</Button>
        <Button onClick={() => navigate('contact')} variant="secondary">Contact Infocom</Button>
      </ButtonRow>
    </section>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div>
        <img src="/infocom-logo.png" alt="Infocom" />
        <p>C-402 & 403, Road No. 6, Indraprastha Industrial Area, Kota - 324005, Rajasthan, India</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        {pages.map((page) => (
          <button type="button" key={page.id} onClick={() => navigate(page.id)}>
            {page.label}
          </button>
        ))}
      </div>
      <div>
        <h3>Stores & Social</h3>
        <a href={amazonLink} target="_blank" rel="noreferrer">Amazon</a>
        <button type="button" onClick={() => navigate('coming-soon')}>Flipkart</button>
        <a href="mailto:lilycoolers@gmail.com">Email</a>
      </div>
    </footer>
  );
}

function App() {
  const [activePage, navigate] = useHashPage();
  useReveal(activePage);

  const page = useMemo(() => {
    if (activePage === 'about') return <AboutPage navigate={navigate} />;
    if (activePage === 'products') return <ProductsPage navigate={navigate} />;
    if (activePage === 'oem') return <OEMPage navigate={navigate} />;
    if (activePage === 'infrastructure') return <InfrastructurePage navigate={navigate} />;
    if (activePage === 'specs') return <SpecsPage navigate={navigate} />;
    if (activePage === 'contact') return <ContactPage />;
    if (activePage === 'coming-soon') return <ComingSoonPage navigate={navigate} />;
    return <HomePage navigate={navigate} />;
  }, [activePage, navigate]);

  return (
    <>
      <Header activePage={activePage} navigate={navigate} />
      <main>{page}</main>
      {activePage !== 'contact' && <ContactPage />}
      <Footer navigate={navigate} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
