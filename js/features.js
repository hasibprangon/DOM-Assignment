document.getElementById('btnDonation').addEventListener('click', function() {
    const setActiveBtn = document.getElementById('btnDonation');
    setActiveBtn.classList.add('bg-[#B4F461]')
    const getDonationSection = document.getElementById('donationSection');
    getDonationSection.classList.remove('hidden');

    // btnHistory
    const setInactiveBtn = document.getElementById('btnHistory');
    setInactiveBtn.classList.remove('bg-[#B4F461]')
    const getHistorySection = document.getElementById('historySection');
    getHistorySection.classList.add('hidden')
});

document.getElementById('btnHistory').addEventListener('click', function() {
    const setActiveBtn = document.getElementById('btnHistory');
    setActiveBtn.classList.add('bg-[#B4F461]')
    const getHistorySection = document.getElementById('historySection');
    getHistorySection.classList.remove('hidden');

    // btnDonation
    const setInactiveBtn = document.getElementById('btnDonation');
    setInactiveBtn.classList.remove('bg-[#B4F461]')
    const getDonationSection = document.getElementById('donationSection');
    getDonationSection.classList.add('hidden');
})