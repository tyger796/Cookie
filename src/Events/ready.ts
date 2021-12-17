import { Event } from '../Interfaces/Event';
import muteSync from '../Syncs/muteSync';
import tempBanSync from '../Syncs/tempBanSync';

export const event: Event = {
    name: 'ready',
    run: async (client) => {
        console.log(`${client.user.tag} is online!`);
        console.log(`Prefix: ${client.config.prefix}`);
        client.user.setActivity(`${client.config.prefix}help`, { type: 'WATCHING' });

        muteSync(client);
        tempBanSync(client);
    }
}