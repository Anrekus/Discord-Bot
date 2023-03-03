import Client from "@anrekus/structures/client";
import Event from "@anrekus/structures/event/event";
import { ChannelType, Message } from "discord.js";

export default class MessageCreateEvent extends Event {
    constructor(protected client: Client) {
        super(client, {
            name: "messageCreate"
        })
    }
    
    async run(message: Message): Promise<void> {
        try {
            if(message.author.bot) return;
            if(message.channel.type === ChannelType.DM) return;
            console.log(message)

            if(!message.content.toLowerCase().startsWith(this.client.options.prefix)) return;
            const [commandName, ...args] = message.content.slice(this.client.options.prefix.length).split(/\s+/);
            const command = this.client.command.commands.get(commandName.toLocaleLowerCase());
            if(!command) return;
            if(command.devOnly && !this.client.options.owners.includes(message.author.id)) return;

            command.run(message, args);
        } catch(e) {
            console.log(e)
        }
    }
}