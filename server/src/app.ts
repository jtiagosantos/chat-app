
import { constants } from './constants';
import { server } from './http/server';
import { socketEvents } from './socket/events';

const { port } = constants;

socketEvents();

server.listen(port, () => {
  console.log(`Server started on port ${port}.`)
});  
