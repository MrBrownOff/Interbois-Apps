/* @ds-bundle: {"format":4,"namespace":"InterboisDesignSystem_064f6a","components":[],"sourceHashes":{"ui_kits/marketing/components/Contact.jsx":"e9332c0c78a9","ui_kits/marketing/components/Feature.jsx":"ca416b26b797","ui_kits/marketing/components/Footer.jsx":"ef6c0f9a1739","ui_kits/marketing/components/Hero.jsx":"7027d6e1695d","ui_kits/marketing/components/Nav.jsx":"8526588aaa90","ui_kits/marketing/components/Primitives.jsx":"1c5b620a6ee0","ui_kits/marketing/components/ProductCard.jsx":"eec90a0820f5","ui_kits/marketing/components/ProductDetail.jsx":"c59c884dc87d","ui_kits/marketing/components/ProductGrid.jsx":"a4d929d6c81f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InterboisDesignSystem_064f6a = window.InterboisDesignSystem_064f6a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/components/Contact.jsx
try { (() => {
// Contact — form + address block pulled straight from the guide.

function Contact({
  lang
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, lang === 'fr' ? 'Contact' : 'Contact'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Geologica',
      fontWeight: 800,
      fontSize: 64,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      margin: '0 0 48px 0'
    }
  }, lang === 'fr' ? 'Parlons-en.' : 'Let\'s talk.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 80
    }
  }, !sent ? /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lblStyle
  }, lang === 'fr' ? 'Nom' : 'Name'), /*#__PURE__*/React.createElement("input", {
    style: inpStyle,
    defaultValue: "Lorem Ipsum"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lblStyle
  }, lang === 'fr' ? 'Courriel' : 'Email'), /*#__PURE__*/React.createElement("input", {
    style: inpStyle,
    placeholder: "vous@exemple.ca"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lblStyle
  }, lang === 'fr' ? 'Téléphone' : 'Phone'), /*#__PURE__*/React.createElement("input", {
    style: inpStyle,
    placeholder: "418 000-0000"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lblStyle
  }, lang === 'fr' ? 'Message' : 'Message'), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inpStyle,
      minHeight: 120,
      resize: 'vertical',
      fontFamily: 'Geologica'
    },
    defaultValue: lang === 'fr' ? 'Je cherche…' : 'I\'m looking for…'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, lang === 'fr' ? 'Envoyer' : 'Send', " ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#5B5B59'
    }
  }, lang === 'fr' ? 'Réponse sous 48 h.' : 'Reply within 48 h.'))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      border: '1px solid #000',
      background: '#E8E8E8'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 8
    }
  }, lang === 'fr' ? 'Merci' : 'Thanks'), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Geologica',
      fontSize: 28,
      fontWeight: 700,
      margin: 0,
      letterSpacing: '-0.02em'
    }
  }, lang === 'fr' ? 'Votre message est envoyé.' : 'Your message is on its way.')), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid #000',
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, lang === 'fr' ? 'Atelier' : 'Workshop'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geologica',
      fontSize: 15,
      lineHeight: 1.6,
      marginBottom: 24
    }
  }, "305, rue du Parc", /*#__PURE__*/React.createElement("br", null), "Saint-Odilon (Qu\xE9bec)", /*#__PURE__*/React.createElement("br", null), "G0S 3A0"), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, lang === 'fr' ? 'Téléphone' : 'Phone'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14,
      lineHeight: 1.6,
      marginBottom: 24
    }
  }, "t 418 464-4000 \u2192 1234", /*#__PURE__*/React.createElement("br", null), "c 418 390-2468"), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, lang === 'fr' ? 'Courriel' : 'Email'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 14
    }
  }, "l.ipsum@interbois.ca"))));
}
const lblStyle = {
  display: 'block',
  fontFamily: 'Geologica',
  fontSize: 11,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#5B5B59',
  fontWeight: 600,
  marginBottom: 6
};
const inpStyle = {
  display: 'block',
  width: '100%',
  padding: '12px 14px',
  border: '1px solid #000',
  fontSize: 14,
  background: '#fff',
  boxSizing: 'border-box',
  fontFamily: 'Geologica'
};
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/Feature.jsx
try { (() => {
// Editorial feature row — used on home below the hero.

function Feature({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 48px',
      background: '#000',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#CFCDCB",
    style: {
      marginBottom: 24
    }
  }, lang === 'fr' ? 'Notre atelier' : 'Our workshop'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Geologica',
      fontWeight: 800,
      fontSize: 56,
      letterSpacing: '-0.03em',
      lineHeight: 1.02,
      margin: '0 0 24px 0'
    }
  }, lang === 'fr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Un savoir-faire", /*#__PURE__*/React.createElement("br", null), "ancr\xE9 au Qu\xE9bec", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FE5000'
    }
  }, ".")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Craftsmanship", /*#__PURE__*/React.createElement("br", null), "rooted in Qu\xE9bec", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FE5000'
    }
  }, "."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Lora',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1.5,
      color: '#CFCDCB',
      margin: '0 0 32px 0',
      maxWidth: 460
    }
  }, "\xAB ", lang === 'fr' ? 'Chaque moulure est dessinée, produite et finie dans notre atelier de Saint-Odilon.' : 'Every moulding is drawn, produced, and finished in our Saint-Odilon workshop.', " \xBB"), /*#__PURE__*/React.createElement(Button, {
    variant: "invert"
  }, lang === 'fr' ? 'Visiter l\'atelier' : 'Tour the workshop', " ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'linear-gradient(135deg, #5B5B59 0%, #2a2a28 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 20,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: '#CFCDCB'
    }
  }, /*#__PURE__*/React.createElement(DemiDot, {
    size: 12,
    color: "#FE5000",
    style: {
      marginRight: 8
    }
  }), lang === 'fr' ? 'Image éditoriale — à remplacer' : 'Editorial image — placeholder')));
}
window.Feature = Feature;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/Feature.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/Footer.jsx
try { (() => {
// Institutional footer.

function Footer({
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#000',
      color: '#fff',
      padding: '64px 48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "interbois",
    style: {
      height: 28,
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Lora',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1.4,
      margin: 0,
      color: '#CFCDCB',
      maxWidth: 360
    }
  }, "\xAB ", lang === 'fr' ? 'La finition intérieure s\'éclate.' : 'Interior finishing. Elevated.', " \xBB")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#CFCDCB",
    style: {
      marginBottom: 14
    }
  }, lang === 'fr' ? 'Produits' : 'Products'), /*#__PURE__*/React.createElement(FooterList, {
    items: lang === 'fr' ? ['Plinthes', 'Cimaises', 'Couronnes', 'Cadrages', 'Accessoires'] : ['Baseboards', 'Chair rails', 'Crown', 'Casings', 'Accessories']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#CFCDCB",
    style: {
      marginBottom: 14
    }
  }, lang === 'fr' ? 'Ressources' : 'Resources'), /*#__PURE__*/React.createElement(FooterList, {
    items: lang === 'fr' ? ['Fiches techniques', 'Installation', 'Projets', 'Blogue'] : ['Spec sheets', 'Installation', 'Projects', 'Journal']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "#CFCDCB",
    style: {
      marginBottom: 14
    }
  }, lang === 'fr' ? 'Nous joindre' : 'Reach us'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geologica',
      fontSize: 13,
      lineHeight: 1.6,
      color: '#CFCDCB'
    }
  }, "305, rue du Parc", /*#__PURE__*/React.createElement("br", null), "Saint-Odilon (Qu\xE9bec)", /*#__PURE__*/React.createElement("br", null), "G0S 3A0", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "418 464-4000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #5B5B59',
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Geologica',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#CFCDCB'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 interbois \u2014 Saint-Odilon, QC"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DemiDot, {
    size: 10,
    color: "#FE5000"
  }), " interbois.ca")));
}
function FooterList({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'Geologica',
      fontSize: 13,
      color: '#CFCDCB',
      cursor: 'pointer'
    }
  }, i)));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/Hero.jsx
