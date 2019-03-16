import phtml from 'phtml';
import postcss from 'postcss';
import adjustSourceMap from './lib/adjust-source-map';

export default new phtml.Plugin('phtml-css', opts => {
	const plugins = [].concat(Object(opts).plugins || []);
	const globalProcessOptions = 'processOptions' in Object(opts) ? Object.assign({}, Object(opts).processOptions) : { map: { inline: true } };
	const adjustedProcessOptions = Object.assign({}, globalProcessOptions, {
		map: { annotation: false, inline: false }
	});

	const processor = postcss(plugins);

	return {
		Element (element) {
			let promise;

			if (hasStyleAttribute(element)) {
				const source = element.attrs.get('style');

				promise = (promise || Promise.resolve()).then(
					() => processStyle(source, element, true)
				).then(
					css => {
						element.attrs.add('style', css);
					}
				);
			}

			if (isStyleElement(element)) {
				const target = element.nodes[0];
				const source = target.data;

				promise = (promise || Promise.resolve()).then(
					() => processStyle(source, element)
				).then(
					css => {
						target.data = css;
					}
				);
			}

			return promise;
		}
	};

	function processStyle (source, node, isInline) {
		const processOptions = Object.assign({
			from: node.source.input.from
		}, adjustedProcessOptions);

		return processor.use(cssroot => {
			cssroot.source.input.css = node.source.input.html
		}).process(source, processOptions).then(
			result => {
				if (globalProcessOptions.map && !isInline) {
					const lineOffset = (node.source.input.html.slice(0, node.source.startOffset).match(/\n/g) || []).length;
					const offsetMap = adjustSourceMap(result.map.toJSON(), lineOffset);
					const sourceMapBase64 = Buffer.from(JSON.stringify(offsetMap)).toString('base64');
					const sourceMap = `\n/*# sourceMappingURL=data:application/json;base64,${sourceMapBase64} */`;

					return `${result.css}${sourceMap}`
				}

				return result.css;
			}
		);
	}
});

function isStyleElement (node) {
	return /^style$/.test(node.name) && node.nodes.length === 1;
}

function hasStyleAttribute (node) {
	return node.attrs.get('style');
}
