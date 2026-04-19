# The Archivist — Design System

Design system editoriale per **The Archivist**, pubblicazione premium. Architettura a tre livelli: **atomi → molecole → organismi**, composable per Next.js App Router con gestione server/client boundary delegata al consumer.

---

## Setup

### Installazione CSS

Importa il foglio di stile globale nell'entry point dell'app:

```tsx
// app/layout.tsx
import "@repo/ui/globals.css";
```

### Font

I font **Newsreader** (serif, headlines) e **Manrope** (sans-serif, body) devono essere caricati dal consumer. Con Next.js:

```tsx
import { Manrope, Newsreader } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-headline", style: ["normal", "italic"] });

// Applica le variabili al body
<body className={`${manrope.variable} ${newsreader.variable}`}>
```

### Icone

Il design system usa **`lucide-react`** per tutte le icone. È una dipendenza del pacchetto — nessuna configurazione richiesta.

---

## Design Tokens

I token sono disponibili come classi Tailwind generate da CSS custom properties.

### Palette colori

| Token Tailwind | Valore | Uso |
|---|---|---|
| `bg-surface` | `#fbf9f7` | Background principale |
| `bg-surface-container-lowest` | `#ffffff` | Card su surface |
| `bg-surface-container-low` | `#f5f3f1` | Sezioni alternate |
| `bg-surface-container` | `#efedec` | Input, chip |
| `bg-surface-container-high` | `#eae8e6` | Skeleton, avatar placeholder |
| `bg-surface-container-highest` | `#e4e2e0` | Input focus-out |
| `bg-surface-dim` | `#dbdad8` | Overlay leggero |
| `text-on-surface` | `#1b1c1b` | Testo principale |
| `text-on-surface-variant` | `#5b403d` | Testo secondario, label muted |
| `bg-primary` / `text-primary` | `#a20513` | Rosso editoriale |
| `bg-primary-container` | `#c62828` | Hover primary, gradient |
| `text-primary-foreground` | `#ffffff` | Testo su primary |
| `bg-secondary` | `#9e403a` | Accento secondario |
| `bg-inverse-surface` | `#30302f` | Footer, dark sections |
| `text-inverse-on-surface` | `#f2f0ee` | Testo su inverse surface |
| `bg-outline-variant` | `#e4beba` | Divider, bordi sottili |

### Tipografia

| Classe Tailwind | Font | Uso |
|---|---|---|
| `font-headline` | Newsreader (serif) | Titoli, pullquote, drop cap |
| `font-body` | Manrope (sans-serif) | Corpo testo, label, UI |

### Border Radius

| Classe Tailwind | Valore | Uso |
|---|---|---|
| `rounded-soft` | `0.75rem` | Input, badge, pulsanti |
| `rounded-organic` | `1rem` | Card standard |
| `rounded-gallery` | `1.5rem` | Hero image, card grandi |

### Shadow & Utility

| Classe | Effetto |
|---|---|
| `shadow-ambient` | `0 12px 32px -4px rgba(91,64,61,0.08)` — ombra calda |
| `glass-panel` | `backdrop-blur(24px)` + `bg rgba(251,249,247,0.8)` |
| `text-fade-out` | Gradient mask da opaco a trasparente (paywall preview) |

---

## Architettura dei componenti

### Pattern di composizione

**Atomi** — estendono `ComponentProps<"tag">` nativo, massima flessibilità, CVA per varianti.

**Molecole** — accettano **slot `ReactNode`** per ogni area di contenuto variabile. Il consumer decide se ogni slot è un Server Component, un Client Component, o contenuto statico.

**Organismi** — **compound components** senza React Context. Il parent definisce il layout, i sub-components (`Organism.SubPart`) sono styled wrapper puri. RSC-safe, nessun `"use client"` (tranne molecole client esplicite).

### Regola `"use client"`

Solo 3 componenti hanno `"use client"`: `SearchInput`, `SearchBar`, `NewsletterSignup`. Tutti gli altri sono server-compatible.

---

## Import paths

