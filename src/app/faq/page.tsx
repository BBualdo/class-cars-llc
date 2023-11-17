"use client";

import { merriweather } from "@/fonts/fonts";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";

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
            Pytanie 1
          </AccordionSummary>
          <AccordionDetails>Odpowiedź 1</AccordionDetails>
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
            Pytanie 2
          </AccordionSummary>
          <AccordionDetails>Odpowiedź 2</AccordionDetails>
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
            Pytanie 3
          </AccordionSummary>
          <AccordionDetails>Odpowiedź 3</AccordionDetails>
        </Accordion>
      </div>
    </main>
  );
}
