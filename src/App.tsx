import type { DesignItem } from "./types/designItem";

const designItems: DesignItem[] = [
  {
    id: "1",
    title: "Apple",
    url: "https://www.apple.com/",
    categories: ["Layout", "Typography"],
    goodPoints: "余白とタイポグラフィの見せ方がきれい",
    reason: "情報量が多くても視線の流れが整理されている",
  },
  {
    id: "2",
    title: "Example",
    url: "https://example.com/",
    categories: ["Interaction"],
    goodPoints: "操作に対するフィードバックが分かりやすい",
    reason: "ユーザーが今何をしたか理解しやすい",
  },
];

function App() {
  return (
    <main>
      <h1>Design Stock</h1>

      <ul>
        {designItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.url}
            </a>
            <p>{item.goodPoints}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
