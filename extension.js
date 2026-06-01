console.log("TORRENTIO MODULE LOADED")

export default new class Torrentio {
	// gh:creepersaur/HayaseTorrentio

	async single({ titles, episode }) {
		console.log("TORRENTIO: single()")

		return [
			{
				hash: "0123456789ABCDEF0123456789ABCDEF01234567",
				link: "0123456789ABCDEF0123456789ABCDEF01234567",
				title: "creepersaur",
				size: 1,
				type: "alt",
				date: new Date(),
				seeders: 1,
				leechers: 0,
				downloads: 0,
				accuracy: "medium"
			}
		]
	}

	batch = this.single
	movie = this.single

	async test() {
		return true
	}
}()
