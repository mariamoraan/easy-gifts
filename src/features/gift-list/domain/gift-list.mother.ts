import { Gift, GiftList } from './gift-list';

export class GiftListMother {
  static gifts(): Gift[] {
    return [
      {
        id: 'gift-1',
        name: 'Lego | Flor de Pascua',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis leo auctor, condimentum quam nec, rhoncus odio. Proin pharetra tristique ex, ut vulputate nunc dapibus ac. Duis quis accumsan purus. Suspendisse venenatis accumsan purus a tincidunt. Nullam dignissim eu mi et ornare. Nunc vitae egestas velit. Praesent gravida purus placerat orci scelerisque, vel auctor sapien mollis. Etiam sodales dictum enim. Nulla cursus odio varius lectus tristique congue. Aenean tincidunt diam quis lectus aliquam consectetur. Proin dignissim turpis eu odio blandit laoreet.',
        pictureUrls: [
          'https://www.lego.com/cdn/cs/set/assets/blt5b9064fcb12ba88b/10370_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/bltdf39f10d510ff636/10370_WEB_SEC01_NOBG.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr',
          'https://www.lego.com/cdn/cs/set/assets/blt6c11cf290b94c1ca/10370_WEB_SEC02_NOBG.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt1e3d5fbf2744921a/10370_10340_Lifestyle_Envr_01.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt32c05fffb7eb58c4/10370_Box5_v39.png?format=webply&fit=bounds&quality=70&width=170&height=170&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt9e8df1d90bb42415/10370_Block_Standard_1.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt77b14a99ec81d232/10370_Block_Standard_2.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt77b14a99ec81d232/10370_Block_Standard_2.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blte5e5fe8b88f1e6ea/10370_Block_Standard_3.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5',
        ],

        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/poinsettia-10370?cmp=KAC-INI-GOOGEU-GO-ES-ES-SP-BUY-SHOP-PLA-BP-SP-RN-Shopping&cmp=KAC-INI-GOOGEU-GO-ES_GL-ES-RE-SP-BUY-CREATE-MB_ALWAYS_ON-SHOP-BP-PMAX-ALL-CIDNA00000-PMAX-HIGH_PRIORITY&ef_id=Cj0KCQjwsJO4BhDoARIsADDv4vANzbwvdvNIF9Na5c65NqHQEl08ZN3pWy3LVWPWv-U8r1qVc9O_CJwaArTuEALw_wcB%3AG%3As&s_kwcid=AL%21933%213%21%21%21%21x%21%21%2119820739066%21&gad_source=1',
          },
          {
            label: 'Link 1',
            url: 'https://www.lego.com/es-es/product/poinsettia-10370?cmp=KAC-INI-GOOGEU-GO-ES-ES-SP-BUY-SHOP-PLA-BP-SP-RN-Shopping&cmp=KAC-INI-GOOGEU-GO-ES_GL-ES-RE-SP-BUY-CREATE-MB_ALWAYS_ON-SHOP-BP-PMAX-ALL-CIDNA00000-PMAX-HIGH_PRIORITY&ef_id=Cj0KCQjwsJO4BhDoARIsADDv4vANzbwvdvNIF9Na5c65NqHQEl08ZN3pWy3LVWPWv-U8r1qVc9O_CJwaArTuEALw_wcB%3AG%3As&s_kwcid=AL%21933%213%21%21%21%21x%21%21%2119820739066%21',
          },
        ],
      },
      {
        id: 'gift-2',
        name: 'Lego | Llama de suministros',
        pictureUrls: [
          'https://www.lego.com/cdn/cs/set/assets/blt7023c0abc89347a3/77071_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt02ce515d698c8877/77071_boxprod_v39.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/bltb6df53efc916ac7a/77071_Lifestyle_cons_05.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/bltfe34128b31f66234/77071_Lifestyle_cons_03.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt92e489e0eac40570/77071_Lifestyle_cons_04.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
          'https://www.lego.com/cdn/cs/set/assets/blt3cee86e9882c3983/77071_Lifestyle_envr.jpg?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        ],
        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/supply-llama-77071',
          },
        ],
      },
      {
        id: 'gift-3',
        name: 'Lego | Disney Tim Burton: Pesadilla antes de Navidad',
        pictureUrls: [
          'https://www.lego.com/cdn/cs/set/assets/blta1405340d716cd20/21351_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        ],
        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/disney-tim-burton-s-the-nightmare-before-christmas-21351',
          },
        ],
      },
      {
        id: 'gift-4',
        name: 'Lego | The Office',
        pictureUrls: [
          'https://www.lego.com/cdn/cs/set/assets/blt07d89d3bb6115752/21336.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        ],
        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/the-office-21336',
          },
        ],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis leo auctor, condimentum quam nec, rhoncus odio. Proin pharetra tristique ex, ut vulputate nunc dapibus ac. Duis quis accumsan purus. Suspendisse venenatis accumsan purus a tincidunt. Nullam dignissim eu mi et ornare. Nunc vitae egestas velit. Praesent gravida purus placerat orci scelerisque, vel auctor sapien mollis. Etiam sodales dictum enim. Nulla cursus odio varius lectus tristique congue. Aenean tincidunt diam quis lectus aliquam consectetur. Proin dignissim turpis eu odio blandit laoreet.',
      },
      {
        id: 'gift-5',
        name: 'Lego | The Office',
        pictureUrls: [
          'https://www.lego.com/cdn/cs/set/assets/blt6a8cb14aa4efef08/77092.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        ],
        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/great-deku-tree-2-in-1-77092',
          },
        ],
      },
      {
        id: 'gift-6',
        name: 'Lego | Gran Árbol Deku “2 en 1”',
        pictureUrls: [
          'https://www.lego.com/cdn/cs/set/assets/blt3c4e5efcccc53a93/10339_Prod.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5',
        ],
        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/santa-s-post-office-10339?icmp=HP-SHCC-Standard-NO_CC_Block_10339_Winter_Village_Post_Office_Exclusive_Still_Life_HP-EX-NO-XRX6FTM4LV',
          },
        ],
      },
      {
        id: 'gift-7',
        name: 'Lego | Gato Bicolor',
        urls: [
          {
            label: 'Link',
            url: 'https://www.lego.com/es-es/product/tuxedo-cat-21349',
          },
        ],
      },
    ];
  }

  static giftList(): GiftList {
    return {
      id: 'gift-list-1',
      name: 'General',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu rutrum enim, auctor lacinia nisl. Curabitur venenatis commodo vulputate. Curabitur mollis orci id risus consectetur viverra. ',
      owner: {
        userId: 'user-1',
        name: 'María Moran Luaces',
      },
      gifts: this.gifts(),
    };
  }
}
