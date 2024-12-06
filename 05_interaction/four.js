const countryCodes = {
    BD: 'Bangladesh',
    US: 'United States',
    CA: 'Canada',
    IN: 'India',
    AU: 'Australia',
    UK: 'United Kingdom',
    CN: 'China',
    JP: 'Japan',
    FR: 'France',
    DE: 'Germany'
  }

  for (const key in countryCodes) {
    // console.log(`${key} - ${countryCodes[key]}`);
    
  }

const okm = ['ok', 'okm', 'ok','okmm'];
for (const key in okm) {
    // console.log(okm[key]);
    
}

const map = new Map()
map.set('BD', 'Bangladesh')
map.set('US', 'United States')
map.set('CA', 'Canada')
map.set('IN', 'India')
map.set('AU', 'Australia')
map.set('UK', 'United Kingdom')
map.set('CN', 'China')
map.set('JP', 'Japan')
map.set('FR', 'France')
map.set('DE', 'Germany')
for (const key in map) {
    console.log(key);
    
}