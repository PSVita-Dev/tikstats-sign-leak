


function main() {
   let ts = parseInt(Date.now().toString() + "333"); 
   kasper = new Kaspersky(ts);
   return ts.toString(16) + kasper.enc("/api/stats/7158693445102587141 || Mozilla/5.0 (X11; Linux x86_64; rv:97.0) Gecko/20100101 Firefox/97.0");
}

class Kaspersky {
	constructor(r) {
		this.ts = r
	}
	enc(r) {
		let t = function() {
				for (var r = [], t = 0; t < 16; t += 1) r.push(this.randint(101, 240));
				return r
			}.call(this),
			n = function() {
				for (var r = [], n = 0; n < 16; n += 1) r.push(this.hex(t[n]));
				return r.join("")
			}.call(this),
			e = this.m(r),

			s = this.htb(e),
			u = function() {
				for (var r = [], n = 0; n < 16; n += 1) r.push(t[n] ^ s[n]);
				return r
			}.call(this),
			h = function() {
				for (var r = [], t = this.ts.toString(), n = 0, e = t.length; n < e; n += 1) r.push(2 * Number.parseInt(t[n]) + 33);
				return r
			}.call(this),
			o = function() {
				for (var r = [], t = 0; t < 16; t += 1) r.push(u[t] ^ h[t]);
				return r
			}.call(this);
        
		return n + function() {
			for (var r = [], t = 0; t < 16; t += 1) r.push(this.hex(o[t]));
			return r.join("")
		}.call(this)
	}
	reverse(r) {
		return [...r].reverse().join("")
	}
	zip(r) {
		return r[0].map(function(t, n) {
			return r.map(function(r) {
				return r[n]
			})
		})
	}
	htb(r) {
		for (var t = [], n = 0; n < r.length; n += 2) t.push(parseInt(r.substr(n, 2), 16));
		return t
	}
	hex(r) {
		let t = r.toString(16);
		return t.length < 2 && (t = "0" + t), t
	}
	randint(r, t) {
		return Math.floor(Math.random() * (t - r + 1)) + r
	}
	m(r) {
		let t, n, e, s = [-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551],
			u = [t = 1732584193, n = 4023233417, ~t, ~n],
			h = [],
			o = unescape(encodeURI(r)) + "",
			i = o.length;
		for (r = --i / 4 + 2 | 15, h[--r] = 8 * i; ~i;) h[i >> 2] |= o.charCodeAt(i) << 8 * i--;
		for (let a = o = 0; a < r; a += 16) {
			for (i = u; 64 > o; i = [e = i[3], t + ((e = i[0] + [t & n | ~t & e, e & t | ~e & n, t ^ n ^ e, n ^ (t | ~e)][i = o >> 4] + s[o] + ~~h[a | 15 & [o, 5 * o + 1, 3 * o + 5, 7 * o][i]]) << (i = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * i + o++ % 4]) | e >>> -i), t, n]) t = 0 | i[1], n = i[2];
			for (o = 4; o;) u[--o] += i[o]
		}
		for (r = ""; 32 > o;) r += (u[o >> 3] >> 4 * (1 ^ o++) & 15).toString(16);
		return this.reverse(r)
	}
}

console.log(main());

