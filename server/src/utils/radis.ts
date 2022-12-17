import * as redis from 'redis';
import { promisify } from 'util';

let client;
export let get;
export let set;
export let del;
export function connect(config) {
  if (client) {
    return;
  }

  client = redis.createClient({
    socket: {
      port: config.port,
    },
  });

  client.on('error', function (error) {
    // eslint-disable-next-line no-console
    console.error('REDIS:: ', error);
  });
  client.on('connect', function (error) {
    // eslint-disable-next-line no-console
    console.log('redis connected');
  });

  get = promisify(client.get).bind(client);
  set = promisify(client.set).bind(client);
  del = promisify(client.del).bind(client);
}
