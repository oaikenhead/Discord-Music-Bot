const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("quit").setDescription("Bot goes offline and clears the song queue"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("There are no songs in the queue.")
        
        // free the song queue from memory
		queue.destroy()
        await interaction.editReply("You all suck.")
	},
}