```tsx
// Atomi — typography
import { Headline } from "@repo/ui/atoms/typography/headline";
import { BodyText } from "@repo/ui/atoms/typography/body-text";
import { Label } from "@repo/ui/atoms/typography/label";
import { DropCap } from "@repo/ui/atoms/typography/dropcap";
import { FadeText } from "@repo/ui/atoms/typography/fade-text";
import { Pullquote } from "@repo/ui/atoms/typography/pullquote";

// Atomi — altri
import { Badge } from "@repo/ui/atoms/badge";
import { Avatar } from "@repo/ui/atoms/avatar";
import { HeroImage } from "@repo/ui/atoms/hero-image";
import { Divider } from "@repo/ui/atoms/divider";
import { GlassPanel } from "@repo/ui/atoms/glass-panel";
import { Skeleton } from "@repo/ui/atoms/skeleton";
import { SearchInput } from "@repo/ui/atoms/search-input"; // "use client"

// Molecole
import { NavBar } from "@repo/ui/molecules/nav-bar";
import { NavLinks } from "@repo/ui/molecules/nav-links";
import { GlassCaption } from "@repo/ui/molecules/glass-caption";
import { HeroPlate } from "@repo/ui/molecules/hero-plate";
import { BreakingNewsBanner } from "@repo/ui/molecules/breaking-news-banner";
import { ArticleCard } from "@repo/ui/molecules/article-card";
import { ArticleCardHorizontal } from "@repo/ui/molecules/article-card-horizontal";
import { FeatureCard } from "@repo/ui/molecules/feature-card";
import { SearchResultCard } from "@repo/ui/molecules/search-result-card";
import { SectionHeader } from "@repo/ui/molecules/section-header";
import { AuthorCard } from "@repo/ui/molecules/author-card";
import { ArticleHeader } from "@repo/ui/molecules/article-header";
import { PaywallGate } from "@repo/ui/molecules/paywall-gate";
import { FooterBar } from "@repo/ui/molecules/footer-bar";
import { EmptyState } from "@repo/ui/molecules/empty-state";
import { SearchBar } from "@repo/ui/molecules/search-bar";             // "use client"
import { NewsletterSignup } from "@repo/ui/molecules/newsletter-signup"; // "use client"

// Organismi
import { SiteNav } from "@repo/ui/organisms/site-nav";
import { HeroSection } from "@repo/ui/organisms/hero-section";
import { EditorialGrid } from "@repo/ui/organisms/editorial-grid";
import { ArticleBody } from "@repo/ui/organisms/article-body";
import { PaywallSection } from "@repo/ui/organisms/paywall-section";
import { SearchLayout } from "@repo/ui/organisms/search-layout";
import { CardsGrid } from "@repo/ui/organisms/cards-grid";
import { NewsletterSection } from "@repo/ui/organisms/newsletter-section";
import { SiteFooter } from "@repo/ui/organisms/site-footer";
```

---

## Atomi

### `Headline`

Titolo polimorfico. Renderizza `h1`–`h6` o `p` in base alla prop `as`.

```tsx
<Headline as="h1" size="display" italic>The Age of Uncertainty</Headline>
<Headline as="h2" size="headline-lg">Section Title</Headline>
<Headline size="title-md">Subsection</Headline>
```

| Prop | Tipo | Default | Valori |
|---|---|---|---|
| `as` | `"h1"–"h6" \| "p"` | `"h2"` | — |
| `size` | string | `"headline-md"` | `"display"` `"headline-lg"` `"headline-md"` `"title-lg"` `"title-md"` |
| `italic` | boolean | — | `true` |
| `className` | string | — | merge con `cn()` |

Dimensioni: display = `3.5rem`, headline-lg = `2.5rem`, headline-md = `1.75rem`, title-lg = `1.375rem`, title-md = `1.125rem`.

---

### `BodyText`

Paragrafo con varianti di dimensione, peso e colore.

```tsx
<BodyText size="lg" weight="medium">Lead paragraph text</BodyText>
<BodyText size="sm" color="muted">Caption or meta info</BodyText>
```

| Prop | Tipo | Default | Valori |
|---|---|---|---|
| `size` | string | `"md"` | `"lg"` `"md"` `"sm"` |
| `color` | string | `"default"` | `"default"` `"muted"` |
| `weight` | string | `"normal"` | `"normal"` `"medium"` `"semibold"` `"bold"` |

---

### `Label`

Etichetta breve, tipicamente per categorie, meta o tag. Font semibold.

```tsx
<Label color="primary" uppercase>Politics</Label>
<Label size="xs" color="muted">5 min read</Label>
```

| Prop | Tipo | Default | Valori |
|---|---|---|---|
| `size` | string | `"sm"` | `"xs"` `"sm"` |
| `color` | string | `"default"` | `"default"` `"primary"` `"muted"` |
| `uppercase` | boolean | — | `true` aggiunge `tracking-widest` |

---

### `DropCap`

Paragrafo con lettera maiuscola decorativa (capolettera) in rosso editoriale.

