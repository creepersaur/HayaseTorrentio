console.log("TORRENTIO MODULE LOADED")

export default new class Torrentio {
	// gh:creepersaur/HayaseTorrentio

	async single(query) {
		console.log("TORRENTIO: single", query)

		return [
			{
				hash: "dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c",
				link: "dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c",
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

    async batch(query) {
        console.log("TORRENTIO: batch", query)
        return []
    }

    async movie(query) {
        console.log("TORRENTIO: movie", query)
        return []
    }

    async test() {
        console.log("TORRENTIO: test")
        return true
    }
}()
