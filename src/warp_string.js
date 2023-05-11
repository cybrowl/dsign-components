const inputString = `

`;

const wrapString = (str, maxLength = 120) => {
	const words = str.split(' ');
	let lineLength = 0;
	return words
		.reduce(
			(lines, word) => {
				if (lineLength + word.length > maxLength) {
					lines.push(word);
					lineLength = word.length;
				} else {
					lines[lines.length - 1] += ' ' + word;
					lineLength += word.length + 1;
				}
				return lines;
			},
			['']
		)
		.join('\n');
};

console.log(wrapString(inputString));
