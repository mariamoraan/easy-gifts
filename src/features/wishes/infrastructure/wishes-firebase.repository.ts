import { Wish } from "../domain/entities/wish.entity";
import { WishesRepository } from "../domain/wishes.repository";

export class WishesFirebaseRepository implements WishesRepository {
  public async findWishes(): Promise<Wish[]> {
    return [
      {
        id: "chaleco-bolsillos-zw-collection",
        name: "CHALECO BOLSILLOS ZW COLLECTION",
        description:
          "Chaleco de escote pico y manga sisa. Bolsillos con solapa en delantero. Trabilla ajustable con hebilla en espalda.Cierre frontal con botones.",
        links: [
          {
            name: "CHALECO BOLSILLOS ZW COLLECTION",
            url: "https://www.zara.com/es/es/chaleco-bolsillos-zw-collection-p08412186.html?v1=374711682",
          },
          {
            name: "CHALECO SASTRE",
            url: "https://www.zara.com/es/es/chaleco-sastre-p08902436.html?v1=388132911",
          },
          {
            name: "CHALECO TRABILLA",
            url: "https://www.zara.com/es/es/chaleco-trabilla-p05427765.html?v1=391118003",
          },
        ],
        imageUrls: [
          "https://static.zara.net/assets/public/37b3/dfd0/86bf4611bd8a/cd8113e15e51/08412186712-p/08412186712-p.jpg?ts=1721739505633&w=1126",
          "https://static.zara.net/assets/public/3d35/7509/9e944e498986/c79ce3222138/08412186800-p/08412186800-p.jpg?ts=1721739493672&w=1126",
          "https://static.zara.net/assets/public/90e1/633c/2a1e48b58971/d4788f0289c5/08412186800-e1/08412186800-e1.jpg?ts=1726995210032&w=1126",
          "https://static.zara.net/assets/public/d85c/a913/347d4c76a0de/7c11b34cbd9a/08412186712-a1/08412186712-a1.jpg?ts=1721739505266&w=1126",
          "https://static.zara.net/assets/public/e1c8/ee8f/61e54edcafab/47d0d8e84fed/08412186800-a7/08412186800-a7.jpg?ts=1721739491750&w=1126",
          "https://static.zara.net/assets/public/ee00/c5e2/58a446709e92/e8412aeceba4/05427765712-e1/05427765712-e1.jpg?ts=1719396900806&w=1126",
          "https://static.zara.net/assets/public/4a93/112e/fbf44a37b833/c211cd320835/05427765712-e2/05427765712-e2.jpg?ts=1719396904329&w=1126",
          "https://static.zara.net/assets/public/e197/8101/b2d04e379e67/11795b523a05/05427765712-e3/05427765712-e3.jpg?ts=1719397258439&w=1126",
          "https://static.zara.net/assets/public/47a5/989b/13b84fa38156/e24f57921a7b/08869337756-e1/08869337756-e1.jpg?ts=1723545421383&w=635",
        ],
      },
      {
        id: "chaleco-bolsillos-zw-collection-summer",
        name: "CHALECO BOLSILLOS ZW COLLECTION summer",
        description:
          "Chaleco de escote pico y manga sisa. Bolsillos con solapa en delantero. Trabilla ajustable con hebilla en espalda.Cierre frontal con botones.",
        links: [
          {
            name: "CHALECO TRABILLA",
            url: "https://www.zara.com/es/es/chaleco-trabilla-p05427765.html?v1=391118003",
          },
        ],
      },
      {
        id: "chaleco-bolsillos-zw-collection-winter",
        name: "CHALECO BOLSILLOS ZW COLLECTION winter",
        description:
          "Chaleco de escote pico y manga sisa. Bolsillos con solapa en delantero. Trabilla ajustable con hebilla en espalda.Cierre frontal con botones.",
        links: [
          {
            name: "CHALECO BOLSILLOS ZW COLLECTION",
            url: "https://www.zara.com/es/es/chaleco-bolsillos-zw-collection-p08412186.html?v1=374711682",
          },
        ],
        imageUrls: [
          "https://static.zara.net/assets/public/47a5/989b/13b84fa38156/e24f57921a7b/08869337756-e1/08869337756-e1.jpg?ts=1723545421383&w=635",
        ],
      },
    ];
  }
}