```tsx
<DropCap>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</DropCap>
```

Nessuna prop speciale oltre `className` e i props standard di `<p>`.

---

### `FadeText`

Div con gradiente che sfuma il contenuto verso il basso. Usato come preview paywall.

```tsx
<FadeText>
  <p>Article preview content that fades out...</p>
  <p>More content here</p>
</FadeText>
```

---

### `Pullquote`

Citazione editoriale con bordo sinistro rosso e attribution opzionale.

```tsx
<Pullquote attribution={<>— John Smith, Editor</>}>
  "The most dangerous moment for a bad government is when it begins to reform itself."
</Pullquote>
```

| Prop | Tipo | Note |
|---|---|---|
| `attribution` | `ReactNode` | Riga footer sotto la citazione |
| `children` | `ReactNode` | Il testo della citazione |

---

### `Badge`

Etichetta inline con tre varianti di stile.

```tsx
<Badge variant="category">Politics</Badge>
<Badge variant="tag">analysis</Badge>
<Badge variant="status">Premium</Badge>
```

| Variante | Aspetto |
|---|---|
| `category` | Sfondo rosso/10, testo primary, uppercase tracking (default) |
| `tag` | Sfondo surface-container, testo muted |
| `status` | Sfondo surface-container-high, `rounded-full` |

---

### `Avatar`

Immagine profilo circolare.

```tsx
<Avatar src="/authors/jane.jpg" alt="Jane Doe" size="lg" />
```

| Prop | Tipo | Default | Valori |
|---|---|---|---|
| `src` | string | — | required |
| `alt` | string | — | required |
| `size` | string | `"md"` | `"sm"` (32px) `"md"` (40px) `"lg"` (56px) `"xl"` (80px) |

---

### `HeroImage`

Container immagine con aspect ratio, radius e zoom on hover.

```tsx
<HeroImage
  src="/cover.jpg"
  alt="Cover photo"
  aspectRatio="21/9"
  radius="gallery"
  hoverZoom
/>
```

| Prop | Tipo | Default | Valori |
|---|---|---|---|
| `src` | string | — | required |
| `alt` | string | — | required |
| `aspectRatio` | string | `"16/9"` | `"16/9"` `"21/9"` `"4/3"` `"1/1"` `"3/2"` |
| `radius` | string | `"organic"` | `"none"` `"soft"` `"organic"` `"gallery"` |
| `hoverZoom` | boolean | `false` | Aggiunge `group-hover:scale-105` — richiede `group` sul parent |
| `imgClassName` | string | — | Classe aggiuntiva sull'elemento `<img>` |

---

### `Divider`

Separatore orizzontale o verticale.

```tsx
<Divider />
<Divider orientation="vertical" opacity={20} />
```

| Prop | Tipo | Default | Note |
|---|---|---|---|
| `orientation` | string | `"horizontal"` | `"horizontal"` o `"vertical"` |
| `opacity` | number | `100` | Valore 0–100, convertito in `opacity` CSS |

---

### `GlassPanel`

Container con effetto glassmorphism (backdrop blur).

```tsx
<GlassPanel className="p-6">
  Contenuto sopra sfondo sfumato
</GlassPanel>
```

Applica `.glass-panel` + `border border-white/20 rounded-organic shadow-ambient`. Qualsiasi prop standard di `<div>`.

---

### `Skeleton`

Placeholder animato per loading state.

```tsx
<Skeleton variant="block" className="h-48 w-full" />
<Skeleton variant="circle" className="w-10 h-10" />
<Skeleton variant="text" className="w-3/4" />
```

| Variante | Aspetto |
|---|---|
| `block` | `rounded-organic` (default) |
| `circle` | `rounded-full` |
| `text` | `rounded h-4` — simula una riga di testo |

---

### `SearchInput` — `"use client"`

Input di ricerca controllato con icona e pulsante clear.

```tsx
<SearchInput
  value={query}
  onChange={setQuery}
  placeholder="Search articles..."
/>
```

| Prop | Tipo | Note |
|---|---|---|
| `value` | string | Valore corrente |
| `onChange` | `(value: string) => void` | Callback su cambio |
| `placeholder` | string | Default `"Search..."` |

---

## Molecole

Le molecole accettano **slot `ReactNode`** per tutto il contenuto variabile. Il layout si adatta in base alla presenza degli slot (condizionale con `&&`).

### `NavBar`

Header sticky con glassmorphism. Slot per logo, navigazione e azioni.

