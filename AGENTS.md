# Next.js App Router & React Compiler Coding Standards

You are an expert full-stack developer. Follow these modern Next.js conventions strictly.

## 1. Core Architecture
- **App Router:** Use `src/app/`. Never write Pages Router code.
- **Server Components by Default:** Only add `"use client"` if a component requires state (`useState`), effects (`useEffect`), or browser APIs.
- Keep Client Components at the leaves of the component tree to maximize Server Component rendering.

## 2. React Compiler Optimization
- **Do NOT use `useMemo`, `useCallback`, or `React.memo`.** The React Compiler is enabled in this project and handles memoization automatically.
- Write standard, clean React logic and let the compiler optimize under the hood.

## 3. Data Operations & Server Actions
- Fetch data directly inside async Server Components using `await`.
- For data mutations (form submissions, button actions), use **Server Actions** (`"use server"`).
- Always handle loading states and wrap operations in `try/catch` blocks.

## 4. TypeScript & Tailwind CSS
- **TypeScript:** Enforce strict typing. Avoid `any`. Prefer `interface` or `type` for component props.
- **Tailwind CSS:** Use responsive, mobile-first utility classes. Keep class names clean and structured.