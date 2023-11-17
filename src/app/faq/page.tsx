"use client";

import { merriweather } from "@/fonts/fonts";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import { consOfImport } from "@/data/faq";

export default function Page() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, question: string) => {
    setExpanded(isExpanded ? question : false);
  };

  return (
    <main className="flex min-h-screen flex-col p-24 text-white gap-10">
      <h1 className={merriweather.className}>FAQ</h1>
      <div className="flex flex-col">
        <Accordion
          expanded={expanded === "question-1"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-1")
          }
        >
          <AccordionSummary
            id="question-1"
            aria-controls="question-1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy wymagana jest moja wiedza na temat licytacji w domach
            aukcyjnych?
          </AccordionSummary>
          <AccordionDetails>
            Nie ma konieczności, abyś posiadał szczegółową wiedzę na temat
            procesu licytacji w domach aukcyjnych. Zajmuję się tym zawodowo od
            wielu lat i dysponuję obszerną wiedzą oraz doświadczeniem w tej
            dziedzinie. Dzięki moim umiejętnościom i specjalistycznej wiedzy,
            mogę efektywnie prowadzić cały proces licytacji w Twoim imieniu.
            Moim zadaniem jest upewnić się, że transakcja przebiega płynnie i
            korzystnie, dzięki czemu możesz być spokojny, wiedząc, że wszystkie
            aspekty licytacji są profesjonalnie zarządzane bez potrzeby Twojego
            bezpośredniego zaangażowania.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-2"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-2")
          }
        >
          <AccordionSummary
            id="question-2"
            aria-controls="question-2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jak mogę oszacować całkowity koszt sprowadzenia pojazdu do Polski?
          </AccordionSummary>
          <AccordionDetails>
            Całkowity koszt sprowadzenia samochodu z Dubaju do Polski zależy od
            wielu czynników. Średnie koszty frachtu morskiego oscylują wokół
            XXX. Jednak to tylko jedna z wielu składowych całkowitego kosztu.
            Warto rozważyć skorzystanie z dodatkowych usług, które mogą znacząco
            ułatwić cały proces.
            <br />
            <br />
            Za około XXX oferujemy kompleksową konsultację ze specjalistą, który
            pomoże w dokładnej selekcji ofert, sprawdzeniu wiarygodności,
            negocjacji ceny oraz w uzyskaniu informacji o historii serwisowej
            pojazdu. Dodatkowo, za XXX, oferujemy usługę weryfikacji pojazdu. W
            ramach tej usługi sprawdzamy numer VIN, bazę szkód, zastawy
            komornicze, legalność pochodzenia i wiele innych aspektów.
            Dostarczamy także szczegółowe zdjęcia, filmy i raport z inspekcji.
            <br />
            <br />
            Jeśli pojazd zostanie pozytywnie zweryfikowany, możemy zająć się
            jego zakupem, przygotowaniem do rejestracji oraz wykonaniem
            pierwszego przeglądu technicznego w Polsce. Koszt tych usług zależy
            od marki pojazdu, dlatego zalecamy konsultację z naszymi ekspertami.
            <br />
            <br />
            Ostatecznie, cena importu auta z Dubaju wynosi około XXX. Wlicza się
            w to nie tylko odprawę i transport, ale również tłumaczenie
            przysięgłe dokumentów na język polski oraz opłaty celne i akcyzę,
            które wynoszą odpowiednio 10% wartości samochodu.
            <br />
            <br />
            Podsumowując, ostateczny koszt importu samochodu z Dubaju jest
            złożony i zależy od wielu indywidualnych czynników, dlatego zalecamy
            skorzystanie z naszych usług doradczych, aby zoptymalizować proces i
            koszty.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-3"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-3")
          }
        >
          <AccordionSummary
            id="question-3"
            aria-controls="question-3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jaki jest termin na finalizację płatności po wygranej aukcji?
          </AccordionSummary>
          <AccordionDetails>
            Po wygraniu aukcji, istotne jest, aby dokonać płatności w ustalonym
            terminie, który wynosi 48 godzin, licząc od dnia sprzedaży. Zaleca
            się, aby przelew został wykonany niezwłocznie, ponieważ istnieje
            ryzyko, że transakcje mogą zostać czasowo zablokowane przez banki,
            co mogłoby spowodować niepożądane opóźnienia w płatności. Szybkie
            działanie w tej kwestii jest kluczowe, aby uniknąć ewentualnych
            komplikacji i zapewnić płynność całego procesu zakupu.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-4"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-4")
          }
        >
          <AccordionSummary
            id="question-4"
            aria-controls="question-4-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy jest możliwość śledzenia lokalizacji zakupionego pojazdu?
          </AccordionSummary>
          <AccordionDetails>
            Tak, istnieje możliwość śledzenia lokalizacji zakupionego pojazdu.
            Po dokonaniu zakupu i załadunku auta do kontenera, zapewniamy Ci
            pełną przejrzystość procesu importu. Otrzymasz od nas zdjęcia
            samochodu, na których uwzględniony będzie również wyraźny obraz
            numeru kontenera, w którym przewożony jest Twój pojazd. Posiadając
            ten numer, możesz łatwo sprawdzić aktualną pozycję statku, na którym
            znajduje się zakupiony samochód.
            <br />
            Aby znaleźć kontener i śledzić jego podróż aż do momentu
            dostarczenia, możesz skorzystać z dedykowanych stron internetowych:
            <br />
            <br />
            <ul>
              <li>
                <a href="https://flow.cargoes.com/" target="_blank">
                  https://flow.cargoes.com/
                </a>
              </li>
              <li>
                <a href="https://marinetraffic.com/" target="_blank">
                  https://marinetraffic.com/
                </a>
              </li>
            </ul>
            <br />
            Te serwisy umożliwiają monitorowanie lokalizacji statku w czasie
            rzeczywistym, dając Ci pewność i spokój, że zakupiony pojazd jest
            bezpieczny i na bieżąco możesz śledzić jego podróż.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-5"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-5")
          }
        >
          <AccordionSummary
            id="question-5"
            aria-controls="question-5-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy import samochodów z Dubaju jest opłacalny?
          </AccordionSummary>
          <AccordionDetails>
            Importowanie aut z Dubaju na zamówienie jest zdecydowanie opłacalnym
            rozwiązaniem, szczególnie w przypadku rzadkich lub luksusowych
            pojazdów. Nasza współpraca z klientami umożliwia oszczędności
            sięgające kalkadzięsiąt a nawet kilkaset tysięcy złotych na pojazd
            sprowadzony ze Zjednoczonych Emiratów Arabskich.
            <br />
            <br />
            Rynek samochodowy w Zjednoczonych Emiratach Arabskich, uznawany za
            jeden z największych na świecie pod względem oferty rzadkich
            samochodów klasycznych, aut terenowych i supercarów, oferuje
            wyjątkowe możliwości zakupu. Należy jednak podkreślić, że skuteczne
            korzystanie z tych okazji wymaga cierpliwości oraz zdolności do
            szybkiego podejmowania decyzji. Mimo tych wyzwań, potencjalne
            korzyści z takiego importu są znaczące.
            <br />
            <br />
            Dodatkowo, importowanie auta z Dubaju może przynieść oszczędności
            sięgające 20%-25% w porównaniu do cen na lokalnym rynku. Główne
            zalety to:
            <ul>
              {consOfImport.map((cons) => (
                <li key={cons.id}>
                  <span className="font-bold">{cons.title}: </span>
                  {cons.description}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-6"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-6")
          }
        >
          <AccordionSummary
            id="question-6"
            aria-controls="question-6-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jakie opłaty celne i podatkowe mnie obowiązują przy imporcie?
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <span className="font-bold">Opłaty Aukcyjne: </span>Ustalane
                przez domy aukcyjne, zależą od wartości pojazdu. Średnia opłata
                wynosi określoną kwotę w dolarach XXX.
              </li>
              <li>
                <span className="font-bold">Koszty Transportu Morskiego: </span>
                Dla standardowego samochodu osobowego, opłata za fracht morski
                rozpoczyna się od określonej kwoty w dolarach XXX. Transport
                lądowy z miejsca aukcji do portu wynosi dodatkowo XXX
              </li>
              <li>
                <span className="font-bold">Cło Importowe: </span>W Unii
                Europejskiej wynosi 10% dla samochodów osobowych. Pojazdy
                zabytkowe i kolekcjonerskie są zwolnione z tego obowiązku.
              </li>
              <li>
                <span className="font-bold">Podatek VAT: </span>Jego wysokość
                zależy od portu docelowego - 19% dla Niemiec (Bremerhaven), 21%
                dla Holandii (Rotterdam), 23% dla Polski (Gdynia). Samochody
                zabytkowe (starsze niż 30 lat) podlegają obniżonej stawce VAT
                wynoszącej 7%.
              </li>
              <li>
                <span className="font-bold">Podatek Akcyzowy: </span>Stawka
                akcyzy wynosi 3,1% dla pojazdów z silnikiem do 2,0 litrów, a
                18,6% dla silników o większej pojemności. Pojazdy zabytkowe,
                kolekcjonerskie oraz samochody elektryczne są zwolnione z tego
                podatku. Dla samochodów hybrydowych stawki akcyzowe wynoszą
                1,55% dla silników do 2000 cm3 i 9,3% dla silników o pojemności
                od 2001 do 3500 cm3.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-7"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-7")
          }
        >
          <AccordionSummary
            id="question-7"
            aria-controls="question-7-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jakie dokumenty są potrzebne do rejestracji auta przywiezionego z
            Dubaju?
          </AccordionSummary>
          <AccordionDetails>
            Odpowiadając na pytanie dotyczące dokumentów potrzebnych do
            rejestracji auta przywiezionego z Dubaju, kluczowe jest zrozumienie,
            że wymagane dokumenty mogą się różnić w zależności od pochodzenia
            pojazdu – czy jest to samochód ze strefy wolnocłowej czy
            bezpośrednio z Dubaju.
            <br />
            Generalnie, do procesu rejestracji niezbędny jest pełny komplet
            dokumentów, który obejmuje:
            <br />
            <br />
            Dokument potwierdzający zakup pojazdu lub fakturę zakupu.
            <br />
            Świadectwo zgodności (COC - Certificate of Conformity) / Certyfikat
            eksportowy (Export Certificate) lub odpowiedni dokument
            potwierdzający spełnienie norm i standardów technicznych
            obowiązujących w danym kraju.
            <br />
            Dowód opłacenia cła importowego i podatku VAT, jeżeli jest to
            wymagane.
            <br />
            Dowód ubezpieczenia pojazdu.
            <br />
            Dokumentację techniczną pojazdu, w tym dane o przebiegu i historii
            serwisowej.
            <br />
            <br />
            Zajmuję się kompleksowym przygotowaniem wszystkich wymaganych
            dokumentów, co znacząco ułatwia proces rejestracji i minimalizuje
            zaangażowanie klienta w te formalności. Moje doświadczenie w tej
            dziedzinie zapewnia sprawną i bezproblemową rejestrację pojazdu
            przywiezionego z Dubaju.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-8"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-8")
          }
        >
          <AccordionSummary
            id="question-8"
            aria-controls="question-8-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Gdzie mogę znaleźć oferty samochodów na sprzedaż w Dubaju?
          </AccordionSummary>
          <AccordionDetails>
            Jeśli poszukujesz ofert samochodów na sprzedaż w Dubaju, istnieje
            szereg renomowanych stron internetowych i domów aukcyjnych, które
            mogą spełnić Twoje oczekiwania. Oto kilka z nich, gdzie możesz
            znaleźć szeroki wybór pojazdów:
            <br />
            Domy Aukcyjne:
            <ul>
              <li>
                <span className="font-bold">
                  Copart Middle East:
                  <a href="https://www.copartmea.com" target="_blank">
                    copartmea.com
                  </a>
                </span>
                – renomowany dom aukcyjny oferujący bogaty wybór pojazdów z
                różnych kategorii.
              </li>
              <li>
                <span className="font-bold">
                  Emirates Auction:
                  <a href="https://www.emiratesauction.com" target="_blank">
                    emiratesauction.com
                  </a>
                </span>
                – znany dom aukcyjny specjalizujący się w sprzedaży różnorodnych
                pojazdów, w tym luksusowych i kolekcjonerskich.
              </li>
            </ul>
            <br />
            Platformy Ogłoszeniowe:
            <br />
            <ul>
              <li>
                <span className="font-bold">
                  Dubicars:
                  <a href="https://www.dubicars.com" target="_blank">
                    dubicars.com
                  </a>
                </span>
                – popularny portal z bogatą ofertą samochodów nowych i
                używanych.
              </li>
              <li>
                <span className="font-bold">
                  Dubizzle:
                  <a href="https://www.dubizzle.com" target="_blank">
                    dubizzle.com
                  </a>
                </span>
                – szeroko znany serwis z ogłoszeniami, oferujący różnorodne
                pojazdy w Dubaju.
              </li>
              <li>
                <span className="font-bold">
                  Yalla Deals:
                  <a href="https://yalla.deals" target="_blank">
                    yalla.deals
                  </a>
                </span>
                – portal z ogłoszeniami lokalnymi, w tym szerokim wyborem
                samochodów.
              </li>
              <li>
                <span className="font-bold">
                  YallaMotor UAE:
                  <a href="https://uae.yallamotor.com" target="_blank">
                    uae.yallamotor.com
                  </a>
                </span>
                – platforma z ogłoszeniami, która specjalizuje się w sprzedaży
                samochodów w regionie ZEA.
              </li>
              <li>
                <span className="font-bold">
                  OpenSooq UAE:
                  <a href="https://ae.opensooq.com/ar" target="_blank">
                    ae.opensooq.com
                  </a>
                </span>
                – dynamicznie rozwijająca się platforma ogłoszeniowa z ofertami
                samochodów.
              </li>
              <li>
                <span className="font-bold">
                  Auto Traders:
                  <a href="https://www.autotraders.ae" target="_blank">
                    autotraders.ae
                  </a>
                </span>
                – serwis skupiający szeroki wybór pojazdów z różnych segmentów
                rynku.
              </li>
            </ul>
            <br />
            Każda z tych platform oferuje różnorodność samochodów, zarówno
            nowych, jak i używanych, dostosowanych do różnych potrzeb i
            preferencji. Dostępność, warunki sprzedaży i ceny mogą się różnić w
            zależności od konkretnego dostawcy i pojazdu, dlatego zaleca się
            dokładne zapoznanie się z ofertami oraz warunkami sprzedaży na
            poszczególnych portalach.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-9"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-9")
          }
        >
          <AccordionSummary
            id="question-9"
            aria-controls="question-9-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy możliwe jest dokładne oszacowanie ceny wylicytowanego samochodu?
          </AccordionSummary>
          <AccordionDetails>
            Oszacowanie ceny wylicytowanego samochodu jest możliwe, ale ważne
            jest, aby pamiętać, że taka wycena nie może być traktowana jako
            absolutna pewność. Cena finalna może być pod wpływem wielu zmiennych
            czynników, takich jak stan techniczny pojazdu, jego popularność na
            rynku, aktualne trendy oraz poziom zainteresowania ze strony innych
            licytantów. Każdy z tych elementów może znacząco wpłynąć na
            ostateczną cenę samochodu. Dlatego, choć dokładne oszacowanie jest
            możliwe, zawsze powinno być traktowane z pewną dozą ostrożności i
            nie jako gwarancja finalnej ceny.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-10"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-10")
          }
        >
          <AccordionSummary
            id="question-10"
            aria-controls="question-10-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy wymagane jest podpisanie umowy przed rozpoczęciem procesu
            importu?
          </AccordionSummary>
          <AccordionDetails>
            Tak, przed rozpoczęciem procesu importu samochodu z Dubaju wymagane
            jest podpisanie formalnej umowy. Jest to standardowa praktyka
            zapewniająca obopólną pewność i bezpieczeństwo transakcji.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-11"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-11")
          }
        >
          <AccordionSummary
            id="question-11"
            aria-controls="question-11-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy konieczna jest wpłata kaucji przed licytacją?
          </AccordionSummary>
          <AccordionDetails>
            Tak, konieczne jest wpłacenie kaucji, która stanowi gwarancję
            realizacji umowy.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-12"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-12")
          }
        >
          <AccordionSummary
            id="question-12"
            aria-controls="question-12-content"
            expandIcon={<ExpandMoreIcon />}
          >
            W jakiej walucie dokonywane są transakcje?
          </AccordionSummary>
          <AccordionDetails>
            Akceptowane są dwie waluty: dolar amerykański (USD) i euro (EUR).
            Kaucja wpłacana jest w USD, natomiast w przypadku transakcji
            realizowanych w porcie niemieckim, płatności są akceptowane w euro.
            Należy pamiętać, że polski złoty (PLN) nie jest przyjmowany w ramach
            tych transakcji.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-13"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-13")
          }
        >
          <AccordionSummary
            id="question-13"
            aria-controls="question-13-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Kiedy następuje zwrot kaucji, jeśli nie dochodzi do zakupu?
          </AccordionSummary>
          <AccordionDetails>
            Zwrot kaucji w przypadku, gdy nie dochodzi do zakupu samochodu, jest
            realizowany w ciągu 48 godzin od momentu anulowania transakcji.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-14"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-14")
          }
        >
          <AccordionSummary
            id="question-14"
            aria-controls="question-14-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czy samochód jest ubezpieczony podczas transportu?
          </AccordionSummary>
          <AccordionDetails>
            Tak, samochód jest ubezpieczony podczas transportu, zapewniając
            podstawową ochronę ładunku. Dodatkowo, istnieje opcja wykupienia
            rozszerzonego ubezpieczenia, co zapewnia większe bezpieczeństwo.
            Koszt dodatkowego ubezpieczenia wynosi 2% wartości pojazdu i jest to
            szczególnie polecane dla drogocennych lub wyjątkowych pojazdów.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-15"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-15")
          }
        >
          <AccordionSummary
            id="question-15"
            aria-controls="question-15-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Czym różnią się samochody z Zjednoczonych Emiratów Arabskich od
            modeli europejskich?
          </AccordionSummary>
          <AccordionDetails>
            Samochody z Zjednoczonych Emiratów Arabskich, szczególnie te
            spełniające specyfikację GCC (Gulf Cooperation Council), mogą się
            minimalnie różnić od modeli dostępnych na rynku europejskim. Jedną z
            takich różnic może być brak nagrzewnicy, co jest ważne do
            rozważenia, chociaż nie dotyczy to wszystkich pojazdów. Poza tym,
            aspekty takie jak światła, wskaźniki zegarów i wyświetlanie
            temperatury w stopniach Celsjusza są zazwyczaj zgodne ze standardami
            europejskimi, co eliminuje potrzebę dokonywania modyfikacji. W
            przeciwieństwie do samochodów ze Stanów Zjednoczonych, które często
            wymagają dostosowań do spełnienia europejskich wymogów, pojazdy z
            Emiratów Arabskich zwykle nie potrzebują znaczących zmian do
            rejestracji i użytkowania w Europie.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-16"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-16")
          }
        >
          <AccordionSummary
            id="question-16"
            aria-controls="question-16-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jakie dokumenty otrzymam po zakupie pojazdu?
          </AccordionSummary>
          <AccordionDetails>
            Po zakupie pojazdu otrzymasz zestaw dokumentów, których rodzaj
            zależy od pochodzenia samochodu. Możliwe do otrzymania dokumenty to:
            <br />
            <ul>
              <li>
                <span className="font-bold">Certyfikat eksportowy:</span> Jest
                to standardowy dokument dla pojazdów eksportowanych, który
                potwierdza ich legalność i pochodzenie.
              </li>
              <li>
                <span className="font-bold">Dokumenty z portu:</span> Mogą one
                obejmować różne formy dokumentacji związane z transportem
                morskim i procedurami celnymi.
              </li>
              <li>
                <span className="font-bold">
                  Vehicle Condition Certificate (VCC):
                </span>
                Jest to dokument określający stan techniczny i wizualny pojazdu
                w momencie eksportu.
              </li>
              <li>
                <span className="font-bold">Tytuł własności:</span> Zwany
                również „title”, występuje głównie w przypadku pojazdów
                importowanych ze Stanów Zjednoczonych lub Japonii. Jest to
                oficjalny dokument potwierdzający prawa własności do pojazdu.
              </li>
            </ul>
            <br />
            Rodzaj dokumentów, które otrzymasz, zależy więc od kraju, z którego
            samochód jest importowany, a także od specyficznych wymogów prawnych
            danego kraju.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-17"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-17")
          }
        >
          <AccordionSummary
            id="question-17"
            aria-controls="question-17-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jakie są dalsze kroki i dodatkowe koszty po przywiezieniu samochodu
            do Polski?
          </AccordionSummary>
          <AccordionDetails>
            Po sprowadzeniu auta z Dubaju, jest kilka ważnych kroków, które
            należy podjąć w celu przygotowania pojazdu do rejestracji w Polsce:
            <ul>
              <li>
                <span className="font-bold">
                  Przeprowadzenie pierwszego przeglądu technicznego:
                </span>
                Jest to obowiązkowy krok, który musi być wykonany przez klienta.
                Przegląd ten ma na celu sprawdzenie stanu technicznego pojazdu i
                jego zgodności z wymogami bezpieczeństwa obowiązującymi w
                Polsce.
              </li>
              <li>
                <span className="font-bold">Wykupienie polisy OC:</span>
                Ubezpieczenie odpowiedzialności cywilnej jest wymagane prawnie w
                Polsce dla wszystkich pojazdów. Należy je wykupić przed
                rejestracją samochodu.
              </li>
              <li>
                <span className="font-bold">Tłumaczenie dokumentów:</span>
                Dokumenty związane z samochodem, które zostały wydane w innym
                języku, muszą być przetłumaczone na język polski przez tłumacza
                przysięgłego. W tym zakresie możemy zaoferować pomoc, ułatwiając
                tym samym cały proces rejestracji.
              </li>
            </ul>
            <br />
            <br />
            <br />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-18"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-18")
          }
        >
          <AccordionSummary
            id="question-18"
            aria-controls="question-18-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Ile trwa cały proces importu auta z dubaju?
          </AccordionSummary>
          <AccordionDetails>
            Proces importu samochodu z Dubaju trwa zazwyczaj do 10 tygodni.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-19"}
          onChange={(event, isExpanded) =>
            handleChange(isExpanded, "question-19")
          }
        >
          <AccordionSummary
            id="question-19"
            aria-controls="question-19-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Jak przebiega proces importu samochodu z Dubaju?
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <span className="font-bold">Przygotowanie do wysyłki:</span> Po
                zakupie i przygotowaniu samochodu do transportu, auto jest
                umieszczane w kontenerze. Przed wysyłką, wykonujemy i
                dostarczamy klientowi kompletny zestaw zdjęć pojazdu, wraz z
                numerem kontenera aby miał pewność co do stanu auta przed jego
                transportem oraz miał możliwość śledzenia frachtu online.
              </li>
              <li>
                <span className="font-bold">Transport morski: </span> Następnie
                samochód wyrusza w około 30-dniową podróż frachtem morskim.
              </li>
              <li>
                <span className="font-bold">Odprawa celna: </span> Po przybyciu
                do Europy, najczęściej w Holandii lub w Niemczech, auto
                przechodzi odprawę celną. W tym etapie również wykonujemy
                fotografie pojazdu, już po jego rozładunku z kontenera, co
                stanowi dodatkowe potwierdzenie jego stanu.
              </li>
              <li>
                <span className="font-bold">Dostawa do klienta: </span> Po
                zakończeniu formalności celnych i opłaceniu wszelkich
                należności, samochód jest dostarczany na adres wskazany przez
                klienta. W tym samym czasie dostarczane wszystkie niezbędne
                dokumenty, które są wymagane do rejestracji pojazdu w kraju
                docelowym.
              </li>
            </ul>
            <br />
            Podkreślam, że cały proces jest monitorowany i koordynowany, aby
            zapewnić bezpieczne i sprawne dostarczenie samochodu do klienta.
            Transparentność i komunikacja z klientem na każdym etapie jest dla
            nas priorytetem.
          </AccordionDetails>
        </Accordion>
      </div>
    </main>
  );
}
