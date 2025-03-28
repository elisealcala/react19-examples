# ⚛️ React 19: Everything You Need to Know

This repo contains hands-on examples from my Medium article on the most exciting features in **React 19**.

👉 **Read the article:**  
https://medium.com/@elisealcala/react-19-everything-you-need-to-know-ff65674c833c

## 📁 Project Structure

Each file inside `routes/` corresponds to a feature explored in the blog post:

| File | Feature | Description |
|------|---------|-------------|
| `async-functions.tsx` | Async Functions in Transitions | Run `await` logic inside `startTransition()` |
| `native-metadata.tsx` | Native Metadata Management | Use `<title>` and `<meta>` directly in JSX |
| `ref.tsx` | `ref` as a Prop | Pass a ref to child components without `forwardRef` |
| `stylesheet-support.tsx` | Stylesheet Support & Preload | Load and preload stylesheets natively |
| `use-action-state.tsx` | `useActionState` | Manage async form state in a declarative way |
| `use-optimistic.tsx` | `useOptimistic` | Apply optimistic UI updates immediately |
| `use-transition.tsx` | Enhanced `useTransition` | Manage UI transitions more smoothly |

## ▶️ How to Run

```bash
git clone https://github.com/elisealcala/react19-examples.git
cd react19-examples
npm install
npm run dev