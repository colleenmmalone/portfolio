import React from "react";
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {


  const toggled = useSelector((state) => state.toggleDarkMode.toggled);
  const [theme, setTheme] = React.useState('')

  React.useEffect(() => {
    setTheme( toggled ? "dark": "light" );
  }, [toggled]);


  return (
    <div className={theme}>
      {children}
    </div>
  )
}

export default ThemeProvider;