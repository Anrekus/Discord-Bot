import {
  ClientOptions,
  Client as BaseClient,
  Collection,
} from 'discord.js';

import CommandManager from './command/command-manager';
import EventManager from './event/event-manager';

export default class Client extends BaseClient {
  public command: CommandManager = new CommandManager(this);
  public event: EventManager = new EventManager(this);
  public categorys: string[] = [];
  constructor(options: ClientOptions) {
    super(options);
  }
  
  async start(): Promise<string> {
    this.command.load();
    this.event.load();
    return this.login(this.options.token);
  }
}

declare module 'discord.js' {
  interface ClientOptions {
    prefix: string;
    token: string;
    owners: string[];
  }
}