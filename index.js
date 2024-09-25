const donationHistoryContainer = document.getElementById("DonationHistory");
if (!localStorage.getItem("totalMoney")) {
  localStorage.setItem("totalMoney", 10000);
}
let totalAmount = parseFloat(localStorage.getItem("totalMoney")) || 0;
let NoakhaliAmount = parseFloat(localStorage.getItem("noakhaliMoney")) || 0;
let FeniAmount = parseFloat(localStorage.getItem("feniMoney")) || 0;
let QuotaAmount = parseFloat(localStorage.getItem("quotaMoney")) || 0;

function setDefaultDonationContent() {
  donationHistoryContainer.innerHTML = `
      <div class="flex flex-col md:flex-row items-start gap-5 border-2 px-3 rounded-md py-3 mb-5">
        <img src="./assets/noakhali.png" alt="" />
        <div class="flex-col flex pr-5">
          <div class="max-w-36 flex items-center bg-slate-100 gap-2 text-lg py-2 px-3 rounded-md font-bold">
            <img src="./assets/coin.png" alt="" />
            <h1><span id="noakhaliMoney">${NoakhaliAmount}</span> BDT</h1>
          </div>
          <h1 class="text-xl py-3 font-bold">
            Donate for Flood at Noakhali, Bangladesh
          </h1>
          <p class="text-lg font-thin ">
            The recent floods in Noakhali have caused significant damage to
            homes and infrastructure. Your donation will help provide essential
            supplies to those affected by this disaster. Every contribution,
            big or small, makes a difference. Please join us in supporting the
            relief efforts and making a positive impact on the lives of those in
            need.
          </p>
          <form id="donateNoakhali" action="" class="flex flex-col">
            <input
              required
              type="text"
              class="border-2 rounded-md py-2 px-3 mt-3"
              placeholder="Donation amount"
              name="Noakhali"
              id="noakhalidonation"
            />
            <input value="Donate Now" type="submit" class="btn btn-warning my-5"/>
          </form>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-start gap-5 border-2 px-3 rounded-md py-3 mb-5">
        <img src="./assets/feni.png" alt="" />
        <div class="flex-col flex pr-5">
          <div class="max-w-36 flex items-center bg-slate-100 gap-2 text-lg py-2 px-3 rounded-md font-bold">
            <img src="./assets/coin.png" alt="" />
            <h1><span id="feniMoney">${FeniAmount}</span> BDT</h1>
          </div>
          <h1 class="text-xl mt-3 py-3 font-bold">
            Donate for Flood Relief in Feni, Bangladesh
          </h1>
          <p class="text-lg font-thin ">
            The recent floods in Feni have devastated local communities, leading
            to severe disruption and loss. Your generous donation will help
            provide immediate aid, including food, clean water, and medical
            supplies, to those affected by this calamity. Together, we can offer
            crucial support and help rebuild lives in the aftermath of this
            disaster. Every contribution counts towards making a real
            difference. Please consider donating today to assist those in urgent
            need.
          </p>
          <form id="donateFeni" action="" class="flex flex-col">
            <input
              required
              type="text"
              class="border-2 rounded-md py-2 px-3 mt-2"
              placeholder="Donation amount"
              name="Feni"
              id="Fenidonation"
            />
            <input value="Donate Now" type="submit" class="btn btn-warning my-2"/>
          </form>
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-start gap-5 border-2 px-3 rounded-md py-3 mb-5">
        <img src="./assets/quota-protest.png" alt="" />
        <div class="flex-col flex pr-5">
          <div class="max-w-36 flex items-center bg-slate-100 gap-2 text-lg py-2 px-3 rounded-md font-bold">
            <img src="./assets/coin.png" alt="" />
            <h1><span id="quotaMoney">${QuotaAmount}</span> BDT</h1>
          </div>
          <h1 class="text-xl py-2 font-bold">
            Aid for Injured in the Quota Movement
          </h1>
          <p class="text-lg font-thin py-3">
            The recent Quota movement has resulted in numerous injuries and
            significant hardship for many individuals. Your support is crucial
            in providing medical assistance, rehabilitation, and necessary
            supplies to those affected. By contributing, you help ensure that
            injured individuals receive the care and support they need during
            this challenging time. Every donation plays a vital role in
            alleviating their suffering and aiding in their recovery. Please
            consider making a donation to support these brave individuals in
            their time of need.
          </p>
          <form id="donateQuota" action="" class="flex flex-col">
            <input
              required
              type="text"
              class="border-2 rounded-md py-2 px-3 mt-5"
              placeholder="Donation amount"
              name="Quota"
              id="Quotadonation"
            />
            <input value="Donate Now" type="submit" class="btn btn-warning my-5"/>
          </form>
        </div>
      </div>
    `;
}

setDefaultDonationContent();

const totalMoney = document.getElementById("totalMoney");
const NoakhaliMoney = document.getElementById("noakhaliMoney");
const FeniMoney = document.getElementById("feniMoney");
const QuotaMoney = document.getElementById("quotaMoney");



totalMoney.textContent = totalAmount;
NoakhaliMoney.textContent = NoakhaliAmount;
FeniMoney.textContent = FeniAmount;
QuotaMoney.textContent = QuotaAmount;

