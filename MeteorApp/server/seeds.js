import Items from "/imports/collections/items";
import Details from "/imports/collections/details";

const seed = () => {
	if (Items.find().count() === 0) {
		for (let i = 0; i < 10; i++) {
			Items.insert({
				name: "Items #" + i
			});
		}
	}
	if (Details.find().count() === 0) {
		for (let i = 0; i < 20; i++) {
			Details.insert({
				name: "Details #" + i
			});
		}
	}
}

export default seed;