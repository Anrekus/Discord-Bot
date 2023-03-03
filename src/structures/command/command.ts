import {
  Message
} from 'discord.js';
import Client from '../client';

export default abstract class Command {
  name: string;
  devOnly: false;
  category: string;

  constructor(protected client: Client, ops: any) {
    this.client = client;
    this.name = ops.name;
    this.devOnly = ops.devOnly;
    this.category = ops.category;

  }
  abstract run(message: Message, args: string[]): void;
}