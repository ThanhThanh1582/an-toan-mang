/* ==========================================================================
   TIẾT 2 JS ACTION ENGINE
   ========================================================================== */

let currentSlide = 1;
const totalSlides = 24;

const slideTitles = {
  1: "Slide 1: Trạm mở đầu - Bác Sĩ Cộng Đồng",
  2: "Slide 2: Câu hỏi dẫn dắt chính",
  3: "Slide 3: Kết quả lâm sàng cần đạt",
  4: "Slide 4: Sắp xếp bàn làm việc lâm sàng",
  5: "Slide 5: Đếm ngược chuẩn bị",
  6: "Slide 6: 4 Trạm học tập của chiến dịch",
  7: "Slide 7: Phát hiện mầm bệnh quấy rối!",
  8: "Slide 8: Ca bệnh 01 — Bạn Tú",
  9: "Slide 9: Ca bệnh 02 — Bạn Vy",
  10: "Slide 10: Ca bệnh 03 — Bạn Nam",
  11: "Slide 11: Nhận diện bắt nạt mạng",
  12: "Slide 12: Phân công vai trò kíp trực",
  13: "Slide 13: Tra cứu kiến thức từ điển",
  14: "Slide 14: Sơ đồ lối đi an toàn",
  15: "Slide 15: Đối chiếu & Phân loại lâm sàng",
  16: "Slide 16: Hội đồng công bố kết quả",
  17: "Slide 17: Mẫu phác đồ chuẩn y khoa",
  18: "Slide 18: Sản xuất sơ đồ biến hình co giãn",
  19: "Slide 19: Đếm ngược hoạt động nhóm",
  20: "Slide 20: Báo cáo nghiệm thu sản phẩm",
  21: "Slide 21: Tự phản chiếu cá nhân (Reflection)",
  22: "Slide 22: Khởi động kháng thể vững vàng",
  23: "Slide 23: Kích hoạt lá chắn học đường",
  24: "Slide 24: Vinh danh & Đóng ca trực"
};

const slideStages = {
  1: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  2: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  3: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  4: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  5: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  6: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  7: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  8: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  9: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  10: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  11: "TRẠM 1: KHỞI ĐỘNG (ĐO MẦM BỆNH)",
  12: "TRẠM 2: KHÁM LÂM SÀNG (PHÂN LOẠI)",
  13: "TRẠM 2: KHÁM LÂM SÀNG (PHÂN LOẠI)",
  14: "TRẠM 2: KHÁM LÂM SÀNG (PHÂN LOẠI)",
  15: "TRẠM 2: KHÁM LÂM SÀNG (PHÂN LOẠI)",
  16: "TRẠM 2: KHÁM LÂM SÀNG (PHÂN LOẠI)",
  17: "TRẠM 2: KHÁM LÂM SÀNG (PHÂN LOẠI)",
  18: "TRẠM 3: CHẾ TẠO (SẢN XUẤT THẺ GẬP)",
  19: "TRẠM 3: CHẾ TẠO (SẢN XUẤT THẺ GẬP)",
  20: "TRẠM 4: CAM KẾT (KÝ VACCINE MẠNG)",
  21: "TRẠM 4: CAM KẾT (KÝ VACCINE MẠNG)",
  22: "TRẠM 4: CAM KẾT (KÝ VACCINE MẠNG)",
  23: "TRẠM 4: CAM KẾT (KÝ VACCINE MẠNG)",
  24: "TRẠM 4: CAM KẾT (KÝ VACCINE MẠNG)"
};

