/*
  포트폴리오 데이터
  - 프로젝트를 추가/수정하려면 아래 projects 배열만 고치면 됩니다.
  - 이미지는 images/ 폴더에 넣고 src에 파일명을 적어 주세요.
  - link가 있는 이미지는 '보러 가기' 버튼이 붙고 새 탭으로 열립니다.
*/
window.PORTFOLIO = {
  categories: [
    { id: 'digital', no: '01', name: 'Digital Campaign' },
    { id: 'branding', no: '02', name: 'Branding' },
    { id: 'content', no: '03', name: 'Content' },
    { id: 'corporate', no: '04', name: 'Corporate Communication' },
    { id: 'bidding', no: '05', name: 'Bidding & Research' }
  ],

  projects: [
    {
      id: 'cu',
      category: 'digital',
      client: 'BGF네트웍스',
      title: 'CU반값택배 온라인 마케팅',
      tags: ['콘텐츠기획', '영상기획', 'GEO'],
      period: '2026.02 – 2026.05', role: '담당 AE', share: '50%',
      highlight: { value: '273만', label: '영상 노출수' },
      links: [{ label: '영상 보기', url: 'https://www.instagram.com/reel/DUnIakslKP-/' }],
      cover: 'cu-1.jpg', coverPosition: 'center bottom',
      summary: '실제 이용 상황을 담은 공감형 영상과 브랜드 캐릭터 PR 콘텐츠로 CU반값택배의 서비스 경쟁력을 알린 캠페인입니다.',
      results: [
        { value: '−42%', label: 'CPA · 전년 동기 대비' },
        { value: '+30.8%', label: 'CVR · 전년 동기 대비' },
        { value: '+1,160%', label: '브랜드 언급량 · 전년 동기 대비' },
        { value: '273만', label: '노출 · 영상 조회 46만' }
      ],
      sections: [
        { title: 'Insight', body: '차별화된 서비스 경쟁력을 전달하면서 브랜드 인지도와 친밀도를 함께 높여야 했습니다.' },
        { title: 'Strategy', body: '타깃별 이용 상황을 담은 콘텐츠로 서비스 강점을 소구하고, 캐릭터 콘텐츠로 친밀도와 주목도를 높이도록 콘텐츠별 역할을 나눴습니다.' },
        { title: 'Execution', body: '테스티모니얼 영상 2편과 브랜드 PR 영상 1편의 제작을 관리했습니다. Meta·YouTube 광고와 함께 카페·블로그 바이럴, 인플루언서 협업으로 소비자 접점을 넓혔습니다.' }
      ],
      gallery: [
        { items: [
          { src: 'cu-1.jpg', caption: 'Testimonial 영상 | 1020 아이돌 팬덤편', link: 'https://www.instagram.com/reel/DUnIakslKP-/' },
          { src: 'cu-2.jpg', caption: 'Testimonial 영상 | 3040 중고거래편', link: 'https://www.instagram.com/reel/DV-rbm_E0So/' },
          { src: 'cu-3.jpg', caption: '브랜드 PR 영상', link: 'https://www.instagram.com/reel/DW0q7iCiTd_/' }
        ] },
        { items: [
          { src: 'cu-4.jpg', caption: 'CU 매장 디지털 사이니지', shape: 'tall' },
          { src: 'cu-5.jpg', caption: '엘리베이터 광고', shape: 'tall' },
          { src: 'cu-6.jpg', caption: '카페·블로그 바이럴', shape: 'tall' },
          { src: 'cu-7.jpg', caption: '인플루언서(나연) 협업', shape: 'tall', link: 'https://youtube.com/shorts/4overucRzBw?si=0Yt_3992jHbkcXai' }
        ] }
      ]
    },

    {
      id: 'gcon',
      category: 'digital',
      client: '경기콘텐츠진흥원',
      title: '경기도 1인 크리에이터 홍보',
      tags: ['SNS운영', '콘텐츠제작', 'BTL'],
      period: '2025.05 – 2025.12', role: '담당 AE', share: '35%',
      highlight: { value: '3배+', label: '영상 평균 조회수' },
      links: [{ label: 'Instagram', url: 'https://www.instagram.com/gcon.creator/' }, { label: 'YouTube', url: 'https://www.youtube.com/@gcon.creator' }],
      cover: 'gcon-1.jpg',
      summary: '1인 크리에이터의 실질적인 성장을 돕는 ‘플랫폼형 채널’을 목표로 SNS 채널과 오프라인 행사를 함께 운영했습니다.',
      results: [
        { value: '3배+', label: '영상 평균 조회수 · 전년 대비' },
        { value: '200명+', label: '오프라인 부스·이벤트 참여자' },
        { value: '대상', label: '2025 한국공공브랜드대상 공공기관 개인브랜드 부문' }
      ],
      sections: [
        { title: 'Strategy', body: '마스코트 콘텐츠로 친근감을, 교육형 콘텐츠로 전문성을 더했습니다. UGC 이벤트로 크리에이터의 자발적인 참여와 소통을 이끌었습니다.' },
        { title: 'Execution', body: 'Instagram·YouTube·Facebook 공식 채널 운영을 총괄하며 영상 시리즈, 카드뉴스, 참여형 이벤트를 기획·제작했습니다. 오프라인 행사와 홍보물 제작, Google·Meta·당근 광고 집행까지 맡았습니다.' }
      ],
      gallery: [
        { title: '알림용 홍보 콘텐츠', items: [
          { src: 'gcon-1.jpg', caption: '아카데미 제작자 과정 교육생 모집', shape: 'wide' },
          { src: 'gcon-2.jpg', shape: 'portrait' },
          { src: 'gcon-3.jpg', caption: '교육 과정 안내', shape: 'portrait', link: 'https://www.instagram.com/gcon.creator/' }
        ] },
        { title: '정보성 · 캐릭터 활용 콘텐츠', items: [
          { src: 'gcon-4.jpg', caption: '정보성 콘텐츠', shape: 'portrait' },
          { src: 'gcon-5.jpg', caption: '정보성 콘텐츠', shape: 'portrait' },
          { src: 'gcon-6.jpg', caption: '캐릭터 활용 콘텐츠', shape: 'portrait', link: 'https://www.instagram.com/kkyudok/' },
          { src: 'gcon-7.jpg', caption: '캐릭터 활용 콘텐츠', shape: 'portrait', link: 'https://www.instagram.com/kkyudok/' }
        ] },
        { title: '숏폼 영상', items: [
          { src: 'gcon-8.jpg', caption: '숏폼 영상', shape: 'story', link: 'https://youtube.com/shorts/OPAoMjBEccg' },
          { src: 'gcon-9.jpg', shape: 'story' },
          { src: 'gcon-10.jpg', caption: '숏폼 영상', shape: 'story', link: 'https://youtube.com/shorts/_278WPB6Qa0' },
          { src: 'gcon-11.jpg', shape: 'story' },
          { src: 'gcon-12.jpg', caption: '숏폼 영상', shape: 'story', link: 'https://youtube.com/shorts/KLO6xdxh2HQ' },
          { src: 'gcon-13.jpg', shape: 'story' }
        ] }
      ]
    },

    {
      id: 'usmef',
      category: 'branding',
      client: '미국육류수출협회',
      title: 'U.S. PREMIER 리브랜딩',
      tags: ['브랜딩', '소비자조사', '광고제작'],
      period: '2025.09 – 진행 중', role: '담당 AE', share: '20%',
      highlight: { value: '1.3M+', label: '영상 최고 조회수' },
      links: [{ label: 'YouTube', url: 'https://www.youtube.com/@americanmeatstory/videos' }, { label: 'Instagram', url: 'https://www.instagram.com/american_meat_story/' }],
      cover: 'usmef-1.jpg', coverPosition: 'center top',
      summary: '소비자 조사를 통해 브랜드 포지셔닝을 정립하고, Verbal·Visual Identity 개발부터 브랜드 런칭 캠페인까지 전 과정을 수행한 통합 리브랜딩 프로젝트입니다.',
      results: [
        { value: '1,037명', label: '인터뷰 및 소비자 조사 참여자' },
        { value: '1.3M+', label: '영상 최고 조회수' }
      ],
      note: '캠페인 진행 중으로, 성과는 업데이트 예정입니다.',
      sections: [
        { title: 'Research', body: '업계 관계자 37명 심층 인터뷰와 소비자 사전·사후 정량조사, FGD로 브랜드의 핵심 가치를 찾았습니다.' },
        { title: 'Identity', body: '브랜드명 ‘U.S. PREMIER’와 슬로건 ‘품질은 확실하게, 맛은 풍부하게’를 개발하고 로고, 채널별 응용 디자인, 브랜드 가이드북을 만들었습니다.' },
        { title: 'Launch', body: '브랜드 필름과 키비주얼을 기획하고 촬영 디렉션에 참여했습니다. YouTube 썸네일 제작과 미디어 믹스 수립, Meta·YouTube 광고 집행까지 맡았습니다.' }
      ],
      gallery: [
        { title: 'Brand Identity', items: [
          { src: 'usmef-logo-meat.png', caption: 'MEAT', shape: 'logo' },
          { src: 'usmef-logo-beef.png', caption: 'BEEF', shape: 'logo' },
          { src: 'usmef-logo-pork.png', caption: 'PORK', shape: 'logo' }
        ] },
        { title: 'Branding Film (40s · 15s · 6s)', items: [
          { src: 'usmef-1.jpg', caption: '브랜드 필름(40s)', link: 'https://youtu.be/BgtwLH7EcpU' },
          { src: 'usmef-2.jpg', caption: '브랜드 필름(15s)', link: 'https://youtu.be/hKna-ztQ5fE' },
          { src: 'usmef-3.jpg', caption: '브랜드 필름(6s)', link: 'https://youtu.be/8zWTM1JEzTI' }
        ] },
        { title: 'Key Visual', items: [
          { src: 'usmef-6.jpg', caption: '키비주얼(Beef)', shape: 'poster' },
          { src: 'usmef-5.jpg', caption: '키비주얼(Pork)', shape: 'poster' }
        ] }
      ]
    },

    {
      id: 'coupang',
      category: 'content',
      client: '쿠팡 로켓그로스',
      title: '콘텐츠 마케팅',
      tags: ['영상기획', '콘텐츠제작', '디자인'],
      period: '2024.11 – 진행 중', role: '서브 AE', share: '15%',
      highlight: { value: '4배+', label: '오가닉 조회수' },
      links: [{ label: 'YouTube', url: 'https://www.youtube.com/@coupang_rocketgrowth' }],
      cover: 'coupang-cover.jpg', coverPosition: 'center 65%',
      summary: '쿠팡 로켓그로스의 차별화된 경쟁력을 전달하기 위해 셀러 인터뷰 및 가이드 영상의 기획부터 촬영 디렉션, 디자인 제작까지 참여했습니다.',
      results: [
        { value: '4배+', label: '오가닉 조회수 · 이전 영상 대비' },
        { value: '27만+', label: '캠페인 기간 영상 최고 조회수' },
        { value: '2배+', label: '캠페인 기간 구독자 증가' }
      ],
      sections: [
        { title: 'Planning', body: '광고주의 핵심 메시지와 셀러별 특성을 함께 담아 스크립트와 무드보드를 구체화하고, 촬영 전에 영상의 방향과 연출 콘셉트를 정리했습니다.' },
        { title: 'Execution', body: '인터뷰 촬영 현장에서 컷과 연출을 점검하고, 썸네일과 가이드 영상에 필요한 디자인 소스를 직접 만들었습니다.' }
      ],
      gallery: [
        { items: [
          { src: 'coupang-1.jpg', caption: '썸네일 제작' },
          { src: 'coupang-2.jpg', caption: '썸네일 제작', link: 'https://youtu.be/2OyqtVHyq8Y' },
          { src: 'coupang-3.jpg', caption: '촬영 참여', link: 'https://youtu.be/5d2bWScOnIQ' },
          { src: 'coupang-4.jpg', caption: '영상 소스 디자인', link: 'https://youtu.be/X5H2bOMSj_8' },
          { src: 'coupang-5.jpg', caption: '영상 소스 디자인', link: 'https://youtu.be/kRxs3Jod8mc' },
          { src: 'coupang-6.jpg', caption: '영상 소스 디자인', link: 'https://youtu.be/gRfIrZuXurM' }
        ] }
      ]
    },

    {
      id: 'kird',
      category: 'content',
      client: 'KIRD 국가과학기술인력개발원', short: 'KIRD',
      title: '‘Po-rest’ 뉴스레터 · 링크드인 운영',
      tags: ['뉴스레터', 'SNS운영', '콘텐츠제작'],
      period: '2025.07 – 진행 중', role: '담당 AE', share: '40%',
      highlight: { value: '3,100명+', label: '뉴스레터 구독자' },
      links: [{ label: '뉴스레터 보기', url: 'https://kird-porest.stibee.com/' }, { label: 'LinkedIn', url: 'https://www.linkedin.com/company/kird-postdoc/' }],
      cover: 'kird-1.jpg',
      summary: '박사후연구원의 경력개발을 위한 맞춤형 정보를 전달하는 ‘Po-rest’ 뉴스레터와 링크드인을 운영합니다.',
      results: [
        { value: '3,100명+', label: '뉴스레터 구독자' },
        { value: '6,500+', label: '링크드인 오가닉 노출' }
      ],
      sections: [
        { title: 'Planning', body: '뉴스레터의 콘셉트와 네이밍, 콘텐츠 구성을 기획하고 경력개발·연구역량·구직·네트워킹 중심으로 콘텐츠 체계를 만들었습니다.' },
        { title: 'Execution', body: '매 호 기획, 원고 검토, 이미지 제작, 성과 분석을 맡고 있습니다. 분석 결과로 콘텐츠를 계속 개선하고, 뉴스레터와 연계한 LinkedIn 콘텐츠도 운영합니다.' }
      ],
      gallery: [
        { items: [
          { src: 'kird-1.jpg', caption: 'Po-rest 뉴스레터', shape: 'banner', link: 'https://kird-porest.stibee.com/' },
          { src: 'kird-2.jpg', caption: '뉴스레터 이벤트', shape: 'banner' }
        ] },
        { title: '링크드인 채널 운영', items: [
          { src: 'kird-3.jpg', caption: 'LinkedIn 콘텐츠', link: 'https://www.linkedin.com/company/kird-postdoc/' },
          { src: 'kird-4.jpg', caption: 'LinkedIn 콘텐츠' }
        ] }
      ]
    },

    {
      id: 'koreazinc',
      category: 'corporate',
      client: '고려아연',
      title: '웹사이트 리뉴얼 · 위기관리',
      tags: ['웹사이트제작', '위기관리', '디자인'],
      period: '2024.11 – 2025.03', role: '담당 AE', share: '30%',
      highlight: null,
      cover: 'koreazinc-cover.jpg',
      summary: '기업 평판 관리와 IR 정보 전달력을 높이기 위해 국문·글로벌 웹사이트를 개편했습니다.',
      results: [],
      note: '위기관리 업무의 세부 내용은 대외비로, 공개하지 않습니다.',
      sections: [
        { title: 'Planning', body: 'GNB 체계부터 페이지별 콘텐츠 구성까지, 기업 신뢰도와 투자자 커뮤니케이션을 강화하도록 웹사이트 정보 구조(IA)를 다시 설계했습니다.' },
        { title: 'Execution', body: '개발사와 구축 과정을 조율하며 필요한 디자인 소스를 직접 만들었습니다. 위기 상황에서는 기업 평판을 지키기 위한 대외 커뮤니케이션과 PR 업무를 지원했습니다.' }
      ],
      gallery: [
        { items: [
          { src: 'koreazinc-1.jpg', caption: '웹사이트 리뉴얼 | 메인', shape: 'page' },
          { src: 'koreazinc-2.jpg', caption: '웹사이트 리뉴얼 | 서브', shape: 'page' }
        ] }
      ]
    },

    {
      id: 'conb',
      category: 'corporate',
      client: 'CONB',
      title: 'B2B 브랜드 커뮤니케이션',
      tags: ['기업PR', 'B2B', 'BTL'],
      period: '2024.09 – 2026.02', role: '서브 AE', share: '30%',
      highlight: null,
      cover: 'conb-1.jpg',
      summary: '업계 컨퍼런스 부스와 사내 브랜드 행사, 회사소개서까지 온·오프라인의 일관된 브랜드 이미지를 형성했습니다.',
      results: [],
      sections: [
        { title: 'Planning', body: '주요 업계 컨퍼런스의 B2B 브랜드 부스와 임직원 대상 사내 브랜드 행사를 기획·운영했습니다. 기업 브랜딩 전략에 맞춰 회사소개서와 홍보물도 기획했습니다.' },
        { title: 'Execution', body: '부스와 사내 행사의 현장 운영을 총괄하고 회사소개서, 홍보물, 브랜드 영상, 보도자료를 만들었습니다.' }
      ],
      gallery: [
        { items: [
          { src: 'conb-1.jpg', caption: '사내 브랜드 행사' },
          { src: 'conb-2.jpg', caption: '컨퍼런스 B2B 브랜드 부스' },
          { src: 'conb-3.jpg', caption: '홍보물' },
          { src: 'conb-4.jpg', caption: '서비스 소개 자료' },
          { src: 'conb-5.jpg', caption: '회사소개서' },
          { src: 'conb-6.jpg', caption: '회사소개서' }
        ] }
      ]
    },

    {
      id: 'bidding',
      category: 'bidding',
      client: 'Bidding',
      title: '공공입찰 · 민간 비딩 제안',
      tags: ['제안서작성', 'IMC', '플래닝'],
      period: '2024.09 – 진행 중', role: 'AE, AP', share: '40%',
      highlight: { value: '10건+', label: '제안 참여' },
      cover: 'bidding-cover.jpg',
      summary: 'RFP 분석과 리서치로 제안의 본질적인 과제를 정의하고, 전략부터 크리에이티브, IMC 실행안까지 하나의 흐름으로 설계합니다.',
      results: [
        { value: '10건+', label: '공공입찰 참여' },
        { value: '5건', label: '전체 제안 낙찰' }
      ],
      sections: [
        { title: 'Planning', body: 'RFP 분석과 팩트북 작성, 기관·타깃·시장 리서치로 핵심 인사이트와 기회요인을 찾습니다.' },
        { title: 'Execution', body: '스토리라인 구성부터 장표 작성과 디자인까지 직접 하고, 크리에이티브팀과 함께 아이디어를 시각물과 영상으로 발전시킵니다.' }
      ],
      gallery: [
        { title: '관광약자 관련 홍보 제안', desc: '타깃별 Pain Point를 분석해 커뮤니케이션 전략을 세우고, 캠페인 영상과 SNS 운영 방안을 제안했습니다.', items: [
          { src: 'bidding-1.jpg', caption: '제안서' },
          { src: 'bidding-2.jpg', caption: '제안서' },
          { src: 'bidding-3.jpg', caption: '제안서' }
        ] },
        { title: '박물관 홍보 제안', desc: 'K-콘텐츠 트렌드 분석으로 콘텐츠를 실제 경험으로 넓히려는 소비자 니즈를 찾고, 홍보 영상의 메시지와 방향을 세웠습니다.', items: [
          { src: 'bidding-4.jpg', caption: '제안서' },
          { src: 'bidding-5.jpg', caption: '제안서' },
          { src: 'bidding-6.jpg', caption: '제안서' }
        ] },
        { title: '기부플랫폼 관련 영상 제안', desc: '기부 트렌드와 경쟁사를 분석해, 직접 참여하며 기부의 가치를 체감하려는 변화를 찾고 핵심 메시지를 세웠습니다.', items: [
          { src: 'bidding-7.jpg', caption: '제안서' },
          { src: 'bidding-8.jpg', caption: '제안서' },
          { src: 'bidding-9.jpg', caption: '제안서' }
        ] }
      ]
    },

    {
      id: 'samsung',
      category: 'bidding',
      client: 'Samsung',
      title: 'Future Insight Map',
      tags: ['리서치', '인사이트', '디자인'],
      period: '2025.11 – 2026.01', role: '담당 AE', share: '30%',
      highlight: null,
      cover: 'samsung-1.jpg',
      summary: '미래 인사이트를 체계적으로 구조화하고 시각화한 인사이트 맵을 제작했습니다.',
      results: [],
      note: '본 프로젝트의 세부 내용은 대외비로 인해 공개하지 않습니다.',
      sections: [],
      gallery: []
    }
  ]
};
