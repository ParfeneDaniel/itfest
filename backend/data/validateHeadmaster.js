const validateHeadmaster = () => {
  const subject = "Validare identitate";
  const html =
    "<div>" +
    "<p>Pentru a ne asigura de autenticiatea identitatii dumneavoastra acest email a fost trimis automat.</p>" +
    "<p>Va rog raspundeti scurt la acest email.</p>" +
    "<p> Asteptam un raspuns din partea dumneavoastra in maxim 3 zile, altfel cererea dumneavoastra va fi anulata.</p>" +
    "<p>Ne scuzati pentru disconfortul creat!</p>" +
    "</div>";

  return { subject, html };
};

module.exports = validateHeadmaster;