try { (() => {
// Editorial hero with tagline in both languages.

function Hero({
  lang,
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px 64px',
      borderBottom: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 32
    }
  }, lang === 'fr' ? 'Saint-Odilon, Québec · Depuis 1974' : 'Saint-Odilon, Québec · Since 1974'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Geologica, sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(48px, 6vw, 96px)',
      lineHeight: 0.96,
      letterSpacing: '-0.035em',
      margin: '0 0 24px 0',
      textWrap: 'balance'
    }
  }, lang === 'fr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "La finition", /*#__PURE__*/React.createElement("br", null), "int\xE9rieure", /*#__PURE__*/React.createElement("br", null), "s'\xE9clate", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FE5000'
    }
  }, ".")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Interior", /*#__PURE__*/React.createElement("br", null), "finishing", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FE5000'
    }
  }, "."), /*#__PURE__*/React.createElement("br", null), "Elevated.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setRoute('catalog')
  }, lang === 'fr' ? 'Voir le catalogue' : 'Browse catalog', " ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => setRoute('contact')
  }, lang === 'fr' ? 'Demander un devis' : 'Request a quote'))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: 'linear-gradient(135deg, #CFCDCB 0%, #5B5B59 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 14px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      color: '#fff',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(DemiDot, {
    size: 12,
    color: "#FE5000",
    style: {
      marginRight: 8
    }
  }), lang === 'fr' ? 'Photo produit — à remplacer' : 'Product photo — placeholder'))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/Nav.jsx