```tsx
<NavBar
  logo={<Logo />}
  nav={<NavLinks items={navItems} />}
  actions={<><SearchButton /><LoginButton /></>}
  bottom={<BreakingNewsBanner label="Breaking">Headline text</BreakingNewsBanner>}
/>
```

| Slot | Tipo | Note |
|---|---|---|
| `logo` | ReactNode | Flex-shrink-0, lato sinistro |
| `nav` | ReactNode | Flex-1, occupa spazio centrale |
| `actions` | ReactNode | ml-auto, lato destro |
| `bottom` | ReactNode | Riga extra sotto l'header principale |

---

### `NavLinks`

Lista di link di navigazione orizzontale o verticale.

```tsx
<NavLinks
  items={[
    { label: "Politics", href: "/politics", active: true },
    { label: "World", href: "/world" },
    { label: "Culture", href: "/culture" },
  ]}
/>
```

| Prop | Tipo | Default | Note |
|---|---|---|---|
| `items` | `{ label: ReactNode, href: string, active?: boolean }[]` | — | required |
| `orientation` | string | `"horizontal"` | `"horizontal"` o `"vertical"` |

---

### `GlassCaption`

Pannello glassmorphism con label e testo. Usato tipicamente sopra le immagini.

```tsx
<GlassCaption label="Featured">
  The story of a generation
</GlassCaption>
```

| Slot | Tipo | Note |
|---|---|---|
| `label` | ReactNode | Testo piccolo uppercase in primary |
| `children` | ReactNode | Testo principale in font-headline italic |

---

### `HeroPlate`

Immagine hero con caption sovrapposta in basso-sinistra.

```tsx
<HeroPlate
  src="/hero.jpg"
  alt="Hero image"
  aspectRatio="21/9"
  caption={<GlassCaption label="Exclusive">Full story inside</GlassCaption>}
/>
```

| Prop | Tipo | Default | Note |
|---|---|---|---|
| `src` | string | — | required |
| `alt` | string | — | required |
| `aspectRatio` | string | `"21/9"` | `"16/9"` `"21/9"` `"4/3"` |
| `caption` | ReactNode | — | Posizionato `absolute bottom-4 left-4` |

Internamente usa `HeroImage` con `radius="gallery"` e `hoverZoom`.

---

### `BreakingNewsBanner`

Banner rosso con punto pulsante per breaking news.

```tsx
<BreakingNewsBanner label="Breaking">
  Parliament dissolves amid constitutional crisis
</BreakingNewsBanner>
```

| Slot | Tipo | Note |
|---|---|---|
| `label` | ReactNode | Testo in bold uppercase con dot animato |
| `children` | ReactNode | Titolo della news, troncato su singola riga |

---

### `ArticleCard`

Card verticale con immagine 16:9, badge, titolo e meta.

```tsx
<ArticleCard
  src="/article.jpg"
  alt="Article cover"
  href="/articles/slug"
  badge={<Badge variant="category">Politics</Badge>}
  title={<>The Future of Democracy</>}
  meta={<><Label color="muted">Jan 12</Label> · <Label color="muted">4 min</Label></>}
/>
```

| Prop | Tipo | Note |
|---|---|---|
| `src`, `alt` | string | required |
| `href` | string | Se presente, renderizza `<a>` con hover shadow |
| `badge` | ReactNode | Sopra il titolo |
| `title` | ReactNode | required — font-headline, hover:text-primary |
| `meta` | ReactNode | Sotto il titolo, testo xs muted |

---

### `ArticleCardHorizontal`

Card orizzontale con thumbnail 96×96 a sinistra.

```tsx
<ArticleCardHorizontal
  src="/thumb.jpg"
  alt="Thumbnail"
  href="/articles/slug"
  badge={<Badge variant="tag">analysis</Badge>}
  title="Brief article title here"
  excerpt="Short description of the article content."
/>
```

Stesse prop di `ArticleCard` meno `meta`, più `excerpt`.

---

### `FeatureCard`

Card grande con immagine 16:9, padding generoso, excerpt e footer.

```tsx
<FeatureCard
  src="/feature.jpg"
  alt="Feature"
  href="/articles/slug"
  badge={<Badge>Exclusive</Badge>}
  title="In-depth investigation reveals systemic failures"
  excerpt="A three-month investigation into the inner workings of..."
  footer={<AuthorCard src="/author.jpg" alt="Author" name="Jane Smith" role="Senior Reporter" />}
/>
```

