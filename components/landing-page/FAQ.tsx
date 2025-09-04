"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 text-start md:flex justify-between gap-4">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center flex-1 flex flex-col justify-between">
        <span>Questions & answers</span>
        <span className="text-gray-500 hidden md:block">Questions & answers</span>
        <span className="text-gray-300 hidden md:block">Questions & answers</span>
      </h2>
      <Accordion type="single" collapsible className="w-full flex-2">
        <AccordionItem value="q1">
          <AccordionTrigger>What is NextRole?</AccordionTrigger>
          <AccordionContent>
            NextRole is a job tracking web app that helps you manage and
            organize job applications using visual boards and custom stages.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>Is NextRole free to use?</AccordionTrigger>
          <AccordionContent>
            Yes! NextRole is free to use. You can create an account and start
            managing your job applications immediately at no cost.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>Can I create multiple boards?</AccordionTrigger>
          <AccordionContent>
            Absolutely. You can create multiple boards to track different career
            paths, industries, or goals.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>Is my data secure?</AccordionTrigger>
          <AccordionContent>
            Yes. We use secure authentication and encrypted databases to protect
            your job tracking data.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>Do I need to install anything?</AccordionTrigger>
          <AccordionContent>
            No installation is required. NextRole is a fully web-based
            application — just sign up and start using it in your browser.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q6">
          <AccordionTrigger>Can I customize the job stages?</AccordionTrigger>
          <AccordionContent>
            Yes. You can add, rename, reorder, or remove columns to suit your
            own job application workflow.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </section>
  );
}
