interface ImportProcess {
  id: string;
  title: string;
  description: string;
}

const importProcess: Array<ImportProcess> = [
  {
    id: "1",
    title: "Selekcja Pojazdu",
    description: `
    <p>
    Rozpocznij od wybrania lub wyszukania pojazdu, który Cię interesuje. Samochody możesz znaleźć na aukcjach takich jak <a href="https://www.emiratesauction.com" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">Emirates Auction</a> czy <a href="https://www.copartmea.com" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">Copart MEA</a>, lub na stronach z ogłoszeniami, takich jak <a href="https://uae.dubizzle.com" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">Dubizzle</a>, <a href="https://www.dubicars.com" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">Dubicars</a> i <a href="https://www.yallamotor.com" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">Yallamotor</a>. Możesz również przejrzeć naszą stronę na Facebooku <a href="https://www.facebook.com/ClassCars.LLC/" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">ClassCars LLC</a> lub dołączyć do naszej grupy na Telegramie <a href="https://t.me/+wrcTDAu0w6oxMTI8" target="_blank" class="border-b border-white hover:text-gold transition-all duration-200">ClassCars Telegram</a>, aby zobaczyć naszą szeroką ofertę samochodów dostępnych w Dubaju.
    </p>
    <p>
    Jeśli masz już na myśli konkretny model, skontaktuj się z nami bezpośrednio, a nasi specjaliści pomogą Ci przeszukać naszą bazę danych, aby znaleźć dokładnie ten pojazd, którego szukasz. Dzięki naszemu doświadczeniu i rozległym kontaktom, jesteśmy w stanie zaoferować samochody, które spełnią Twoje najwyższe oczekiwania.
    </p>
    `,
  },
  {
    id: "2",
    title: "Doradztwo i inspekcja auta w Dubaju",
    description: `
    <p>
    Skorzystaj z naszej konsultacji, aby uzyskać szczegółowe informacje i porady na temat wyselekcjonowanego pojazdu. Klient może wybrać samochód z naszej oferty dostępnej w Dubaju, USA czy Szwecji. Jeśli znalazłeś interesujący pojazd w internecie lub na aukcjach w Dubaju, możemy przeprowadzić odpłatną inspekcję wybranego przez Ciebie samochodu. Posiadamy zespół specjalistów na miejscu, co pozwala nam na przeprowadzenie profesjonalnych inspekcji bez problemu, nawet dla klientów znajdujących się w Polsce.
    </p>
    <p>
    Naszym nadrzędnym celem jest import samochodów pewnych i zweryfikowanych, dlatego opracowaliśmy autorski program sprawdzania aut przed zakupem, który gwarantuje, że nic nie umknie naszej uwadze. Nasi eksperci dokładnie ocenią stan techniczny pojazdu, analizując wszystko, od powłoki lakierniczej po stan zawieszenia oraz silnika. Nasza inspekcja obejmuje wykonanie ponad 150 zdjęć samochodu, co pozwala na szczegółową ocenę jego stanu i dostarcza pełny obraz pojazdu. 
    </p>
    <a class="cursor-pointer gradient-gold text-black hover:gradient-gold_hover rounded-full text-center font-bold transition-all duration-200 xs:px-4 xs:py-2 md:px-12 md:py-4">Zleć inspekcję samochodu w Dubaju</a>
    <p>
    Ponadto, pomożemy Ci ocenić opłacalność zakupu, uwzględniając wszystkie koszty związane z importem, takie jak transport, cła, podatki i rejestracja pojazdu w Europie. Dzięki naszej wiedzy i doświadczeniu, będziesz mógł podjąć świadomą decyzję, mając pewność, że wybrany pojazd spełnia wszystkie Twoje wymagania i oczekiwania.
    </p>
    <p>
    Jesteśmy tutaj, aby zapewnić Ci pełne wsparcie na każdym etapie zakupu, aby cały proces był jdla Ciebie jak najbardziej bezpieczny i korzystny dla Ciebie.
    </p>
    `,
  },
  {
    id: "3",
    title: "Podpisanie Umowy i Wpłata Zadatku",
    description: `
    <p>
    Po podjęciu decyzji o zakupie, formalizujemy proces poprzez zawarcie umowy i wpłacenie zadatku. Umowa precyzyjnie określa warunki transakcji, w tym szczegóły dotyczące wybranego pojazdu oraz harmonogram płatności. Nasz zespół przygotowuje wszystkie niezbędne dokumenty, aby zapewnić przejrzystość i bezpieczeństwo całego procesu.
    </p>
    <p>
    Podpisanie umowy jest kluczowym krokiem, który potwierdza Twoje poważne intencje zakupu oraz zabezpiecza transakcję. Zadatkowana kwota, którą wpłacasz na nasze konto, stanowi zabezpieczenie zarówno dla Ciebie, jak i dla nas, co pozwala nam na rozpoczęcie dalszych działań związanych z importem pojazdu.
    </p>
    <p>
    Dzięki naszej umowie masz pewność, że wszystkie kroki zostaną zrealizowane zgodnie z ustalonym planem, a my będziemy mogli efektywnie zarządzać całym procesem. ClassCars dba o to, aby wszystkie formalności były załatwiane zgodnie z obowiązującymi przepisami prawnymi, co daje Ci gwarancję bezpiecznej i bezproblemowej transakcji.
    </p>
    `,
  },
  {
    id: "4",
    title: "Aukcje samochodów z Dubaju",
    description: `
    <p>
    Jeśli preferujesz bezpośrednie uczestnictwo w aukcji samochodowej, oferujemy możliwość licytowania pojazdu razem z nami. Podczas aukcji będziemy wspólnie podejmować decyzje dotyczące licytacji wybranego przez Ciebie pojazdu. Przed przystąpieniem do aukcji określimy maksymalny budżet, jaki jesteś gotów przeznaczyć na zakup samochodu, co pozwoli nam skutecznie zarządzać licytacją w Twoim imieniu.
    </p>
    <p>
    Aby zapewnić bezpieczeństwo transakcji, licytowanie w imieniu klienta wiąże się z wpłatą kaucji zabezpieczającej. Kaucja ta, w wysokości <span class="text-gold">1000 USD</span>, jest niezbędna w razie, gdyby klient po wygranej aukcji nie opłacił auta w ustalonym terminie. W takiej sytuacji, nasza firma jest zobowiązana do zapłacenia kary, dlatego kaucja zabezpiecza nas przed ewentualnymi stratami.
    </p>
    <p>
    Uczestnicząc w aukcji z naszym wsparciem, masz pewność, że cały proces licytacji przebiegnie sprawnie i bezpiecznie. Nasz zespół ekspertów będzie na bieżąco monitorować przebieg aukcji i doradzać w kwestii najlepszych strategii licytacyjnych, aby zwiększyć Twoje szanse na zakup wymarzonego samochodu w korzystnej cenie.
    </p>
    <p>
    Dzięki naszym usługom możesz licytować z pełnym zaufaniem, wiedząc, że masz za sobą profesjonalny zespół, który zadba o każdy szczegół transakcji. Po zakończeniu aukcji i wygraniu licytacji, zajmiemy się wszystkimi dalszymi krokami związanymi z importem pojazdu, w tym transportem, odprawą celną i finalizacją formalności.
    </p>
    `,
  },
  {
    id: "5",
    title: "Finalizacja Transakcji",
    description: `
    <p>
    W przypadku wygranej licytacji, klient musi dokonać pełnej płatności za samochód oraz opłat aukcyjnych w ciągu 48 godzin. Pozostałe koszty, takie jak transport i odprawy celne, są opłacane w późniejszym terminie zgodnie z harmonogramem zawartym w umowie. Brak terminowej płatności może skutkować utratą prawa do przedmiotu oraz zatrzymaniem zadatku lub kaucji zabezpieczającej. 
    </p>
    `,
  },
  {
    id: "6",
    title: "Zarządzanie Transportem",
    description: `
    <p>
    Po zakupie zajmiemy się organizacją i koordynacją transportu pojazdu do wybranego miejsca docelowego w Europie.
    </p>
    `,
  },
  {
    id: "7",
    title: "Procedury Celne i Opłaty",
    description: `
    <p>
    Przeprowadzimy wszystkie niezbędne procedury celne i zajmiemy się obliczeniem wszelkich opłat związanych z importem pojazdu w jak najkorzystniejszy dla klienta sposób.
    </p>
    `,
  },
  {
    id: "8",
    title: "Dostawa i Dokumentacja",
    description: `
    <p>
    Na zakończenie, pojazd zostanie dostarczony wraz z pełnym zestawem dokumentów, co zapewni Ci bezproblemową rejestrację pojazdu w kraju.
    </p>
    `,
  },
];

export default importProcess;