| Prop aggiuntiva | Tipo | Note |
|---|---|---|
| `excerpt` | ReactNode | Testo descrittivo, `line-clamp-3` |
| `footer` | ReactNode | Separato con `border-t`, tipicamente `AuthorCard` |

---

### `SearchResultCard`

Card per risultati di ricerca. Due modalità: standard e overlay (testo sopra immagine).

```tsx
// Modalità standard
<SearchResultCard src="/img.jpg" alt="Alt" title="Article Title" excerpt="..." />

// Modalità overlay — testo bianco su gradiente scuro
<SearchResultCard
  src="/img.jpg"
  alt="Alt"
  overlay
  title="Article Title"
  badge={<Badge>Politics</Badge>}
/>
```

| Prop | Tipo | Default | Note |
|---|---|---|---|
| `overlay` | boolean | `false` | Modalità dark con gradiente e testo `inverse-on-surface` |
| `href` | string | — | Wrappa in `<a>` |

---

### `SectionHeader`

Header di sezione con titolo, descrizione e slot azioni allineato a destra.

```tsx
<SectionHeader
  title="Trending Today"
  description="Most read in the last 24 hours"
  actions={<Button variant="ghost">See all →</Button>}
/>
```

| Slot | Tipo | Note |
|---|---|---|
| `title` | ReactNode | required — font-headline 1.75rem |
| `description` | ReactNode | Testo muted sotto il titolo |
| `actions` | ReactNode | Flex-shrink-0, allineato in basso a destra |

---

### `AuthorCard`

Card autore con avatar, nome, ruolo e azioni.

```tsx
<AuthorCard
  src="/authors/jane.jpg"
  alt="Jane Smith"
  name="Jane Smith"
  role="Senior Political Reporter"
  size="md"
  actions={<Button variant="ghost" size="sm">Follow</Button>}
/>
```

| Prop | Tipo | Default | Note |
|---|---|---|---|
| `src`, `alt` | string | — | required — passati ad `Avatar` |
| `name` | ReactNode | — | required |
| `role` | ReactNode | — | Testo xs muted |
| `size` | string | `"md"` | `"sm"` `"md"` `"lg"` — dimensione avatar |
| `actions` | ReactNode | — | Allineato a destra |

---

### `ArticleHeader`

Header articolo centrato con meta, titolo, sottotitolo, autore e azioni.

```tsx
<ArticleHeader
  meta={
    <>
      <Badge variant="category">Politics</Badge>
      <Label color="muted">8 min read</Label>
    </>
  }
  title={<Headline as="h1" size="display" italic>Article Title</Headline>}
  subtitle={<BodyText size="lg" color="muted">The article subtitle goes here</BodyText>}
  author={<AuthorCard src="/author.jpg" alt="Author" name="Jane Smith" role="Reporter" />}
  actions={<BookmarkButton />}
/>
```

La riga `author`/`actions` appare solo se almeno uno dei due è presente, separata da `border-t`.

---

### `PaywallGate`

Preview di contenuto che sfuma + pannello glass con CTA.

```tsx
<PaywallGate
  cta={
    <>
      <Headline size="title-md">Subscribe to read more</Headline>
      <BodyText color="muted">Full access from €9/month</BodyText>
      <Button>Start reading</Button>
    </>
  }
>
  <BodyText>First paragraphs of the article visible as preview...</BodyText>
</PaywallGate>
```

| Slot | Tipo | Note |
|---|---|---|
| `children` | ReactNode | Preview — applicato `text-fade-out`, non selezionabile |
| `cta` | ReactNode | Pannello glass centrato `absolute bottom-0` |

---

### `FooterBar`

Footer dark con brand, link e social.

```tsx
<FooterBar
  brand={<Logo variant="light" />}
  links={[
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ]}
  social={<><TwitterIcon /><InstagramIcon /></>}
  copyright="© 2026 The Archivist. All rights reserved."
/>
```

| Prop | Tipo | Note |
|---|---|---|
| `brand` | ReactNode | Logo/brand sopra il divider |
| `links` | `{ label: ReactNode, href: string }[]` | Link nav horizontale |
| `social` | ReactNode | Icone social, lato destro |
| `copyright` | ReactNode | Testo xs sotto, opacity 40% |

---

### `EmptyState`

Stato vuoto centrato per sezioni senza risultati.

```tsx
<EmptyState
  icon={<SearchX className="h-8 w-8 text-on-surface-variant" />}
  title="No results found"
  description="Try different keywords or browse by category"
  suggestions={
    <>
      <Button variant="outline">Browse Politics</Button>
      <Button variant="outline">Browse Culture</Button>
    </>
  }
/>
```

