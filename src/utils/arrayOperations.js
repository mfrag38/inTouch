export const groupArrayBy = (arr, criteria) => {
	const result = arr.reduce((group, element) => {
		const value = element[criteria];
		// // console.log('The Value:', value);
		// console.log('The Gro:', group);
		// console.log('The Ele:', element);
		// console.log('The Value:', value);
		// console.log('The Group:', group);
		/* console.log(
			'Group:',
			group.some((g) => g.title.includes(value)),
		); */
		/* --> HERE <-- console.log(
			'Group Filter:',
			group.filter((g) => g.title.includes(value)),
		); */
		// pets.some((pet) => pet.name.includes('cat'));
		if (!group.some((g) => g.title.includes(value))) {
			// group.filter((g) => g.title.includes(value));
			// console.log('Would Do Something');
			// } else {
			const rr = arr.filter((el) => el.contactIcon.includes(value));
			group.push({
				title: value,
				data: rr.sort((a, b) => {
					if (a.contactName[1] < b.contactName[1]) return -1;
					if (a.contactName[1] > b.contactName[1]) return 1;
					return 0;
				}),
			});
		}
		// group[value] = group[value] ?? [];
		// group[value].push(element);
		return group;
	}, []);

	return result.sort((a, b) => {
		if (a.title < b.title) return -1;
		if (a.title > b.title) return 1;
		return 0;
	});
};