try { (() => {
// Top navigation for Interbois marketing site.
// Thin hairline border under, bilingual toggle on the right, logo left.

function Nav({
  lang,
  setLang,
  route,
  setRoute
}) {
  const links = [{
    id: 'home',
    fr: 'Accueil',
    en: 'Home'
  }, {
    id: 'catalog',
    fr: 'Catalogue',
    en: 'Catalog'
  }, {
    id: 'projects',
    fr: 'Projets',
    en: 'Projects'
  }, {
    id: 'about',
    fr: 'À propos',
    en: 'About'
  }, {
    id: 'contact',
    fr: 'Contact',
    en: 'Contact'
  }];
  const linkStyle = active => ({
    fontFamily: 'Geologica, sans-serif',
    fontSize: 13,
    fontWeight: 500,
    color: '#000',
    textDecoration: 'none',
    padding: '6px 0',
    borderBottom: active ? '2px solid #000' : '2px solid transparent',
    cursor: 'pointer',
    letterSpacing: '-0.005em'
  });
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      borderBottom: '1px solid #000',
      position: 'sticky',
      top: 0,
      background: '#fff',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-black.png",
    alt: "interbois",
    style: {
      height: 26,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    style: linkStyle(route === l.id),
    onClick: () => setRoute(l.id)
  }, lang === 'fr' ? l.fr : l.en))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'Geologica',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.1em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setLang('fr'),
    style: {
      cursor: 'pointer',
      color: lang === 'fr' ? '#000' : '#CFCDCB'
    }
  }, "FR"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#CFCDCB'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    onClick: () => setLang('en'),
    style: {
      cursor: 'pointer',
      color: lang === 'en' ? '#000' : '#CFCDCB'
    }
  }, "EN")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/Primitives.jsx