---

### `SearchBar` — `"use client"`

Barra di ricerca con input controllato, select categoria opzionale e submit.

```tsx
<SearchBar
  categories={["Politics", "World", "Culture", "Technology"]}
  defaultValue=""
  onSearch={(query, category) => router.push(`/search?q=${query}&cat=${category}`)}
/>
```

| Prop | Tipo | Note |
|---|---|---|
| `onSearch` | `(query: string, category?: string) => void` | Chiamato al submit |
| `categories` | `string[]` | Se presente, aggiunge `<select>` |
| `defaultValue` | string | Valore iniziale dell'input |
| `placeholder` | string | Default `"Search articles, topics, authors..."` |

---

### `NewsletterSignup` — `"use client"`

Form iscrizione newsletter con gestione stato loading.

```tsx
<NewsletterSignup
  title={<Headline size="headline-md">Stay informed</Headline>}
  description={<BodyText color="muted">Daily briefings from our editors.</BodyText>}
  buttonText="Subscribe"
  onSubmit={async (email) => {
    await subscribeToNewsletter(email);
  }}
/>
```

| Prop | Tipo | Note |
|---|---|---|
| `onSubmit` | `(email: string) => void \| Promise<void>` | Async-safe, gestisce loading |
| `title` | ReactNode | Sopra il form |
| `description` | ReactNode | Tra title e form |
| `buttonText` | string | Default `"Subscribe"` |
| `placeholder` | string | Default `"Your email address"` |

---

## Organismi

Gli organismi sono **compound components** senza React Context. Ogni sub-component è uno styled wrapper puro che estende `ComponentProps<"tag">`. RSC-safe, nessun `"use client"`.

Pattern d'uso:

```tsx
<Organism>
  <Organism.Part>...</Organism.Part>
  <Organism.OtherPart>...</Organism.OtherPart>
</Organism>
```

---

### `SiteNav`

Navigazione principale sticky con glassmorphism.

```tsx
<SiteNav>
  <SiteNav.Bar>
    <SiteNav.Logo>
      <Link href="/"><Logo /></Link>
    </SiteNav.Logo>
    <SiteNav.Nav>
      <NavLinks items={navItems} />
    </SiteNav.Nav>
    <SiteNav.Actions>
      <SearchButton /> {/* "use client" */}
      <Button>Subscribe</Button>
    </SiteNav.Actions>
  </SiteNav.Bar>
  <SiteNav.Banner>
    <BreakingNewsBanner label="Breaking">Latest headline</BreakingNewsBanner>
  </SiteNav.Banner>
</SiteNav>
```

| Sub-component | Elemento | Note |
|---|---|---|
| `SiteNav.Bar` | `div` | max-w-7xl, h-16, flex, gap-8 |
| `SiteNav.Logo` | `div` | flex-shrink-0 |
| `SiteNav.Nav` | `nav` | flex-1 |
| `SiteNav.Actions` | `div` | ml-auto, flex, gap-3 |
| `SiteNav.Banner` | `div` | border-t, area sotto il bar |

---

### `HeroSection`

Sezione hero con immagine e overlay di testo posizionato.

```tsx
<HeroSection>
  <HeroSection.Plate>
    <HeroPlate src="/hero.jpg" alt="Hero" aspectRatio="21/9" />
  </HeroSection.Plate>
  <HeroSection.Overlay>
    <HeroSection.Kicker>
      <Badge variant="category">Exclusive</Badge>
    </HeroSection.Kicker>
    <Headline as="h1" size="display" italic className="text-inverse-on-surface">
      The Crisis That Changed Everything
    </Headline>
  </HeroSection.Overlay>
</HeroSection>
```

| Sub-component | Elemento | Note |
|---|---|---|
| `HeroSection.Plate` | `div` | w-full, contiene l'immagine |
| `HeroSection.Overlay` | `div` | absolute bottom-6 left-6, max-w-lg |
| `HeroSection.Kicker` | `div` | mb-4, sopra il titolo nell'overlay |

---

### `EditorialGrid`

Griglia editoriale 12 colonne per homepage. Layout 7+5 con colonna featured e secondary.

