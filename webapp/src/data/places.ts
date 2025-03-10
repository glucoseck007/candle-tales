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

// Places products with updated structure
export const placeProducts: Product[] = [
  {
    id: "hanoi",
    name: "Hà Nội",
    shortDescription: "Hương thơm gợi nhớ những con phố cổ và nét thanh lịch của Hà Nội.",
    description:
      "Lấy cảm hứng từ thủ đô ngàn năm văn hiến, nến Hà Nội mang đến sự pha trộn tinh tế giữa hương hoa nhài, gỗ đàn hương và trà xanh, tái hiện vẻ đẹp cổ kính và yên bình của thành phố này.",
    price: 139000,
    image: "/src/assets/images/hanoi.jpg",
    scentNotes: "Hoa nhài, Gỗ đàn hương, Trà xanh",
    burnTime: 4,
    weight: 250,
    location: "Hà Nội, Việt Nam",
    inspiration: "Những con phố cổ, hương trà sen và nét thanh lịch của người Hà Nội.",
    category: "places",
    isBestSeller: true,
  },
  {
    id: "dalat",
    name: "Đà Lạt",
    shortDescription: "Một hương thơm lãng mạn gợi nhớ không khí se lạnh của Đà Lạt.",
    description:
      "Mang đến không gian thơ mộng của Đà Lạt với sự hòa quyện giữa hương oải hương, thông và sương sớm. Một sự lựa chọn hoàn hảo cho những ai yêu thích vẻ đẹp nhẹ nhàng và quyến rũ của thành phố ngàn hoa.",
    price: 139000,
    image: "/src/assets/images/dalat.jpg",
    scentNotes: "Oải hương, Thông, Sương sớm",
    burnTime: 4,
    weight: 250,
    location: "Đà Lạt, Việt Nam",
    inspiration: "Những đồi thông, không khí se lạnh và sự bình yên của Đà Lạt.",
    category: "places",
    isBestSeller: true,
  },
  {
    id: "danang",
    name: "Đà Nẵng",
    shortDescription: "Hương thơm biển cả sảng khoái, tái hiện vẻ đẹp của Đà Nẵng.",
    description:
      "Lấy cảm hứng từ thành phố biển xinh đẹp, nến Đà Nẵng mang đến sự kết hợp hoàn hảo giữa hương biển mặn mòi, dừa xanh và ánh nắng nhiệt đới, gợi nhớ những ngày hè thư giãn bên bờ biển.",
    price: 139000,
    image: "/src/assets/images/danang.jpg",
    scentNotes: "Biển, Dừa, Ánh nắng nhiệt đới",
    burnTime: 4,
    weight: 250,
    location: "Đà Nẵng, Việt Nam",
    inspiration: "Những bãi biển dài, cầu Rồng rực rỡ và không khí trong lành của Đà Nẵng.",
    category: "places",
    isBestSeller: true,
  }
];