const teacherGuides = {
  1: {
    objective: "Mở đầu Tiết 2, tạo sự hứng thú và tập trung cho học sinh.",
    time: "2 phút",
    prep: "Thiết bị slide chính, micro.",
    steps: [
      "GV chào lớp, giới thiệu Tiết 2: Chiến dịch Tiêm chủng Vaccine Mạng.",
      "Yêu cầu HS quan sát các mục tiêu bài học hiển thị rõ ràng trên slide.",
      "GV di chuột qua các thẻ mục tiêu để biểu diễn hiệu ứng phát sáng, thu hút HS."
    ]
  },
  2: {
    objective: "Nêu bật Câu hỏi lớn định hướng Tiết 2.",
    time: "1 phút",
    prep: "Typewriter text.",
    steps: [
      "GV giới thiệu câu hỏi dẫn dắt chính.",
      "Cho HS đọc to câu hỏi và lưu ý: Sẽ đi tìm lời giải suốt bài học."
    ]
  },
  3: {
    objective: "Chuyển giao vai trò mới và nhiệm vụ trọng tâm.",
    time: "2 phút",
    prep: "Thẻ lật mục tiêu.",
    steps: [
      "GV giới thiệu nhiệm vụ chiến dịch: Kiến thức, Kỹ năng, Thái độ.",
      "Yêu cầu HS lắng nghe kết quả lâm sàng cần đạt của chiến dịch."
    ]
  },
  4: {
    objective: "Chuẩn bị đầy đủ các đạo cụ y tế trên bàn làm việc.",
    time: "2 phút",
    prep: "HS lấy dải giấy, kéo, màu vẽ và bộ thẻ màu.",
    steps: [
      "GV kiểm tra đạo cụ của từng nhóm kíp trực.",
      "Nhấn ĐÃ CHUẨN BỊ XONG khi hoàn tất."
    ]
  },
  5: {
    objective: "10 giây đếm ngược ổn định kíp trực học tập.",
    time: "1 phút",
    prep: "Đồng hồ đếm ngược 10s.",
    steps: [
      "Bấm bắt đầu đếm ngược 10 giây.",
      "Yêu cầu HS trật tự và sẵn sàng vào vị trí."
    ]
  },
  6: {
    objective: "Xác định lộ trình khám lâm sàng gồm 4 trạm.",
    time: "1.5 phút",
    prep: "Trục chặng ngang phát sáng neon.",
    steps: [
      "GV giới thiệu 4 trạm học tập chính.",
      "Nhấn chuyển slide để bắt đầu Trạm 1."
    ]
  },
  7: {
    objective: "Tạo không khí báo động khẩn cấp tìm mầm bệnh.",
    time: "1 phút",
    prep: "Còi hú xoay màu đỏ.",
    steps: [
      "Âm thanh còi hú vang lên.",
      "GV thông báo 3 ca bệnh học sinh mới nhập viện."
    ]
  },
  8: {
    objective: "Chẩn đoán ca bệnh 1 của bạn Tú.",
    time: "3 phút",
    prep: "Hồ sơ bệnh án chat Messenger.",
    steps: [
      "Đọc triệu chứng của Tú bị tin nhắn ẩn danh công kích.",
      "Yêu cầu HS giơ thẻ chẩn đoán.",
      "GV bấm CHẨN ĐOÁN lật mở thẻ Vàng."
    ]
  },
  9: {
    objective: "Chẩn đoán ca bệnh 2 của bạn Vy.",
    time: "3 phút",
    prep: "Hồ sơ bệnh án Vy (bài đăng Confessions).",
    steps: [
      "Đọc tin đồn ẩn danh vu khống Vy.",
      "HS thảo luận và giơ thẻ.",
      "GV bấm CHẨN ĐOÁN lật mở thẻ Cam."
    ]
  },
  10: {
    objective: "Chẩn đoán ca bệnh 3 của bạn Nam.",
    time: "3 phút",
    prep: "Hồ sơ bệnh án Nam (video TikTok chế giễu).",
    steps: [
      "Đọc triệu chứng Nam bị quay lén bêu rếu.",
      "HS thảo luận và giơ thẻ.",
      "GV bấm CHẨN ĐOÁN lật mở thẻ Đỏ."
    ]
  },
  11: {
    objective: "Tổng kết triệu chứng bắt nạt mạng Cyberbullying.",
    time: "2 phút",
    prep: "Khối thông tin tổng hợp y khoa.",
    steps: [
      "Giải thích khái niệm Bắt nạt mạng.",
      "Đúc rút hậu quả nếu tự ý im lặng hoặc đáp trả."
    ]
  },
  12: {
    objective: "Nhận thử thách 2 và phân công vai trò trong nhóm.",
    time: "2 phút",
    prep: "Minh họa nhân vật chibi.",
    steps: [
      "GV chia vai trò: Trưởng nhóm, Thư ký, Bác sĩ thành viên.",
      "Chuẩn bị bản đồ lộ trình A3."
    ]
  },
  13: {
    objective: "Tra cứu từ điển 5 chủng virus Cyber học đường.",
    time: "3 phút",
    prep: "Tab-switching từ điển y khoa.",
    steps: [
      "GV giới thiệu 5 chủng virus tương ứng 5 ca bệnh của Tiết 1.",
      "HS click chọn từng tab để ôn tập kiến thức."
    ]
  },
  14: {
    objective: "Thực hành phân loại nhanh Kháng thể và Mầm bệnh.",
    time: "3 phút",
    prep: "Game click phân loại neon.",
    steps: [
      "HS bấm chọn các thẻ hành động.",
      "Hệ thống tự động đưa thẻ về đúng lối đi và phản hồi màu sắc."
    ]
  },
  15: {
    objective: "Thảo luận nhóm dán thẻ lộ trình an toàn.",
    time: "6 phút",
    prep: "Đồng hồ đếm ngược 6:00.",
    steps: [
      "Bấm bắt đầu đếm ngược 6 phút.",
      "Các nhóm thảo luận dán thẻ lên sơ đồ A3 thực tế."
    ]
  },
  16: {
    objective: "Hội đồng công bố kết quả chẩn đoán chính thức.",
    time: "3 phút",
    prep: "Bảng click lật mở hệ quả.",
    steps: [
      "GV click từng dòng hành động sai lầm để lật mở hệ quả nguy hiểm.",
      "Phân tích vì sao không được tự giải quyết."
    ]
  },
  17: {
    objective: "Giới thiệu Phác đồ cấp cứu chuẩn 5 bước y khoa.",
    time: "3 phút",
    prep: "Sơ đồ dọc timeline kính mờ.",
    steps: [
      "GV giới thiệu 5 bước cấp cứu an toàn.",
      "HS chạm vào từng bước để hiển thị thông tin phóng to chi tiết."
    ]
  },
  18: {
    objective: "Hướng dẫn kỹ thuật gấp Thẻ gập biến hình Accordion.",
    time: "2 phút",
    prep: "Mockup lật mở accordion ảo.",
    steps: [
      "GV giải thích 3 bước gấp phôi giấy và điền phác đồ.",
      "Bấm xem mô phỏng co giãn accordion."
    ]
  },
  19: {
    objective: "Thi công dải giấy Sơ đồ thẻ gập 5 nếp gấp.",
    time: "9 phút",
    prep: "Countdown 9:00, âm thanh tích tắc.",
    steps: [
      "Kích hoạt 9 phút thi công.",
      "HS tự gấp và trang trí sản phẩm thực tế."
    ]
  },
  20: {
    objective: "Mở đèn spotlight đại diện kíp trực báo cáo sản phẩm.",
    time: "3 phút",
    prep: "Nút Spotlight, làm tối slide.",
    steps: [
      "Đại diện nhóm đứng dậy báo cáo sản phẩm.",
      "GV bấm Spotlight làm tối phần ngoài để HS tập trung vào bục thuyết trình."
    ]
  },
  21: {
    objective: "Viết Nhật ký phản chiếu bác sĩ ở mặt sau thẻ gập.",
    time: "4 phút",
    prep: "Countdown 4:00, nhạc không lời.",
    steps: [
      "Kích hoạt 4 phút đếm ngược và phát nhạc nhẹ.",
      "HS viết nhật ký cá nhân phản tư."
    ]
  },
  22: {
    objective: "Đồng thanh hô vang 3 Nguyên tắc vàng an toàn mạng.",
    time: "2 phút",
    prep: "3 tấm khiên khổng lồ, âm thanh kim loại.",
    steps: [
      "GV yêu cầu cả lớp đứng dậy đồng thanh.",
      "GV click từng tấm khiên phát âm thanh va chạm mạnh mẽ và phóng to chữ."
    ]
  },
  23: {
    objective: "Ký tên cam kết và đóng dấu APPROVED đỏ chói.",
    time: "3 phút",
    prep: "Checkbox cam kết, canvas chữ ký, mộc Approved.",
    steps: [
      "Yêu cầu đại diện nhóm ký tên.",
      "Tích chọn 3 checkbox cam kết để nút ĐÓNG DẤU kích hoạt.",
      "Đóng dấu Approved cộp xuống."
    ]
  },
  24: {
    objective: "Chúc mừng hoàn thành nhiệm vụ và vinh danh kíp trực.",
    time: "2 phút",
    prep: "Ngôi sao vàng lấp lánh, pháo hoa giấy.",
    steps: [
      "Đúc rút bài học và bấm bắn pháo hoa giấy ăn mừng.",
      "Bấm Kết thúc ca trực để đóng bài giảng."
    ]
  }
};

