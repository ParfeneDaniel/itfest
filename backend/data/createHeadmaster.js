const createHeadmasterEmail = (password) => {
  const subject = "Cerere acceptata";
  const html = `
  <div>
      <p>
          Va scriem din partea platformei <b style="color: #78B3CE;"> Learni<span style="color: #F96E2A;">X</span></b> 
          pentru a va anunta ca cererea dumneavoastra in legatura cu inrolarea departamentului pe care il reprezentati a fost acceptata. 
          Ne bucuram ca ati ales serviciile noastre!
      </p>
      <p>
          Parola contului creat pentru dumneavoastra este: <b>${password}</b>. 
          Aceasta se poate modifica oricand doriti.
      </p>
      <p style="color: red;">
          Administratorul platformei nu va avea acces la datele interne ale facultatii!
      </p>
      <p>O zi frumoasa!</p>
  </div>`;

  return { subject, html };
};

module.exports = createHeadmasterEmail;
