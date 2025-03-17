// Define product type for better type safety
export type Product = {
  id: string
  name: string
  shortDescription: string
  description: string
  price: number
  image: string
  category: "zodiac" | "places" | "both" // Category the product belongs to
  isBestSeller: boolean // Flag for best seller products
  // Additional fields specific to product types
  zodiacSign?: string
  scentNotes?: string
  burnTime?: number
  weight?: number
  compatibility?: string
  location?: string // For places products
  inspiration?: string // For places products
}

// Zodiac products with updated structure
export const zodiacProducts: Product[] = [
  {
    id: "aries",
    name: "Ấm áp Bạch Dương",
    zodiacSign: "Bạch Dương (21/3 - 19/4)",
    shortDescription: "Hương thơm táo bạo và tràn đầy năng lượng cho Bạch Dương nhiệt huyết",
    description:
      "Thắp sáng ngọn lửa bên trong bạn với nến thơm lấy cảm hứng từ Bạch Dương. Hương thơm mạnh mẽ, kết hợp giữa các nốt cay nồng và ấm áp, hoàn hảo cho những người đầy đam mê và phiêu lưu.",
    price: 70000,
    image: "/src/assets/images/aries.jpg",
    scentNotes: "Quế, Tiêu đen, Gỗ tuyết tùng, Hổ phách",
    burnTime: 4,
    weight: 250,
    compatibility: "Hòa hợp nhất với nến Sư Tử và Nhân Mã để tạo ra sự cân bằng của nguyên tố lửa.",
    category: "zodiac",
    isBestSeller: true,
  },
  {
    id: "taurus",
    name: "Bộc trực Kim Ngưu",
    zodiacSign: "Kim Ngưu (20/4 - 20/5)",
    shortDescription: "Hương thơm sang trọng và ấm áp dành cho Kim Ngưu vững vàng",
    description:
      "Tận hưởng sự thư giãn và xa hoa với nến thơm Kim Ngưu. Hương thơm phong phú và trầm ấm, tạo nên không gian đầy lôi cuốn, phù hợp với những người yêu thích sự tinh tế và thoải mái.",
    price: 70000,
    image: "/src/assets/images/taurus.jpg",
    scentNotes: "Vani, Gỗ đàn hương, Hoắc hương, Hoa hồng",
    burnTime: 4,
    weight: 250,
    compatibility: "Kết hợp tuyệt vời với nến Xử Nữ và Ma Kết để tạo không gian thư thái.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "gemini",
    name: "Nhiệt huyết Song Tử",
    zodiacSign: "Song Tử (21/5 - 20/6)",
    shortDescription: "Hương thơm rực rỡ và độc đáo cho Song Tử tò mò",
    description:
      "Tôn vinh sự linh hoạt với nến thơm Song Tử. Hương thơm tươi sáng, kết hợp giữa hương cam chanh và hoa nhẹ nhàng, phản ánh bản chất thích nghi và tràn đầy năng lượng của Song Tử.",
    price: 70000,
    image: "/src/assets/images/gemini.jpg",
    scentNotes: "Cam Bergamot, Chanh, Hoa Nhài, Bạc Hà",
    burnTime: 4,
    weight: 250,
    compatibility: "Tuyệt vời khi kết hợp với nến Thiên Bình và Bảo Bình để kích thích trí tuệ.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "cancer",
    name: "Nhạy cảm Cự Giải",
    zodiacSign: "Cự Giải (21/6 - 22/7)",
    shortDescription: "Hương thơm dịu nhẹ và êm đềm dành cho Cự Giải nhạy cảm",
    description:
      "Đắm mình trong sự ấm áp với nến thơm Cự Giải. Hương thơm nhẹ nhàng và gợi nhớ đến mái ấm, phù hợp với những người giàu cảm xúc và tinh tế.",
    price: 70000,
    image: "/src/assets/images/cancer.jpg",
    scentNotes: "Dừa, Muối biển, Hoa nhài, Vani",
    burnTime: 4,
    weight: 250,
    compatibility: "Hoàn hảo khi kết hợp với nến Bọ Cạp và Song Ngư để tạo không gian an yên.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "leo",
    name: "Kiêu hãnh Sư Tử",
    zodiacSign: "Sư Tử (23/7 - 22/8)",
    shortDescription: "Hương thơm quyến rũ và sang trọng dành cho Sư Tử lôi cuốn",
    description:
      "Tỏa sáng với nến thơm Sư Tử. Hương thơm mạnh mẽ và đầy cuốn hút, giúp bạn luôn tự tin và tràn đầy sức sống.",
    price: 70000,
    image: "/src/assets/images/leo.jpg",
    scentNotes: "Hổ phách, Cam, Quế, Vani",
    burnTime: 4,
    weight: 250,
    compatibility: "Tăng cường năng lượng khi kết hợp với nến Bạch Dương và Nhân Mã.",
    category: "zodiac",
    isBestSeller: true,
  },
  {
    id: "virgo",
    name: "Tinh Khiết Xử Nữ",
    zodiacSign: "Xử Nữ (23/8 - 22/9)",
    shortDescription: "Hương thơm thanh mát và tinh tế dành cho Xử Nữ tỉ mỉ",
    description:
      "Tạo ra không gian tươi mới với nến thơm Xử Nữ. Hương thơm nhẹ nhàng và thanh sạch, giúp cân bằng và làm dịu tâm trí.",
    price: 70000,
    image: "/src/assets/images/virgo.jpg",
    scentNotes: "Oải hương, Bạch đàn, Chanh, Xô thơm",
    burnTime: 4,
    weight: 250,
    compatibility: "Hoàn hảo khi kết hợp với nến Kim Ngưu và Ma Kết để tạo không gian thư giãn.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "libra",
    name: "Thanh lịch Thiên Bình",
    zodiacSign: "Thiên Bình (23/9 - 22/10)",
    shortDescription: "Hương thơm tinh tế và hài hòa dành cho Thiên Bình yêu cái đẹp",
    description:
      "Mang đến sự cân bằng với nến thơm Thiên Bình. Hương thơm nhẹ nhàng và sang trọng, giúp tạo không gian hài hòa và thư thái.",
    price: 70000,
    image: "/src/assets/images/libra.jpg",
    scentNotes: "Hoa hồng, Vani, Gỗ đàn hương, Cam Bergamot",
    burnTime: 4,
    weight: 250,
    compatibility: "Lý tưởng khi kết hợp với nến Song Tử và Bảo Bình để tạo bầu không khí hài hòa.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "scorpio",
    name: "Bí Ẩn Bọ Cạp",
    zodiacSign: "Bọ Cạp (23/10 - 21/11)",
    shortDescription: "Hương thơm nồng nàn và huyền bí dành cho Bọ Cạp mãnh liệt",
    description:
      "Tôn vinh sự bí ẩn với nến thơm Bọ Cạp. Hương thơm mạnh mẽ và quyến rũ, hoàn hảo cho những tâm hồn đam mê.",
    price: 70000,
    image: "/src/assets/images/scorpio.jpg",
    scentNotes: "Hoắc hương, Tiêu đen, Vani, Xạ hương",
    burnTime: 4,
    weight: 250,
    compatibility: "Kết hợp tuyệt vời với nến Cự Giải và Song Ngư để tăng chiều sâu cảm xúc.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "sagittarius",
    name: "Hào sảng Nhân Mã",
    zodiacSign: "Nhân Mã (22/11 - 21/12)",
    shortDescription: "Hương thơm phóng khoáng và sôi động dành cho Nhân Mã tự do",
    description:
      "Khơi dậy đam mê khám phá với nến thơm Nhân Mã. Hương thơm tươi mới, tràn đầy sức sống, đưa bạn đến những chân trời mới và những hành trình thú vị.",
    price: 70000,
    image: "/src/assets/images/sagittarius.jpg",
    scentNotes: "Gỗ tuyết tùng, Cam, Quế, Đinh hương",
    burnTime: 4,
    weight: 250,
    compatibility: "Truyền cảm hứng khi kết hợp với nến Bạch Dương và Sư Tử.",
    category: "zodiac",
    isBestSeller: true,
  },
  {
    id: "capricorn",
    name: "Nội tâm Ma Kết",
    zodiacSign: "Ma Kết (22/12 - 19/1)",
    shortDescription: "Hương thơm tinh tế và vững chắc dành cho Ma Kết kiên định",
    description:
      "Chinh phục mọi thử thách với nến thơm Ma Kết. Hương thơm trầm ấm và sang trọng, giúp tăng sự tập trung và định hướng mục tiêu.",
    price: 70000,
    image: "/src/assets/images/capricorn.jpg",
    scentNotes: "Rêu sồi, Cỏ hương bài, Cam Bergamot, Hổ phách",
    burnTime: 4,
    weight: 250,
    compatibility: "Tạo không gian làm việc lý tưởng khi kết hợp với nến Kim Ngưu và Xử Nữ.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "aquarius",
    name: "Kiên định Bảo Bình",
    zodiacSign: "Bảo Bình (20/1 - 18/2)",
    shortDescription: "Hương thơm độc đáo và thanh mát dành cho Bảo Bình sáng tạo",
    description:
      "Phá vỡ giới hạn với nến thơm Bảo Bình. Hương thơm tươi mới và kích thích tư duy, hoàn hảo cho những bộ óc sáng tạo và tiên phong.",
    price: 70000,
    image: "/src/assets/images/aquarius.jpg",
    scentNotes: "Bạc hà, Bạch đàn, Oải hương, Cam chanh",
    burnTime: 4,
    weight: 250,
    compatibility: "Thúc đẩy sáng tạo khi kết hợp với nến Song Tử và Thiên Bình.",
    category: "zodiac",
    isBestSeller: false,
  },
  {
    id: "pisces",
    name: "Thánh thiện Song Ngư",
    zodiacSign: "Song Ngư (19/2 - 20/3)",
    shortDescription: "Hương thơm nhẹ nhàng và bay bổng dành cho Song Ngư mơ mộng",
    description:
      "Đắm chìm vào thế giới của những giấc mơ với nến thơm Song Ngư. Hương thơm dịu dàng và đầy cảm hứng, đưa bạn đến những miền đất huyền bí.",
    price: 70000,
    image: "/src/assets/images/pisces.jpg",
    scentNotes: "Hoa súng, Hoa nhài, Gỗ đàn hương, Vani",
    burnTime: 4,
    weight: 250,
    compatibility: "Tạo không gian lãng mạn khi kết hợp với nến Cự Giải và Bọ Cạp.",
    category: "zodiac",
    isBestSeller: false,
  },
]