/* ==========================================================================
   WEB AUDIO SOUND ENGINE
   ========================================================================== */
const sound = {
  ctx: null,
  isMuted: false,
  reflectOsc: null,
  reflectInterval: null,
  
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playClick() {
    if (this.isMuted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  },

  playSuccess() {
    if (this.isMuted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
    osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, this.ctx.currentTime + 0.2); // G5
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  },

  playWarning() {
    if (this.isMuted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.setValueAtTime(180, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  },

  playSiren() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const t = now + i * 0.4;
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.linearRampToValueAtTime(1200, t + 0.2);
      osc.frequency.linearRampToValueAtTime(600, t + 0.4);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.05, t + 0.1);
      gain.gain.linearRampToValueAtTime(0.05, t + 0.3);
      gain.gain.linearRampToValueAtTime(0, t + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    }
  },

  playStamp() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const noise = this.ctx.createOscillator(); // Low frequency thud
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 0.2);
  },
  
  playCountdownTick() {
    if (this.isMuted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  },

  playAlarm() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      const t = now + i * 0.25;
      osc.frequency.setValueAtTime(880, t);
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.2);
    }
  },
  
  playMetalShield() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    const freqs = [120, 180, 240, 310, 480];
    freqs.forEach(f => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.6);
    });
  },

  startReflectMusic() {
    if (this.isMuted) return;
    this.init();
    const now = this.ctx.currentTime;
    // Play a relaxing melody loop
    let noteIdx = 0;
    const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 349.23, 329.63]; // C4, D4, E4, F4, G4, A4, F4, E4
    
    this.reflectInterval = setInterval(() => {
      if (this.isMuted) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[noteIdx % notes.length], this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 1.2);
      noteIdx++;
    }, 1500);
  },

  stopReflectMusic() {
    if (this.reflectInterval) {
      clearInterval(this.reflectInterval);
      this.reflectInterval = null;
    }
  }
};

/* ==========================================================================
   NAVIGATION ENGINE
   ========================================================================== */
function navigateToSlide(slideNum) {
  if (slideNum < 1 || slideNum > totalSlides) return;
  sound.playClick();
  
  // Hide active slide
  const activeSlideEl = document.querySelector('.slide.active');
  if (activeSlideEl) activeSlideEl.classList.remove('active');
  
  // Show target slide
  const targetSlideEl = document.getElementById(`slide-${slideNum}`);
  if (targetSlideEl) targetSlideEl.classList.add('active');
  
  currentSlide = slideNum;
  
  // Update left sidebar menu
  const activeNavItem = document.querySelector('.slide-item.active');
  if (activeNavItem) activeNavItem.classList.remove('active');
  const targetNavItem = document.querySelector(`.slide-item[data-slide="${slideNum}"]`);
  if (targetNavItem) targetNavItem.classList.add('active');
  
  // Update stage indicator in topbar
  document.getElementById('current-stage-display').textContent = slideStages[slideNum];
  
  // Run slide specific actions
  initSlideActions(slideNum);
}

