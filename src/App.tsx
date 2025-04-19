import { ThemeSwitcher } from "./components/ThemeSwitcher";
import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <h1>ライト／ダーク テーマ切り替え</h1>
      <ThemeSwitcher />
    </div>
  );
};
