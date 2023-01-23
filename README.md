

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

### React-router-dom:

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



```
</details>
