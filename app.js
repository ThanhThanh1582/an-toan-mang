// ==========================================================================
// AUDIO ENGINE (Web Audio API Synthesizer)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (this.muted) return;
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
  }

  playSuccess() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 Major
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.06, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  }

  playSiren() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, now);
    osc.frequency.linearRampToValueAtTime(700, now + 0.25);
    osc.frequency.linearRampToValueAtTime(350, now + 0.5);
    osc.frequency.linearRampToValueAtTime(700, now + 0.75);
    osc.frequency.linearRampToValueAtTime(350, now + 1.0);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 1.2);
  }

  playECGBeep() {
    if (this.muted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.13);
  }

  playCameraFlash() {
    if (this.muted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(500, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1800, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }

  playShatter() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(200, now);
    osc1.frequency.linearRampToValueAtTime(10, now + 0.3);
    gain1.gain.setValueAtTime(0.1, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start();
    osc1.stop(now + 0.32);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(3000, now);
    gain2.gain.setValueAtTime(0.06, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start();
    osc2.stop(now + 0.1);
  }

  playRipple() {
    if (this.muted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.42);
  }

  playStamp() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(10, now + 0.18);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 0.2);
  }

  playError() {
    if (this.muted) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }
}

const sound = new SoundEngine();

// ==========================================================================
// NAVIGATION & PRESENTATION MANAGER
// ==========================================================================
let currentSlide = 1;
const totalSlides = 30;

const slideTitles = {
  1: "P0-01 Welcome Screen",
  2: "P0-02 Big Question",
  3: "P0-03 Role Introduction",
  4: "Stage 1 Introduction",
  5: "Slide 1.1 Ca bệnh Su và Kem",
  6: "Slide 1.2 Chuẩn bị lập đội nhí",
  7: "Slide 1.3 How To: Nghiên cứu bệnh án",
  8: "Slide 1.4 Bệnh án Su và Kem (Dossier 1 & 2)",
  9: "Slide 1.5 Kết quả lập đội & Transition",
  10: "Slide 2.1 Quái vật Virus Mạng",
  11: "Slide 2.2 Chuẩn bị hội chẩn",
  12: "Slide 2.3 How To: Bút dạ neon",
  13: "Slide 2.4 Bệnh án Kem và Su (Dossier 3, 4, 5)",
  14: "Slide 2.5 Trình bày & Game tìm quái vật",
  15: "Stage 2 Introduction",
  16: "Slide 3.1 Ống nghiệm phác đồ",
  17: "Slide 3.2 Chuẩn bị kê đơn",
  18: "Slide 3.3 How To: Thảo luận phác đồ",
  19: "Slide 3.4 Game Kéo thả ống nghiệm",
  20: "Slide 3.5 Tổng kết phác đồ chuẩn",
  21: "Slide 4.1 Đấu trường phản xạ sơ cứu",
  22: "Slide 4.2 Chuẩn bị vận động",
  23: "Slide 4.3 How To: Kế hoạch phản xạ",
  24: "Slide 4.4 Game Diễn tập phản xạ y khoa",
  25: "Slide 4.5 Kết quả phản xạ y khoa",
  26: "Slide 5.1 Cây miễn dịch & Superhero",
  27: "Slide 5.2 END-01 Kiến thức cốt lõi",
  28: "Slide 5.3 END-02 & END-03 Revisit Big Question",
  29: "Slide 5.4 END-04 Phản tư y khoa",
  30: "Slide 5.5 END-05 Tuyên thệ & Lời cam kết"
};

const slideStages = {
  1: "PHẦN MỞ ĐẦU", 2: "PHẦN MỞ ĐẦU", 3: "PHẦN MỞ ĐẦU",
  4: "GIAI ĐOẠN 1", 5: "GIAI ĐOẠN 1", 6: "GIAI ĐOẠN 1", 7: "GIAI ĐOẠN 1", 8: "GIAI ĐOẠN 1", 9: "GIAI ĐOẠN 1",
  10: "GIAI ĐOẠN 1", 11: "GIAI ĐOẠN 1", 12: "GIAI ĐOẠN 1", 13: "GIAI ĐOẠN 1", 14: "GIAI ĐOẠN 1",
  15: "GIAI ĐOẠN 2", 16: "GIAI ĐOẠN 2", 17: "GIAI ĐOẠN 2", 18: "GIAI ĐOẠN 2", 19: "GIAI ĐOẠN 2", 20: "GIAI ĐOẠN 2",
  21: "GIAI ĐOẠN 2", 22: "GIAI ĐOẠN 2", 23: "GIAI ĐOẠN 2", 24: "GIAI ĐOẠN 2", 25: "GIAI ĐOẠN 2",
  26: "TỔNG KẾT & CAM KẾT", 27: "TỔNG KẾT & CAM KẾT", 28: "TỔNG KẾT & CAM KẾT", 29: "TỔNG KẾT & CAM KẾT", 30: "TỔNG KẾT & CAM KẾT"
};

