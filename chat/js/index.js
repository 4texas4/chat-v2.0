// js/index.js
document.addEventListener('DOMContentLoaded', function () {
  const usernameEl = document.getElementById('username');
  const roomSelect = document.getElementById('roomSelect');
  const customRoomWrap = document.getElementById('customRoomWrap');
  const customRoomInput = document.getElementById('customRoom');
  const joinBtn = document.getElementById('joinBtn');

  // Show/hide custom room input
  roomSelect.addEventListener('change', function () {
    if (roomSelect.value === 'custom') {
      customRoomWrap.style.display = 'block';
    } else {
      customRoomWrap.style.display = 'none';
    }
  });

  function enterRoom() {
    const username = usernameEl.value || '';
    const room = roomSelect.value;
    const customRoom = customRoomInput.value || '';

    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }

    let finalRoom = room;
    if (room === 'custom') {
      if (!customRoom.trim()) {
        alert('Please enter a custom room name');
        return;
      }
      finalRoom = customRoom.trim();
    }

    const url = `room.html?id=${encodeURIComponent(finalRoom)}&username=${encodeURIComponent(username)}`;
    window.location.href = url;
  }

  joinBtn.addEventListener('click', enterRoom);

  // Allow Enter in username field to join
  usernameEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') enterRoom();
  });
});