const donationButton = document.getElementById("donation");
const historyBox = document.getElementById("historyBox");
const historyButton = document.getElementById("history");


donationButton.addEventListener("click", function () {
  setTimeout(() => {
    this.classList.remove("bg-white");
    historyButton.classList.remove("btn-warning");
    setDefaultDonationContent();
    this.classList.add("btn-warning");
    historyButton.classList.add("bg-white");
  }, 300);
});

historyButton.addEventListener("click", function () {
  setTimeout(() => {
    this.classList.remove("bg-white");
    donationButton.classList.remove("btn-warning");
    donationHistoryContainer.innerHTML = `
          <div class="md:mx-20 mx-5" id="historyBox">
        
  ${ 
    // if (localStorage.getItem('history')) {
    //   return ` <h1 class=> Sorry No Donation History Found</h1>`
    // } else {
      
    // }

  localStorage.getItem('history')?JSON.parse(localStorage.getItem("history")).map((entry, index) => {
    return `
      
        <div class="bg-white p-5 rounded-md border-2 my-2">
          <h1 class="text-xl font-bold">
            <span id="donateAmount">${entry.amount}</span> Taka is donated for 
            <span id="donationPurpose">${entry.reason}</span>
          </h1>
          <p class="text-lg font-thin">Date: <span id="donationDate">${entry.date}</span> </p>
        </div>
      
    `;
  }).join(""):"<h1 class='text-center text-xl font-bold'>Sorry, No donation history found </h1>"
  }

           
          </div>
        `;
    this.classList.add("btn-warning");
    donationButton.classList.add("bg-white");
  }, 300);
});

const noakhaliAmountElement = document.getElementById("noakhaliMoney");
const feniAmountElement = document.getElementById("feniMoney");
const quotaAmountElement = document.getElementById("quotaMoney");

function updateUI() {
  totalAmount = parseFloat(localStorage.getItem("totalMoney")) || 0;
  NoakhaliAmount = parseFloat(localStorage.getItem("noakhaliMoney")) || 0;
  FeniAmount = parseFloat(localStorage.getItem("feniMoney")) || 0;
  QuotaAmount = parseFloat(localStorage.getItem("quotaMoney")) || 0;

  totalMoney.textContent = totalAmount
  noakhaliAmountElement.textContent = NoakhaliAmount
  feniAmountElement.textContent = FeniAmount
  quotaAmountElement.textContent = QuotaAmount
}

updateUI();

function handleDonationSubmit(donationId) {
  const donationAmountInput = document.getElementById(donationId);
  const donationAmount = parseFloat(donationAmountInput.value);
  let Balance = parseFloat(localStorage.getItem("totalMoney"));
  
  if (isNaN(donationAmount) || donationAmount < 1) {
    alert("Please input a valid donation amount greater than 0.");
    return;
  }
  if (donationAmount > Balance) {
    alert("sorry, you can not donate actually you need more donation");
    return;
  }

  let totalAmount = parseFloat(localStorage.getItem("totalMoney")) || 0;
  let noakhaliAmount = parseFloat(localStorage.getItem("noakhaliMoney")) || 0;
  let feniAmount = parseFloat(localStorage.getItem("feniMoney")) || 0;
  let quotaAmount = parseFloat(localStorage.getItem("quotaMoney")) || 0;

  switch (donationId) {
    case "noakhalidonation":
      NoakhaliAmount += donationAmount;
      localStorage.setItem("noakhaliMoney", NoakhaliAmount);
      break;
    case "Fenidonation":
      FeniAmount += donationAmount;
      localStorage.setItem("feniMoney", FeniAmount);
      break;
    case "Quotadonation":
      QuotaAmount += donationAmount;
      localStorage.setItem("quotaMoney", QuotaAmount);
      break;
    default:
      alert("Invalid donation ID");
      return;
  }

  totalAmount -= donationAmount;
  localStorage.setItem("totalMoney", totalAmount);

  const donationHistory = JSON.parse(localStorage.getItem("history")) || [];
  const donationDate = new Date().toLocaleDateString();
  let donationPurpose;
  if (donationId === "noakhalidonation") donationPurpose = "Flood at Noakhali, Bangladesh";
  else if (donationId === "Fenidonation") donationPurpose = "Flood Relief in Feni, Bangladesh";
  else donationPurpose = "Aid for Injured in the Quota Movement, Bangladesh";

  donationHistory.push({
    amount: donationAmount,
    reason: donationPurpose,
    date: donationDate,
  });
  localStorage.setItem("history", JSON.stringify(donationHistory));

  updateUI();
  document.getElementById('my_modal_1').showModal()
  donationAmountInput.value = "";
}

document.getElementById("donateNoakhali").addEventListener("submit", function (e) {
  e.preventDefault();
  handleDonationSubmit("noakhalidonation");
});

document.getElementById("donateFeni").addEventListener("submit", function (e) {
  e.preventDefault();
  handleDonationSubmit("Fenidonation");
});

document.getElementById("donateQuota").addEventListener("submit", function (e) {
  e.preventDefault();
  handleDonationSubmit("Quotadonation");
});


