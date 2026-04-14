# Design System — @repo/ui

Specifiche di stile per un'interfaccia moderna, pulita e coerente.

---

## Principi

- **Minimal & Pulito** — Tanto spazio bianco, pochi bordi, ombre leggere
- **Motion sottile** — Micro-animazioni (scale, opacity) per feedback tattile, mai esagerate
- **Accessibilità** — Contrasto WCAG AA, focus ring visibile, supporto tastiera completo
- **Dark mode nativo** — Ogni componente deve funzionare in light e dark tramite le CSS variables oklch

---

## Colori

Il sistema usa CSS custom properties in formato `oklch` definite in `globals.css`.

| Token                | Uso                                    |
| -------------------- | -------------------------------------- |
| `--primary`          | Azioni principali, CTA                 |
| `--secondary`        | Azioni secondarie, elementi di sfondo  |
| `--destructive`      | Errori, eliminazioni, azioni critiche  |
| `--muted`            | Sfondi neutri, testo secondario        |
| `--accent`           | Hover, stati attivi                    |
| `--border`           | Bordi e separatori                     |
| `--ring`             | Focus ring                             |

Non usare mai colori hardcoded — sempre i token.

---

## Tipografia

| Elemento       | Classe Tailwind                          |
| -------------- | ---------------------------------------- |
| H1             | `text-4xl font-bold tracking-tight`      |
| H2             | `text-3xl font-semibold tracking-tight`  |
| H3             | `text-2xl font-semibold`                 |
| H4             | `text-xl font-semibold`                  |
| Body           | `text-base font-normal`                  |
| Body small     | `text-sm text-muted-foreground`          |
| Caption        | `text-xs text-muted-foreground`          |

Font stack: sistema operativo nativo (`font-sans` di Tailwind).

---

## Spaziatura

Usare la scala di Tailwind in modo coerente:

| Contesto                  | Valore    |
| ------------------------- | --------- |
| Padding interno card      | `p-6`     |
| Gap tra elementi in lista | `gap-4`   |
| Gap tra sezioni           | `gap-8`   |
| Margine tra pagine/blocchi| `my-12`   |
| Padding bottoni           | `px-4 py-2` (default), `px-6 py-2` (lg) |

---

## Border Radius

Usare i token `--radius` dal theme:

| Componente      | Token             |
| --------------- | ----------------- |
| Button, Input   | `rounded-md`      |
| Card, Dialog    | `rounded-lg`      |
| Badge, Chip     | `rounded-full`    |
| Avatar          | `rounded-full`    |

---

## Ombre

| Livello          | Classe Tailwind    | Uso                          |
| ---------------- | ------------------ | ---------------------------- |
| Livello 0        | `shadow-none`      | Elementi flat (ghost button) |
| Livello 1        | `shadow-sm`        | Button, input                |
| Livello 2        | `shadow-md`        | Card, dropdown               |
| Livello 3        | `shadow-lg`        | Dialog, modal                |

---

## Animazioni & Transizioni

- **Durata standard**: `duration-200`
- **Easing**: `ease-out`
- **Hover button**: `active:scale-[0.98]` per feedback pressione
- **Fade in elementi**: `animate-in fade-in` (da tw-animate-css)
- **Slide in dropdown**: `animate-in slide-in-from-top-2 fade-in`

Mai usare animazioni più lunghe di `duration-300` per interazioni UI.

---

## Componenti — Specifiche

### Button

**Varianti:**

| Variante      | Aspetto                                              |
| ------------- | ---------------------------------------------------- |
| `default`     | Sfondo primary, testo chiaro, ombra leggera          |
| `secondary`   | Sfondo secondary, testo scuro                        |
| `destructive` | Sfondo rosso, testo bianco                           |
| `outline`     | Bordo, sfondo trasparente, hover con accent          |
| `ghost`       | Nessun bordo/ombra, solo hover con accent            |
| `link`        | Solo testo con underline al hover                    |

**Dimensioni:**

| Size      | Altezza | Padding     |
| --------- | ------- | ----------- |
| `sm`      | `h-8`   | `px-3`      |
| `default` | `h-9`   | `px-4`      |
| `lg`      | `h-10`  | `px-6`      |
| `icon`    | `h-9 w-9` | —         |

### Input (futuro)

- Altezza: `h-9`
- Bordo: `border border-input`
- Focus: `focus-visible:ring-2 focus-visible:ring-ring/40`
- Placeholder: `text-muted-foreground`
- Border radius: `rounded-md`

### Card (futuro)

- Background: `bg-card`
- Bordo: `border border-border`
- Padding: `p-6`
- Border radius: `rounded-lg`
- Ombra: `shadow-md`
- Hover (se cliccabile): `hover:shadow-lg transition-shadow`

### Badge (futuro)

- Border radius: `rounded-full`
- Padding: `px-2.5 py-0.5`
- Font: `text-xs font-medium`
- Varianti: `default`, `secondary`, `destructive`, `outline`

### Dialog/Modal (futuro)

- Overlay: `bg-black/60 backdrop-blur-sm`
- Contenuto: `bg-card rounded-lg shadow-lg p-6`
- Animazione entrata: `animate-in fade-in zoom-in-95`
- Max width: `max-w-lg`

---

## Pattern da seguire

1. **Ogni componente** usa `cva` per le varianti e `cn()` per il merge delle classi
2. **Ogni componente** accetta `className` come prop per override
3. **Ogni componente** supporta `asChild` via Radix Slot quando ha senso
4. **Esportare** sempre sia il componente che le variants (`buttonVariants`, ecc.)
5. **Mai stili inline** — solo Tailwind classes
6. **Composizione** — preferire componenti piccoli e componibili (es. `Card` + `CardHeader` + `CardContent`)
