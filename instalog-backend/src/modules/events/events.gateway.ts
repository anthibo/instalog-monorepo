import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
// import {  } from '@nestjs/platform-socket.io';

@WebSocketGateway(80, { namespace: 'events' })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }
  handleConnection(client: any) {
    console.log(client.handshake.auth);
    const username = client.handshake.auth.username;
    const userInboxRoom = `${username}-inbox`;
    client.join(userInboxRoom);
    console.log(`${username} is online`);
    return { event: 'roomCreated', room: userInboxRoom };
  }
}
