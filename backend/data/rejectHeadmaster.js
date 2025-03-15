const rejectHeadmaster = () => {
  const subject = "Cerere respinsa";
  const html = `
  <div>
      <p>Din motive de siguranta cererea dumneavoastra a fost respinsa.</p>
      <p>Daca din motive tehnice nu ati putut valida identitatea va rugam sa trimiteti o noua cerere.</p>
  </div>`;

  return { subject, html };
};

module.exports = rejectHeadmaster;
