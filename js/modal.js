export function initModal() {
  const profilePillBtn = document.getElementById('profilePillBtn');
  const contactAvatarBtn = document.getElementById('contactAvatarBtn');
  const btnRecruitMission = document.getElementById('btnRecruitMission');
  const btnRecruitCampaign = document.getElementById('btnRecruitCampaign');
  
  const profileModalOverlay = document.getElementById('profileModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const statusBadgePill = document.getElementById('statusBadgePill');

  if (!profileModalOverlay) return;

  const openModal = () => {
    profileModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    profileModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (profilePillBtn) profilePillBtn.addEventListener('click', openModal);
  if (contactAvatarBtn) contactAvatarBtn.addEventListener('click', openModal);
  if (btnRecruitMission) btnRecruitMission.addEventListener('click', openModal);
  if (btnRecruitCampaign) btnRecruitCampaign.addEventListener('click', openModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  profileModalOverlay.addEventListener('click', (e) => {
    if (e.target === profileModalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && profileModalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (statusBadgePill) {
    const statusText = statusBadgePill.querySelector('.status-text');
    if (statusText) {
      statusBadgePill.addEventListener('mouseenter', () => {
        statusText.textContent = 'Available for Hire';
      });
      statusBadgePill.addEventListener('mouseleave', () => {
        statusText.textContent = 'Ready to join Team';
      });
    }
  }
}