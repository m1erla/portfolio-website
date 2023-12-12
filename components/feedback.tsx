"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { sendFeedback } from "@/actions/sendFeedback";

export default function Feedback() {
  const { ref } = useSectionInView("Feedback");

  return (
    <motion.section
      id="feedback"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Give Feedback</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Your feedback is valuable to me. Please share your thoughts.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendFeedback(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Feedback send successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="name"
          type="name"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="comment"
          placeholder="Your feedback"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