function updateContainerGrid() {
  const container = document.querySelector('.app-container');
  if (!container) return;
  
  const leftHidden = document.getElementById('app-sidebar-left').classList.contains('hidden');
  const rightHidden = document.getElementById('app-sidebar-right').classList.contains('hidden');
  
  container.classList.remove('sidebar-collapsed-left', 'sidebar-collapsed-right', 'sidebar-collapsed-both');
  
  if (leftHidden && rightHidden) {
    container.classList.add('sidebar-collapsed-both');
  } else if (leftHidden) {
    container.classList.add('sidebar-collapsed-left');
  } else if (rightHidden) {
    container.classList.add('sidebar-collapsed-right');
  }
}

function toggleLeftSidebar() {
  sound.playClick();
  document.getElementById('app-sidebar-left').classList.toggle('hidden');
  updateContainerGrid();
}

function toggleRightSidebar() {
  sound.playClick();
  document.getElementById('app-sidebar-right').classList.toggle('hidden');
  updateContainerGrid();
}

function navigateNext() {
  if (currentSlide < totalSlides) {
    navigateToSlide(currentSlide + 1);
  }
}

function navigatePrev() {
  if (currentSlide > 1) {
    navigateToSlide(currentSlide - 1);
  }
}

/* ==========================================================================
   SLIDE COMPONENT ACTION ENGINE
   ========================================================================== */
function initSlideActions(slideNum) {
  updateTeacherGuide(slideNum);

  if (slideNum === 2) {
    initS2Typewriter();
  } else if (slideNum === 7) {
    sound.playSiren();
  } else if (slideNum === 13) {
    switchDictTab(1);
  } else if (slideNum === 14) {
    initSortingGame();
  } else if (slideNum === 23) {
    initSignaturePad();
  } else if (slideNum === 24) {
    triggerGraduationConfetti();
  }
}

function updateTeacherGuide(slideNum) {
  const guide = teacherGuides[slideNum];
  const viewport = document.getElementById('lesson-plan-content-viewport');
  if (!guide || !viewport) return;
  
  let stepsHtml = "";
  guide.steps.forEach(step => {
    stepsHtml += `<li>${step}</li>`;
  });
  
  viewport.innerHTML = `
    <div class="guide-panel" style="padding: 15px; text-align: left;">
      <span class="guide-badge-group" style="display:inline-block; font-size:8pt; padding:4px 8px; border-radius:6px; font-weight:800; text-transform:uppercase; margin-bottom:10px;">${slideStages[slideNum]}</span>
      <h3 class="guide-title" style="font-size:12pt; font-weight:900; margin: 0 0 15px; color:#FFF;">${slideTitles[slideNum].substring(9)}</h3>
      
      <div class="guide-section" style="margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px;">
        <h4 style="font-size:10pt; color:#E2E8F0; font-weight:800; margin-bottom:5px;">🎯 MỤC TIÊU:</h4>
        <p style="font-size:9.5pt; color:#94A3B8; margin:0;">${guide.objective}</p>
      </div>

      <div class="guide-section" style="margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px;">
        <h4 style="font-size:10pt; color:#E2E8F0; font-weight:800; margin-bottom:5px;">⏱️ THỜI GIAN & ĐẠO CỤ:</h4>
        <p style="font-size:9.5pt; color:#94A3B8; margin:0;"><strong>Thời gian:</strong> ${guide.time} | <strong>Chuẩn bị:</strong> ${guide.prep}</p>
      </div>

      <div class="guide-section">
        <h4 style="font-size:10pt; color:#E2E8F0; font-weight:800; margin-bottom:5px;">📋 CÁC BƯỚC ĐIỀU HÀNH:</h4>
        <ol style="padding-left:15px; font-size:9.5pt; color:#94A3B8; display:flex; flex-direction:column; gap:6px; margin:0;">
          ${stepsHtml}
        </ol>
      </div>
    </div>
  `;
}

/* Typewriter Slide 2 */
function initS2Typewriter() {
  const text = "Nếu nhiều bạn chưa biết cách ứng phó khi bị quấy rối trên mạng, chúng ta nên giúp cộng đồng thay đổi điều gì?";
  const el = document.getElementById('s2-typewriter-text');
  if (!el) return;
  el.innerHTML = "";
  let idx = 0;
  function type() {
    if (idx < text.length) {
      el.innerHTML += text[idx];
      idx++;
      setTimeout(type, 25);
    }
  }
  type();
}

/* 10s timer slide 5 */
let s5Timer = null;
function startS5Timer() {
  let time = 10;
  const display = document.getElementById('s5-timer-display');
  const btn = document.getElementById('s5-start-timer-btn');
  if (s5Timer) clearInterval(s5Timer);
  btn.disabled = true;
  sound.playClick();
  s5Timer = setInterval(() => {
    time--;
    display.textContent = time + 's';
    if (time > 0) {
      sound.playCountdownTick();
    } else {
      clearInterval(s5Timer);
      display.textContent = "00:00";
      sound.playAlarm();
      display.style.color = '#EF4444';
      display.classList.add('flash-red');
      btn.disabled = false;
    }
  }, 1000);
}

