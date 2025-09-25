document.addEventListener('DOMContentLoaded', () => {
  const roomNumberInput = document.getElementById('roomNumberInput');
  const generateLinkBtn = document.getElementById('generateLinkBtn');
  const dynamicLink = document.getElementById('dynamicLink');

  // ページ上の要素がすべて存在するか確認
  if (roomNumberInput && generateLinkBtn && dynamicLink) {
    generateLinkBtn.addEventListener('click', () => {
      const roomNumber = roomNumberInput.value.trim();

      if (roomNumber) {
        const baseUrl = "https://attendance.is.it-chiba.ac.jp/attendance/class_room/";
        const newUrl = baseUrl + roomNumber;
        dynamicLink.href = newUrl;
        dynamicLink.textContent = `教室 ${roomNumber} へ`;
        dynamicLink.style.display = 'block';
      } else {
        dynamicLink.style.display = 'none';
      }
    });
  }
});