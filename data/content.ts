export const subjects = [
  { name: 'Toán', icon: '∑', color: 'orange', levels: 'Tiểu học · THCS · THPT' },
  { name: 'Ngữ văn', icon: 'Aa', color: 'blue', levels: 'Lớp 6 · 7 · 8 · 9 · 12' },
  { name: 'Tiếng Anh', icon: 'A', color: 'teal', levels: 'Mọi cấp độ · IELTS' },
  { name: 'Vật lý', icon: '◈', color: 'purple', levels: 'THPT · Luyện thi ĐH' },
  { name: 'Hóa học', icon: '⚗', color: 'rose', levels: 'THPT · Luyện thi ĐH' },
  { name: 'Piano & Vẽ', icon: '♪', color: 'yellow', levels: 'Năng khiếu · Mọi lứa tuổi' },
]

export const gradeOptions = ['Tiểu học', 'THCS', 'THPT', 'Luyện thi đại học'] as const
export const studyModes = ['Online 1-1 (Microsoft Teams)', 'Tại nhà', 'Học nhóm'] as const

export const tutors = [
  {
    slug: 'nguyen-minh-anh',
    name: 'Nguyễn Minh Anh',
    subject: 'Toán · Lý',
    school: 'ĐH Sư phạm TP.HCM',
    experience: '5 năm kinh nghiệm',
    rating: '4.9',
    price: '180.000đ',
    image: '/images/tutor-minh-anh.png',
    tag: 'Toán',
    schedule: 'Thứ 2–6 (18:00–21:00), cuối tuần linh hoạt.',
    bio: 'Cô Minh Anh dạy Toán và Vật lý cho học sinh phổ thông. Buổi học đi từ bản chất kiến thức rồi mới luyện bài, kèm nhận xét ngắn để phụ huynh nắm tiến độ.',
  },
  {
    slug: 'tran-hoang-nam',
    name: 'Trần Hoàng Nam',
    subject: 'Tiếng Anh',
    school: 'IELTS 8.5 · ĐH Ngoại thương',
    experience: '4 năm kinh nghiệm',
    rating: '5.0',
    price: '220.000đ',
    image: '/images/tutor-hoang-nam.png',
    tag: 'Tiếng Anh',
    schedule: 'Tối thứ 3, thứ 5 và sáng cuối tuần.',
    bio: 'Thầy Nam dạy Tiếng Anh giao tiếp và IELTS. Mỗi buổi xen kẽ phản xạ nói, từ vựng theo chủ đề và chữa bài viết ngay trên lớp.',
  },
  {
    slug: 'le-thao-my',
    name: 'Lê Thảo My',
    subject: 'Ngữ văn',
    school: 'Thạc sĩ Văn học · ĐH KHXH&NV',
    experience: '7 năm kinh nghiệm',
    rating: '4.9',
    price: '200.000đ',
    image: '/images/tutor-thao-my.png',
    tag: 'Ngữ văn',
    schedule: 'Chiều và tối trong tuần, chủ nhật theo lịch gia đình.',
    bio: 'Cô My dạy Ngữ văn theo hướng đọc hiểu và viết đoạn, giúp học viên dám diễn đạt ý của mình thay vì học thuộc văn mẫu.',
  },
  {
    slug: 'pham-gia-huy',
    name: 'Phạm Gia Huy',
    subject: 'Hóa · Sinh',
    school: 'ĐH Y Dược TP.HCM',
    experience: '3 năm kinh nghiệm',
    rating: '4.8',
    price: '180.000đ',
    image: '/images/tutor-gia-huy.png',
    tag: 'Hóa học',
    schedule: 'Tối thứ 2–6, có thể xếp buổi cuối tuần khi cần ôn đề.',
    bio: 'Thầy Huy dạy Hóa và Sinh bám chương trình THPT và luyện thi. Buổi học có bài tập ngắn để kiểm tra lại phần vừa học.',
  },
]

export const testimonials = [
  { quote: 'Sau 2 tháng học cùng cô My, con tự tin phát biểu và điểm Văn từ 6 lên 8.5. Gia đình rất hài lòng!', name: 'Chị Thanh Hằng', detail: 'Phụ huynh bé Minh Khang · Lớp 8', image: '/images/tutor-thao-my.png' },
  { quote: 'Thầy Nam dạy rất dễ hiểu, con đạt IELTS 7.0 sau 8 tháng. Cảm ơn Gia Sư PML đã ghép thầy!', name: 'Anh Quốc Bảo', detail: 'Phụ huynh bé Ngọc Anh · Lớp 12', image: '/images/tutor-hoang-nam.png' },
]