/* Roadmap modal popup slide 6 */
function revealRoadmapPopup(stageNum) {
  sound.playClick();
  const title = ["Trạm 1: Khởi động (Đo mầm bệnh)", "Trạm 2: Khám lâm sàng (Phân loại)", "Trạm 3: Chế tạo (Sản xuất Thẻ gập)", "Trạm 4: Cam kết (Ký Vaccine mạng)"][stageNum - 1];
  const desc = [
    "Khảo sát và chẩn đoán 3 ca bệnh thực tế trực tuyến của học sinh Tú, Vy, Nam để đánh giá mức độ nguy hại tương ứng bộ 3 thẻ màu Vàng - Cam - Đỏ.",
    "Khám bệnh chuyên sâu bằng cách tra cứu từ điển mầm bệnh, phân loại 10 thẻ hành động Đúng/Sai và thống nhất phác đồ 5 bước xử lý mạng đạt chuẩn y khoa.",
    "Bắt tay thiết kế thủ công: gấp dải giấy 5 nếp gấp, vẽ sơ đồ và dán sticker slogan sản phẩm thẻ gập tương tác Accordion hoàn chỉnh.",
    "Viết Nhật ký bác sĩ cá nhân, đồng thanh hô vang 3 Nguyên tắc vàng tự vệ và thực hiện ký cam kết thông qua mộc APPROVED đanh thép của Nova."
  ][stageNum - 1];
  
  document.getElementById('s6-description-box').style.borderLeftColor = ["var(--cyan)", "var(--purple)", "var(--pink)", "var(--mint)"][stageNum - 1];
  document.getElementById('s6-description-text').innerHTML = `<strong>${title}:</strong> ${desc}`;
}

/* Case diagnoses Slides 8, 9, 10 */
function revealDiagnosis(caseNum) {
  sound.playSuccess();
  const btn = document.getElementById(`btn-diagnose-${caseNum}`);
  if (btn) btn.style.display = 'none';
  const card = document.getElementById(`diagnosis-card-${caseNum}`);
  if (card) card.classList.remove('hidden');
}

/* Dict tabs Slide 13 */
const dictData = {
  1: {
    title: "Chủng 1: Bắt nạt bằng lời nói (Ca bạn An)",
    text: "Sử dụng tin nhắn, bình luận thô tục công kích trực tiếp, chế giễu danh dự, ngoại hình hoặc đe dọa bạo lực trên mạng xã hội."
  },
  2: {
    title: "Chủng 2: Lan truyền tin đồn sai lệch (Ca bạn Nhi)",
    text: "Tự ý đăng tải, chia sẻ các tin đồn vu khống vô căn cứ ẩn danh lên các nhóm diễn đàn công khai nhằm bôi nhọ, hạ bệ uy tín nạn nhân."
  },
  3: {
    title: "Chủng 3: Xâm phạm quyền riêng tư (Ca bạn Minh)",
    text: "Chụp lén, quay trộm hình ảnh cá nhân không được đồng ý rồi phát tán chế ảnh bêu rếu công khai hoặc đe dọa chia sẻ thông tin mật."
  },
  4: {
    title: "Chủng 4: Tẩy chay trực tuyến (Ca bạn Linh)",
    text: "Kêu gọi, lập nhóm kích động tẩy chay, cô lập bạn bè ra khỏi các nhóm học tập, thảo luận trực tuyến tập thể."
  },
  5: {
    title: "Chủng 5: Giả mạo danh tính (Ca bạn Bảo)",
    text: "Lập các tài khoản ảo giả mạo hình ảnh, tên tuổi nạn nhân để nhắn tin quấy rối người khác hoặc phá hoại các mối quan hệ xã hội."
  }
};
function switchDictTab(tabNum) {
  sound.playClick();
  document.querySelectorAll('.btn-dict-tab').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-dict-tab-${tabNum}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  const data = dictData[tabNum];
  document.getElementById('dict-content-title').textContent = data.title;
  document.getElementById('dict-content-text').textContent = data.text;
}

/* Sorting Game Slide 14 */
const sortingCards = [
  { id: 'sc1', text: '🧘 Giữ bình tĩnh, rời màn hình', type: 'safe' },
  { id: 'sc2', text: '📸 Chụp ảnh lưu giữ bằng chứng', type: 'safe' },
  { id: 'sc3', text: '🚫 Chặn & Báo cáo tài khoản xấu', type: 'safe' },
  { id: 'sc4', text: '👪 Tìm người lớn đáng tin cậy giúp', type: 'safe' },
  { id: 'sc5', text: '⚽ Hoạt động thể chất tích cực', type: 'safe' },
  { id: 'sc6', text: '🤫 Im lặng chịu đựng một mình', type: 'danger' },
  { id: 'sc7', text: '🤬 Nhắn tin trả đũa thô tục lại', type: 'danger' },
  { id: 'sc8', text: '😭 Tự trách và oán hận bản thân', type: 'danger' },
  { id: 'sc9', text: '📢 Rủ bạn bè lập nhóm chửi bới', type: 'danger' },
  { id: 'sc10', text: '💸 Làm theo các yêu cầu của kẻ xấu', type: 'danger' }
];

function initSortingGame() {
  const bank = document.getElementById('sorting-game-bank');
  const safeDz = document.getElementById('lane-safe-dropzone');
  const dangerDz = document.getElementById('lane-danger-dropzone');
  if (!bank) return;
  
  bank.innerHTML = "";
  safeDz.innerHTML = "";
  dangerDz.innerHTML = "";
  
  // Shuffle cards
  const shuffled = [...sortingCards].sort(() => Math.random() - 0.5);
  shuffled.forEach(c => {
    const cardEl = document.createElement('div');
    cardEl.className = "sorting-draggable-card";
    cardEl.id = c.id;
    cardEl.textContent = c.text;
    cardEl.style.cssText = "background:#FFF; padding:10px; border-radius:8px; border:1px solid rgba(15,23,42,0.1); cursor:pointer; font-size:9.5pt; font-weight:700; transition:all 0.3s; text-align:left;";
    cardEl.onclick = () => handleCardClassify(c.id, c.type);
    bank.appendChild(cardEl);
  });
}

