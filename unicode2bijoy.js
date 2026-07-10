// unicode2bijoy.js - Unicode to Bijoy (SutonnyMJ ANSI) Offline Converter

(function(global) {
    const uni2bijoy_string_conversion_map = {
        "।": "|",
        "‘": "Ô",
        "’": "Õ",
        "“": "Ò",
        "”": "Ó",
        "্র্য": "ª¨",
        "র‌্য": "i¨",
        "ক্ক": "°",
        "ক্ট": "±",
        "ক্ত": "³",
        "ক্ব": "K¡",
        "স্ক্র": "¯Œ",
        "ক্র": "µ",
        "ক্ল": "K¬",
        "ক্ষ্ন": "¶è",
        "ক্ষ্ণ": "¶è",
        "হ্ম": "þ",
        "ক্ষ্ম": "²",
        "ঙ্ক্ষ": "•¶",
        "ক্ষ": "¶",
        "ক্স": "·",
        "ক্ম": "´",
        "ঙ্গু": "½y",
        "গু": "¸",
        "গ্ধ": "»",
        "গ্ন": "Mœ",
        "গ্ম": "M¥",
        "গ্লু": "Møæ",
        "গ্ল": "Mø",
        "গ্রু": "Mªæ",
        "ঘ্ন": "Nœ",
        "ঙ্ক": "¼",
        "ঙ্খ": "•L",
        "ঙ্গ": "½",
        "ঙ্ঘ": "•N",
        "চ্চ": "”P",
        "চ্ছ": "”Q",
        "চ্ছ্ব": "”Q¡",
        "চ্ঞ": "”T",
        "জ্জ্ব": "¾¡",
        "জ্জ": "¾",
        "জ্ঝ": "À",
        "জ্ঞ": "Á",
        "জ্ব": "R¡",
        "ঞ্চ": "Â",
        "ঞ্ছ": "Ã",
        "ঞ্জ": "Ä",
        "ঞ্ঝ": "Å",
        "ট্ট": "Æ",
        "ট্ব": "U¡",
        "ট্ম": "U¥",
        "ড্ড": "Ç",
        "ণ্ট": "È",
        "ণ্ঠ": "É",
        "ন্স": "Ý",
        "ণ্ড": "Ð",
        "ন্তু": "š‘",
        "ণ্ব": "Y^",
        "ত্ত্ব": "Ë¡",
        "ন্ত্ব": "šÍ¡",
        "ত্ত": "Ë",
        "ত্থ": "Ì",
        "ত্ন": "Zœ",
        "ত্ম": "Z¥",
        "ত্ব": "Z¡",
        "ত্রু": "Îæ",
        "ত্রূ": "Îƒ",
        "থ্ব": "_¡",
        "দ্গ": "˜M",
        "দ্ঘ": "˜N",
        "দ্দ": "Ï",
        "দ্ধ": "×",
        "ন্দ্ব": "›Ø",
        "দ্ব": "Ø",
        "দ্ভ্র": "™£",
        "দ্ভ": "™¢",
        "দ্ম": "Ù",
        "দ্রু": "`ªæ",
        "श्रु": "kÖæ",
        "প্রু": "cÖæ",
        "প্লু": "cøæ",
        "ধ্ব": "aŸ",
        "ধ্ম": "a¥",
        "ন্ট": "›U",
        "ন্ঠ": "Ú",
        "ন্ড": "Û",
        "ন্ত্র": "š¿",
        "ন্ত": "šÍ",
        "স্ত্র": "¯¿",
        "ত্র": "Î",
        "ন্থ": "š’",
        "ন্দ": "›`",
        "ন্ধ": "Ü",
        "ণ্ণ": "Yœ",
        "ণ্ন": "Yœ",
        "ন্ন": "bœ",
        "ন্ব": "š^",
        "ন্ম": "b¥",
        "প্ট": "Þ",
        "প্ত": "ß",
        "প্ন": "cœ",
        "প্প": "à",
        "প্ল": "cø",
        "প্স": "á",
        "ফ্ল": "d¬",
        "ব্জ": "â",
        "ব্দ": "ã",
        "ব্ধ": "ä",
        "ব্ব": "eŸ",
        "ব্ল": "eø",
        "ভ্র": "å",
        "ম্ন": "gœ",
        "ম্প": "¤ú",
        "ম্ফ": "ç",
        "ম্ব": "¤^",
        "ম্ভ": "¤¢",
        "ম্ভ্র": "¤£",
        "ম্ম": "¤§",
        "ম্ল": "¤ø",
        "ড়ু": "o–",
        "ঢ়ু": "p–",
        "রু": "iæ",
        "রূ": "iƒ",
        "ল্ক": "é",
        "ল্গ": "ê",
        "ল্প": "í",
        "ল্ট": "ë",
        "ল্ড": "ì",
        "ল্ফ": "î",
        "ল্ব": "j¦",
        "ল্ম": "j¥",
        "ল্ল": "jø",
        "শু": "ï",
        "শ্চ": "ð",
        "শ্ছ": "ñ",
        "শ্ন": "kœ",
        "শ্ব": "k¦",
        "শ্ম": "k¥",
        "শ্ল": "kø",
        "ষ্ক": "®‹",
        "ষ্ক্র": "®Œ",
        "ষ্ট": "ó",
        "ষ্ঠ": "ô",
        "ষ্ণ": "ò",
        "ष্প": "®ú",
        "ষ্ফ": "õ",
        "ष্ম": "®§",
        "স্ক": "¯‹",
        "স্ট": "÷",
        "স্খ": "ö",
        "স্তু": "¯‘",
        "স্ত": "¯Í",
        "স্থ": "¯’",
        "স্ন": "mœ",
        "স্প": "¯ú",
        "স্ফ": "ù",
        "স্ব": "¯^",
        "স্ম": "¯§",
        "স্ল": "¯ø",
        "হ্ব": "nŸ",
        "হু": "û",
        "হ্ণ": "nè",
        "হ্ন": "ý",
        "হ্ল": "n¬",
        "হৃ": "ü",
        "র্": "©",
        "্র": "ª",
        "্য": "¨",
        "্": "&",
        "আ": "Av",
        "অ": "A",
        "ই": "B",
        "ঈ": "C",
        "উ": "D",
        "ঊ": "E",
        "ঋ": "F",
        "এ": "G",
        "ঐ": "H",
        "ও": "I",
        "ঔ": "J",
        "ক": "K",
        "খ": "L",
        "গ": "M",
        "ঘ": "N",
        "ঙ": "O",
        "চ": "P",
        "ছ": "Q",
        "জ": "R",
        "ঝ": "S",
        "ঞ": "T",
        "ট": "U",
        "ঠ": "V",
        "ড": "W",
        "ঢ": "X",
        "ণ": "Y",
        "ত": "Z",
        "থ": "_",
        "দ": "`",
        "ধ": "a",
        "ন": "b",
        "প": "c",
        "ফ": "d",
        "ব": "e",
        "ভ": "f",
        "ম": "g",
        "য": "h",
        "র": "i",
        "ল": "j",
        "শ": "k",
        "ষ": "l",
        "স": "m",
        "হ": "n",
        "ড়": "o",
        "ঢ়": "p",
        "য়": "q",
        "ৎ": "r",
        "০": "0",
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "া": "v",
        "ি": "w",
        "ী": "x",
        "ু": "y",
        "ূ": "~",
        "…": "...",
        "ৃ": "…",
        "ে": "‡",
        "ৈ": "‰",
        "ৗ": "Š",
        "ং": "s",
        "ঃ": "t",
        "ঁ": "u",
        "—": "Ñ"
    };

    const bijoyKarReplacements = {
        "¨y": "y¨",
        "¨~": "~¨",
        "vu": "uv",
        "¨u": "u¨",
        "Ky": "Kz",
        "K~": "K‚",
        "Py": "Pz",
        "P~": "P‚",
        "Qy": "Qz",
        "Q~": "Q‚",
        "Sy": "Sz",
        "S~": "S‚",
        "Uy": "Uz",
        "U~": "U‚",
        "Vy": "Vz",
        "V~": "V‚",
        "Wy": "Wz",
        "W~": "W‚",
        "Xy": "Xz",
        "X~": "X‚",
        "Zy": "Zz",
        "Z~": "Z‚",
        "dy": "dz",
        "d~": "d‚",
        "fy": "fz",
        "f~": "f‚",
        "¶y": "¶z",
        "¶~": "¶‚",
        "Áy": "Áz",
        "Á~": "Á‚",
        "þy": "þz",
        "þ~": "þ‚",
        "¾y": "¾z",
        "¾~": "¾‚",
        "°y": "°z",
        "°~": "°‚",
        "¼y": "¼z",
        "¼~": "¼‚",
        "Üy": "Üz",
        "Ü~": "Ü‚",
        "×y": "×z",
        "×~": "x‚",
        "äy": "äz",
        "ä~": "ä‚",
        "§…": "§„",
        "¥…": "¥„",
        "c…": "c„",
        "N…": "N„",
        "g…": "g„",
        "e…": "e„",
        "k…": "k„",
        "L…": "L„",
        "M…": "M„",
        "m…": "m„",
        "l…": "l„",
        "R…": "R„",
        "_…": "_„",
        "`…": "`„",
        "a…": "a„",
        "b…": "b„",
        "j…": "j„",
        "h…": "h„",
        "Y…": "Y„",
        "j&¸": "êy",
        "'‡": "'†",
        '"‡': '"†',
        "{‡": "{†",
        "-‡": "-†",
        "'‰": "'ˆ",
        '"‰': '"ˆ',
        "{‰": "{ˆ",
        "-‰": "-ˆ",
        "©y": "©z",
        "©~": "©‚",
        "‹y": "‹z",
        "‹~": "‹‚",
        "÷y": "÷z",
        "÷~": "÷‚",
        "ùy": "ùz",
        "ù~": "ù‚"
    };

    const bijoyRoFolaReplacements = {
        "&iæ": "ªæ",
        "&iƒ": "ªƒ",
        "Mª": "MÖ",
        "cª": "cÖ",
        "dª": "d«",
        "Nªæ": "Nªy",
        "Pªæ": "Pªy",
        "Qªæ": "Qªy",
        "Sªæ": "Sªy",
        "Uªæ": "Uªy",
        "Vªæ": "Vªy",
        "Wªæ": "Wªy",
        "Xªæ": "Xªy",
        "Yªæ": "Yªy",
        "bªæ": "bªy",
        "d«æ": "d«y",
        "hªæ": "hªy",
        "jªæ": "jªy",
        "lªæ": "lªy",
        "nªæ": "nªy",
        "åy": "åæ",
        "Nªƒ": "Nª~",
        "Pªƒ": "Pª~",
        "Qªƒ": "Qª~",
        "Sªƒ": "Sª~",
        "Uªƒ": "Uª~",
        "Vªƒ": "Vª~",
        "Wªƒ": "Wª~",
        "Xªƒ": "Xª~",
        "Yªƒ": "Yª~",
        "bªƒ": "bª~",
        "d«ƒ": "d«~",
        "hªƒ": "hª~",
        "jªƒ": "jª~",
        "lªƒ": "lª~",
        "nªƒ": "nª~",
        "å~": "åƒ",
        "”Q&e": "”Q¡",
        "kª": "kÖ",
        "mª": "mÖ",
        "g&å": "¤£"
    };

    let uni2bijoyPatterns = null;

    function buildConversionPatterns(map) {
        const patterns = [];
        for (const key in map) {
            if (Object.prototype.hasOwnProperty.call(map, key)) {
                patterns.push({
                    regex: new RegExp(key, "g"),
                    replacement: map[key]
                });
            }
        }
        return patterns;
    }

    function ensureUni2BijoyPatterns() {
        if (!uni2bijoyPatterns) {
            uni2bijoyPatterns = buildConversionPatterns(uni2bijoy_string_conversion_map);
        }
    }

    function replaceMultiple(text, map, useRegex) {
        let result = text;
        for (const key in map) {
            if (Object.prototype.hasOwnProperty.call(map, key)) {
                const pattern = useRegex ? new RegExp(key, "g") : key;
                result = result.replace(pattern, map[key]);
            }
        }
        return result;
    }

    const IsBanglaHalant = (n) => n === "্";
    const IsBanglaPreKar = (n) => ["ি", "ৈ", "ে"].includes(n);
    const IsBanglaPostKar = (n) => ["া", "ো", "ৌ", "ৗ", "ু", "ূ", "ী", "ৃ"].includes(n);
    const IsBanglaKar = (n) => IsBanglaPreKar(n) || IsBanglaPostKar(n);
    const IsBanglaBanjonborno = (n) => /[ক-হড়-য়ংঃঁৎ]/.test(n);

    function ReArrangeUnicodeText(n) {
        let o = 0;
        for (let t = 0; t < n.length; t++) {
            if (t < n.length && IsBanglaPreKar(n.charAt(t))) {
                let r = 1;
                while (IsBanglaBanjonborno(n.charAt(t - r))) {
                    if (t - r < 0 || t - r <= o)
                        break;
                    if (IsBanglaHalant(n.charAt(t - r - 1)))
                        r += 2;
                    else
                        break;
                }
                let f = n.substring(0, t - r);
                f += n.charAt(t);
                f += n.substring(t - r, t);
                f += n.substring(t + 1, n.length);
                n = f;
                o = t + 1;
                continue;
            }
            if (t < n.length - 1 &&
                IsBanglaHalant(n.charAt(t)) &&
                n.charAt(t - 1) === "র") {
                let i = 1;
                let e = 0;
                while (true) {
                    if (IsBanglaBanjonborno(n.charAt(t + i)) &&
                        IsBanglaHalant(n.charAt(t + i + 1))) {
                        i += 2;
                    }
                    else if (IsBanglaBanjonborno(n.charAt(t + i)) &&
                        IsBanglaPreKar(n.charAt(t + i + 1))) {
                        e = 1;
                        break;
                    }
                    else {
                        break;
                    }
                }
                let u = n.substring(0, t - 1);
                u += n.substring(t + i + 1, t + i + e + 1);
                u += n.substring(t + 1, t + i + 1);
                u += n.charAt(t - 1);
                u += n.charAt(t);
                u += n.substring(t + i + e + 1, n.length);
                n = u;
                t += i + e;
                o = t + 1;
                continue;
            }
        }
        return n;
    }

    function replaceFirstLetter(n, t, i) {
        return n.replace(new RegExp("^" + t, "gm"), i);
    }
    function replaceLastLetter(n, t, i) {
        return n.replace(new RegExp(t + "$", "gm"), i);
    }

    function unicodeToBijoy(text) {
        if (!text)
            return "";
        let n = text;
        n = n
            .replace(/ব়/g, "র")
            .replace(/ড়/g, "ড়")
            .replace(/ঢ়/g, "ঢ়")
            .replace(/য়/g, "য়");
        n = n.replace(/ো/g, "ো").replace(/ৌ/g, "ৌ").replace(/্র্য/g, "্র‍্য");
        n = replaceLastLetter(n, "র্", "i&");
        n = replaceLastLetter(n, "র্‌", "i&");
        n = ReArrangeUnicodeText(n);
        ensureUni2BijoyPatterns();
        if (uni2bijoyPatterns) {
            for (const pattern of uni2bijoyPatterns) {
                n = n.replace(pattern.regex, pattern.replacement);
            }
        }
        n = replaceFirstLetter(n, "‡", "†");
        n = replaceFirstLetter(n, "‰", "ˆ");
        n = n
            .replace(/\(‡/g, "(†")
            .replace(/\[‡/g, "[†")
            .replace(/Ô‡/g, "Ô†")
            .replace(/Ò‡/g, "Ò†");
        n = n
            .replace(/\(‰/g, "(ˆ")
            .replace(/\[‰/g, "[ˆ")
            .replace(/Ô‰/g, "Ôˆ")
            .replace(/Ò‰/g, "Òˆ");
        n = replaceMultiple(n, bijoyKarReplacements, true);
        n = replaceMultiple(n, bijoyRoFolaReplacements, true);
        return n;
    }

    global.unicodeToBijoy = unicodeToBijoy;
})(typeof window !== 'undefined' ? window : global);
