# IC6GST 2027 — Official Conference Website

> **International Conference on Intelligent Computing, 6G-and-Beyond Communication and Sustainable Technologies**  
> **Dates:** October 2–3, 2027 (Physical Conference)  
> **Venue:** Pandit Deendayal Energy University (PDEU), Gandhinagar, Gujarat, India  
> **Design Inspired by:** [2027.apsursi.org](https://2027.apsursi.org)

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS with custom palette (Deep Navy Blue `#0F172A`, Electric Teal `#06B6D4`, Slate Gray `#334155`)
- **UI Components:** shadcn/ui primitives (`Button`, `Card`, `Table`, `Tabs`, `Accordion`, `Badge`, `Switch`)
- **Icons:** Lucide React
- **Animations:** Framer Motion (smooth scroll, fade-ins, viewport triggers)
- **Font:** Inter (via `next/font/google`)
- **Deployment:** Vercel-ready static/SSR App Router build

---

## 📁 Multi-Page Structure

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero with 6G tech background, countdown timer, animated news ticker marquee, conference highlights, welcome message, and CTA banners. |
| `/about` | **About** | Detailed conference theme, NAAC A++ PDEU institution overview, ICT department research areas, and Signature 6G events (Workshop & Bharat 6G Session). |
| `/call-for-papers` | **Call for Papers** | Author submission guidelines, IEEE Xplore publication details, and an interactive Accordion covering all 5 Technical Tracks (T1–T5). |
| `/key-dates` | **Key Dates** | Live countdown timer to full paper deadline (May 15, 2027) with an alternating vertical timeline and conference deadlines table. |
| `/registration` | **Registration** | Stateful interactive toggle between **Indian (INR ₹)** and **Foreign (USD $)** fees, responsive fee table, IEEE discount notes, inclusions, and policies. |
| `/committees` | **Committees** | Organized Tabs for Leadership, Organizing Committee, TPC Chairs, Track Chairs (T1–T5), Advisory (National & International), and Support teams. |
| `/venue` | **Venue** | Gandhinagar city profile, PDEU campus details, 4 attraction cards (Science City, Akshardham, Mahatma Mandir, Indroda Nature Park) with imagery, Gujarat Tourism link, travel guides, and Google Maps embed. |
| `/contact` | **Contact** | Conference Secretariat details, updated official email (`ic6gst@gmail.com`), interactive contact form, and Sponsorship tier breakdown. |

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 🎨 Color Tokens & Theme

- **Navy Dark (Hero / Footer):** `#0A192F`
- **Navy Primary:** `#0F172A`
- **Electric Teal (Accent / CTAs):** `#06B6D4`
- **Teal Mint (Highlights):** `#64FFDA`
- **Slate Body:** `#334155`
- **Background Light:** `#F8FAFC`
