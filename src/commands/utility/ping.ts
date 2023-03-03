import Client from "@anrekus/structures/client";
import Command from "@anrekus/structures/command/command";
import { Message } from "discord.js";

export default class Ping extends Command {
  constructor(protected client:Client) {
    super(client, {
      name: "ping",
      category: "utility",
    })
  }

  async run(msg: Message) {
    return msg.reply('Pong!');
  }
}