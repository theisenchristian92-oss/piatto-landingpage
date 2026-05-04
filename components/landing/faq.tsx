import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Was ist Piatto?",
    answer: "Piatto ist eine dish-first Food Discovery Plattform. Im Mittelpunkt stehen konkrete Gerichte statt nur Restaurants.",
  },
  {
    question: "Wo startet Piatto?",
    answer: "Die Beta startet in Mainz. Danach wächst Piatto Schritt für Schritt in Rhein-Main.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#fffaf3] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-piatto-ink sm:text-4xl">
              Kurz gefragt.
            </h2>
          </div>

          <div className="grid gap-3">
            {questions.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group rounded-[1.15rem] border border-piatto-line bg-white/92 p-5 shadow-sm"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-lg font-semibold text-piatto-ink [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <ChevronDown className="size-5 shrink-0 text-piatto-terracotta transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 leading-7 text-piatto-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
