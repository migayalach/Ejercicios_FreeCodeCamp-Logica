function convertHTML(str) {
  const y = "&amp;";
  const menor = "&lt;";
  const mayor = "&gt;";
  const comillaDoble = "&quot;";
  const comillaSimple = "&apos;";
  const array = str.split("");
  str = "";
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "&":
        array[i] = y;
        break;
      case "<":
        array[i] = menor;
        break;
      case ">":
        array[i] = mayor;
        break;
      case '"':
        array[i] = comillaDoble;
        break;
      case "'":
        array[i] = comillaSimple;
        break;
      default:
        break;
    }
  }
  return (str = array.join(""));
}

// convertHTML("Dolce & Gabbana");
convertHTML("Schindler's List");