function handleCardClassify(cardId, correctType) {
  const cardEl = document.getElementById(cardId);
  if (!cardEl) return;
  
  if (correctType === 'safe') {
    sound.playSuccess();
    cardEl.style.borderColor = "#10B981";
    cardEl.style.boxShadow = "0 0 10px rgba(16,185,129,0.2)";
    document.getElementById('lane-safe-dropzone').appendChild(cardEl);
  } else {
    sound.playWarning();
    cardEl.style.borderColor = "#EF4444";
    cardEl.style.boxShadow = "0 0 10px rgba(239,68,68,0.2)";
    document.getElementById('lane-danger-dropzone').appendChild(cardEl);
  }
  cardEl.onclick = null; // Disable future click
}

/* Discussion timer Slide 15 */
let s15Timer = null;
function startS15Timer() {
  let time = 360;
  const display = document.getElementById('s15-timer-display');
  const btn = document.getElementById('s15-start-timer-btn');
  if (s15Timer) clearInterval(s15Timer);
  btn.disabled = true;
  sound.playClick();
  s15Timer = setInterval(() => {
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    if (time > 0) {
      if (time <= 10) sound.playCountdownTick();
    } else {
      clearInterval(s15Timer);
      sound.playAlarm();
      display.style.color = '#EF4444';
      btn.disabled = false;
    }
  }, 1000);
}
function pauseS15Timer() {
  if (s15Timer) clearInterval(s15Timer);
  document.getElementById('s15-start-timer-btn').disabled = false;
  sound.playClick();
}
function resetS15Timer() {
  if (s15Timer) clearInterval(s15Timer);
  document.getElementById('s15-timer-display').textContent = "06:00";
  document.getElementById('s15-timer-display').style.color = 'var(--cyan)';
  document.getElementById('s15-start-timer-btn').disabled = false;
  sound.playClick();
}

/* Consequence reveal Slide 16 */
function revealConsequence(rowNum) {
  sound.playClick();
  const text = document.getElementById(`consequence-${rowNum}`);
  if (text) text.classList.remove('hidden');
}

/* Phác đồ 5 bước Slide 17 */
const stepExplanations = {
  1: "🧘 BƯỚC 1: GIỮ BÌNH TĨNH — Rời màn hình ngay lập tức, hít thở sâu để hạ nhịp tim kích động. Tuyệt đối không nhắn tin đáp trả lại kẻ bắt nạt.",
  2: "📸 BƯỚC 2: LƯU BẰNG CHỨNG — Chụp màn hình toàn bộ tin nhắn, tài khoản gửi tin, bài đăng công kích để làm bằng chứng pháp lý sạch phục vụ hội chẩn.",
  3: "🚫 BƯỚC 3: CHẶN & BÁO CÁO — Chặn tài khoản quấy rối để ngăn ngừa lây lan virus toxic. Gửi báo cáo xấu bài đăng đó lên quản trị viên mạng xã hội.",
  4: "👪 BƯỚC 4: TÌM NGƯỜI LỚN — Chia sẻ ngay câu chuyện với bố mẹ, thầy cô giáo đáng tin cậy để nhận trợ giúp tư vấn tâm lý và can thiệp trường học.",
  5: "⚽ BƯỚC 5: HÀNH ĐỘNG TỐT — Tham gia các câu lạc bộ thể thao, hoạt động trực tiếp vui tươi cùng bạn bè để giải phóng năng lượng tích cực."
};
function focusStep(stepNum) {
  sound.playClick();
  document.querySelectorAll('.phacdo-step-card').forEach((c, idx) => {
    if (idx + 1 === stepNum) {
      c.style.transform = "scale(1.08) translateY(-5px)";
      c.style.borderColor = "var(--cyan)";
      c.style.boxShadow = "0 8px 20px var(--cyan-glow)";
    } else {
      c.style.transform = "scale(1)";
      c.style.borderColor = "rgba(15,23,42,0.08)";
      c.style.boxShadow = "none";
    }
  });
  
  const colors = ["var(--cyan)", "var(--purple)", "var(--amber)", "var(--pink)", "var(--mint)"];
  document.getElementById('step-detail-card').style.borderLeftColor = colors[stepNum - 1];
  document.getElementById('step-detail-text').textContent = stepExplanations[stepNum];
}

/* Accordion fold simulation Slide 18 */
function toggleAccordionDemo(el) {
  sound.playClick();
  el.classList.toggle('expanded');
}