// New places products
export const placesProducts: Product[] = [
  {
    id: "hanoi",
    name: "Phố Cổ Hà Nội",
    shortDescription: "Hương thơm ấm áp gợi nhớ về phố cổ Hà Nội thanh bình",
    description:
      "Đắm chìm trong không gian cổ kính của Hà Nội với hương thơm ấm áp của trà hoa nhài và gỗ đàn hương. Mang đến cảm giác bình yên và hoài niệm về những con phố nhỏ đầy thơ mộng.",
    price: 159000,
    image: "/src/assets/images/hanoi.jpg",
    scentNotes: "Trà hoa nhài, Gỗ đàn hương, Quế, Hoa sen",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: true,
    location: "Hà Nội, Việt Nam",
    inspiration: "Phố cổ Hà Nội với những ngôi nhà cổ kính và hương vị trà đặc trưng.",
  },
  {
    id: "hoian",
    name: "Đèn Lồng Hội An",
    shortDescription: "Hương thơm rực rỡ như những chiếc đèn lồng Hội An",
    description:
      "Thắp sáng không gian sống với hương thơm lấy cảm hứng từ phố cổ Hội An. Sự kết hợp giữa hoa lài, cam quýt và gỗ đàn hương tạo nên không gian ấm áp như ánh sáng từ những chiếc đèn lồng rực rỡ.",
    price: 159000,
    image: "/src/assets/images/hoian.jpg",
    scentNotes: "Hoa lài, Cam quýt, Gỗ đàn hương, Vani",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: true,
    location: "Hội An, Quảng Nam, Việt Nam",
    inspiration: "Đêm rằm phố cổ Hội An với hàng ngàn chiếc đèn lồng rực rỡ.",
  },
  {
    id: "dalat",
    name: "Sương Mai Đà Lạt",
    shortDescription: "Hương thơm mát lành của buổi sáng sớm Đà Lạt",
    description:
      "Cảm nhận không khí trong lành của Đà Lạt buổi sớm mai với hương thơm tinh khiết của hoa lavender, thông và sương sớm. Mang đến cảm giác thư thái và mát mẻ cho không gian sống.",
    price: 159000,
    image: "/src/assets/images/dalat.jpg",
    scentNotes: "Lavender, Thông, Hoa hồng, Sương sớm",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: false,
    location: "Đà Lạt, Lâm Đồng, Việt Nam",
    inspiration: "Buổi sáng sớm Đà Lạt với làn sương mờ ảo bao phủ thành phố.",
  },
  {
    id: "halong",
    name: "Vịnh Hạ Long",
    shortDescription: "Hương thơm mát lành của biển cả và đá vôi Hạ Long",
    description:
      "Đắm mình trong vẻ đẹp hùng vĩ của Vịnh Hạ Long với hương thơm của biển cả, muối biển và gỗ trầm. Mang đến cảm giác tươi mát và thư thái như đang du ngoạn trên vịnh biển kỳ quan.",
    price: 159000,
    image: "/src/assets/images/halong.jpg",
    scentNotes: "Muối biển, Gỗ trầm, Rong biển, Khoáng chất",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: false,
    location: "Vịnh Hạ Long, Quảng Ninh, Việt Nam",
    inspiration: "Khung cảnh hùng vĩ của Vịnh Hạ Long với những hòn đảo đá vôi.",
  },
  {
    id: "saigon",
    name: "Sài Gòn Về Đêm",
    shortDescription: "Hương thơm sôi động của Sài Gòn về đêm",
    description:
      "Cảm nhận nhịp sống sôi động của Sài Gòn về đêm với hương thơm nồng nàn của cà phê, quế và hổ phách. Mang đến không gian ấm áp và tràn đầy năng lượng cho ngôi nhà của bạn.",
    price: 159000,
    image: "/src/assets/images/saigon.jpg",
    scentNotes: "Cà phê, Quế, Hổ phách, Vani",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: true,
    location: "Thành phố Hồ Chí Minh, Việt Nam",
    inspiration: "Đêm Sài Gòn với ánh đèn rực rỡ và nhịp sống không ngừng nghỉ.",
  },
  {
    id: "mekong",
    name: "Miền Tây Sông Nước",
    shortDescription: "Hương thơm ngọt ngào của miền Tây sông nước",
    description:
      "Đắm chìm trong không gian miền Tây sông nước với hương thơm của dừa, trái cây nhiệt đới và hoa bưởi. Mang đến cảm giác thư thái và bình yên như đang trôi trên dòng sông Mekong hiền hòa.",
    price: 159000,
    image: "/src/assets/images/mekong.jpg",
    scentNotes: "Dừa, Trái cây nhiệt đới, Hoa bưởi, Mật ong",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: false,
    location: "Đồng bằng sông Cửu Long, Việt Nam",
    inspiration: "Khung cảnh miền Tây sông nước với những vườn trái cây sum suê.",
  },
  {
    id: "sapa",
    name: "Ruộng Bậc Thang Sapa",
    shortDescription: "Hương thơm tinh khiết của núi rừng Tây Bắc",
    description:
      "Cảm nhận không khí trong lành của núi rừng Tây Bắc với hương thơm của lá trà, thảo mộc và sương núi. Mang đến cảm giác tinh khiết và thư thái như đang đứng giữa những thửa ruộng bậc thang Sapa.",
    price: 159000,
    image: "/src/assets/images/sapa.jpg",
    scentNotes: "Lá trà, Thảo mộc, Sương núi, Gỗ thông",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: false,
    location: "Sapa, Lào Cai, Việt Nam",
    inspiration: "Ruộng bậc thang Sapa với làn sương mờ ảo bao phủ.",
  },
  {
    id: "huong",
    name: "Chùa Hương Thanh Tịnh",
    shortDescription: "Hương thơm thanh tịnh của chốn tâm linh",
    description:
      "Đắm mình trong không gian thanh tịnh của chùa Hương với hương thơm của trầm hương, hoa sen và gỗ đàn hương. Mang đến cảm giác bình yên và tĩnh tâm cho không gian sống.",
    price: 159000,
    image: "/src/assets/images/huong.jpg",
    scentNotes: "Trầm hương, Hoa sen, Gỗ đàn hương, Hương nhang",
    burnTime: 5,
    weight: 250,
    category: "places",
    isBestSeller: false,
    location: "Chùa Hương, Hà Nội, Việt Nam",
    inspiration: "Không gian thanh tịnh của chùa Hương với hương trầm lan tỏa.",
  },
]

// Create a combined array of all products
export const allProducts: Product[] = [...zodiacProducts, ...placesProducts]

// Get best seller products
export const bestSellerProducts: Product[] = allProducts.filter((product) => product.isBestSeller)

// Helper function to get products by category
export const getProductsByCategory = (category: "zodiac" | "places" | "best-seller") => {
  if (category === "best-seller") {
    return bestSellerProducts
  } else {
    return allProducts.filter((product) => product.category === category)
  }
}