try { (() => {
// Primitives — small shared bits for the Interbois marketing kit.

function DemiDot({
  size = 14,
  color = 'currentColor',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size / 2,
      background: color,
      borderRadius: `${size}px ${size}px 0 0`,
      verticalAlign: 'top',
      ...style
    }
  });
}
function Eyebrow({
  children,
  color,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geologica, sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: color || '#5B5B59',
      ...style
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  style = {}
}) {
  const base = {
    fontFamily: 'Geologica, sans-serif',
    fontWeight: 600,
    cursor: 'pointer',
    border: 0,
    letterSpacing: '-0.005em',
    transition: 'all 120ms cubic-bezier(0.2,0,0.2,1)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none'
  };
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 12
    },
    md: {
      padding: '12px 22px',
      fontSize: 14
    },
    lg: {
      padding: '16px 28px',
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: '#000',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: '#000',
      border: '1px solid #000'
    },
    invert: {
      background: '#fff',
      color: '#000'
    },
    demi: {
      background: '#000',
      color: '#fff',
      borderRadius: 999
    },
    link: {
      background: 'transparent',
      color: '#000',
      borderBottom: '2px solid #FE5000',
      padding: '6px 0',
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, children);
}
function Arrow({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size,
      lineHeight: 1
    }
  }, "\u2192");
}
window.DemiDot = DemiDot;
window.Eyebrow = Eyebrow;
window.Button = Button;
window.Arrow = Arrow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/ProductCard.jsx
try { (() => {
// Product tile for the catalog grid.

function ProductCard({
  product,
  onClick,
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      cursor: 'pointer',
      border: '1px solid #000',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 200ms cubic-bezier(0.2,0,0.2,1), background 200ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#000';
      e.currentTarget.querySelectorAll('[data-invert]').forEach(el => el.style.color = '#fff');
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = '#fff';
      e.currentTarget.querySelectorAll('[data-invert]').forEach(el => el.style.color = '#000');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: product.swatch,
      borderBottom: '1px solid #000',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 11,
      color: '#5B5B59'
    }
  }, /*#__PURE__*/React.createElement(DemiDot, {
    size: 8,
    color: "#FE5000",
    style: {
      marginRight: 4
    }
  }), product.code)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-invert": true,
    style: {
      fontFamily: 'Geologica',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#5B5B59',
      fontWeight: 600
    }
  }, product.category), /*#__PURE__*/React.createElement("div", {
    "data-invert": true,
    style: {
      fontFamily: 'Geologica',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#000'
    }
  }, product.name[lang]), /*#__PURE__*/React.createElement("div", {
    "data-invert": true,
    style: {
      fontFamily: 'Geologica',
      fontSize: 13,
      color: '#5B5B59'
    }
  }, product.spec)));
}
window.ProductCard = ProductCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/ProductDetail.jsx
try { (() => {
// Product detail screen. Big image left, specs right.

function ProductDetail({
  product,
  lang,
  setRoute
}) {
  if (!product) product = PRODUCTS[0];
  const specs = [{
    label: lang === 'fr' ? 'Code' : 'Code',
    val: product.code
  }, {
    label: lang === 'fr' ? 'Matière' : 'Material',
    val: product.spec.split('·').pop().trim()
  }, {
    label: lang === 'fr' ? 'Profil' : 'Profile',
    val: product.spec.split('·')[0].trim()
  }, {
    label: lang === 'fr' ? 'Finition' : 'Finish',
    val: lang === 'fr' ? 'Apprêté blanc' : 'White primed'
  }, {
    label: lang === 'fr' ? 'Origine' : 'Origin',
    val: 'Saint-Odilon, Québec'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 48px 80px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute('catalog'),
    style: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'Geologica',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: '#5B5B59',
      marginBottom: 32,
      padding: 0
    }
  }, "\u2190 ", lang === 'fr' ? 'Retour au catalogue' : 'Back to catalog'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: product.swatch,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 24,
      border: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 12,
      color: '#5B5B59'
    }
  }, /*#__PURE__*/React.createElement(DemiDot, {
    size: 10,
    color: "#FE5000",
    style: {
      marginRight: 6
    }
  }), product.code)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 12
    }
  }, product.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Geologica',
      fontWeight: 800,
      fontSize: 56,
      letterSpacing: '-0.03em',
      lineHeight: 1.0,
      margin: '0 0 24px 0',
      textWrap: 'balance'
    }
  }, product.name[lang]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'Lora',
      fontStyle: 'italic',
      fontSize: 17,
      lineHeight: 1.5,
      color: '#000',
      margin: '0 0 32px 0'
    }
  }, "\xAB ", lang === 'fr' ? 'Un profil classique, réinterprété pour les intérieurs contemporains.' : 'A classic profile, reimagined for contemporary interiors.', " \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #000'
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderBottom: '1px solid #E8E8E8',
      fontFamily: 'Geologica',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5B5B59',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontSize: 11,
      fontWeight: 600,
      alignSelf: 'center'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#000',
      fontWeight: 500
    }
  }, s.val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, lang === 'fr' ? 'Fiche technique' : 'Spec sheet', " ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, lang === 'fr' ? 'Demander un échantillon' : 'Request sample')))));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/components/ProductGrid.jsx
