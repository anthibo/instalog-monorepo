import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io';
// import {  } from '@nestjs/platform-socket.io';

@WebSocketGateway(80, { namespace: 'events' })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  public server: Server;
  handleDisconnect(@ConnectedSocket() client: Socket) {}

  handleConnection(client: Socket) {
    console.log(client);
  }

  @SubscribeMessage('enable live')
  handleEnableLive(@ConnectedSocket() client: Socket) {
    client.join('live');
  }

  @SubscribeMessage('enable live with search')
  handleEnableLiveWithSearch(
    @ConnectedSocket() client: Socket,
    @MessageBody() search: string,
  ) {
    client.join(`live  ${search}`);
    // should emit an event to events.service
  }
}