function updateHeaderBadge(slideNum) {
  const roleBadge = document.getElementById('header-role-badge');
  if (roleBadge) {
    if (slideNum >= 1 && slideNum <= 3) roleBadge.innerText = "Bác sĩ Lâm sàng";
    else if (slideNum >= 4 && slideNum <= 14) roleBadge.innerText = "Bác sĩ Thực tập";
    else if (slideNum >= 15 && slideNum <= 20) roleBadge.innerText = "Bác sĩ Nội trú";
    else if (slideNum >= 21 && slideNum <= 25) roleBadge.innerText = "Bác sĩ chính";
    else if (slideNum >= 26 && slideNum <= 30) roleBadge.innerText = "Bác sĩ chuyên khoa";
  }
}

function navigateToSlide(slideNum) {
  if (slideNum < 1 || slideNum > totalSlides) return;
  
  // Clean up current active tasks/loops
  stopSpeedReflexGame();

  // Hide active slide
  const activeSlideEl = document.querySelector('.slide.active');
  if (activeSlideEl) activeSlideEl.classList.remove('active');

  // Show new slide
  const targetSlideEl = document.getElementById(`slide-${slideNum}`);
  if (targetSlideEl) targetSlideEl.classList.add('active');

  currentSlide = slideNum;

  // Update top bar labels
  document.getElementById('slide-title-text').innerText = slideTitles[slideNum];
  document.getElementById('slide-counter-text').innerText = `${slideNum} / ${totalSlides}`;
  document.getElementById('current-stage-display').innerText = slideStages[slideNum];
  updateHeaderBadge(slideNum);

  // Update sidebar navigator highlight
  const activeNavItem = document.querySelector('.nav-item.active');
  if (activeNavItem) activeNavItem.classList.remove('active');
  
  const targetNavItem = document.querySelector(`.nav-item[data-slide="${slideNum}"]`);
  if (targetNavItem) {
    targetNavItem.classList.add('active');
    targetNavItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Trigger Slide Specific Initializations
  initSlideActions(slideNum);

  // Correct word breaks
  preventCompoundWordWrapping();
}

function initSlideActions(slideNum) {
  updateTeacherGuide(slideNum);

  if (slideNum === 14) {
    initMatcherGame();
  } else if (slideNum === 19) {
    initTubesGame();
  } else if (slideNum === 24) {
    initSpeedReflexGame();
  } else if (slideNum === 30) {
    initStampingCommitments();
  }
}

// ==========================================================================
// TEACHER GUIDE DICTIONARY & SYNC
// ==========================================================================
const teacherGuides = {
  1: {
    objective: "Thu hút sự tập trung, nhập vai bác sĩ bảo mật.",
    time: "3 phút",
    prep: "Thiết bị hiển thị slide chính, còi báo động khẩn cấp.",
    steps: [
      "GV bắt đầu giới thiệu bài học: Phác đồ khắc phục bôi nhọ quấy rối trên mạng.",
      "Nhấn còi báo để kích thích sự tập trung.",
      "Tuyên bố vai trò: Bác sĩ an ninh mạng."
    ]
  },
  2: {
    objective: "Gợi mở mâu thuẫn nhận thức bằng câu hỏi cốt lõi.",
    time: "2 phút",
    prep: "Ảnh minh họa cảm xúc buồn bã của học sinh trên màn hình.",
    steps: [
      "Yêu cầu cả lớp suy ngẫm Câu hỏi lớn của bài học.",
      "Mời 1-2 học sinh dự đoán hành động sơ cứu khẩn cấp đầu tiên."
    ]
  },
  3: {
    objective: "Đặt quy chế hoạt động y khoa lâm sàng cho học sinh.",
    time: "2 phút",
    prep: "Mô hình ID Card bác sĩ mạng thực tập.",
    steps: [
      "Giải thích cấu trúc: nhận bệnh án, chẩn đoán, hội chẩn, kê đơn sơ cứu.",
      "Kêu gọi tinh thần trách nhiệm y đức bảo vệ bạn bè."
    ]
  },
  4: {
    objective: "Mở đầu Giai đoạn 1 khám bệnh.",
    time: "1 phút",
    prep: "Biểu đồ điện tử ma trận phòng họp tương lai.",
    steps: [
      "Tuyên bố phòng chẩn đoán lâm sàng mở cửa.",
      "Yêu cầu học sinh chuẩn bị ống nghe số hóa."
    ]
  },
  5: {
    objective: "Mô tả biểu hiện của bệnh nhân Su và Kem.",
    time: "2 phút",
    prep: "Hình ảnh Su ôm gối khóc, Kem bốc cháy laptop.",
    steps: [
      "Yêu cầu học sinh mô tả cảm xúc của hai bạn Su và Kem trên slide.",
      "Giới thiệu yêu cầu: Tìm ra nguyên nhân khiến 2 bạn khó chịu."
    ]
  },
  6: {
    objective: "Lập các tổ nhóm bác sĩ chuyên khoa.",
    time: "2 phút",
    prep: "Chia nhóm 4 học sinh, chuẩn bị giấy bút.",
    steps: [
      "Cho học sinh ổn định vị trí theo nhóm 4 bác sĩ thực tập.",
      "Kiểm tra trang bị giấy bút để ghi chép hồ sơ dịch tễ."
    ]
  },
  7: {
    objective: "Cách thức tiến hành chẩn đoán lâm sàng nhóm.",
    time: "2 phút",
    prep: "Bộ quy tắc các bước thực hiện.",
    steps: [
      "Bước 1: Quan sát gọi tên cảm xúc.",
      "Bước 2: Đọc hồ sơ bệnh án.",
      "Bước 3: Thảo luận nhóm tìm nguyên nhân. (Đếm ngược 5 phút)."
    ]
  },
  8: {
    objective: "Cung cấp chi tiết triệu chứng lâm sàng 1 & 2.",
    time: "5 phút",
    prep: "Mẫu hồ sơ bệnh án số 01 & 02 của Su và Kem.",
    steps: [
      "Yêu cầu các nhóm đọc kỹ tin nhắn Messenger đe dọa (Su) và các tin đồn nhóm Facebook, video bôi nhọ (Kem).",
      "Kích hoạt bộ đếm thời gian 5 phút thảo luận nhóm."
    ]
  },
  9: {
    objective: "Kiểm tra sự ổn định và chốt thông điệp hợp tác.",
    time: "2 phút",
    prep: "Biểu đồ kết quả lập đội.",
    steps: [
      "GV xác nhận: 100% học sinh đã ổn định nhóm.",
      "Nêu thông điệp: Bác sĩ giỏi bắt đầu bằng đội ngũ ăn ý."
    ]
  },
  10: {
    objective: "Giới thiệu 5 nhóm triệu chứng Virus mạng độc hại.",
    time: "3 phút",
    prep: "Hình ảnh vẽ 5 quái vật Virus mạng nhiều màu sắc.",
    steps: [
      "Giới thiệu 5 quái vật dịch tễ mạng: Bắt nạt (Đỏ), Lan tin giả (Vàng), Xâm phạm riêng tư (Tím), Tẩy chay (Xám), Giả mạo (Hồng).",
      "Yêu cầu gạch chân từ khóa triệu chứng trên hồ sơ."
    ]
  },
  11: {
    objective: "Chuẩn bị thảo luận lâm sàng đợt 2.",
    time: "2 phút",
    prep: "Hồ sơ bệnh án số 03, 04, 05 và bút dạ.",
    steps: [
      "Phát hồ sơ và hướng dẫn dùng bút dạ neon khoanh vùng từ khóa."
    ]
  },
  12: {
    objective: "Nêu 3 bước tiến hành chẩn đoán virus chuẩn khoa.",
    time: "2 phút",
    prep: "Các bước hướng dẫn.",
    steps: [
      "Hướng dẫn học sinh đọc kỹ, gạch chân từ khóa, đối chiếu virus gây bệnh."
    ]
  },
  13: {
    objective: "Cung cấp chi tiết triệu chứng lâm sàng 3, 4, 5.",
    time: "5 phút",
    prep: "Tập hồ sơ bệnh án số 03, 04, 05.",
    steps: [
      "Kích hoạt bộ đếm thời gian 5 phút thảo luận nhóm đợt 2.",
      "Yêu cầu học sinh chẩn đoán kỹ Kem bị chia sẻ ảnh TikTok (03), Kem bị kick khỏi group lớp (04), và Su bị giả mạo nick chat (05)."
    ]
  },
  14: {
    objective: "Hội chẩn đồng bộ và chơi trò chơi đoán Virus.",
    time: "5 phút",
    prep: "Game ghép cặp quái vật trên slide.",
    steps: [
      "Chọn các nhóm lên báo cáo chẩn đoán theo mẫu câu chuẩn y khoa.",
      "Cho HS nhấp chọn Hồ sơ và chọn quái vật tương ứng để xem đáp án pop-up phát sáng."
    ]
  },
  15: {
    objective: "Mở đầu Giai đoạn 2: Kê đơn phác đồ sơ cứu.",
    time: "1 phút",
    prep: "Giao diện Vali cứu thương 3D.",
    steps: [
      "Giới thiệu hộp cứu trợ y khoa cầu vồng công nghệ chứa 5 bước sơ cứu."
    ]
  },
  16: {
    objective: "Nêu yêu cầu thiết kế Phác đồ 5 bước thần kỳ.",
    time: "2 phút",
    prep: "Hình ảnh 5 ống nghiệm rực rỡ và sticker bong bóng bị xáo trộn.",
    steps: [
      "GV hướng dẫn nhiệm vụ: Thảo luận thứ tự sơ cứu tối ưu."
    ]
  },
  17: {
    objective: "Chuẩn bị bộ học liệu vẽ phác đồ.",
    time: "2 phút",
    prep: "Giấy khổ lớn, bút lông màu.",
    steps: [
      "GV yêu cầu các nhóm chuẩn bị giấy vẽ phác đồ sơ cứu."
    ]
  },
  18: {
    objective: "Tiến hành thảo luận xây dựng thứ tự sơ cứu.",
    time: "5 phút",
    prep: "Đồng hồ cát đếm ngược 5 phút.",
    steps: [
      "Nhấn chạy đồng hồ 5 phút để các nhóm tự động não thảo luận ra giấy."
    ]
  },
  19: {
    objective: "Thực hành sắp xếp game tương tác kéo thả ống nghiệm.",
    time: "4 phút",
    prep: "Game tương tác kéo thả 5 ống nghiệm màu.",
    steps: [
      "Cho đại diện học sinh lên bảng điều khiển kéo thả các sticker bong bóng về đúng ống nghiệm.",
      "Đáp án đúng sẽ snap dính chặt và làm đầy dung dịch ống nghiệm màu sắc."
    ]
  },
  20: {
    objective: "Khẳng định Phác đồ sơ cứu chuẩn 5 bước.",
    time: "3 phút",
    prep: "Infographic phác đồ 5 bước.",
    steps: [
      "Yêu cầu cả lớp đọc to 5 bước: Bình tĩnh ➔ Lưu bằng chứng ➔ Chặn/Báo cáo ➔ Tìm người lớn ➔ Hành động tích cực.",
      "Bung pháo hoa chúc mừng hoàn thành phác đồ."
    ]
  },
  21: {
    objective: "Mở màn Đấu trường phản xạ sơ cứu khẩn cấp.",
    time: "1 phút",
    prep: "Đèn LED đổi màu rượt đuổi, đồng hồ bấm giờ cơ học.",
    steps: [
      "Thông báo luật chơi: Diễn tập phản xạ cơ thể nhanh tại chỗ."
    ]
  },
  22: {
    objective: "Hướng dẫn tư thế chuẩn bị phản xạ.",
    time: "1 phút",
    prep: "Nhạc nền y khoa tốc độ.",
    steps: [
      "Yêu cầu học sinh đứng nghiêm túc tại chỗ, tay buông lỏng tự nhiên."
    ]
  },
  23: {
    objective: "Cách thực hiện 3 bước trong đấu trường phản xạ.",
    time: "1 phút",
    prep: "Các bước hướng dẫn.",
    steps: [
      "Giải thích: Lắng nghe Trưởng khoa ➔ Phản xạ động tác cơ thể ➔ Hô to kỹ năng."
    ]
  },
  24: {
    objective: "Triển khai Game Diễn tập phản xạ y khoa tốc độ.",
    time: "4 phút",
    prep: "Giao diện trò chơi Speed Reflex Arena.",
    steps: [
      "Nhấn nút 'BẮT ĐẦU DIỄN TẬP' để còi cảnh báo kêu và hiển thị các ca bệnh ngẫu nhiên.",
      "Cả lớp phản xạ động tác (nhắm mắt hít sâu, chụp ảnh tách tách, đan chéo chữ X...) và hô to câu trả lời.",
      "GV nhấp chọn nút trả lời đúng trên màn hình để cộng điểm tốc độ."
    ]
  },
  25: {
    objective: "Đánh giá kết quả diễn tập phản xạ y khoa.",
    time: "2 phút",
    prep: "Thông điệp chính.",
    steps: [
      "Đánh giá độ nhanh nhạy của toàn lớp.",
      "Nêu thông điệp: Bác sĩ mạng cần phản xạ nhạy bén, chính xác trong đời thực."
    ]
  },
  26: {
    objective: "Tổng kết bài học qua Cây miễn dịch mạng.",
    time: "2 phút",
    prep: "Hình ảnh cây miễn dịch mạng, Su & Kem mặc áo choàng siêu nhân.",
    steps: [
      "Chỉ cho học sinh thấy Su & Kem đã an toàn, mỉm cười giơ ngón tay cái."
    ]
  },
  27: {
    objective: "Chốt lại 3 liều thuốc kiến thức cốt lõi.",
    time: "3 phút",
    prep: "Tóm tắt lý thuyết bài học.",
    steps: [
      "Nhắc lại 5 loại virus, 5 bước sơ cứu, quy tắc 3 KHÔNG."
    ]
  },
  28: {
    objective: "Trả lời hoàn chỉnh Câu hỏi lớn.",
    time: "2 phút",
    prep: "Câu hỏi lớn ban đầu.",
    steps: [
      "Gọi học sinh trả lời lại câu hỏi lớn dựa trên phác đồ đã học."
    ]
  },
  29: {
    objective: "Hoạt động phản tư và bài học lâm sàng.",
    time: "3 phút",
    prep: "Bảng phản tư Trước đây - Bây giờ.",
    steps: [
      "Cho học sinh tự liên hệ bản thân về việc giữ bằng chứng, lỗi của kẻ xấu."
    ]
  },
  30: {
    objective: "Cam kết hành động và đóng dấu sắc phong chuyên khoa.",
    time: "3 phút",
    prep: "Chứng chỉ sắc phong mạ vàng, 3 bản cam kết.",
    steps: [
      "Học sinh nhấp chọn ký tên 3 cam kết.",
      "Khi hoàn tất, đóng dấu phê duyệt cấp chứng chỉ và bung pháo hoa rực rỡ ăn mừng."
    ]
  }
};

function updateTeacherGuide(slideNum) {
  const guide = teacherGuides[slideNum];
  if (!guide) return;
  
  document.getElementById('guide-obj-text').innerText = guide.objective;
  document.getElementById('guide-time-text').innerText = guide.time;
  document.getElementById('guide-prep-text').innerText = guide.prep;
  
  const stepsList = document.getElementById('guide-steps-list');
  stepsList.innerHTML = '';
  guide.steps.forEach(step => {
    const li = document.createElement('li');
    li.innerText = step;
    stepsList.appendChild(li);
  });
}

// ==========================================================================
// CLINICAL TIMER WIDGET LOGIC
// ==========================================================================
let timerInstances = {};

function toggleSlideTimer(slideNum, durationSeconds) {
  sound.playClick();
  if (!timerInstances[slideNum]) {
    timerInstances[slideNum] = {
      timeLeft: durationSeconds,
      interval: null,
      running: false
    };
  }
  
  const timerState = timerInstances[slideNum];
  if (timerState.running) {
    clearInterval(timerState.interval);
    timerState.running = false;
    document.getElementById(`timer-toggle-btn-${slideNum}`).innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    timerState.running = true;
    document.getElementById(`timer-toggle-btn-${slideNum}`).innerHTML = '<i class="fa-solid fa-pause"></i>';
    timerState.interval = setInterval(() => {
      timerState.timeLeft--;
      updateTimerDisplay(slideNum);
      if (timerState.timeLeft <= 0) {
        clearInterval(timerState.interval);
        timerState.running = false;
        document.getElementById(`timer-toggle-btn-${slideNum}`).innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        sound.playSuccess();
        triggerConfettiBurst();
        alert("⏱ Đã hết thời gian hoạt động y khoa lâm sàng!");
      }
    }, 1000);
  }
}

function resetSlideTimer(slideNum, durationSeconds) {
  sound.playClick();
  if (timerInstances[slideNum]) {
    clearInterval(timerInstances[slideNum].interval);
  }
  timerInstances[slideNum] = {
    timeLeft: durationSeconds,
    interval: null,
    running: false
  };
  updateTimerDisplay(slideNum);
  const toggleBtn = document.getElementById(`timer-toggle-btn-${slideNum}`);
  if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function updateTimerDisplay(slideNum) {
  const timerState = timerInstances[slideNum];
  if (!timerState) return;
  const mins = Math.floor(timerState.timeLeft / 60);
  const secs = timerState.timeLeft % 60;
  const displayStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  const digitsEl = document.getElementById(`timer-digits-${slideNum}`);
  if (digitsEl) digitsEl.innerText = displayStr;
}

// ==========================================================================
// CONFETTI SYSTEM
// ==========================================================================
let confettiCanvas, confettiCtx;
let confettiParticles = [];
let confettiAnimationId = null;

function setupConfetti() {
  confettiCanvas = document.getElementById('confetti-canvas');
  if (!confettiCanvas) return;
  confettiCtx = confettiCanvas.getContext('2d');
  resizeConfettiCanvas();
  window.addEventListener('resize', resizeConfettiCanvas);
}

function resizeConfettiCanvas() {
  if (confettiCanvas) {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
}

function triggerConfettiBurst() {
  if (!confettiCtx) return;
  const colors = ['#0D9488', '#0EA5E9', '#10B981', '#F43F5E', '#D97706', '#8B5CF6'];
  for (let i = 0; i < 150; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 150,
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 150,
      r: Math.random() * 6 + 4,
      d: Math.random() * colors.length,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 12 - 6
    });
  }
  if (!confettiAnimationId) {
    animateConfetti();
  }
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  let active = false;
  
  confettiParticles.forEach((p) => {
    p.vy += 0.22;
    p.x += p.vx;
    p.y += p.vy;
    p.tiltAngle += p.tiltAngleIncremental;
    p.tilt = Math.sin(p.tiltAngle) * 12;
    
    if (p.y <= confettiCanvas.height + 20) {
      active = true;
    }
    
    confettiCtx.beginPath();
    confettiCtx.lineWidth = p.r;
    confettiCtx.strokeStyle = p.color;
    confettiCtx.moveTo(p.x + p.tilt + p.r / 2, p.y);
    confettiCtx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
    confettiCtx.stroke();
  });

  if (active) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    confettiParticles = [];
    confettiAnimationId = null;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

// ==========================================================================
// GAME 1: CLINICAL MATCHER (Slide 2.5)
// ==========================================================================
let selectedDossierId = null;
let dossierMatches = { dossier1: false, dossier2: false, dossier3: false, dossier4: false, dossier5: false };

const dossierCorrectAnswers = {
  dossier1: 'Red',       // Bắt nạt lời nói
  dossier2: 'Yellow',    // Lan truyền thông tin sai lệch
  dossier3: 'Purple',    // Xâm phạm quyền riêng tư
  dossier4: 'Grey',      // Tẩy chay trực tuyến
  dossier5: 'Pink'       // Giả mạo danh tính
};

function initMatcherGame() {
  selectedDossierId = null;
  dossierMatches = { dossier1: false, dossier2: false, dossier3: false, dossier4: false, dossier5: false };
  
  const dBtns = document.querySelectorAll('.dossier-btn');
  dBtns.forEach(btn => {
    btn.className = 'dossier-btn';
  });
  
  const targets = document.querySelectorAll('.virus-target');
  targets.forEach(t => {
    t.className = `virus-target ${t.dataset.bgclass}`;
  });

  const popup = document.getElementById('step14-popup');
  if (popup) popup.classList.remove('show');
}

function selectDossier(dossierId, element) {
  if (dossierMatches[dossierId]) return;
  sound.playClick();

  const prevSelected = document.querySelector('.dossier-btn.selected');
  if (prevSelected) prevSelected.classList.remove('selected');

  selectedDossierId = dossierId;
  element.classList.add('selected');
}

function matchDossierToVirus(virusColor, element) {
  if (!selectedDossierId) {
    sound.playError();
    alert("Vui lòng chọn 1 Hồ sơ bệnh án bên trái trước!");
    return;
  }

  const expectedColor = dossierCorrectAnswers[selectedDossierId];
  if (expectedColor === virusColor) {
    // Correct Match
    sound.playSuccess();
    dossierMatches[selectedDossierId] = true;
    
    const dossierBtn = document.getElementById(selectedDossierId);
    dossierBtn.className = 'dossier-btn matched';
    dossierBtn.querySelector('.dossier-icon').innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    
    element.classList.add('correct-drop');
    selectedDossierId = null;

    // Check if all dossiers matched
    if (Object.values(dossierMatches).every(v => v === true)) {
      setTimeout(() => {
        sound.playSuccess();
        triggerConfettiBurst();
        const popup = document.getElementById('step14-popup');
        if (popup) popup.classList.add('show');
      }, 500);
    }
  } else {
    // Incorrect Match
    sound.playError();
    element.classList.add('incorrect-drop');
    setTimeout(() => {
      element.classList.remove('incorrect-drop');
    }, 450);
  }
}

// ==========================================================================
// GAME 2: TUBE DRAG & DROP SORTING (Slide 19)
// ==========================================================================
let selectedStickerId = null;
const stickerCorrectTubes = {
  sticker1: 'tube-pink',   // Giữ bình tĩnh -> Hồng
  sticker2: 'tube-blue',   // Lưu bằng chứng -> Xanh dương
  sticker3: 'tube-orange', // Chặn & Báo cáo -> Cam
  sticker4: 'tube-purple', // Tìm người lớn -> Tím
  sticker5: 'tube-green'   // Hành động tích cực -> Xanh lá
};

function initTubesGame() {
  selectedStickerId = null;
  
  // Re-build bank contents
  const bank = document.getElementById('step19-bank');
  bank.innerHTML = '';
  
  const initialStickers = [
    { id: 'sticker1', text: "🎈 Giữ bình tĩnh" },
    { id: 'sticker2', text: "📸 Lưu giữ bằng chứng" },
    { id: 'sticker3', text: "🛡️ Chặn và Báo cáo" },
    { id: 'sticker4', text: "📞 Tìm người lớn" },
    { id: 'sticker5', text: "⚽ Hành động tích cực" }
  ];
  
  // Shuffle stickers
  initialStickers.sort(() => Math.random() - 0.5);

  initialStickers.forEach(st => {
    const el = document.createElement('div');
    el.className = 'bubble-sticker';
    el.id = st.id;
    el.innerText = st.text;
    el.onclick = () => selectSticker(st.id, el);
    bank.appendChild(el);
  });

  const tubes = document.querySelectorAll('.tube-box');
  tubes.forEach(tube => {
    tube.className = `tube-box ${tube.dataset.colorclass}`;
    tube.querySelector('.tube-contents').innerHTML = '';
  });
}

function selectSticker(stickerId, element) {
  sound.playClick();
  const prev = document.querySelector('.bubble-sticker.selected');
  if (prev) prev.classList.remove('selected');

  selectedStickerId = stickerId;
  element.classList.add('selected');
}

function dropStickerInTube(tubeId, element) {
  if (!selectedStickerId) {
    sound.playError();
    alert("Vui lòng chọn 1 nhãn bước sơ cứu bên dưới trước!");
    return;
  }

  const expectedTubeId = stickerCorrectTubes[selectedStickerId];
  if (expectedTubeId === tubeId) {
    // Correct
    sound.playClick();
    
    const stickerEl = document.getElementById(selectedStickerId);
    stickerEl.classList.remove('selected');
    stickerEl.classList.add('placed');
    stickerEl.onclick = null; // disable clicks
    
    // Add to tube contents
    element.querySelector('.tube-contents').appendChild(stickerEl);
    element.classList.add('correct');
    
    selectedStickerId = null;

    // Check if game complete
    const remaining = document.getElementById('step19-bank').children.length;
    if (remaining === 0) {
      setTimeout(() => {
        sound.playSuccess();
        triggerConfettiBurst();
      }, 400);
    }
  } else {
    // Incorrect
    sound.playError();
    element.classList.add('highlight');
    setTimeout(() => {
      element.classList.remove('highlight');
    }, 400);
  }
}

// ==========================================================================
// GAME 3: SPEED REFLEX ARENA (Slide 24)
// ==========================================================================
let reflexInterval = null;
let reflexTimeLeft = 15; // 15 seconds reflex round
let reflexScore = 0;
let currentReflexTarget = null; // index of target button
let reflexGameRunning = false;
let reflexTimerLoop = null;

const reflexScenarios = [
  { text: "Bệnh nhân hoảng loạn!", target: 0, icon: "fa-heart-crack", code: "PHỦ ĐẦU SƠ CỨU" },
  { text: "Kẻ xấu nhắn tin độc hại!", target: 1, icon: "fa-camera", code: "THU THẬP BỆNH PHẨM" },
  { text: "Kẻ tấn công dồn dập!", target: 2, icon: "fa-circle-xmark", code: "THIẾT LẬP CÁCH LY" },
  { text: "Cần đồng đội hỗ trợ!", target: 3, icon: "fa-house-medical-circle-check", code: "HỘI CHẨN CỨU HỘ" }
];

function initSpeedReflexGame() {
  stopSpeedReflexGame();
  reflexScore = 0;
  reflexTimeLeft = 15;
  reflexGameRunning = false;
  
  document.getElementById('reflex-start-btn').classList.remove('hidden');
  document.getElementById('reflex-hud-score').innerText = '0';
  document.getElementById('reflex-hud-timer').innerText = '15s';
  document.getElementById('reflex-hud-timer').style.color = '#FFFFFF';
  
  document.getElementById('reflex-icon').className = 'fa-solid fa-circle-play alert-icon-wrapper';
  document.getElementById('reflex-term-title').innerText = 'ĐẤU TRƯỜNG PHẢN XẠ';
  document.getElementById('reflex-term-sub').innerText = 'NHẤP "BẮT ĐẦU DIỄN TẬP" ĐỂ BẮT ĐẦU';
  
  const finishOverlay = document.getElementById('reflex-finish-overlay');
  if (finishOverlay) finishOverlay.classList.remove('active');
}

function startSpeedReflex() {
  sound.playSiren();
  reflexGameRunning = true;
  reflexScore = 0;
  reflexTimeLeft = 15;
  
  document.getElementById('reflex-start-btn').classList.add('hidden');
  document.getElementById('reflex-hud-score').innerText = '0';
  
  generateNextReflexScenario();

  // Run stopwatch ticker
  reflexTimerLoop = setInterval(() => {
    reflexTimeLeft--;
    document.getElementById('reflex-hud-timer').innerText = `${reflexTimeLeft}s`;
    
    if (reflexTimeLeft <= 5) {
      document.getElementById('reflex-hud-timer').style.color = '#EF4444';
      sound.playECGBeep();
    }
    
    if (reflexTimeLeft <= 0) {
      stopSpeedReflexGame();
      sound.playSuccess();
      triggerConfettiBurst();
      
      // Show finish overlay
      document.getElementById('reflex-final-score-text').innerText = reflexScore;
      document.getElementById('reflex-finish-overlay').classList.add('active');
    }
  }, 1000);
}

function generateNextReflexScenario() {
  if (!reflexGameRunning) return;
  
  const randomIndex = Math.floor(Math.random() * reflexScenarios.length);
  const scenario = reflexScenarios[randomIndex];
  
  currentReflexTarget = scenario.target;
  
  const iconEl = document.getElementById('reflex-icon');
  iconEl.className = `fa-solid ${scenario.icon} alert-icon-wrapper`;
  
  document.getElementById('reflex-term-title').innerText = scenario.text;
  document.getElementById('reflex-term-sub').innerText = `MÃ LỆNH Y LỆNH: ${scenario.code}`;
}

function triggerReflexAction(buttonIndex) {
  if (!reflexGameRunning) return;

  if (buttonIndex === currentReflexTarget) {
    // Correct action
    if (buttonIndex === 0) sound.playECGBeep();
    else if (buttonIndex === 1) sound.playCameraFlash();
    else if (buttonIndex === 2) sound.playShatter();
    else if (buttonIndex === 3) sound.playRipple();
    
    reflexScore += 10;
    document.getElementById('reflex-hud-score').innerText = reflexScore;
    
    // Quick green flash highlight on alert terminal
    const term = document.querySelector('.alert-terminal');
    term.style.borderColor = '#10B981';
    setTimeout(() => {
      term.style.borderColor = '#1E293B';
    }, 150);

    generateNextReflexScenario();
  } else {
    // Incorrect action
    sound.playError();
    reflexScore = Math.max(0, reflexScore - 5);
    document.getElementById('reflex-hud-score').innerText = reflexScore;
    
    // Quick red flash highlight
    const term = document.querySelector('.alert-terminal');
    term.style.borderColor = '#EF4444';
    setTimeout(() => {
      term.style.borderColor = '#1E293B';
    }, 150);
  }
}

function stopSpeedReflexGame() {
  reflexGameRunning = false;
  if (reflexTimerLoop) {
    clearInterval(reflexTimerLoop);
    reflexTimerLoop = null;
  }
}

// ==========================================================================
// POCKET LICENSE CERTIFICATE & COMMITMENTS (Slide 30)
// ==========================================================================
let commitmentsSigned = { 1: false, 2: false, 3: false };

function initStampingCommitments() {
  commitmentsSigned = { 1: false, 2: false, 3: false };
  const rows = document.querySelectorAll('.commitment-row');
  rows.forEach(r => r.classList.remove('signed'));

  const stampBadge = document.getElementById('step30-gold-stamp');
  if (stampBadge) stampBadge.classList.remove('stamped');
  
  const frame = document.getElementById('step30-frame');
  if (frame) frame.classList.remove('shake');
}

function signGoldCommitment(idx, element) {
  if (commitmentsSigned[idx]) return;
  commitmentsSigned[idx] = true;
  
  sound.playClick();
  element.classList.add('signed');

  // Check if all 3 signed to stamp the license approved
  if (commitmentsSigned[1] && commitmentsSigned[2] && commitmentsSigned[3]) {
    setTimeout(() => {
      sound.playStamp();
      
      const stampBadge = document.getElementById('step30-gold-stamp');
      if (stampBadge) stampBadge.classList.add('stamped');
      
      const frame = document.getElementById('step30-frame');
      if (frame) frame.classList.add('shake');
      
      setTimeout(() => {
        sound.playSuccess();
        triggerConfettiBurst();
      }, 300);
    }, 500);
  }
}

// ==========================================================================
// PREVENT VIETNAMESE COMPOUND WORD WRAPPING (recursive DOM walk)
// ==========================================================================
function preventCompoundWordWrapping() {
  const compoundWords = [
    "Bác sĩ chính", "bác sĩ chính", "Bác sĩ chuyên khoa", "bác sĩ chuyên khoa", 
    "Bác sĩ Lâm sàng", "Bác sĩ lâm sàng", "bác sĩ lâm sàng", "Bác sĩ Thực tập", 
    "Bác sĩ thực tập", "bác sĩ thực tập", "Bác sĩ Nội trú", "Bác sĩ nội trú", 
    "bác sĩ nội trú", "Bác sĩ", "bác sĩ", "Thực tập", "thực tập", "Nội trú", 
    "nội trú", "Chuyên khoa", "chuyên khoa", "đơn thuốc", "Đơn thuốc", 
    "phác đồ", "Phác đồ", "bệnh nhân", "Bệnh nhân", "bệnh án", "Bệnh án", 
    "chẩn đoán", "Chẩn đoán", "triệu chứng", "Triệu chứng", "sinh hoạt", 
    "Sinh hoạt", "thói quen", "Thói quen", "bất thường", "Bất thường", 
    "học sinh", "Học sinh", "giáo viên", "Giáo viên", "hoạt động", 
    "Hoạt động", "sơ cứu", "Sơ cứu", "bằng chứng", "Bằng chứng", 
    "cầu cứu", "Cầu cứu", "tẩy chay", "Tẩy chay", "bắt nạt", "Bắt nạt", 
    "giả mạo", "Giả mạo", "độc hại", "Độc hại", "an toàn", "An toàn"
  ];
  
  compoundWords.sort((a, b) => b.length - a.length);
  const regexes = compoundWords.map(word => ({
    regex: new RegExp(word.replace(/ /g, '[ \\t\\r\\n]+'), 'g'),
    replacement: word.replace(/ /g, '\u00A0')
  }));
  
  function walk(node) {
    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let changed = false;
      regexes.forEach(({ regex, replacement }) => {
        if (regex.test(text)) { 
          text = text.replace(regex, replacement); 
          changed = true; 
        }
      });
      if (changed) node.nodeValue = text;
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
      node.childNodes.forEach(walk);
    }
  }
  walk(document.body);
}

// ==========================================================================
// SYSTEM BOOTSTRAP
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupConfetti();
  
  // Navigation sidebar item clicks
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const slideNum = parseInt(item.dataset.slide);
      navigateToSlide(slideNum);
    });
  });

  const prevBtn = document.getElementById('prev-slide-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      navigateToSlide(currentSlide - 1);
    });
  }

  const nextBtn = document.getElementById('next-slide-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      navigateToSlide(currentSlide + 1);
    });
  }

  // Sidebar Toggling
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      const container = document.querySelector('.app-container');
      container.classList.toggle('sidebar-collapsed');
    });
  }

  // Teacher Guide Panel Toggling
  const guideToggle = document.getElementById('teacher-guide-toggle');
  if (guideToggle) {
    guideToggle.addEventListener('click', () => {
      const container = document.querySelector('.app-container');
      container.classList.toggle('guide-open');
    });
  }

  // Fullscreen Toggling
  const fullscreenToggle = document.getElementById('fullscreen-toggle');
  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Keyboard slide navigation
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      navigateToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      navigateToSlide(currentSlide - 1);
    }
  });

  // Bootstrap first slide
  navigateToSlide(1);
});
