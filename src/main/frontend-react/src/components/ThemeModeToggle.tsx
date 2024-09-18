import useThemeMode, {useDark} from "../hooks/useThemeMode.ts";





const ThemeModeToggle = () => {

    const [isDark, onToggleThemeMode]:useDark = useThemeMode();
    console.log("themeMode", isDark);

    return (

        <button onClick={(): void => {
            onToggleThemeMode('');
        }}>다크 모드</button>

    );
};

export default ThemeModeToggle;