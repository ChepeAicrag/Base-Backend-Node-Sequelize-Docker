import server from './server';
import { PORT } from './config/config';
import db from './config/database';

db.sync({ force: true }).then(() => {
  server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
});