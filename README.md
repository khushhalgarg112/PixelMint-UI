# 🧊 PixelMint UI

**Freshly crafted retro-styled React components.**  
PixelMint UI is a modern component library that brings back the charm of classic interfaces with pixel-perfect design, nostalgic vibes, and blazing-fast performance.

---

## ✨ Features

- 🎮 **Retro Aesthetics** – Inspired by old-school UIs, pixel fonts, and neon hues.
- ⚡ **Blazing Fast** – Built with performance-first React & Tailwind CSS.
- 🧱 **Composable** – Highly customizable and easy to compose.
- 🌗 **Dark Mode Ready** – Built-in support for dark/light themes.
- 🧪 **Type-safe** – Written in TypeScript with full IntelliSense support.
- 📚 **Storybook Included** – Preview and test components in isolation.

---

## 🚀 Getting Started

Install PixelMint UI into your React + Tailwind project:

```bash
npm install pixelmint-ui
# or
yarn add pixelmint-ui
```

Then import styles in your `tailwind.config.js` and your component files:

```ts
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/pixelmint-ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```tsx
// Example usage
import { Button } from "pixelmint-ui";

export default function App() {
  return <Button variant="ghost">Start Game</Button>;
}
```

---

## 🧩 Components Included

- ✅ `Button`
- ✅ `Input`
- ✅ `Card`
- ✅ `Dialog / Modal`
- ✅ `Tooltip`
- ✅ `Switch`
- ✅ `Checkbox`
- ✅ `Tabs`
- ... and more coming soon!



---

## 🛠️ Customization

PixelMint components use Tailwind under the hood and are fully customizable.  
Override styles using `className`, extend variants, or compose your own.

```tsx
<Button className="bg-pink-600 hover:bg-pink-700 text-white">
  Retro Pink
</Button>
```

You can also configure the design system with Tailwind’s `theme.extend`.

---

## 💡 Philosophy

PixelMint UI is made for builders who love retro UI but demand modern developer experience.  
We aim to recreate the **feel of 90s interfaces** — in a fast, minimal, and accessible package.

---

## 📦 Roadmap

- [x] Core component set
- [ ] Dark mode support
- [ ] Theme switcher utility
- [ ] CLI to scaffold components
- [ ] Component playground (interactive docs)
- [ ] VS Code extension (Pixel Previewer 👀)

---

## 🤝 Contributing

Pull requests are welcome!  
Open issues, suggest new features, or contribute directly.

```bash
git clone https://github.com/khushhalgarg112/pixelmint-ui
cd pixelmint-ui
pnpm install
pnpm dev
```

---

## 📄 License

MIT © [Khushhal Garg](https://github.com/khushhalgarg112)

---

> 🕹️ Designed with nostalgia. Coded with love.
