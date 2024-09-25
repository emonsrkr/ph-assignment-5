// ---------------Money amount set up dynamicaly---------------
const totalMoney=document.getElementById('totalMoney')
const NoakhaliMoney=document.getElementById('noakhaliMoney')
const FeniMoney=document.getElementById('feniMoney')
const QuotaMoney=document.getElementById('quotaMoney')

 const totalAmount=localStorage.getItem('totalMoney')
 const NoakhaliAmount=localStorage.getItem('noakhaliMoney')
 const  FeniAmount=localStorage.getItem('feniMoney')
 const QuotaAmount=localStorage.getItem('quotaMoney')
 console.log(totalAmount)
totalMoney.textContent=totalAmount
 
// ----------------history and donate switching ---------------
const donationButton = document.getElementById('donation');
const historyBox=document.getElementById('historyBox')
const historyButton = document.getElementById('history');
const donationHistoryContainer = document.getElementById('DonationHistory');


    donationButton.addEventListener('click', function() {
        // Set a delay of 300 milliseconds before changing the classes
        setTimeout(() => {
            // Remove the bg-white class
            this.classList.remove('bg-white');
            historyButton.classList.remove('btn-warning')
            donationHistoryContainer.innerHTML=`
      <div class="flex items-start gap-5 border-2 px-3 rounded-md py-3 mb-5">
        <img src="./assets/noakhali.png" alt="" />
        <div class="flex-col flex pr-5">
          <div
            class="max-w-36 flex items-center bg-slate-100 gap-2 text-lg py-2 px-3 rounded-md font-bold"
          >
            <img src="./assets/coin.png" alt="" />
            <h1><span id="noakhaliMoney"></span> BDT</h1>
          </div>
          <h1 class="text-xl py-3 font-bold">
            Donate for Flood at Noakhali, Bangladesh
          </h1>
          <p class="text-lg font-thin pb-5">
            The recent floods in Noakhali have caused significant damage to
            homes infrastructure. Your donation will help provide essential
            supplies and to those affected by this disaster. Every contribution,
            big or small, makes difference. Please join us in supporting the
            relief efforts and making a positive impact on the lives of those in
            need.
          </p>
          <form id="donateNoakhali" action="" class="flex flex-col">
            <input
            required=true
            type="number"
            class="border-2 rounded-md py-2 px-3 mt-5"
            placeholder="Donation amount"
            name="Noakhali"
            id="noakhalidonation"
          />
          <input value="Donate Now" type="submit"  class="btn btn-warning my-5"/>
           </form>
        
        </div>
      </div>
      <div class="flex items-start gap-5 border-2 px-3 rounded-md py-3 mb-5">
        <img src="./assets/feni.png" alt="" />
        <div class="flex-col flex pr-5">
          <div
            class="max-w-36 flex items-center bg-slate-100 gap-2 text-lg py-2 px-3 rounded-md font-bold"
          >
            <img src="./assets/coin.png" alt="" />
            <h1><span id="feniMoney"></span> BDT</h1>
          </div>
          <h1 class="text-xl mt-3 py-3 font-bold">
            Donate for Flood Relief in Feni,Bangladesh
          </h1>
          <p class="text-lg font-thin pb-1">
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
          required=true
          type="number"
          class="border-2 rounded-md py-2 px-3 mt-5"
          placeholder="Donation amount"
          name="Feni"
          id="Fenidonation"
        />
        <input value="Donate Now" type="submit"  class="btn btn-warning my-5"/>
         </form>
        </div>
      </div>
      <div class="flex items-start gap-5 border-2 px-3 rounded-md py-3 mb-5">
        <img src="./assets/quota-protest.png" alt="" />
        <div class="flex-col flex pr-5">
          <div
            class="max-w-36 flex items-center bg-slate-100 gap-2 text-lg py-2 px-3 rounded-md font-bold"
          >
            <img src="./assets/coin.png" alt="" />
            <h1><span id="quotaMoney"></span> BDT</h1>
          </div>
          <h1 class="text-xl py-3 font-bold">
            Aid for Injured in the Quota Movement
          </h1>
          <p class="text-lg font-thin py-5">
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
            required=true
            type="number"
            class="border-2 rounded-md py-2 px-3 mt-5"
            placeholder="Donation amount"
            name="Quota"
            id="Quotadonation"
          />
          <input value="Donate Now" type="submit"  class="btn btn-warning my-5"/>
           </form>
          
        </div>
      </div>`
            
            // Add the btn-warning class
            this.classList.add('btn-warning');
            historyButton.classList.add('bg-white')
        }, 300); // 300 milliseconds delay
    });
    historyButton.addEventListener('click', function() {
        // Set a delay of 300 milliseconds before changing the classes
        setTimeout(() => {
            // Remove the bg-white class
            this.classList.remove('bg-white');
            donationButton.classList.remove('btn-warning')
            donationHistoryContainer.innerHTML=` <div class="mx-20" id="historyBox">
      <div  class="bg-white p-5 rounded-md border-2">

        <h1 class=" text-xl font-bold"><span id="donateAmount">96500</span> Taka is donated for <span id="donationPurpose">Feni, Bangladesh</span></h1>
        <p class=" text-lg font-thin">Date: <span id="donationDate">Tue Sep 17 2024 08:39:11 GMT +0600</span> (Bangladesh Standard Time)</p>
      </div>
     </div>`
            // Add the btn-warning class
            this.classList.add('btn-warning');
            donationButton.classList.add('bg-white')
        }, 300); // 300 milliseconds delay
    });
    const feniDonationAmount=document.getElementById('Fenidonation')
    const FenidonationForm=document.getElementById('donateFeni')
    






