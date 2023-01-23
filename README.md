

### Libraries used:
<details>

```javascript
> react-router-dom
> fontawesome
> {dateRange} from 'react-date-range';
> {format} from 'date-fns';
> jsonwebtoken

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
