import axios from "axios";
import localData from '../data/data.json';

export const fetchData = async name => {
	try {
		const response = await axios.get(`https://ychnightder.alwaysdata.net/SpaceTourismAPI/api/${name}`);

		if (response && response.data) return response.data;
	} catch (err) {
		// remote fetch failed — fall back to local data
		// eslint-disable-next-line no-console
		console.warn('Remote fetch failed, using local data:', err && err.message ? err.message : err);
	}

	const normalizeItemImages = item => {
		if (!item || !item.images) return item;
		const imgs = item.images;
		const normalized = {};

		if (typeof imgs === 'object' && !Array.isArray(imgs)) {
			Object.keys(imgs).forEach(k => {
				const val = imgs[k];
				if (typeof val === 'string') {
					// convert "./assets/..." -> "/assets/images/..."
					normalized[k] = val.replace(/^\.\/assets\//, '/assets/images/');
				} else {
					normalized[k] = val;
				}
			});
		}

		return { ...item, images: normalized };
	};

	// Fallback: return matching section from local JSON when available
	if (localData && name && Object.prototype.hasOwnProperty.call(localData, name)) {
		const section = localData[name];
		if (Array.isArray(section)) return section.map(normalizeItemImages);
		return normalizeItemImages(section);
	}

	if (localData) {
		// normalize all top-level arrays (destinations, crew, technology)
		const out = {};
		Object.keys(localData).forEach(k => {
			const v = localData[k];
			if (Array.isArray(v)) out[k] = v.map(normalizeItemImages);
			else out[k] = v;
		});
		return out;
	}

	throw new Error('No data available');
};
