# 🚀 Chetna Salunke — Portfolio

<img width="1400" height="672" alt="portfolio-site" src="https://github.com/user-attachments/assets/456630d0-955c-4500-acbe-fd0a0c6bdf04" />


Personal portfolio built with **React · TypeScript · Redux Toolkit · Tailwind CSS**  
Featuring unit tests with **Jest + React Testing Library** and deployed on **Netlify**.

---

## Tech Stack

| Category      | Technology                          |
|---------------|-------------------------------------|
| Framework     | React 18 + TypeScript               |
| State         | Redux Toolkit                       |
| Styling       | Tailwind CSS                        |
| Build Tool    | Vite                                |
| Testing       | Jest + React Testing Library        |
| Deployment    | Netlify                             |

---

## Project Structure

```
src/
├── components/      # React components (Navbar, Hero, About, Skills, Projects, Contact, Footer)
├── store/
│   ├── index.ts     # Redux store + typed hooks
│   └── slices/
│       └── portfolioSlice.ts   # Theme, activeSection, contactFormStatus
├── types/
│   └── index.ts     # Shared TypeScript interfaces
└── __tests__/       # Unit tests for all key components
```
---

## Unit Tests Coverage

| Test File                        | What it tests                                  |
|----------------------------------|------------------------------------------------|
| `portfolioSlice.test.ts`         | Redux actions: toggleTheme, setActiveSection, setContactFormStatus |
| `Hero.test.tsx`                  | Renders name, CTAs, Open to Work badge         |
| `Skills.test.tsx`                | Filter tabs, skill rendering                   |
| `Contact.test.tsx`               | Form validation — empty, invalid email, short message |

---