export const news = [
  { slug: 'bi-quyet-giup-con-tu-giac-hoc-tap', title: 'Bí quyết giúp con tự giác học tập mỗi ngày', category: 'Phương pháp học', date: '12/06/2024', excerpt: 'Những thói quen nhỏ và cách đồng hành đúng lúc giúp con chủ động hơn trong từng giờ học.', body: 'Tự giác không đến từ việc ép con ngồi vào bàn thật lâu. Gia đình nên cùng con chia mục tiêu thành những bước nhỏ, thống nhất khung giờ ổn định và ghi nhận nỗ lực thay vì chỉ nhìn vào điểm số. Khi được trao quyền lựa chọn môn học hoặc cách ôn tập, con sẽ dần hình thành cảm giác làm chủ việc học.' },
  { slug: 'lo-trinh-on-thi-vao-10', title: 'Lộ trình ôn thi vào 10 hiệu quả', category: 'Luyện thi', date: '05/06/2024', excerpt: 'Gợi ý cách xây nền tảng, luyện đề và giữ tinh thần ổn định trong giai đoạn nước rút.', body: 'Một lộ trình tốt nên bắt đầu bằng việc rà soát kiến thức nền, sau đó luyện theo từng chuyên đề và chỉ làm đề tổng hợp khi đã nắm chắc phương pháp. Hãy dành một buổi mỗi tuần để xem lại lỗi sai, điều chỉnh lịch học và giữ thời gian nghỉ ngơi hợp lý.' },
  { slug: 'hoc-online-1-1-dat-hieu-qua', title: 'Học online 1-1: Làm sao để đạt hiệu quả?', category: 'Kinh nghiệm', date: '28/05/2024', excerpt: 'Chuẩn bị không gian, thiết bị và thói quen tương tác để mỗi buổi học online thật tập trung.', body: 'Học online 1-1 tại Gia Sư PML diễn ra qua Microsoft Teams (lời mời gửi ngoài website). Buổi học hiệu quả khi học viên có góc học yên tĩnh, đường truyền ổn định và bật camera. Gia sư xen kẽ câu hỏi, bài tập ngắn và phản hồi trực tiếp để duy trì tập trung.' },
]

export const faqs = [
  ['Học Online 1-1 diễn ra thế nào?', 'Buổi học online diễn ra qua Microsoft Teams. Sau khi đăng ký, Gia Sư PML gửi lời mời Teams (invite ngoài website) và theo dõi giờ học bên ngoài app — không có phòng học tích hợp trên web.'],
  ['Gia sư có được xác minh hồ sơ không?', 'Tất cả gia sư đều trải qua 3 bước sàng lọc: kiểm tra hồ sơ, phỏng vấn chuyên môn và xác minh bằng cấp.'],
  ['Tôi được học thử trong bao lâu?', 'Mỗi học viên được học thử miễn phí 1 buổi 90 phút để đánh giá sự phù hợp trước khi quyết định.'],
  ['Có thể đổi gia sư không?', 'Có. Gia Sư PML hỗ trợ đổi gia sư hoàn toàn miễn phí nếu gia đình cảm thấy chưa phù hợp.'],
  ['Học phí thanh toán như thế nào?', 'Gia đình có thể thanh toán theo buổi hoặc theo gói tháng qua chuyển khoản, tiền mặt hoặc ví điện tử.'],
  ['Lịch học có linh hoạt không?', 'Bạn chủ động chọn lịch học phù hợp. Chúng tôi hỗ trợ sắp xếp lại lịch khi cần.'],
  ['Thông tin cá nhân có được bảo mật?', 'Thông tin của bạn chỉ được sử dụng để tư vấn và kết nối gia sư, tuyệt đối không chia sẻ cho bên thứ ba.'],
] as const

export const privacyPolicy = {
  title: 'Chính sách bảo mật',
  description: 'Gia Sư PML không lưu đơn đăng ký trên website. Thông tin bạn chia sẻ khi gọi, nhắn Zalo hoặc gửi email chỉ dùng để tư vấn và kết nối gia sư.',
  updated: '26/10/2026',
  sections: [
    {
      heading: 'Website này không lưu đơn',
      paragraphs: [
        'Gia Sư PML dùng website để giới thiệu môn học, gia sư, học phí và kinh nghiệm học tập. Trang không có tài khoản, không có cơ sở dữ liệu khách hàng và không lưu nội dung form.',
        'Ô thông tin ở trang chủ chỉ giúp bạn kiểm tra số điện thoại và soạn sẵn nội dung. Bấm gọi, nhắn Zalo hoặc mở email thì yêu cầu mới rời khỏi máy của bạn.',
      ],
    },
    {
      heading: 'Thông tin bạn tự gửi',
      paragraphs: [
        'Khi liên hệ, bạn có thể chia sẻ họ tên, số điện thoại, lớp, môn học và hình thức học (tại nhà hoặc online 1-1 qua Microsoft Teams). Những nội dung đó nằm trong cuộc gọi, cuộc trò chuyện Zalo hoặc email.',
        'Thông tin của bạn chỉ được sử dụng để tư vấn và kết nối gia sư, tuyệt đối không chia sẻ cho bên thứ ba.',
      ],
    },
    {
      heading: 'Khi nào gia sư được biết thông tin',
      paragraphs: [
        'Sau khi gia đình đồng ý học thử, Gia Sư PML trao đổi với gia sư những gì cần để xếp buổi: môn, lớp, khu vực và lịch. Không dùng thông tin này để chạy quảng cáo cho bên khác.',
      ],
    },
    {
      heading: 'Bạn muốn hỏi lại',
      paragraphs: [
        'Gọi hotline, nhắn Zalo hoặc gửi email được ghi ở chân trang. Gia Sư PML sẽ giải thích thông tin đang được dùng để tư vấn ra sao.',
      ],
    },
  ],
}

