import { defineStore, acceptHMRUpdate } from "pinia";

const checker = (item, arr) =>
  arr.every((el) => {
    const itemString = JSON.stringify(item).toLowerCase();
    const regex = new RegExp(el, "gi");
    return regex.test(itemString);
  });

export const useSearchStore = defineStore("search", {
  state: () => ({
    request: "",
    list: [
      {
        id: 1,
        title: "Мэйджор Авто Рига",
        address: "г. Москва, Новорижское ш. 8 км от МКАД, вл. 24",
      },
      {
        id: 2,
        title: "Авто Центр Автозаводская",
        address: "г. Москва, ул. Автозаводская, д. 21А",
      },
      {
        id: 3,
        title: "Авто Центр Башиловская",
        address: "г. Москва, ул. Башиловская, д. 2 (м. Савеловская)",
      },
      {
        id: 4,
        title: "Супер Центр Крылатское",
        address: "г. Москва, ул. Осенняя, д. 17",
      },
      {
        id: 5,
        title: "Авто-центр Центр Химки",
        address: "г. Химки, Ленинградское шоссе, вл. 15",
      },
      {
        id: 6,
        title: "Супер Центр Ясенево",
        address: "г. Москва, Новоясеневский проспект, д.8, стр.1",
      },
      {
        id: 7,
        title: "Супер Центр Лахта",
        address: "г. Санкт-Петербург, ул. Савушкина, д. 119, к.4",
      },
      {
        id: 8,
        title: "Супер Центр Пулково",
        address: "г. Санкт-Петербург, Пулковское шоссе, д. 27А",
      },
      {
        id: 9,
        title: "Центр Санрайз - Пискарёвский",
        address: "г. Санкт-Петербург, Проспект Науки, д. 50, к. 2, лит. А",
      },
      {
        id: 10,
        title: "Центр Санрайз - Архангельск",
        address: "г. Архангельск, ул. Октябрят, д. 36",
      },
      {
        id: 11,
        title: "Супер Центр Барнаул",
        address: "г. Барнаул, Правобережный тракт, д. 29А",
      },
      {
        id: 12,
        title: "Фортуна-Авто",
        address: "г. Белгород, ул. Калинина, д. 81.",
      },
      {
        id: 13,
        title: "Сумотори-Авто СМ",
        address: "Приморский край, г. Артем, ул. Тульская, д. 2",
      },
      {
        id: 14,
        title: "Арконт В",
        address: "ул. Землячки, д. 25",
      },
      {
        id: 15,
        title: "Супер Центр Вологда",
        address: "г. Вологда, Окружное шоссе, д. 8А",
      },
      {
        id: 16,
        title: "Центр Санрайз - Воронеж",
        address: "г. Воронеж, ул. 45-й Стрелковой Дивизии, д. 1В",
      },
      {
        id: 17,
        title: "Супер Центр Екатеринбург Восток",
        address: "г. Екатеринбург, Дублер Сибирского тракта, стр. 17А",
      },
      {
        id: 18,
        title: "Супер Центр Екатеринбург Юг",
        address: "г. Екатеринбург, ул. Московская, д. 214А",
      },
      {
        id: 19,
        title: "Супер Центр Ижевск",
        address: "г. Ижевск ул. Молодежная 115",
      },
      {
        id: 20,
        title: "ТеррА",
        address: "664009, г. Иркутск, ул. Ширямова, д. 2/1.",
      },
      {
        id: 21,
        title: "ТрансТехСервис - Казань",
        address: "г. Казань, пр. Победы, д. 194",
      },
      {
        id: 22,
        title: "Плеяды",
        address:
          "Автосалон: г. Калининград, Московский проспект д. 242 Сервис: г. Калининград, ул. Ялтинская 66А",
      },
      {
        id: 23,
        title: "Супер Центр Кемерово",
        address: "г. Кемерово, ул. Рубиновая, д. 1Б",
      },
      {
        id: 24,
        title: "Супер Центр Киров",
        address: "г. Киров, ул. К. Маркса, д. 4",
      },
      {
        id: 25,
        title: "М-СЕРВИС Краснодар",
        address: "г. Краснодар, ул. Уральская, 214А",
      },
      {
        id: 26,
        title: "Супер Центр Красноярск",
        address: "г. Красноярск, ул. Партизана Железняка д. 17 с. 30",
      },
      {
        id: 27,
        title: "Регинас Магнитогорск",
        address: "г.Магнитогорск, ул. Зеленый Лог, д.55",
      },
      {
        id: 28,
        title: "Ланкор",
        address: "Республика Беларусь, г. Минск, пер. Козлова, д. 29",
      },
      {
        id: 29,
        title: "Центр Санрайз - Мурманск",
        address: "г. Мурманск, ул. Домостроительная, д.16",
      },
      {
        id: 30,
        title: "ТрансТехСервис - Набережные Челны",
        address:
          "Республика Татарстан , Набережные Челны г, пр-т Хасана Туфана, 3Б",
      },
      {
        id: 31,
        title: "Супер Центр Нижний Новгород",
        address: "г. Нижний Новгород, ул. Народная, д.41",
      },
      {
        id: 32,
        title: "СВ-Авто",
        address: "г. Новокузнецк, ул. Рудокопровая, д. 10/5",
      },
      {
        id: 33,
        title: "ФАСТАР",
        address: "г. Новосибирск, ул. Станционная, д. 88",
      },
      {
        id: 34,
        title: "СК-Моторс Новый Уренгой",
        address: "г. Новый Уренгой, ул. Промышленная 8/1",
      },
      {
        id: 35,
        title: "Феникс-Авто Премиум",
        address: "г. Омск, ул. Суворова, д. 93",
      },
      {
        id: 36,
        title: "Авиавто",
        address: "г. Оренбург, ул. Беляевская, д. 58",
      },
      {
        id: 37,
        title: "Супер Центр Пермь",
        address: "г. Пермь, шоссе Космонавтов, д. 316Г",
      },
      {
        id: 38,
        title: "Центр Санрайз - Петрозаводск",
        address: "г. Петрозаводск, ул. Маршала Мерецкова, д. 30",
      },
      {
        id: 39,
        title: "Супер Центр Ростов-на-Дону",
        address: "г. Ростов-на-Дону, ул. Пойменная,1д, район ТЦ «МегаМаг»",
      },
      {
        id: 40,
        title: "Супер Центр Самара",
        address:
          "443080, Самарская область, г. Самара, ул. Революционная, 70, литер 38, 38-1, 38-2",
      },
      {
        id: 41,
        title: "Успех Авто +",
        address: "г. Саратов, ул. Орджоникидзе, 131А, корп. 1",
      },
      {
        id: 42,
        title: "СК-Моторс Югра",
        address: "г. Сургут, пр-кт Ленина, зд. 76/1",
      },
      {
        id: 43,
        title: "Арена Авто",
        address: "г. Тольятти, ул. Южное Шоссе, д. 32",
      },
      {
        id: 44,
        title: "Автоград",
        address: "г. Тюмень, ул. Республики, д. 280",
      },
      {
        id: 45,
        title: "Автотехсервис",
        address: "г. Уфа, ул. Силикатная, д. 28/1",
      },
      {
        id: 46,
        title: "Дальтехмашсервис – Хабаровск",
        address: "г. Хабаровск, ул. 65-летия Победы, д. 19",
      },
      {
        id: 47,
        title: "Регинас Челябинск",
        address: "г.Челябинск, Свердловский тракт, 5Р, стр. 3",
      },
      {
        id: 48,
        title: "Дальтехмашсервис – Южно-Сахалинск",
        address: "г. Южно-Сахалинск, ул. Ленина, д. 591",
      },
      {
        id: 49,
        title: "Центр Санрайз - Ярославль",
        address: "г. Ярославль, ул. Полушкина роща, д. 23А",
      },
    ],
  }),
  getters: {
    searchRequest: (state) => {
      return state.request;
    },
    splitToArray(state) {
      return [
        ...new Set(
          state.request
            .toLowerCase()
            .split(" ")
            .filter((item) => item)
        ),
      ];
    },
    requestWords(state) {
      return state.request ? this.splitToArray : [];
    },
    allResult() {
      return this.list.filter((item) => checker(item, this.requestWords));
    },
  },
  actions: {
    changeRequest(event) {
      const { value } = event.target;
      this.request = value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot));
}
