//  fetching part

const loadHadith = () => {
  const url = `https://alquranbd.com/api/hadith/bukhari/1`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayHadith(data));
};
const displayHadith = (hadiths) => {
  const hadithContainer = document.getElementById("hadith-container");
  hadiths.forEach((hadith) => {
    const hadithDiv = document.createElement("div");
    hadithDiv.innerHTML = `

        <button onclick="loadHadithDetails('${hadith.hadithNo}')"
         class="btn btn-primary w-75 custom-1 "data-bs-toggle="modal" data-bs-target="#hadithDetailModal" type="button">${hadith.rabiNameBn} - ${hadith.hadithNo}</button>

        `;
    hadithContainer.appendChild(hadithDiv);
  });
};

const loadHadithDetails = (hadithNumber) => {
  // console.log(hadithNumber);

  const url = `https://alquranbd.com/api/hadith/bukhari/${hadithNumber}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayhadith(data));
};
const displayhadith = (hadith) => {
  // console.log(hadith[0].hadithBengali);

  //get modal element
  const modalTitle = document.getElementById("hadithDetailModalLabel");
  modalTitle.innerText = hadith[0].topicName; //set title modal
  const hadithDetails = document.getElementById("single-hadith-detail");

  hadithDetails.innerHTML = `

    <p>${hadith[0].hadithBengali}</p>
    `;
};
loadHadith();

//hadith -02

const loadHadith2 = () => {
  const url = `https://alquranbd.com/api/hadith/bukhari/2`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayHadith2(data));
};
const displayHadith2 = (hadiths) => {
  const hadith2Container = document.getElementById("hadith2-container");
  hadiths.forEach((hadith) => {
    // console.log(hadith);
    const hadith2Div = document.createElement("div");
    hadith2Div.innerHTML = `

          <button onclick="loadHadith2Details('${hadith.hadithNo}')"
           class="btn btn-primary w-75 custom-1 "data-bs-toggle="modal" data-bs-target="#hadith2DetailModal" type="button">${hadith.rabiNameBn} - ${hadith.hadithNo}</button>

          `;
    hadith2Container.appendChild(hadith2Div);
  });
};

const loadHadith2Details = (hadithNumber) => {
  // console.log(hadithNumber);

  const url = `https://alquranbd.com/api/hadith/bukhari/${hadithNumber}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayhadith2Details(data));
};
const displayhadith2Details = (hadith) => {
  //get modal element
  const modalTitle = document.getElementById("hadith2DetailModalLabel");
  modalTitle.innerText = hadith[0].topicName; //set title modal
  const hadithDetails = document.getElementById("single-hadith2-detail");

  hadithDetails.innerHTML = `

      <p>${hadith[0].hadithBengali}</p>
      `;
};
loadHadith2();
// hadith-3

const loadHadith3 = () => {
  const url = `https://alquranbd.com/api/hadith/bukhari/3`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayHadith3(data));
};
const displayHadith3 = (hadiths) => {
  // console.log(hadiths);
  const hadith3Container = document.getElementById("hadith3-container");
  hadiths.forEach((hadith) => {
    const hadith3Div = document.createElement("div");
    hadith3Div.innerHTML = `

          <button onclick="loadHadith3Details('${hadith.hadithNo}')"
           class="btn btn-primary w-75 custom-1 "data-bs-toggle="modal" data-bs-target="#hadith3DetailModal" type="button">${hadith.rabiNameBn} - ${hadith.hadithNo}</button>

          `;
    hadith3Container.appendChild(hadith3Div);
  });
};

const loadHadith3Details = (hadithNumber) => {
  const url = `https://alquranbd.com/api/hadith/bukhari/${hadithNumber}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayhadith3Details(data));
};
const displayhadith3Details = (hadith) => {
  // console.log(hadith[0].hadithBengali);
  // console.log(hadith[0].topicName);
  //   console.log(surahs);
  // const surahs1 = surahs.ayahs;
  //get modal element
  const modalTitle = document.getElementById("hadith3DetailModalLabel");
  modalTitle.innerText = hadith[0].topicName; //set title modal
  const hadithDetails = document.getElementById("single-hadith3-detail");

  hadithDetails.innerHTML = `

      <p>${hadith[0].hadithBengali}</p>
      `;
};

loadHadith3();
// // hadith-04

// const loadHadith4 = () => {
//   const url = `https://alquranbd.com/api/hadith/bukhari/4`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayHadith4(data));
// };
// const displayHadith4 = (hadiths) => {
//   console.log(hadiths);
//   const hadith4Container = document.getElementById("hadith4-container");
//   hadiths.forEach((hadith) => {
//     // console.log(hadith.rabiNameBn);
//     // console.log(hadith.hadithNo);
//     // console.log(hadith.hadithBengali);
//     const hadith4Div = document.createElement("div");
//     hadith4Div.innerHTML = `

//           <button onclick="loadHadith4Details('${hadith}')"
//            class="btn btn-primary w-75 custom-1 "data-bs-toggle="modal" data-bs-target="#hadith4DetailModal" type="button">${hadith.rabiNameBn} - ${hadith.hadithNo}</button>

//           `;
//     hadith4Container.appendChild(hadith4Div);
//   });
// };

// const loadHadith4Details = (hadithNumber) => {
//   const url = `https://alquranbd.com/api/hadith/bukhari/${hadithNumber}`;
//   console.log(hadithNumber[0]);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayhadith4Details(data));
// };
// const displayhadith4Details = (hadith) => {
//   console.log(hadith);
//   //get modal element
//   const modalTitle = document.getElementById("hadith4DetailModalLabel");
//   modalTitle.innerText = hadith[0].topicName; //set title modal
//   const hadithDetails = document.getElementById("single-hadith4-detail");

//   hadithDetails.innerHTML = `

//       <p>${hadith[0].hadithBengali}</p>
//       `;
// };

// loadHadith4();
