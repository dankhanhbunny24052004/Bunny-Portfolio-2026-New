const svg = document.querySelector('#eye');
const pupil = document.querySelector('.pupil');

// Kích thước tròng mắt (pupil) và con mắt (eye)
const pupilRadiusX = 16;  // rx của tròng mắt
const pupilRadiusY = 9;   // ry của tròng mắt

const eyeRadiusX = 215 / 2; // Chiều rộng con mắt (svg) chia 2, tương ứng với 215px / 2
const eyeRadiusY = 117 / 2; // Chiều cao con mắt (svg) chia 2, tương ứng với 117px / 2

svg.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    const svgCenterX = rect.left + rect.width / 2;
    const svgCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - svgCenterX;
    const deltaY = e.clientY - svgCenterY;

    // Tính giới hạn phạm vi di chuyển của tròng mắt
    const maxMovementX = eyeRadiusX - pupilRadiusX; // Trừ đi bán kính tròng mắt
    const maxMovementY = eyeRadiusY - pupilRadiusY;

    // Giới hạn di chuyển trong phạm vi con mắt, với điều chỉnh để tròng mắt xuống thấp hơn chút
    const moveX = Math.min(maxMovementX, Math.max(-maxMovementX, deltaX / 8)); 
    const moveY = Math.min(maxMovementY - 2, Math.max(-maxMovementY + 2, deltaY / 8)); // Giảm phạm vi cho chiều dọc

    pupil.setAttribute('transform', `translate(${moveX}, ${moveY})`);
});

svg.addEventListener('mouseleave', () => {
    pupil.setAttribute('transform', 'translate(0, 0)');
});


// Lắng nghe sự kiện click trên hình ảnh o_flower
const oFlower = document.querySelector('.letter img[src="assets/images/o_flower.png"]');

oFlower.addEventListener('click', () => {
    // Thêm hoặc xóa class 'rotate' để bắt đầu hiệu ứng xoay
    oFlower.classList.toggle('rotate');
});

const path = document.querySelector('.cls-1');
console.log(path.getTotalLength()); // In ra tổng chiều dài của path

