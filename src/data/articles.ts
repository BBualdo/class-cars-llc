export interface ArticleType {
  id: number;
  bannerUrl: string;
  title: string;
  description: string;
  dateAdded: Date;
  slug: string;
  sections: SectionType[];
}

interface SectionType {
  id: number;
  title: string;
  content: string;
}

export const articles: ArticleType[] = [
  {
    id: 1,
    bannerUrl: "/blog-photo.webp",
    title: "Jak wygląda proces importu auta z Dubaju?",
    description:
      "Import auta z Dubaju to złożony proces, który wymaga starannego planowania, znajomości przepisów i odpowiedniego przygotowania pojazdu. W tym artykule przedstawimy szczegółowy przewodnik na temat tego, jak przebiega import samochodu z Dubaju do Europy, z naciskiem na usługi oferowane przez firmę specjalizującą się w tego typu transakcjach.",
    dateAdded: new Date(),
    slug: "jak-wyglada-proces-importu-auta-z-dubaju",
    sections: [
      {
        id: 1,
        title: "Krok 1: Planowanie transportu",
        content:
          "<p>Pierwszym etapem importu auta z Dubaju jest dokładne zaplanowanie transportu. Ważne jest, aby wybrać najkorzystniejszą trasę, uwzględniając odległość, dostępne szlaki, ograniczenia logistyczne oraz lokalne przepisy. Dobrze zaplanowana trasa minimalizuje ryzyko opóźnień i dodatkowych kosztów</p>",
      },
      {
        id: 2,
        title: "Krok 2: Przygotowanie samochodu",
        content:
          "<p>Przed transportem samochód wymaga przygotowania. Należy go dokładnie oczyścić i usunąć wszystkie przedmioty osobiste oraz akcesoria, które mogą ulec uszkodzeniu podczas podróży. Przygotowanie obejmuje również zabezpieczenie pojazdu w taki sposób, aby zminimalizować ryzyko uszkodzeń podczas załadunku i rozładunku.</p>",
      },
      {
        id: 3,
        title: "Krok 3: Dokumentacja",
        content:
          "<p>Import auta z Dubaju wymaga dopełnienia szeregu formalności. Niezbędne jest zgromadzenie wszystkich dokumentów związanych z międzynarodowym transportem, takich jak dokumenty celne, licencje i wymagane zezwolenia. Prawidłowo przygotowana dokumentacja jest kluczowa dla sprawnego przeprowadzenia procedur celnych.</p>",
      },
      {
        id: 4,
        title: "Krok 4: Pakowanie i ochrona",
        content:
          "<p>W zależności od wybranego rodzaju transportu, samochód musi zostać odpowiednio zabezpieczony. Może to obejmować umieszczenie pojazdu w kontenerze, który następnie jest załadowany na statek towarowy. Ważne jest, aby podczas pakowania przestrzegać procedur zabezpieczających, co pozwala uniknąć uszkodzeń podczas podróży.</p>",
      },
      {
        id: 5,
        title: "Krok 5: Transport morski",
        content:
          "<p>W przypadku transportu przez ocean, rezerwujemy miejsce na statku towarowym i organizujemy załadunek oraz rozładunek pojazdu. Kluczowe jest, aby samochód był odpowiednio zabezpieczony podczas transportu morskiego.</p>",
      },
      {
        id: 6,
        title: "Krok 6: Monitorowanie",
        content:
          "<p>Podczas całego procesu transportu firma monitoruje przebieg podróży i na bieżąco informuje właściciela samochodu o postępach. Stała kontrola nad transportem pozwala na szybką reakcję w przypadku nieprzewidzianych sytuacji.</p>",
      },
      {
        id: 7,
        title: "Krok 7: Odprawa celna",
        content:
          "<p>Po dotarciu samochodu do Europy, konieczne jest przeprowadzenie odprawy celnej. Agencja zajmuje się wszystkimi procedurami celnymi oraz formalnościami związanymi z importem pojazdu, aby zapewnić zgodność z lokalnymi przepisami.</p>",
      },
      {
        id: 8,
        title: "Krok 8: Finalna dostawa",
        content:
          "<p>Ostatnim etapem jest dostarczenie samochodu do miejsca docelowego w Europie. Może to być bezpośrednio do domu właściciela lub do wyznaczonego punktu odbioru. Ważne jest, aby cały proces był zakończony zgodnie z wcześniejszymi ustaleniami.</p>",
      },
      {
        id: 9,
        title: "Krok 9: Ubezpieczenie",
        content:
          "<p>Oczywiście, samochód jest objęty ubezpieczeniem podczas transportu, co gwarantuje podstawową ochronę przewożonego pojazdu. Dla większego spokoju istnieje możliwość wykupienia rozszerzonej polisy ubezpieczeniowej, która zapewnia wyższy poziom bezpieczeństwa. Koszt tej dodatkowej ochrony wynosi 2% wartości samochodu, co jest szczególnie rekomendowane w przypadku drogich lub unikalnych pojazdów.</p>",
      },
      {
        id: 10,
        title: "Podsumowanie",
        content: `<p>Import auta z Dubaju to skomplikowany proces wymagający staranności i profesjonalizmu. Dzięki odpowiedniemu przygotowaniu i współpracy z doświadczonymi specjalistami, można mieć pewność, że samochód dotrze do Europy w bezpiecznych warunkach i zgodnie z lokalnymi przepisami. Firma oferująca kompleksowe usługi ułatwia cały proces importu i zapewnia bezpieczeństwo przewożonego pojazdu.</p>
          <p>
          <a href="https://classcarsllc.com/import-auta-z-dubaju/" class="border-b hover:text-gold">Import auta z Dubaju</a> 
          może być satysfakcjonującym przedsięwzięciem, jeśli jest przeprowadzony z odpowiednią starannością i profesjonalizmem. Skorzystanie z usług specjalistów pozwala na uniknięcie wielu potencjalnych problemów i sprawia, że cały proces jest bardziej płynny i bezpieczny.</p>`,
      },
    ],
  },
  {
    id: 2,
    bannerUrl: "/blog-photo.webp",
    title: "Samochody z Dubaju - Zalety Importu Youngtimerów",
    description:
      "Youngtimery zdobywają coraz większą popularność. Są to klasyczne samochody, które mają od 15 do około 30 lat, budząc podziw na ulicach i wśród entuzjastów motoryzacji. Inwestycja w dobrze zachowany youngtimer jest opłacalna, ponieważ ich wartość ciągle rośnie. Skąd można zdobyć takie klasyki? Najlepszym rozwiązaniem jest import. W tym artykule omówimy korzyści płynące z importu klasycznych samochodów, w tym samochody z Dubaju. W ogłoszeniach znajdziesz wyjątkowe modele, takie jak Lamborghini, Ferrari, Porsche i inne kultowe marki.",
    dateAdded: new Date(),
    slug: "samochody-z-dubaju-zalety-importu-youngtimerow",
    sections: [
      {
        id: 1,
        title: "Import Samochodów z Dubaju, USA i Szwecji",
        content:
          "<p>W przeszłości sprowadzenie youngtimera do kraju było wyzwaniem, wymagającym specjalistycznej wiedzy i szerokiej sieci kontaktów. Dziś, dzięki pomocy ekspertów, proces ten stał się prostszy. Fachowcy zajmują się każdym etapem sprowadzenia pojazdu, od zakupu, przez transport, aż po rejestrację, co sprawia, że korzyści z importu są jeszcze bardziej widoczne.</p>",
      },
      {
        id: 2,
        title: "Duży Wybór i Korzystne Ceny",
        content: `<p>Decydując się na import <strong>samochodów z Dubaju</strong>, Szwecji czy innych odległych krajów, natkniesz się na unikatowe modele, niedostępne na polskich portalach aukcyjnych. Motoryzacja w tych regionach różni się od europejskiej, co oznacza, że możesz znaleźć samochody z unikalnym wyposażeniem i specyfikacjami. Na przykład, amerykański Ford oferował różne modele w zależności od regionu, a nawet te same modele mogły mieć różne wyposażenie, skrzynie biegów czy silniki. Dzięki tak szerokiemu wyborowi, z pewnością znajdziesz wymarzony pojazd w doskonałym stanie.</p>
        <p>Większa dostępność wpływa również na cenę. Klasyczne japońskie samochody w Szwecji są znacznie tańsze niż po sprowadzeniu do Europy. Kupując samochód za granicą, zyskujesz nie tylko unikatowy pojazd wyróżniający się na polskich drogach, ale także oszczędzasz pieniądze.</p>`,
      },
      {
        id: 3,
        title: "Lepsza Kondycja i Wyposażenie",
        content: `<p>Zagraniczne youngtimery mają jeszcze jedną przewagę – często są w lepszym stanie, ponieważ były rzadziej używane. Przykładem są tutaj samochody ze Szwecji, gdzie właściciele często kupowali pojazdy z kierownicą po lewej stronie, choć standardowo jeżdżą po prawej. Dzięki temu te youngtimery są często w niemal nowym stanie.</p>
          <p><a href="https://classcarsllc.com/import-auta-z-dubaju/" class="border-b hover:text-gold">Samochody z Dubaju</a>, Szwecji czy USA są również często lepiej wyposażone niż ich europejskie odpowiedniki. Wyjątkowa skórzana tapicerka, dodatkowe schowki, tempomat, czujniki parkowania, zaawansowana klimatyzacja czy mocniejsze silniki to tylko niektóre z udogodnień, które rzadziej spotyka się w Europie, gdzie dominują mniej wyposażone modele.</p>`,
      },
      {
        id: 4,
        title: "Podsumowanie",
        content:
          "<p>Jak widzisz, import youngtimerów ma wiele zalet i jest łatwy do realizacji. Jeśli szukasz klasycznego samochodu, warto rozważyć opcję sprowadzenia go z zagranicy!</p>",
      },
    ],
  },
  {
    id: 3,
    bannerUrl: "/blog-photo.webp",
    title: "Konserwacja Luksusowych i Kolekcjonerskich Samochodów w Emiratach",
    description:
      "Posiadanie luksusowego, kolekcjonerskiego lub unikatowego auta w Emiratach Arabskich, zwłaszcza w Dubaju, jest symbolem prestiżu. Jednak klimat regionu stawia przed właścicielami pojazdów pewne unikalne wyzwania. Ekstremalne upały, piasek i sporadyczne burze piaskowe mogą negatywnie wpływać na wygląd i wydajność samochodu. Dlatego tak ważne jest, aby odpowiednio dbać o swoje auto z Emiratów Arabskich, aby zachować jego nienaganny wygląd i sprawność. Oto kilka kluczowych wskazówek dotyczących pielęgnacji luksusowych, kolekcjonerskich i unikatowych pojazdów w tym wymagającym klimacie, z uwzględnieniem usług oferowanych przez New Bombay Workshop w Abu Zabi.",
    dateAdded: new Date(),
    slug: "konserwacja-luksusowych-i-kolekcjonerskich-samochodow-w-emiratach",
    sections: [
      {
        id: 1,
        title: "Regularne Mycie i Detailing",
        content:
          "<p>Klimat Dubaju może być szczególnie trudny dla zewnętrznych powierzchni luksusowego auta. Wysokie temperatury w połączeniu z abrazującym piaskiem mogą szybko prowadzić do uszkodzeń lakieru i matowienia wykończenia. Regularne mycie i detailing są kluczowe dla zachowania piękna pojazdu. New Bombay Workshop oferuje profesjonalne usługi mycia i detailingu, dostosowane do potrzeb luksusowych aut. Dzięki zastosowaniu wysokiej jakości produktów i technik, zespół dba o to, aby lakier Twojego auta pozostał nieskazitelny, a wnętrze zachowało luksusowy wygląd.</p>",
      },
      {
        id: 2,
        title: "Instalacja Folii Ochronnej na Lakier (PPF)",
        content:
          "<p>Aby zapewnić dodatkową ochronę przed żywiołami, warto rozważyć inwestycję w folię ochronną na lakier (PPF) dla swojego unikatowego auta. PPF to przezroczysta folia, która jest nakładana na zewnętrzne powierzchnie pojazdu, chroniąc przed zarysowaniami, odpryskami kamieni i uszkodzeniami UV. Folia wysokiej jakości jest praktycznie niewidoczna po nałożeniu, a dzięki niej Twój samochód może zachować połysk salonowy przez wiele lat, nawet w trudnych warunkach klimatycznych Dubaju.</p>",
      },
      {
        id: 3,
        title: "Ceramiczne Powłoki Ochronne",
        content:
          "<p>Ceramiczna powłoka to najlepsze rozwiązanie dla właścicieli luksusowych i kolekcjonerskich aut w Dubaju, oferujące niezrównaną ochronę i trwałość. Powłoka ceramiczna tworzy silną, hydrofobową warstwę na lakierze pojazdu, zapewniając odporność na promieniowanie UV, utlenianie i zanieczyszczenia środowiskowe. Profesjonalne usługi nakładania powłok ceramicznych, wykorzystujące produkty wiodących firm w branży, gwarantują, że Twój luksusowy samochód pozostanie chroniony i zachowa swój lśniący wygląd mimo trudnych warunków klimatycznych Dubaju.</p>",
      },
      {
        id: 4,
        title: "Klimatyzowane Miejsca Parkingowe",
        content:
          "<p>Podczas upalnych letnich miesięcy w Dubaju, niezbędne jest zabezpieczenie luksusowego auta przed ekstremalnym upałem i wilgocią, zwłaszcza jeśli nie jest ono używane regularnie. Klimatyzowane miejsca parkingowe zapewniają idealne warunki do przechowywania luksusowych pojazdów, chroniąc je przed wysokimi temperaturami i wilgocią. Dzięki zaawansowanym systemom wentylacji i filtracji powietrza, unikatowe auto jest chronione nie tylko przed ekstremalnym upałem, ale także przed zanieczyszczeniami powietrza, które mogą degradować jego zewnętrzne i wewnętrzne powierzchnie z czasem.</p>",
      },
      {
        id: 5,
        title: "Regularna Konserwacja i Serwisowanie",
        content:
          "<p>Profilaktyczna konserwacja jest kluczowa dla utrzymania kolekcjonerskiego auta w dobrym stanie w klimacie Dubaju. Od wymiany oleju po inspekcje hamulców, New Bombay Workshop oferuje kompleksowe usługi serwisowe dla luksusowych pojazdów, wykonywane przez wykwalifikowanych techników specjalizujących się w konserwacji aut premium. Przestrzegając zalecanego harmonogramu serwisowego producenta i szybko reagując na ewentualne problemy, możesz być pewien, że Twoje auto z Emiratów Arabskich pozostanie niezawodne i będzie działać na najwyższych obrotach, niezależnie od warunków pogodowych.</p>",
      },
      {
        id: 6,
        title: "Podsumowanie",
        content:
          "<p>Dbając o luksusowy, kolekcjonerski lub unikatowy samochód w klimacie Dubaju, należy korzystać z wyspecjalizowanych usług i dbać o każdy szczegół. Dzięki New Bombay Workshop w Abu Zabi, właściciele luksusowych aut mogą być pewni, że ich pojazdy otrzymają niezbędną uwagę i ekspertyzę. Od mycia i detailingu po ochronę lakieru i klimatyzowane miejsca parkingowe, New Bombay Workshop oferuje szeroką gamę usług, które pozwalają utrzymać luksusowe samochody w doskonałym stanie, umożliwiając właścicielom cieszenie się niezrównanym doświadczeniem jazdy, nawet w trudnym klimacie Dubaju.</p>",
      },
    ],
  },
  {
    id: 4,
    bannerUrl: "/blog-photo.webp",
    title: "Prawa dotyczące opon w Dubaju - Informacje dla Polaków",
    description:
      "Planujesz sprowadzić auto z Dubaju? Warto zapoznać się z obowiązującymi tam przepisami dotyczącymi opon. Dubaj, jak i całe Zjednoczone Emiraty Arabskie, posiadają szczegółowe regulacje dotyczące opon, które mają na celu zapewnienie bezpieczeństwa na drogach, ochronę środowiska i zapobieganie oszustwom. Oto kilka ciekawostek dotyczących tych przepisów.",
    dateAdded: new Date(),
    slug: "prawa-dotyczace-opon-w-dubaju-informacje-dla-polakow",
    sections: [
      {
        id: 1,
        title: "Kluczowe regulacje dotyczące opon w ZEA",
        content: `<ul>
        <li><span class="font-bold">Certyfikat Zgodności: </span>
        Każda opona wprowadzana na rynek ZEA musi posiadać Certyfikat Zgodności, który potwierdza spełnienie krajowych standardów. Bez tego certyfikatu opony nie mogą być sprzedawane ani używane w Emiratach.</li>
        <li><span class="font-bold">Odporność na Temperatury: </span>
        W Dubaju opony muszą wytrzymywać ekstremalne temperatury do 50 stopni Celsjusza. To znacznie wyższy standard niż w wielu innych krajach, gdzie normy wynoszą około 30 stopni Celsjusza.</li>
        <li><span class="font-bold">Właściwe Przechowywanie: </span>
        Opony nie mogą być przechowywane w temperaturach przekraczających 25 stopni Celsjusza, a ich układanie jedna na drugiej jest zabronione. Taki sposób przechowywania ma na celu zapobieganie deformacji i uszkodzeniom opon.</li>
        <li><span class="font-bold">Ograniczenia dotyczące używanych opon: </span> 
        W ZEA sprzedaż używanych opon jest ściśle regulowana. Mogą być ponownie używane jedynie w autobusach i ciężarówkach, pod warunkiem że zostały ponownie bieżnikowane przez jednego z 25 zatwierdzonych producentów. Importowanie bieżnikowanych opon jest zabronione.</li>
        <li>
        <span class="font-bold">Limity Przebicia i Zużycia Bieżnika: </span>
        Opony, które przekraczają określone limity przebicia lub zużycia bieżnika, nie mogą być naprawiane. Minimalne głębokości bieżnika to:
          <ul class="inside">
            <li><span class="font-bold">Pojazdy lekkie: </span>
            1,6 mm</li>
            <li><span class="font-bold">Motocykle: </span>
            0,8 mm</li>
            <li><span class="font-bold">Pojazdy średnie: </span>
            2,4 mm</li>
            <li><span class="font-bold">Ciężarówki i pojazdy ciężkie: </span>
            3,3 mm</li>
          </ul>
        </li>
        <li><span class="font-bold">Opony nie starsze niż pięć lat: </span>
        Opony w pojazdach nie mogą być starsze niż pięć lat. Przekroczenie tego limitu wiąże się z wysokimi karami i punktami karnymi.</li>
        <li><span class="font-bold">Specyfikacje Techniczne: </span>
        Standardowe wymagania dotyczące daty produkcji, rozmiaru, oceny, prędkości i tolerancji temperatury opon nadal obowiązują. Te specyfikacje muszą być spełnione, aby opony mogły być legalnie używane.</li>
        </ul>`,
      },
      {
        id: 2,
        title: "Kary za nieprzestrzeganie przepisów",
        content: `<p>Nieprzestrzeganie przepisów dotyczących opon w ZEA może prowadzić do surowych kar:</p>
          <ul>
            <li>
            <span class="font-bold">Głębokość bieżnika poniżej minimum: </span>
            Kara w wysokości 400 AED i cztery punkty karne.</li>
            <li>
            <span class="font-bold">Opony starsze niż pięć lat:</span> 
            Kara w wysokości 1500 AED i osiem punktów karnych.</li>
          </ul>`,
      },
      {
        id: 3,
        title: "Dlaczego te przepisy są ważne?",
        content: `<p>Przepisy dotyczące opon w Dubaju są kluczowe dla zapewnienia bezpieczeństwa na drogach i ochrony kierowców przed niebezpieczeństwami związanymi z niską jakością opon. Wysokie temperatury, które są normą w Emiratach, wymagają od opon większej odporności i trwałości. Dlatego tak ważne jest przestrzeganie wszystkich regulacji dotyczących ich użytkowania i konserwacji.</p>
        <p>Dzięki tym ciekawostkom dotyczącym przepisów związanych z oponami w Dubaju, każdy kierowca, niezależnie od tego, czy sprowadza auto z Emiratów Arabskich, czy planuje podróż po tym kraju, może być lepiej przygotowany i świadomy obowiązujących tam norm. Zachowanie tych zasad pozwoli cieszyć się bezpieczną i komfortową jazdą w każdych warunkach.</p>`,
      },
    ],
  },
  {
    id: 5,
    bannerUrl: "/blog-photo.webp",
    title: "Auto z Dubaju – nowy trend wśród Polaków?",
    description:
      "Od 2023 roku coraz więcej Polaków decyduje się na zakup samochodów sprowadzonych z Dubaju. Samochody te, znane z luksusu, jakości i świetnego stanu utrzymania stają się coraz bardziej dostępne dzięki rozwiniętym procesom importu. Jeśli marzysz o posiadaniu unikalnego auta, sprowadzonego prosto z Dubaju, to jest to możliwe. Specjalizujemy się w imporcie aut z Dubaju do Polski, oferując kompleksową obsługę na każdym etapie.",
    dateAdded: new Date(),
    slug: "auto-z-dubaju-nowy-trend-wsrod-polakow",
    sections: [
      {
        id: 1,
        title: "Zalety samochodów z Dubaju",
        content:
          "<p>Samochody na rynku w Dubaju są przygotowane do ekstremalnie wysokich temperatur, co sprawia, że mają nieco inne specyfikacje techniczne niż te dostępne na rynku europejskim. Średnia roczna temperatura w Dubaju wynosi 27 stopni Celsjusza, podczas gdy w Polsce jest to około 10 stopni. Dlatego też samochody z Dubaju są wyposażone w bardziej wydajne systemy chłodzenia i klimatyzacji, co przekłada się na ich niezawodność i długowieczność.</p>",
      },
      {
        id: 2,
        title: "Efektywne systemy chłodzenia i klimatyzacji",
        content:
          "<p>Samochody z Dubaju posiadają bardzo efektywne systemy chłodzenia, z większymi radiatorami, co zapewnia lepsze chłodzenie silnika w wysokich temperaturach. Dodatkowo, są wyposażone w mocniejsze systemy klimatyzacji, często z dwoma jednostkami w większych pojazdach, takich jak minivany i SUV-y, aby zapewnić komfort wszystkim pasażerom. Te cechy sprawiają, że są idealne do długich podróży i intensywnego użytkowania.</p>",
      },
      {
        id: 3,
        title: "Stan techniczny samochodów z Dubaju",
        content: `<p>Nie ma potrzeby przejmować się stanem technicznym samochodów z Dubaju. Najczęściej nie sprowadza się aut powypadkowych i z poważnymi uszkodzeniami, ponieważ to się po prostu nie opłaca. Za sprawdzenie stanu samochodu odpowiada pośrednik. Zazwyczaj wady są estetyczne – pod wpływem słońca może wyblaknąć tapicerka czy elementy dekoracyjne, ale te elementy również są sprawdzane przez pośrednika.</p>
        <p>Jednym z ważnych czynników jest to, że <span class="text-gold font-bold">samochody z Dubaju</span> są praktycznie takie same, jak te produkowane na rynek europejski. Sprowadzając samochody ze Stanów trzeba zmienić w nich światła czy zamontować dodatkowe światła przeciwmgielne. Tutaj nie ma takiej potrzeby, dlatego nie ma żadnej ingerencji w samochód. Jedyną różnicą, jaką możesz odnotować, jest szersze wyposażenie aut z Dubaju w stosunku do modeli europejskich. Oczywiście zdarzają się także samochody, które występują tylko na rynku arabskim. U nas będzie to unikat, a jego zdobycie w państwach Unii Europejskiej jest praktycznie niemożliwe.</p>`,
      },
      {
        id: 4,
        title: "Przygotowanie samochodu do polskich warunków",
        content:
          "<p>Jeśli planujesz użytkowanie samochodu z Dubaju w Polsce, warto dokonać kilku modyfikacji. Przede wszystkim, należy wymienić olej silnikowy na taki, który jest odpowiedni do niższych temperatur, np. 5W30 lub 0W30. Zalecamy także wymianę płynów chłodniczych oraz innych płynów eksploatacyjnych, aby były one w pełni odpowiednie dla polskiego klimatu. Dzięki temu, Twój nowy samochód będzie doskonale przygotowany do użytkowania w każdych warunkach, zapewniając Ci komfort i niezawodność przez cały rok.</p>",
      },
      {
        id: 5,
        title: "Nasze usługi",
        content: `<p>Nasza firma specjalizuje się w imporcie samochodów z Dubaju do Polski. Oferujemy kompleksową obsługę, która obejmuje zarówno przeprowadzenie <span class="text-gold font-bold">inspekcji pojazdów</span>, jak i transport morski bezpośrednio pod Twój dom. Posiadamy licencję i jesteśmy legalnie zarejestrowaną firmą w Dubaju, co gwarantuje profesjonalizm i bezpieczeństwo naszych usług. Dzięki naszemu doświadczeniu i rozległym kontaktom, jesteśmy w stanie zaoferować samochody, które spełnią Twoje najwyższe oczekiwania.</p>
        <p>Z nami masz pewność, że Twój nowy samochód będzie nie tylko wyjątkowy, ale także w doskonałym stanie technicznym, gotowy do użytkowania na polskich drogach.</p>`,
      },
    ],
  },
];
