const createStudent = (group, password) => {
  const subject = "Inrolare in grupa";
  const html = `
  <div>
      <p>Salut!</p>
      <p>
          Ai fost invitat(a) sa te alaturi Gupei ${group} pe platforma <b style="color: #78b3ce">Learni<span style="color:#f96e2a">X</span></b>.
      </p>
      <p>
          Parola contului este <b>${password}</b>. Aceasta poate fi schimbata oricand in <i> Profil > Schimba parola.</i>
        </p>
        <p>O zi frumoasă!</p>
  </div>`;

  return { subject, html };
};

module.exports = createStudent;
