import Client from "@anrekus/structures/client";
import {
  IntentsBitField
} from "discord.js";
import { env } from "process";
require('dotenv').config();

const client = new Client({
  prefix: env.PREFIX || "!",
  token: env.TOKEN || "",
  owners: env.OWNERS?.split(",") || [],
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent]
});

client.start();