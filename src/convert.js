const latinString =
  "a,b,v,g,d,đ,dj,Dj,e,ž,z,i,j,k,l,lj,Lj,m,n,nj,Nj,o,p,r,s,t,ć,u,f,h,c,č,dž,dz,Dz,Dž,š";

const cyrilicString =
  "а,б,в,г,д,ђ,ђ,Ђ,е,ж,з,и,ј,к,л,љ,Љ,м,н,њ,Њ,о,п,р,с,т,ћ,у,ф,х,ц,ч,џ,џ,Џ,Џ,ш";

const nAndUppercase = (n, split) =>
  n.split(split).concat(n.split(split).map(item => item.toUpperCase()));

const latin = nAndUppercase(latinString, ",");
const cyrilic = nAndUppercase(cyrilicString, ",");
const charMap = latin.reduce(
  (acc, item, index) => ({ ...acc, [item]: cyrilic[index] }),
  {}
);

const regexdoub = new RegExp(
  `${latin.filter(i => i.length === 2).join("|")}`,
  "g"
);
const regex = new RegExp(`[${latin.join("")}]`, "g");

/* c o n v e r t */
const convert = text =>
  text.replace(regexdoub, x => charMap[x]).replace(regex, x => charMap[x]);

export default convert;
