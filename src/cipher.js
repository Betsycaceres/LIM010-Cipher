window.cipher = {
  encode: (offset, string) => {
        let result = "";
        for (let i = 0; i < string.length; i++) {
          let c = string.charCodeAt(i);
          if (65 <= c && c <=  90)
            result += String.fromCharCode((c - 65 + offset) % 26 + 65);  
          else
          result += string.charAt(i); 
        }
return result.toUpperCase();
  },

  decode: (offset, string) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      let c = string.charCodeAt(i);
      if (65 <= c && c <=  90)
        result += String.fromCharCode((c + 65 - offset) % 26 + 65); 
      else
        result += string.charAt(i);
      }
return result.toUpperCase();
}
}
