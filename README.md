

### Libraries used:
<details>

```javascript
> react-router-dom
> fontawesome
> {dateRange} from 'react-date-range';
> {format} from 'date-fns';
> jsonwebtoken
      - import jwt from 'jsonwebtoken';
      ** After verify password, we will need to authorize the person is admin:
      if (user.isAdmin) {
      const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT);
      }
      res.cookie("access_token", token, {
      httpOnly: true
      }).status(200).send("You are admin");
```
</details>

### React-router-dom / Reducer:

<details>

```javascript
      import {useNavigate, useLocation} from 'react-router-dom';

- Search button handleSearch:
      const navigate = useNavigate();
      const handleSearch = () => {
        navigate("/hotels", {state: {destination, date, options}})
      }

- In the result pages:
      const location = useLocation();

>> How to use useContext and useReducer:
- Vocab:
      - context: allowing to pass information to child components without use props
      - reducer: a pure function, accept state, function and return a new state
      - action: ab object literal, which describes a change to state
      - dispatch: a function return to us by useReducer, which send action objects to reducer function
- Example: change theme either light or dark
    //ThemeContext.js
      const ThemeContext = createContext();
      export default ThemeContext;
    //App.js
      const [theme, setTheme] = useState("light");
      const toggleTheme = () => {
            newTheme = theme === light" ? "dark" : "light";
            setTheme(newTheme);
      }
      
      return (
            <ThemeContext.Provider value = {theme}>
                  <main>
                        <button onClick={toggleTheme} >Change theme</buton>
                  </main>
            </ThemeContext.Provider>
      )
>> useContext take one argument, the context which it should look in the tree for, and returns the value that it finds for the context
    // Card.js
      import ThemeContext from './ThemeContext';
      
      const value = useContext(ThemeContext);
      
>> useReducer: must pass the reducer function that will be used, and intial_state
      const myReducer = (state, action) => {
            switch(action.type) {
                  case "TOGGLE_THEME" :
                        const newTheme = theme === "light" ? "dark" : "light";
                        return {...state, theme: newTheme}
                   
                   default: state;
            }
      }
      
      const initial_state = {
            theme: "light"
      }
      
      const [state, dispatch] = useReducer(myReducer, initial_state)
      
    >>> dispatch:
      const toggleTheme = {
            const myAction = {type: "TOGGLE_THEME"}
            dispatch(myAction)
      }
```
</details>
