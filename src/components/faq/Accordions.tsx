"use client";

import { consOfImport } from "@/data/faq";
import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@mui/material";
import clsx from "clsx";
import { useState } from "react";

const Accordions = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, question: string) => {
    setExpanded(isExpanded ? question : false);
  };

  return (
    <motion.section
      variants={fadeIn("right", 0.5, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full items-center justify-center"
    >
      <div className="flex flex-col justify-center gap-1 md:w-3/4">
        <Accordion
          expanded={expanded === "question-1"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-1")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-1"
            aria-controls="question-1-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-1",
                    "text-white": expanded !== "question-1",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-1",
                "text-white": expanded !== "question-1",
              },
            )}
          >
            Czy wymagana jest moja wiedza na temat licytacji w domach
            aukcyjnych?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-2")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-2"
            aria-controls="question-2-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-2",
                    "text-white": expanded !== "question-2",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-2",
                "text-white": expanded !== "question-2",
              },
            )}
          >
            Jak mogę oszacować całkowity koszt sprowadzenia pojazdu do Polski?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Całkowity koszt sprowadzenia samochodu z Dubaju do Polski zależy od
            wielu czynników. Średnie koszty frachtu morskiego oscylują wokół
            <span className="font-bold"> XXX</span>. Jednak to tylko jedna z
            wielu składowych całkowitego kosztu. Warto rozważyć skorzystanie z
            dodatkowych usług, które mogą znacząco ułatwić cały proces.
            <br />
            <br />
            Za około<span className="font-bold"> XXX</span> oferujemy
            kompleksową konsultację ze specjalistą, który pomoże w dokładnej
            selekcji ofert, sprawdzeniu wiarygodności, negocjacji ceny oraz w
            uzyskaniu informacji o historii serwisowej pojazdu. Dodatkowo, za
            <span className="font-bold"> XXX</span>, oferujemy usługę
            weryfikacji pojazdu. W ramach tej usługi sprawdzamy numer VIN, bazę
            szkód, zastawy komornicze, legalność pochodzenia i wiele innych
            aspektów. Dostarczamy także szczegółowe zdjęcia, filmy i raport z
            inspekcji.
            <br />
            <br />
            Jeśli pojazd zostanie pozytywnie zweryfikowany, możemy zająć się
            jego zakupem, przygotowaniem do rejestracji oraz wykonaniem
            pierwszego przeglądu technicznego w Polsce. Koszt tych usług zależy
            od marki pojazdu, dlatego zalecamy konsultację z naszymi ekspertami.
            <br />
            <br />
            <span className="font-bold">
              Ostatecznie, cena importu auta z Dubaju wynosi około XXX.{" "}
            </span>
            Wlicza się w to nie tylko odprawę i transport, ale również
            tłumaczenie przysięgłe dokumentów na język polski oraz opłaty celne
            i akcyzę, które wynoszą odpowiednio 10% wartości samochodu.
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-3")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-3"
            aria-controls="question-3-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-3",
                    "text-white": expanded !== "question-3",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-3",
                "text-white": expanded !== "question-3",
              },
            )}
          >
            Jaki jest termin na finalizację płatności po wygranej aukcji?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Po wygraniu aukcji, istotne jest, aby dokonać płatności w ustalonym
            terminie, który wynosi<span className="font-bold"> 48 godzin</span>,
            licząc od dnia sprzedaży. Zaleca się, aby przelew został wykonany
            niezwłocznie, ponieważ istnieje ryzyko, że transakcje mogą zostać
            czasowo zablokowane przez banki, co mogłoby spowodować niepożądane
            opóźnienia w płatności. Szybkie działanie w tej kwestii jest
            kluczowe, aby uniknąć ewentualnych komplikacji i zapewnić płynność
            całego procesu zakupu.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-4"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-4")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-4"
            aria-controls="question-4-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-4",
                    "text-white": expanded !== "question-4",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-4",
                "text-white": expanded !== "question-4",
              },
            )}
          >
            Czy jest możliwość śledzenia lokalizacji zakupionego pojazdu?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
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
                <Link
                  variant="button"
                  href="https://flow.cargoes.com/"
                  target="_blank"
                >
                  https://flow.cargoes.com/
                </Link>
              </li>
              <li>
                <Link
                  variant="button"
                  href="https://marinetraffic.com/"
                  target="_blank"
                >
                  https://marinetraffic.com/
                </Link>
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-5")}
          className="gradient-gotham-mix group  py-4"
        >
          <AccordionSummary
            id="question-5"
            aria-controls="question-5-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-5",
                    "text-white": expanded !== "question-5",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-5",
                "text-white": expanded !== "question-5",
              },
            )}
          >
            Czy import samochodów z Dubaju jest opłacalny?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
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
            <br />
            <br />
            <ul>
              {consOfImport.map((cons) => (
                <li key={cons.id}>
                  <span className="font-bold text-gold">{cons.title}: </span>
                  {cons.description}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-6"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-6")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-6"
            aria-controls="question-6-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-6",
                    "text-white": expanded !== "question-6",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-6",
                "text-white": expanded !== "question-6",
              },
            )}
          >
            Jakie opłaty celne i podatkowe mnie obowiązują przy imporcie?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            <ul>
              <li>
                <span className="font-bold text-gold">Opłaty Aukcyjne: </span>
                Ustalane przez domy aukcyjne, zależą od wartości pojazdu.
                Średnia opłata wynosi określoną kwotę w dolarach{" "}
                <span className="font-bold">XXX</span>.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Koszty Transportu Morskiego:{" "}
                </span>
                Dla standardowego samochodu osobowego, opłata za fracht morski
                rozpoczyna się od określonej kwoty w dolarach{" "}
                <span className="font-bold">XXX</span>. Transport lądowy z
                miejsca aukcji do portu wynosi dodatkowo{" "}
                <span className="font-bold">XXX</span>.
              </li>
              <li>
                <span className="font-bold text-gold">Cło Importowe: </span>W
                Unii Europejskiej wynosi <span className="font-bold">10%</span>{" "}
                dla samochodów osobowych. Pojazdy zabytkowe i kolekcjonerskie są
                zwolnione z tego obowiązku.
              </li>
              <li>
                <span className="font-bold text-gold">Podatek VAT: </span>Jego
                wysokość zależy od portu docelowego -{" "}
                <span className="font-bold">19% dla Niemiec </span>
                (Bremerhaven),{" "}
                <span className="font-bold">
                  21% dla Holandii
                </span> (Rotterdam),{" "}
                <span className="font-bold">23% dla Polski </span>
                (Gdynia). Samochody zabytkowe (starsze niż 30 lat) podlegają
                obniżonej stawce VAT wynoszącej{" "}
                <span className="font-bold">7%</span>.
              </li>
              <li>
                <span className="font-bold text-gold">Podatek Akcyzowy: </span>
                Stawka akcyzy wynosi <span className="font-bold">3,1%</span> dla
                pojazdów z silnikiem do 2,0 litrów, a{" "}
                <span className="font-bold">18,6%</span> dla silników o większej
                pojemności. Pojazdy zabytkowe, kolekcjonerskie oraz samochody
                elektryczne są
                <span className="font-bold">zwolnione z tego podatku</span>. Dla
                samochodów hybrydowych stawki akcyzowe wynoszą{" "}
                <span className="font-bold">1,55%</span> dla silników do 2000
                cm3 i <span className="font-bold">9,3%</span> dla silników o
                pojemności od 2001 do 3500 cm3.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-7"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-7")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-7"
            aria-controls="question-7-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-7",
                    "text-white": expanded !== "question-7",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-7",
                "text-white": expanded !== "question-7",
              },
            )}
          >
            Jakie dokumenty są potrzebne do rejestracji auta przywiezionego z
            Dubaju?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
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
            <div className="flex flex-col">
              <span className="font-bold">
                <span className="text-gold">1.</span> Dokument potwierdzający
                zakup pojazdu lub fakturę zakupu.
              </span>
              <br />
              <span className="font-bold">
                <span className="text-gold">2.</span> Świadectwo zgodności (COC
                - Certificate of Conformity) / Certyfikat eksportowy (Export
                Certificate) lub odpowiedni dokument potwierdzający spełnienie
                norm i standardów technicznych obowiązujących w danym kraju.
              </span>
              <br />
              <span className="font-bold">
                <span className="text-gold">3.</span> Dowód opłacenia cła
                importowego i podatku VAT, jeżeli jest to wymagane.
              </span>
              <br />
              <span className="font-bold">
                <span className="text-gold">4.</span> Dowód ubezpieczenia
                pojazdu.
              </span>
              <br />
              <span className="font-bold">
                <span className="text-gold">5.</span> Dokumentację techniczną
                pojazdu, w tym dane o przebiegu i historii serwisowej.
              </span>
            </div>
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-8")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-8"
            aria-controls="question-8-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-8",
                    "text-white": expanded !== "question-8",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-8",
                "text-white": expanded !== "question-8",
              },
            )}
          >
            Gdzie mogę znaleźć oferty samochodów na sprzedaż w Dubaju?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Jeśli poszukujesz ofert samochodów na sprzedaż w Dubaju, istnieje
            szereg renomowanych stron internetowych i domów aukcyjnych, które
            mogą spełnić Twoje oczekiwania. Oto kilka z nich, gdzie możesz
            znaleźć szeroki wybór pojazdów:
            <br />
            <br />
            <span className="font-bold">Domy Aukcyjne:</span>
            <br />
            <br />
            <ul>
              <li>
                <span className="font-bold text-gold">
                  Copart Middle East:{" "}
                  <Link
                    variant="button"
                    href="https://www.copartmea.com"
                    target="_blank"
                  >
                    copartmea.com
                  </Link>
                </span>{" "}
                – renomowany dom aukcyjny oferujący bogaty wybór pojazdów z
                różnych kategorii.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Emirates Auction:{" "}
                  <Link
                    variant="button"
                    href="https://www.emiratesauction.com"
                    target="_blank"
                  >
                    emiratesauction.com
                  </Link>
                </span>{" "}
                – znany dom aukcyjny specjalizujący się w sprzedaży różnorodnych
                pojazdów, w tym luksusowych i kolekcjonerskich.
              </li>
            </ul>
            <br />
            <span className="font-bold">Platformy Ogłoszeniowe:</span>
            <br />
            <br />
            <ul>
              <li>
                <span className="font-bold text-gold">
                  Dubicars:{" "}
                  <Link
                    variant="button"
                    href="https://www.dubicars.com"
                    target="_blank"
                  >
                    dubicars.com
                  </Link>
                </span>{" "}
                – popularny portal z bogatą ofertą samochodów nowych i
                używanych.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Dubizzle:{" "}
                  <Link
                    variant="button"
                    href="https://www.dubizzle.com"
                    target="_blank"
                  >
                    dubizzle.com
                  </Link>
                </span>{" "}
                – szeroko znany serwis z ogłoszeniami, oferujący różnorodne
                pojazdy w Dubaju.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Yalla Deals:{" "}
                  <Link
                    variant="button"
                    href="https://yalla.deals"
                    target="_blank"
                  >
                    yalla.deals
                  </Link>
                </span>{" "}
                – portal z ogłoszeniami lokalnymi, w tym szerokim wyborem
                samochodów.
              </li>
              <li>
                <span className="font-bold text-gold">
                  YallaMotor UAE:{" "}
                  <Link
                    variant="button"
                    href="https://uae.yallamotor.com"
                    target="_blank"
                  >
                    uae.yallamotor.com
                  </Link>
                </span>{" "}
                – platforma z ogłoszeniami, która specjalizuje się w sprzedaży
                samochodów w regionie ZEA.
              </li>
              <li>
                <span className="font-bold text-gold">
                  OpenSooq UAE:{" "}
                  <Link
                    variant="button"
                    href="https://ae.opensooq.com/ar"
                    target="_blank"
                  >
                    ae.opensooq.com
                  </Link>
                </span>{" "}
                – dynamicznie rozwijająca się platforma ogłoszeniowa z ofertami
                samochodów.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Auto Traders:{" "}
                  <Link
                    variant="button"
                    href="https://www.autotraders.ae"
                    target="_blank"
                  >
                    autotraders.ae
                  </Link>
                </span>{" "}
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-9")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-9"
            aria-controls="question-9-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-9",
                    "text-white": expanded !== "question-9",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-9",
                "text-white": expanded !== "question-9",
              },
            )}
          >
            Czy możliwe jest dokładne oszacowanie ceny wylicytowanego samochodu?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-10")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-10"
            aria-controls="question-10-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-10",
                    "text-white": expanded !== "question-10",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-10",
                "text-white": expanded !== "question-10",
              },
            )}
          >
            Czy wymagane jest podpisanie umowy przed rozpoczęciem procesu
            importu?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Tak, przed rozpoczęciem procesu importu samochodu z Dubaju wymagane
            jest podpisanie formalnej umowy. Jest to standardowa praktyka
            zapewniająca obopólną pewność i bezpieczeństwo transakcji.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-11"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-11")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-11"
            aria-controls="question-11-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-11",
                    "text-white": expanded !== "question-11",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-11",
                "text-white": expanded !== "question-11",
              },
            )}
          >
            Czy konieczna jest wpłata kaucji przed licytacją?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Tak, konieczne jest wpłacenie kaucji, która stanowi gwarancję
            realizacji umowy.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-12"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-12")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-12"
            aria-controls="question-12-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-12",
                    "text-white": expanded !== "question-12",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-12",
                "text-white": expanded !== "question-12",
              },
            )}
          >
            W jakiej walucie dokonywane są transakcje?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Akceptowane są dwie waluty: dolar amerykański (USD) i euro (EUR).
            Kaucja wpłacana jest w USD, natomiast w przypadku transakcji
            realizowanych w porcie niemieckim, płatności są akceptowane w euro.
            Należy pamiętać, że polski złoty (PLN) nie jest przyjmowany w ramach
            tych transakcji.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-13"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-13")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-13"
            aria-controls="question-13-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-13",
                    "text-white": expanded !== "question-13",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-13",
                "text-white": expanded !== "question-13",
              },
            )}
          >
            Kiedy następuje zwrot kaucji, jeśli nie dochodzi do zakupu?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Zwrot kaucji w przypadku, gdy nie dochodzi do zakupu samochodu, jest
            realizowany w ciągu 48 godzin od momentu anulowania transakcji.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-14"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-14")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-14"
            aria-controls="question-14-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-14",
                    "text-white": expanded !== "question-14",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-14",
                "text-white": expanded !== "question-14",
              },
            )}
          >
            Czy samochód jest ubezpieczony podczas transportu?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Tak, samochód jest ubezpieczony podczas transportu, zapewniając
            podstawową ochronę ładunku. Dodatkowo, istnieje opcja wykupienia
            rozszerzonego ubezpieczenia, co zapewnia większe bezpieczeństwo.
            Koszt dodatkowego ubezpieczenia wynosi{" "}
            <span className="font-bold">2%</span> wartości pojazdu i jest to
            szczególnie polecane dla drogocennych lub wyjątkowych pojazdów.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-15"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-15")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-15"
            aria-controls="question-15-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-15",
                    "text-white": expanded !== "question-15",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-15",
                "text-white": expanded !== "question-15",
              },
            )}
          >
            Czym różnią się samochody z Zjednoczonych Emiratów Arabskich od
            modeli europejskich?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-16")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-16"
            aria-controls="question-16-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-16",
                    "text-white": expanded !== "question-16",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-16",
                "text-white": expanded !== "question-16",
              },
            )}
          >
            Jakie dokumenty otrzymam po zakupie pojazdu?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Po zakupie pojazdu otrzymasz zestaw dokumentów, których rodzaj
            zależy od pochodzenia samochodu. Możliwe do otrzymania dokumenty to:
            <br />
            <br />
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-bold text-gold">
                  Certyfikat eksportowy:
                </span>{" "}
                Jest to standardowy dokument dla pojazdów eksportowanych, który
                potwierdza ich legalność i pochodzenie.
              </li>
              <li>
                <span className="font-bold text-gold">Dokumenty z portu:</span>{" "}
                Mogą one obejmować różne formy dokumentacji związane z
                transportem morskim i procedurami celnymi.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Vehicle Condition Certificate (VCC):
                </span>
                Jest to dokument określający stan techniczny i wizualny pojazdu
                w momencie eksportu.
              </li>
              <li>
                <span className="font-bold text-gold">Tytuł własności:</span>{" "}
                Zwany również „title”, występuje głównie w przypadku pojazdów
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
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-17")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-17"
            aria-controls="question-17-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-17",
                    "text-white": expanded !== "question-17",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-17",
                "text-white": expanded !== "question-17",
              },
            )}
          >
            Jakie są dalsze kroki i dodatkowe koszty po przywiezieniu samochodu
            do Polski?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Po sprowadzeniu auta z Dubaju, jest kilka ważnych kroków, które
            należy podjąć w celu przygotowania pojazdu do rejestracji w Polsce:
            <br />
            <br />
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-bold text-gold">
                  Przeprowadzenie pierwszego przeglądu technicznego:
                </span>{" "}
                Jest to obowiązkowy krok, który musi być wykonany przez klienta.
                Przegląd ten ma na celu sprawdzenie stanu technicznego pojazdu i
                jego zgodności z wymogami bezpieczeństwa obowiązującymi w
                Polsce.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Wykupienie polisy OC:
                </span>{" "}
                Ubezpieczenie odpowiedzialności cywilnej jest wymagane prawnie w
                Polsce dla wszystkich pojazdów. Należy je wykupić przed
                rejestracją samochodu.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Tłumaczenie dokumentów:
                </span>{" "}
                Dokumenty związane z samochodem, które zostały wydane w innym
                języku, muszą być przetłumaczone na język polski przez tłumacza
                przysięgłego. W tym zakresie możemy zaoferować pomoc, ułatwiając
                tym samym cały proces rejestracji.
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-18"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-18")}
          className="gradient-gotham-mix group py-4"
        >
          <AccordionSummary
            id="question-18"
            aria-controls="question-18-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-18",
                    "text-white": expanded !== "question-18",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-18",
                "text-white": expanded !== "question-18",
              },
            )}
          >
            Ile trwa cały proces importu auta z dubaju?
          </AccordionSummary>
          <AccordionDetails className="pr-20 text-white">
            Proces importu samochodu z Dubaju trwa zazwyczaj do 10 tygodni.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "question-19"}
          onChange={(_, isExpanded) => handleChange(isExpanded, "question-19")}
          className="gradient-gotham-mix group py-4 text-white"
        >
          <AccordionSummary
            id="question-19"
            aria-controls="question-19-content"
            expandIcon={
              <ExpandMore
                className={clsx(
                  "transition-all duration-200 group-hover:text-gold",
                  {
                    "text-gold": expanded === "question-19",
                    "text-white": expanded !== "question-19",
                  },
                )}
              />
            }
            className={clsx(
              "text-lg font-bold transition-all duration-200 group-hover:text-gold",
              {
                "text-gold": expanded === "question-19",
                "text-white": expanded !== "question-19",
              },
            )}
          >
            Jak przebiega proces importu samochodu z Dubaju?
          </AccordionSummary>
          <AccordionDetails className="pr-20">
            <ul className="flex flex-col gap-1">
              <li>
                <span className="font-bold text-gold">
                  Przygotowanie do wysyłki:
                </span>{" "}
                Po zakupie i przygotowaniu samochodu do transportu, auto jest
                umieszczane w kontenerze. Przed wysyłką, wykonujemy i
                dostarczamy klientowi kompletny zestaw zdjęć pojazdu, wraz z
                numerem kontenera aby miał pewność co do stanu auta przed jego
                transportem oraz miał możliwość śledzenia frachtu online.
              </li>
              <li>
                <span className="font-bold text-gold">Transport morski: </span>{" "}
                Następnie samochód wyrusza w około 30-dniową podróż frachtem
                morskim.
              </li>
              <li>
                <span className="font-bold text-gold">Odprawa celna: </span> Po
                przybyciu do Europy, najczęściej w Holandii lub w Niemczech,
                auto przechodzi odprawę celną. W tym etapie również wykonujemy
                fotografie pojazdu, już po jego rozładunku z kontenera, co
                stanowi dodatkowe potwierdzenie jego stanu.
              </li>
              <li>
                <span className="font-bold text-gold">
                  Dostawa do klienta:{" "}
                </span>{" "}
                Po zakończeniu formalności celnych i opłaceniu wszelkich
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
    </motion.section>
  );
};

export default Accordions;