```tsx
<EditorialGrid>
  <EditorialGrid.Featured>
    <FeatureCard src="..." alt="..." title="..." />
  </EditorialGrid.Featured>
  <EditorialGrid.Secondary>
    <ArticleCardHorizontal src="..." alt="..." title="..." />
    <ArticleCardHorizontal src="..." alt="..." title="..." />
    <ArticleCardHorizontal src="..." alt="..." title="..." />
  </EditorialGrid.Secondary>
  <EditorialGrid.Full>
    <Divider opacity={20} />
  </EditorialGrid.Full>
  <EditorialGrid.Third>
    <ArticleCard src="..." alt="..." title="..." />
  </EditorialGrid.Third>
  <EditorialGrid.Third>
    <ArticleCard src="..." alt="..." title="..." />
  </EditorialGrid.Third>
  <EditorialGrid.Third>
    <ArticleCard src="..." alt="..." title="..." />
  </EditorialGrid.Third>
</EditorialGrid>
```

| Sub-component | Colonne | Note |
|---|---|---|
| `EditorialGrid.Featured` | 12 → lg:7 | Area featured principale |
| `EditorialGrid.Secondary` | 12 → lg:5 | Area secondary, flex-col gap-6 |
| `EditorialGrid.Full` | 12 | Full-width, per divider o banner |
| `EditorialGrid.Third` | 12 → sm:6 → lg:4 | Un terzo della griglia |

---

### `ArticleBody`

Layout pagina articolo con header, hero bleed e colonna + sidebar.

```tsx
<ArticleBody>
  <ArticleBody.Header>
    <ArticleHeader
      meta={<><Badge>Politics</Badge><Label color="muted">8 min</Label></>}
      title={<Headline as="h1" size="display" italic>Article Title</Headline>}
      author={<AuthorCard src="..." alt="..." name="Jane Smith" role="Reporter" />}
      actions={<ShareButton />}  {/* "use client" */}
    />
  </ArticleBody.Header>

  <ArticleBody.Hero>
    <HeroPlate src="/cover.jpg" alt="Cover" aspectRatio="21/9" />
  </ArticleBody.Hero>

  <ArticleBody.Layout>
    <ArticleBody.Content>
      <DropCap>First paragraph with drop cap...</DropCap>
      <BodyText>Rest of the article body...</BodyText>
      <Pullquote attribution="— Source">Key quote here</Pullquote>
    </ArticleBody.Content>
    <ArticleBody.Sidebar>
      <RelatedArticles />   {/* RSC con fetch */}
      <NewsletterSignup onSubmit={subscribe} />
    </ArticleBody.Sidebar>
  </ArticleBody.Layout>
</ArticleBody>
```

| Sub-component | Elemento | Note |
|---|---|---|
| `ArticleBody.Header` | `div` | mb-12 |
| `ArticleBody.Hero` | `div` | mb-12, `-mx-6` per bleed fuori dai margini |
| `ArticleBody.Layout` | `div` | grid 12 colonne, gap-12 |
| `ArticleBody.Content` | `div` | col-span-12 → lg:8, font-body base |
| `ArticleBody.Sidebar` | `aside` | col-span-12 → lg:4, sticky top-24 |

---

### `PaywallSection`

Sezione articolo con preview che sfuma e gate sovrapposto.

```tsx
<PaywallSection>
  <PaywallSection.Preview>
    <BodyText>Visible article preview content...</BodyText>
    <BodyText>More content that fades out...</BodyText>
  </PaywallSection.Preview>
  <PaywallSection.Gate>
    <GlassPanel className="w-full max-w-md p-8 text-center space-y-4">
      <Headline size="title-lg">Subscribe to read more</Headline>
      <BodyText color="muted">From €9/month</BodyText>
      <Button>Get full access</Button>
    </GlassPanel>
  </PaywallSection.Gate>
</PaywallSection>
```

| Sub-component | Elemento | Note |
|---|---|---|
| `PaywallSection.Preview` | `div` | `text-fade-out`, `pointer-events-none` |
| `PaywallSection.Gate` | `div` | `absolute bottom-0`, flex justify-center |

---

### `SearchLayout`

Layout pagina risultati ricerca con header, griglia mista e risultati.

```tsx
<SearchLayout>
  <SearchLayout.Header>
    <Headline size="headline-lg">Search Results</Headline>
    <SearchBar onSearch={handleSearch} categories={categories} />
  </SearchLayout.Header>

  <SearchLayout.Grid>
    <SearchLayout.Featured>
      <SearchResultCard overlay src="..." alt="..." title="..." />
    </SearchLayout.Featured>
    <SearchLayout.Side>
      <ArticleCardHorizontal src="..." alt="..." title="..." />
      <ArticleCardHorizontal src="..." alt="..." title="..." />
    </SearchLayout.Side>
    <SearchLayout.Results>
      {results.map(r => <SearchResultCard key={r.id} {...r} />)}
    </SearchLayout.Results>
    {results.length === 0 && (
      <SearchLayout.Empty>
        <EmptyState title="No results" description="Try different terms" />
      </SearchLayout.Empty>
    )}
  </SearchLayout.Grid>
</SearchLayout>
```

