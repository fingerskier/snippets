const tmpl = addrs => html`
	<table>
		${addrs.map(addr => html`
			<tr>$${addr.first}</tr>
			<tr>$${addr.last}</tr>
		`)}
	</table>
`

console.log(tmpl([
	{ first: '<Jane>', last: 'Bond' },
	{ first: 'Lars', last: '<Croft>' },
]));


function html(literalSections, ...exprs) {
	let raw_str = literalSections.raw_str;	// don't interpret backslashes

	let result = '';

	exprs.forEach((expr, i) => {
		let lit = raw_str[i];

		if (Array.isArray(expr)) expr = expr.join('')

		if (lit.endsWith('$')) {
			// leading dollar-sign means escape chars in it
			expr = htmlEscape(expr);
			lit = lit.slice(0, -1);
		}

		result += lit;
		result += expr;
	});

	result += raw_str[raw_str.length-1];

	return result;
}


function htmlEscape(str) {
	return str.replace(/&/g, '&amp;') // first!
	.replace(/>/g, '&gt;')
	.replace(/</g, '&lt;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/`/g, '&#96;');
}