/* 9 min timer Slide 19 */
let s19Timer = null;
function startS19Timer() {
  let time = 540;
  const display = document.getElementById('s19-timer-display');
  const btn = document.getElementById('s19-start-timer-btn');
  if (s19Timer) clearInterval(s19Timer);
  btn.disabled = true;
  sound.playClick();
  s19Timer = setInterval(() => {
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    if (time > 0) {
      if (time <= 10) sound.playCountdownTick();
    } else {
      clearInterval(s19Timer);
      sound.playAlarm();
      display.style.color = '#EF4444';
      btn.disabled = false;
    }
  }, 1000);
}
function pauseS19Timer() {
  if (s19Timer) clearInterval(s19Timer);
  document.getElementById('s19-start-timer-btn').disabled = false;
  sound.playClick();
}
function resetS19Timer() {
  if (s19Timer) clearInterval(s19Timer);
  document.getElementById('s19-timer-display').textContent = "09:00";
  document.getElementById('s19-timer-display').style.color = 'var(--cyan)';
  document.getElementById('s19-start-timer-btn').disabled = false;
  sound.playClick();
}

/* Spotlight Slide 20 */
function toggleSpotlight() {
  sound.playClick();
  const overlay = document.getElementById('spotlight-dark-overlay');
  const podium = document.getElementById('presenter-podium');
  const btn = document.getElementById('btn-spotlight-toggle');
  
  overlay.classList.toggle('active');
  podium.classList.toggle('spotlight-highlight');
  
  if (overlay.classList.contains('active')) {
    btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> TẮT ĐÈN SPOTLIGHT`;
    btn.style.background = "#475569";
  } else {
    btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> BẬT ĐÈN SPOTLIGHT`;
    btn.style.background = "var(--purple)";
  }
}

/* 4 min timer Slide 21 */
let s21Timer = null;
function startS21Timer() {
  let time = 240;
  const display = document.getElementById('s21-timer-display');
  const btn = document.getElementById('s21-start-timer-btn');
  if (s21Timer) clearInterval(s21Timer);
  btn.disabled = true;
  sound.playClick();
  sound.startReflectMusic();
  s21Timer = setInterval(() => {
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    if (time > 0) {
      if (time <= 10) sound.playCountdownTick();
    } else {
      clearInterval(s21Timer);
      sound.stopReflectMusic();
      sound.playAlarm();
      display.style.color = '#EF4444';
      btn.disabled = false;
    }
  }, 1000);
}
function pauseS21Timer() {
  if (s21Timer) clearInterval(s21Timer);
  sound.stopReflectMusic();
  document.getElementById('s21-start-timer-btn').disabled = false;
  sound.playClick();
}
function resetS21Timer() {
  if (s21Timer) clearInterval(s21Timer);
  sound.stopReflectMusic();
  document.getElementById('s21-timer-display').textContent = "04:00";
  document.getElementById('s21-timer-display').style.color = 'var(--cyan)';
  document.getElementById('s21-start-timer-btn').disabled = false;
  sound.playClick();
}