try { (() => {
// Catalog page with filter pills.

const PRODUCTS = [{
  code: '3344',
  name: {
    fr: 'Plinthe colonial',
    en: 'Colonial baseboard'
  },
  category: 'Plinthes',
  spec: '5 1⁄4" × 9 pi · MDF',
  swatch: '#E8E8E8'
}, {
  code: '8122',
  name: {
    fr: 'Cimaise lisse',
    en: 'Smooth chair rail'
  },
  category: 'Cimaises',
  spec: '2 1⁄2" × 9 pi · Pin',
  swatch: '#CFCDCB'
}, {
  code: '5501',
  name: {
    fr: 'Moulure couronne',
    en: 'Crown moulding'
  },
  category: 'Couronnes',
  spec: '4" × 12 pi · MDF',
  swatch: '#D6CFC2'
}, {
  code: '2210',
  name: {
    fr: 'Cadrage de porte',
    en: 'Door casing'
  },
  category: 'Cadrages',
  spec: '3 1⁄4" × 7 pi · Pin',
  swatch: '#EDE7DC'
}, {
  code: '9044',
  name: {
    fr: 'Quart-de-rond',
    en: 'Quarter round'
  },
  category: 'Accessoires',
  spec: '3⁄4" × 8 pi · MDF',
  swatch: '#E8E8E8'
}, {
  code: '6677',
  name: {
    fr: 'Moulure à panneau',
    en: 'Panel moulding'
  },
  category: 'Panneaux',
  spec: '1 1⁄2" × 8 pi · Pin',
  swatch: '#CFCDCB'
}];
function ProductGrid({
  lang,
  onSelect
}) {
  const [filter, setFilter] = React.useState('Tous');
  const cats = ['Tous', 'Plinthes', 'Cimaises', 'Couronnes', 'Cadrages', 'Panneaux', 'Accessoires'];
  const filtered = filter === 'Tous' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, lang === 'fr' ? 'Catalogue' : 'Catalog'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Geologica',
      fontWeight: 800,
      fontSize: 48,
      letterSpacing: '-0.025em',
      margin: '0 0 32px 0',
      lineHeight: 1
    }
  }, lang === 'fr' ? 'Produits' : 'Products'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      fontFamily: 'Geologica',
      fontSize: 12,
      fontWeight: 600,
      padding: '8px 16px',
      border: '1px solid #000',
      borderRadius: 999,
      cursor: 'pointer',
      background: filter === c ? '#000' : 'transparent',
      color: filter === c ? '#fff' : '#000',
      letterSpacing: '0.02em'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.code,
    product: p,
    lang: lang,
    onClick: () => onSelect(p)
  }))));
}
window.ProductGrid = ProductGrid;
window.PRODUCTS = PRODUCTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/components/ProductGrid.jsx", error: String((e && e.message) || e) }); }

})();
