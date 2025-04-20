import { useTheme } from '../hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      現在のテーマ: {theme}（クリックで切り替え）
    </button>
  );
};
