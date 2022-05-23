
import { constants } from './constants';
import { server } from './http/server';
import { socketEvents } from './socket/events';

const { PORT } = constants;

socketEvents();

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`)
});  
