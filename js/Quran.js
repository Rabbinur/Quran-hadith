//  fetching part

const loadALQuran = () => {
  const url = `https://api.alquran.cloud/v1/surah`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayALQuran(data.data));
};
const displayALQuran = (surahs) => {
  console.log(surahs);
  // console.log(surahs[0].number);
  const ALQuranContainer = document.getElementById("ALQuran-container");
  surahs.forEach((surah) => {
    // console.log(surah.number);
    // console.log(surah.englishName);
    const surahsDiv = document.createElement("div");
    surahsDiv.innerHTML = `
  
    <button onclick="loadSurahDetails('${surah.number}')"
     class="btn btn-primary w-75 custom-1 "data-bs-toggle="modal" data-bs-target="#surahDetailModal" type="button">${surah.englishName} -${surah.number}</button>
     
    `;
    ALQuranContainer.appendChild(surahsDiv);
  });
};
const loadSurahDetails = (number) => {
  console.log(number);

  const url = `https://api.alquran.cloud/v1/surah/${number}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySurah(data.data));
};
const displaySurah = (surahs) => {
  // console.log(surahs.englishName);
  // console.log(surahs.number);
  const audioContainer = document.getElementById("surah-audio");
  audioContainer.innerHTML = `
  <h3 class="text-primary mb-3">Listen audio</h3>
  <audio controls download src="audio/${surahs.number}.mp3"></audio>
  `;
  const surahs1 = surahs.ayahs;
  //get modal element
  const modalTitle = document.getElementById("surahDetailModalLabel");
  modalTitle.innerText = `${surahs.number}. ${surahs.englishName}`; //set title modal
  //   modalTitle.innerText = surahs.number; //set title modal
  const surahDetails = document.getElementById("single-surah-detail");
  surahDetails.innerHTML = "";
  surahs1.forEach((surah) => {
    console.log(surah.text);
    const ayah = document.createElement("li");
    ayah.classList.add("pb-4", "fs-5", "text-dark", "lh-lg");
    ayah.innerText = `${surah.text}`;
    surahDetails.appendChild(ayah);
  });
};
loadALQuran();
