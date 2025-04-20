import { ThemeSwitcher } from "./components/ThemeSwitcher";
import "./App.css";
// ※このファイルでは `ThemeProvider` は使わない（main.tsxでラップ）

export const App = () => {
  return (
    <div className="app-container">
      <h1>ライト／ダーク テーマ切り替え</h1>
      <ThemeSwitcher />
    </div>
  );
};
