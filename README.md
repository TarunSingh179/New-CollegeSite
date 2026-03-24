# New CollegeSite 🎓

A next-generation, high-performance website for the Radhakrishna Institute of Technology and Engineering (RITE). Built with Next.js 16 and heavily focused on dynamic animations and premium frontend user experience.

## 🚀 Key Features

- **Modern App Router:** Uses the Next.js App Router paradigm for seamless SSR, routing, and highly optimized page loads.
- **Advanced Animations:** Implements both Framer Motion and GSAP to deliver a visually stunning, smooth, and interactive experience (includes components like `FadeIn`, `FloatingParticles`, and `WaveDivider`).
- **Interactive UI Components:**
  - `MarqueeTicker` for continuous announcements.
  - Interactive `EmblaCarousel` for testinomials and galleries.
  - Dynamic `ScrollProgress` indicators.
  - Animated `Counter` components for rendering statistics dynamically on intersection.
- **Comprehensive Page Sections:** Includes Hero, About, Announcements, CTABanner, Facilities, MarqueeTicker, News, Placements, PrincipalMessage, Programs, Rankings, Testimonials, and WhyChooseUs.
- **Iconography:** Utilizes `lucide-react` for clean, scalable vector icons.

## 💻 Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animations:** Framer Motion, GSAP
- **Utilities:** `react-intersection-observer`, Embla Carousel

## 📁 Project Structure

- `rite-website/src/app/`: The Next.js application core containing `page.tsx`, `layout.tsx`, and global stylesheets.
- `rite-website/src/components/animations/`: Isolated animation wrappers (`FadeIn.tsx`, `FloatingParticles.tsx`, etc.).
- `rite-website/src/components/home/`: Specific UI blocks making up the homepage.
- `rite-website/src/components/ui/`: Generic reusable UI elements (e.g., `Counter.tsx`).

## 🛠️ Installation & Setup

1. Navigate to the core application directory:

   ```bash
   cd rite-website
   ```

2. Install the modern dependencies:

   ```bash
   npm install
   ```

3. Run the development environment:

   ```bash
   npm run dev
   ```

   *The platform is accessible locally at <http://localhost:3000>.*

4. To bundle for production:

   ```bash
   npm run build
   npm run start
   ```
