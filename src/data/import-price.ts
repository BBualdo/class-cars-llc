interface ImportPrice {
  id: string;
  title: string;
  description: string;
}

const importPrice: Array<ImportPrice> = [
  {
    id: "1",
    title: "Zabezpieczenie Transakcji - Kaucja",
    description:
      "Ta opłata stanowi gwarancję uczciwości transakcji. W sytuacji, gdy klient nie dokona zapłaty za zakupiony pojazd, dom aukcyjny może nałożyć karę w wysokości 10-15% zaoferowanej kwoty. W przypadku nieudanej licytacji, kaucja może być przeniesiona na następną aukcję lub zwrócona klientowi w ciągu 48 godzin. Firma ClassCars wymaga podpisania umowy i wpłacenia kaucji przed udziałem w aukcji.",
  },
  {
    id: "2",
    title: "Opłaty Aukcyjne",
    description:
      "Są ustalane przez domy aukcyjne i zależą od wartości pojazdu, średnia opłata wynosi XXX dolarów.",
  },
  {
    id: "3",
    title: "Koszty Transportu Morskiego",
    description:
      "Dla standardowego samochodu osobowego opłata za fracht morski zaczyna się od XXX dolarów. Dodatkowo, transport lądowy z miejsca aukcji do portu wynosi od XXX dolarów.",
  },
  {
    id: "4",
    title: "Cło Importowe",
    description:
      "W Unii Europejskiej cło dla samochodów osobowych wynosi 10%, niezależnie od portu docelowego. Pojazdy zabytkowe i kolekcjonerskie są zwolnione z tego obowiązku.",
  },
  {
    id: "5",
    title: "Podatek VAT",
    description:
      "Wysokość podatku VAT różni się w zależności od portu docelowego - 19% dla Niemiec (Bremerhaven), 21% dla Holandii (Rotterdam), 23% dla Polski (Gdynia). Samochody zabytkowe (starsze niż 30 lat) podlegają obniżonej stawce VAT wynoszącej 7%.",
  },
  {
    id: "6",
    title: "Podatek Akcyzowy",
    description:
      "Stawka akcyzy wynosi 3,1% dla pojazdów z silnikiem do 2,0 litrów, a 18,6% dla silników o większej pojemności. Pojazdy zabytkowe, kolekcjonerskie oraz samochody elektryczne są zwolnione z tego podatku. Dla samochodów hybrydowych obowiązują specjalne stawki akcyzy, które są niższe w porównaniu do tradycyjnych pojazdów spalinowych. Dla pojazdów hybrydowych stawki akcyzowe wynoszą 1,55% dla silników do 2000 cm3 i 9,3% dla silników o pojemności od 2001 do 3500 cm3.",
  },
  {
    id: "7",
    title: "Opłata za Usługi Firma ClassCars",
    description:
      "Firma pobiera opłatę w wysokości XXX dolarów za kompleksową obsługę procesu importu i załatwienie wszystkich formalności.",
  },
];

export default importPrice;
