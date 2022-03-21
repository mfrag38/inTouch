export const groupArrayBy = (arr, criteria) => {
	if (arr) {
		const result = arr.reduce((groups, element) => {
			const criteriaValue = element[criteria][0];
			const rr = arr.filter((el) =>
				el.displayName.startsWith(criteriaValue),
			);
			if (!groups.some((group) => group.title.includes(criteriaValue))) {
				if (criteriaValue.match(/^\d/) || criteriaValue.match(/^\+/)) {
					if (!groups.some((group) => group.title.includes('#'))) {
						groups.push({
							title: '#',
							data: rr.sort((a, b) => {
								if (
									a.displayName.toLowerCase() <
									b.displayName.toLowerCase()
								)
									return -1;
								if (
									a.displayName.toLowerCase() >
									b.displayName.toLowerCase()
								)
									return 1;
								return 0;
							}),
						});
					} else {
						if (
							!groups[
								findIndexWithAttr(groups, 'title', '#')
							].data.some((d) =>
								d.displayName.startsWith(criteriaValue),
							)
						) {
							groups[
								findIndexWithAttr(groups, 'title', '#')
							].data.push(
								...rr.sort((a, b) => {
									if (
										a.displayName.toLowerCase() <
										b.displayName.toLowerCase()
									)
										return -1;
									if (
										a.displayName.toLowerCase() >
										b.displayName.toLowerCase()
									)
										return 1;
									return 0;
								}),
							);
						}
					}
				} else {
					groups.push({
						title: criteriaValue,
						data: rr.sort((a, b) => {
							if (
								a.displayName.toLowerCase() <
								b.displayName.toLowerCase()
							)
								return -1;
							if (
								a.displayName.toLowerCase() >
								b.displayName.toLowerCase()
							)
								return 1;
							return 0;
						}),
					});
				}
			}
			return groups;
		}, []);

		var numbersSection = result.splice(
			findIndexWithAttr(result, 'title', '#'),
			1,
		);

		result.sort((a, b) => {
			if (a.title < b.title) return -1;
			if (a.title > b.title) return 1;
			return 0;
		});

		result.push(...numbersSection);

		return result;
	} else {
		return [];
	}
};

export const findIndexWithAttr = (arr, attr, value) => {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][attr] === value) {
			return i;
		}
	}
	return -1;
};
