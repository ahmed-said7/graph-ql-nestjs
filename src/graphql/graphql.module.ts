import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(), // Provide PubSub for event handling
    },
  ],
  exports: ['PUB_SUB'],
})
export class GraphqlModule {}
