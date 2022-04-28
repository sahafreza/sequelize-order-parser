## Usage/Examples
use "-" prefix for DESC order.
```javascript
const sequelizeParser = require("sequelize-order-parser");
sequelizeParser("-created_at,amount,-rate")
```

output

```javascript
[ [ 'created_at', 'DESC' ],[ 'amount', 'ASC' ],[ 'rate', 'DESC' ] ]

```