/* 3 Golden Shields Slide 22 */
function clickGoldenShield(shieldNum) {
  sound.playMetalShield();
  document.querySelectorAll('.shield-card').forEach((c, idx) => {
    if (idx + 1 === shieldNum) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
}

/* Signature & Stamp APPROVED Slide 23 */
let sigCanvas, sigCtx;
let isDrawing = false;

function initSignaturePad() {
  sigCanvas = document.getElementById('sig-pad-canvas');
  if (!sigCanvas) return;
  sigCtx = sigCanvas.getContext('2d');
  
  // Set draw lines style
  sigCtx.strokeStyle = "#2563EB";
  sigCtx.lineWidth = 3;
  sigCtx.lineCap = "round";
  
  // Event listeners
  sigCanvas.addEventListener('mousedown', startDrawing);
  sigCanvas.addEventListener('mousemove', draw);
  sigCanvas.addEventListener('mouseup', stopDrawing);
  sigCanvas.addEventListener('mouseleave', stopDrawing);
  
  sigCanvas.addEventListener('touchstart', startDrawingMobile, { passive: false });
  sigCanvas.addEventListener('touchmove', drawMobile, { passive: false });
  sigCanvas.addEventListener('touchend', stopDrawing);
}

function startDrawing(e) {
  isDrawing = true;
  sound.init();
  const coords = getSigCanvasCoords(e);
  sigCtx.beginPath();
  sigCtx.moveTo(coords.x, coords.y);
}
function draw(e) {
  if (!isDrawing) return;
  const coords = getSigCanvasCoords(e);
  sigCtx.lineTo(coords.x, coords.y);
  sigCtx.stroke();
}
function stopDrawing() {
  isDrawing = false;
}
function getSigCanvasCoords(e) {
  const rect = sigCanvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function startDrawingMobile(e) {
  e.preventDefault();
  isDrawing = true;
  sound.init();
  const rect = sigCanvas.getBoundingClientRect();
  const touch = e.touches[0];
  sigCtx.beginPath();
  sigCtx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
}
function drawMobile(e) {
  e.preventDefault();
  if (!isDrawing) return;
  const rect = sigCanvas.getBoundingClientRect();
  const touch = e.touches[0];
  sigCtx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
  sigCtx.stroke();
}

function clearSignatureCanvas() {
  sound.playClick();
  if (sigCtx && sigCanvas) {
    sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
  }
}

function togglePledgeCheckbox() {
  sound.playClick();
  const checkboxes = document.querySelectorAll('.pledge-checkbox');
  let allChecked = true;
  checkboxes.forEach(c => {
    if (!c.checked) allChecked = false;
  });
  
  const stampBtn = document.getElementById('btn-stamp-pledge');
  if (stampBtn) stampBtn.disabled = !allChecked;
}

function performPledgeStamping() {
  sound.playStamp();
  const overlay = document.getElementById('pledge-stamp-approved-overlay');
  overlay.classList.remove('hidden');
  
  // Stamp animation effect
  overlay.style.opacity = '1';
  overlay.style.transform = 'scale(1.2) rotate(-15deg)';
  
  // Vibration logic if mobile
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
}

/* Graduation Confetti Loop Slide 24 */
let confettiCanvas, confettiCtx;
let confettiActive = false;
let particles = [];

function triggerGraduationConfetti() {
  sound.playSuccess();
  confettiCanvas = document.getElementById('graduation-confetti-canvas');
  if (!confettiCanvas) return;
  confettiCtx = confettiCanvas.getContext('2d');
  
  resizeConfettiCanvas();
  window.addEventListener('resize', resizeConfettiCanvas);
  
  confettiActive = true;
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCanvas.height,
      color: ["#38BDF8", "#F472B6", "#34D399", "#FB7185", "#FBBF24"][Math.floor(Math.random() * 5)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }
  
  requestAnimationFrame(confettiFrame);
}

function resizeConfettiCanvas() {
  if (confettiCanvas) {
    confettiCanvas.width = confettiCanvas.parentElement.clientWidth;
    confettiCanvas.height = confettiCanvas.parentElement.clientHeight;
  }
}

function confettiFrame() {
  if (!confettiActive || !confettiCtx) return;
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  
  particles.forEach(p => {
    p.tiltAngle += p.tiltAngleIncremental;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.x += Math.sin(p.tiltAngle);
    p.tilt = Math.sin(p.tiltAngle - p.r / 2) * 5;
    
    confettiCtx.beginPath();
    confettiCtx.lineWidth = p.r;
    confettiCtx.strokeStyle = p.color;
    confettiCtx.moveTo(p.x + p.tilt + p.r / 2, p.y);
    confettiCtx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
    confettiCtx.stroke();
    
    if (p.y > confettiCanvas.height) {
      p.y = -20;
      p.x = Math.random() * confettiCanvas.width;
    }
  });
  
  requestAnimationFrame(confettiFrame);
}

function triggerCongratsFireworks() {
  triggerGraduationConfetti();
}

/* ==========================================================================
   WIDGETS & SIDEBAR INTERACTIVE TRIGGERS
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  // Navigation sidebar items trigger
  document.querySelectorAll('.slide-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetSlide = parseInt(item.getAttribute('data-slide'));
      navigateToSlide(targetSlide);
    });
  });

  // Sound Engine activation via click anywhere (audio context browser policy)
  document.addEventListener('click', () => sound.init(), { once: true });
  document.addEventListener('touchstart', () => sound.init(), { once: true });

  // Sound toggle button click
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      sound.isMuted = !sound.isMuted;
      if (sound.isMuted) {
        soundBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
        sound.stopReflectMusic();
      } else {
        soundBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
      }
    });
  }

  // Sidebar toggle left
  const sidebarBtn = document.getElementById('btn-toggle-left-sidebar');
  if (sidebarBtn) {
    sidebarBtn.addEventListener('click', toggleLeftSidebar);
  }

  // Sidebar toggle right (Lesson plan)
  const rightSidebarBtn = document.getElementById('btn-toggle-right-sidebar');
  if (rightSidebarBtn) {
    rightSidebarBtn.addEventListener('click', toggleRightSidebar);
  }

  // Fullscreen toggle
  const fsBtn = document.getElementById('btn-toggle-fullscreen');
  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
          fsBtn.innerHTML = `<i class="fa-solid fa-compress"></i>`;
        });
      } else {
        document.exitFullscreen().then(() => {
          fsBtn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
        });
      }
    });
  }

  // Prevent wrapping in selected words
  preventCompoundWordWrapping();

  // Load first slide guide
  navigateToSlide(1);
});

function preventCompoundWordWrapping() {
  const terms = [
    "Bác sĩ Lâm sàng", "Bác sĩ Cộng đồng", "Bắt nạt mạng", "Tin đồn sai lệch", "Xâm phạm quyền riêng tư",
    "Tẩy chay trực tuyến", "Giả mạo danh tính", "Lưu giữ bằng chứng", "Chặn và báo cáo",
    "Tìm sự giúp đỡ", "Hoạt động tích cực", "Không tự trách bản thân", "Không đáp trả kẻ xấu",
    "Không im lặng chịu đựng", " APPROVED ", "Thẻ gập biến hình", "Chiến dịch Tiêm chủng", "Vaccine Mạng"
  ];
  const walker = document.createTreeWalker(
    document.getElementById('app-slides-viewport') || document.body,
    NodeFilter.SHOW_TEXT,
    null
  );
  let textNode;
  while (textNode = walker.nextNode()) {
    let content = textNode.nodeValue;
    let modified = false;
    terms.forEach(term => {
      if (content.includes(term)) {
        const regex = new RegExp(term, 'g');
        content = content.replace(regex, term.replace(/ /g, '\u00A0'));
        modified = true;
      }
    });
    if (modified) {
      textNode.nodeValue = content;
    }
  }
}

/* ==========================================================================
   KEYBOARD ARROW & CLICKER NAVIGATION ENGINE (← / → / PageUp / PageDown)
   ========================================================================== */
window.addEventListener('keydown', (e) => {
  // Ignore keypresses inside inputs, textareas, or editable elements
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
    return;
  }
  
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    navigateNext();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    navigatePrev();
  }
});