export const termsOfService = {
  title: 'Điều khoản dịch vụ',
  description: 'Điều khoản học thử, đổi gia sư, học phí và bảo mật của Gia Sư PML — cùng nội dung với mục câu hỏi thường gặp.',
  updated: '26/10/2026',
  sections: [
    {
      heading: 'Dịch vụ',
      paragraphs: [
        'Gia Sư PML kết nối gia đình với gia sư dạy kèm tại nhà hoặc online 1-1 qua Microsoft Teams (invite ngoài site). Website cung cấp thông tin để bạn chủ động gọi, nhắn Zalo hoặc gửi email. Gửi form mở email/điện thoại — không lưu đơn trên web.',
      ],
    },
    {
      heading: 'Gia sư được xác minh',
      paragraphs: [
        'Tất cả gia sư đều trải qua 3 bước sàng lọc: kiểm tra hồ sơ, phỏng vấn chuyên môn và xác minh bằng cấp.',
      ],
    },
    {
      heading: 'Học thử',
      paragraphs: [
        'Mỗi học viên được học thử miễn phí 1 buổi 90 phút để đánh giá sự phù hợp trước khi quyết định.',
      ],
    },
    {
      heading: 'Đổi gia sư',
      paragraphs: [
        'Có. Gia Sư PML hỗ trợ đổi gia sư hoàn toàn miễn phí nếu gia đình cảm thấy chưa phù hợp.',
      ],
    },
    {
      heading: 'Học phí và thanh toán',
      paragraphs: [
        'Gia đình có thể thanh toán theo buổi hoặc theo gói tháng qua chuyển khoản, tiền mặt hoặc ví điện tử.',
        'Mức phí trên website là giá tham khảo theo cấp lớp. Mức cụ thể được thống nhất khi tư vấn, tùy môn, hình thức học và kinh nghiệm gia sư.',
      ],
    },
    {
      heading: 'Lịch học',
      paragraphs: [
        'Bạn chủ động chọn lịch học phù hợp. Chúng tôi hỗ trợ sắp xếp lại lịch khi cần.',
      ],
    },
    {
      heading: 'Bảo mật',
      paragraphs: [
        'Thông tin của bạn chỉ được sử dụng để tư vấn và kết nối gia sư, tuyệt đối không chia sẻ cho bên thứ ba.',
        'Chi tiết cách website xử lý dữ liệu nằm ở trang Chính sách bảo mật.',
      ],
    },
  ],
}

export const recruitment = {
  title: 'Tuyển dụng gia sư',
  description: 'Gia Sư PML tìm gia sư dạy kèm tại nhà và online 1-1 qua Microsoft Teams. Ứng tuyển bằng điện thoại, Zalo hoặc email — không có đơn lưu trên website.',
  intro: 'Chúng tôi đang nhận gia sư các môn phổ thông và năng khiếu, dạy tại nhà hoặc online 1-1 qua Microsoft Teams. Hồ sơ được xem cùng quy trình sàng lọc đã công bố với phụ huynh.',
  requirements: [
    'Dạy được ít nhất một môn đang giới thiệu trên website, đúng cấp lớp bạn đăng ký.',
    'Có hồ sơ rõ: trường đang học hoặc đã tốt nghiệp, bằng cấp hoặc chứng chỉ liên quan.',
    'Sẵn sàng phỏng vấn chuyên môn và cung cấp giấy tờ để xác minh bằng cấp.',
    'Giữ lịch đã nhận và báo lại tiến độ cho phụ huynh sau buổi học.',
  ],
  screening: 'Tất cả gia sư đều trải qua 3 bước sàng lọc: kiểm tra hồ sơ, phỏng vấn chuyên môn và xác minh bằng cấp.',
  benefits: [
    'Tự chọn khung giờ rảnh. Lịch được sắp xếp lại khi bạn hoặc gia đình cần đổi.',
    'Học viên học thử miễn phí 1 buổi 90 phút trước khi học chính thức.',
    'Được giới thiệu tới gia đình đã có nhu cầu, không phải tự tìm lớp.',
  ],
  applySteps: [
    'Gọi hotline hoặc nhắn Zalo, nói rõ môn dạy, cấp lớp và khu vực.',
    'Hoặc mở email với tiêu đề “Ứng tuyển gia sư — Gia Sư PML” và điền họ tên, môn, khu vực, số điện thoại.',
    'Gia Sư PML liên hệ lại để kiểm tra hồ sơ. Website không nhận và không lưu đơn ứng tuyển.',
  ],
}

export function getTutor(slug: string) {
  return tutors.find((tutor) => tutor.slug === slug)
}

export function getNewsArticle(slug: string) {
  return news.find((article) => article.slug === slug)
}
