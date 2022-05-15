
import { constants } from './constants';
import { server } from './http/server';

const { port } = constants;

server.listen(port, () => {
  console.log(`Server started on port ${port}.`)
});  
