import React, { useContext, useState } from "react";

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

export default function UseContext() {
    const [theme, setTheme] = useState(themes.light);
    const changeThemeHandler = () => {
            setTheme((theme)=> {
                if(theme === themes.light) {
                    return themes.dark;
                } else {
                    return themes.light;
                }
            
            }
        );
    }

    return(
        <div>
            <ThemeContext.Provider value={theme}>
                <Banner />
            </ThemeContext.Provider>
            <button className='m-2 p-2 bg-blue-500 rounded-lg shadow-lg shadow-slate-500' type='button' onClick={changeThemeHandler}> 
                Change Theme 
            </button>
        </div>
    );
}


function Banner() {
    return(
        <ContextThemedBanner />
    );
}


function ContextThemedBanner() {
    return(
        <ThemedBanner />
    );
}


function ThemedBanner() {
    const theme = useContext(ThemeContext);
    return (
        <p className='m-2 rounded-lg shadow-lg shadow-slate-500' style = {{color: theme.foreground, background: theme.background}}>
            <text>
                I am themed using:<br />
                Created using: <b>"ThemeContext = React.createContext(anything)"</b><br />
                Initialized using: <b>  {`"<ThemeContext.Provider value = anything>`} <br />
                                            {`<AnyChildComponentTree />`}<br />
                                        {`<ThemeContext.Provider>"`}</b><br />
                Accessed using: <b>"const theme = useContext(ThemeContext)"</b>
            </text>
        </p>
    );
}