| Sub-component | Elemento | Colonne | Note |
|---|---|---|---|
| `SearchLayout.Header` | `div` | — | space-y-4 |
| `SearchLayout.Grid` | `div` | grid 12 col | gap-6 |
| `SearchLayout.Featured` | `div` | 12 → lg:8 | Area featured |
| `SearchLayout.Side` | `aside` | 12 → lg:4 | Sidebar, flex-col gap-4 |
| `SearchLayout.Results` | `div` | 12 | grid 1→2→3 colonne |
| `SearchLayout.Empty` | `div` | 12 | Contenitore stato vuoto |

---

### `CardsGrid`

Griglia generica di card con header e numero di colonne configurabile.

```tsx
<CardsGrid>
  <CardsGrid.Header>
    <SectionHeader title="Trending Now" actions={<Button variant="ghost">See all</Button>} />
  </CardsGrid.Header>
  <CardsGrid.Items columns={3}>
    <ArticleCard src="..." alt="..." title="..." />
    <ArticleCard src="..." alt="..." title="..." />
    <ArticleCard src="..." alt="..." title="..." />
  </CardsGrid.Items>
</CardsGrid>
```

| Sub-component | Prop | Note |
|---|---|---|
| `CardsGrid.Header` | — | Slot libero |
| `CardsGrid.Items` | `columns?: 2 \| 3 \| 4` | Default `3`. Griglia responsiva 1→2→N |

---

### `NewsletterSection`

Sezione newsletter con sfondo alternato e blob decorativo.

```tsx
<NewsletterSection>
  <NewsletterSection.Decorative /> {/* aria-hidden blob gradient */}
  <NewsletterSection.Inner>
    <Label color="primary" uppercase>Newsletter</Label>
    <Headline size="headline-md">Stay ahead of the story</Headline>
    <BodyText color="muted">Daily briefings from our editorial team.</BodyText>
    <NewsletterSignup onSubmit={subscribe} />
  </NewsletterSection.Inner>
</NewsletterSection>
```

| Sub-component | Elemento | Note |
|---|---|---|
| `NewsletterSection.Inner` | `div` | relative z-10, max-w-xl, mx-auto, text-center |
| `NewsletterSection.Decorative` | `div` | aria-hidden, blob `bg-primary/5 blur-3xl` |

---

### `SiteFooter`

Footer del sito su sfondo scuro inverse-surface.

```tsx
<SiteFooter>
  <SiteFooter.Inner>
    <SiteFooter.Brand>
      <Logo variant="light" />
      <BodyText color="muted" className="mt-2 text-inverse-on-surface/60">
        Premium editorial journalism.
      </BodyText>
    </SiteFooter.Brand>
    <SiteFooter.Nav>
      <a href="/politics" className="...">Politics</a>
      <a href="/world" className="...">World</a>
    </SiteFooter.Nav>
    <SiteFooter.Bottom>
      <BodyText className="text-xs text-inverse-on-surface/40">
        © 2026 The Archivist
      </BodyText>
      <SiteFooter.Social>
        <TwitterIcon />
        <InstagramIcon />
      </SiteFooter.Social>
    </SiteFooter.Bottom>
  </SiteFooter.Inner>
</SiteFooter>
```

| Sub-component | Elemento | Note |
|---|---|---|
| `SiteFooter.Inner` | `div` | max-w-7xl, px-6, py-12, space-y-8 |
| `SiteFooter.Brand` | `div` | Area logo e tagline |
| `SiteFooter.Nav` | `nav` | flex flex-wrap, gap-x-6 gap-y-2 |
| `SiteFooter.Social` | `div` | flex items-center gap-3 |
| `SiteFooter.Bottom` | `div` | flex, border-t, items allineati tra loro |

---

## Checklist TypeScript

Tutti i componenti con variante CVA `color` usano `Omit<ComponentProps<"tag">, "color">` per evitare conflitti con l'attributo HTML `color`. Componenti interessati:

- `BodyText` — `Omit<ComponentProps<"p">, "color">`
- `Label` — `Omit<ComponentProps<"span">, "color">`

## Verifiche

```bash
# TypeScript
pnpm --filter @repo/ui check-types

# Linting
pnpm lint
```
