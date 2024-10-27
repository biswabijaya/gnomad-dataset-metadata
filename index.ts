// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import { createAdapter } from '@socket.io/redis-adapter';
// import { createClient } from 'redis';

// const httpServer = createServer();
// const io = new Server(httpServer);

// const pubClient = createClient();
// const subClient = pubClient.duplicate();
// io.adapter(createAdapter(pubClient, subClient));

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// httpServer.listen(3000);

