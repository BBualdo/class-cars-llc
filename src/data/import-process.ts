interface ImportProcess {
  id: string;
  title: string;
  description: string;
}

const importProcess: Array<ImportProcess> = [
  {
    id: "1",
    title: "Selekcja Pojazdu",
    description: `Rozpocznij od wybrania pojazdu, który Cię interesuje, lub bezpośredniego kontaktu w celu przeszukania naszej bazy danych, aby znaleźć poszukiwany model samochodu.`,
  },
  {
    id: "2",
    title: "Doradztwo w Zakresie Wyboru",
    description:
      "Skorzystaj z naszej konsultacji, aby uzyskać szczegółowe informacje i porady na temat wyselekcjonowanego pojazdu.",
  },
  {
    id: "3",
    title: "Podpisanie Umowy i Wpłata Zadatku",
    description:
      "Po podjęciu decyzji, formalizujemy proces poprzez zawarcie umowy i wpłacenie zaliczki, zapewniając tym samym zabezpieczenie transakcji.",
  },
  {
    id: "4",
    title: "Uczestnictwo w Aukcji",
    description:
      "Będziesz miał możliwość uczestniczenia w aukcji, gdzie wspólnie podejmiemy decyzje dotyczące licytacji wybranego pojazdu.",
  },
  {
    id: "5",
    title: "Finalizacja Transakcji",
    description:
      "W przypadku udanej licytacji, ostateczna płatność powinna zostać dokonana w ciągu 48 godzin, aby zakończyć proces zakupu.",
  },
  {
    id: "6",
    title: "Zarządzanie Transportem",
    description:
      "Po zakupie zajmiemy się organizacją i koordynacją transportu pojazdu do wybranego miejsca docelowego.",
  },
  {
    id: "7",
    title: "Procedury Celne i Opłaty",
    description:
      "Przeprowadzimy wszystkie niezbędne procedury celne i zajmiemy się obliczeniem oraz uregulowaniem wszelkich opłat związanych z importem pojazdu.",
  },
  {
    id: "8",
    title: "Dostawa i Dokumentacja",
    description:
      "Na zakończenie, pojazd zostanie dostarczony wraz z pełnym zestawem dokumentów, co zapewni Ci bezproblemowe przejęcie własności.",
  },
];

export default importProcess;
