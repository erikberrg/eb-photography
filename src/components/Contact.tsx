"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { FormSchema } from "../../schema";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { easeInOut, motion } from "framer-motion";
import { Facebook, FacebookIcon, InstagramIcon, LinkedinIcon, LucideFacebook, Send } from "lucide-react";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";


const Contact = () => {

  {/*Form*/ }
  const formRef = useRef<HTMLFormElement | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_s5uo62c',
          'template_dr33wig',
          formRef.current,
          {
            publicKey: 'gu8wB5oBJNelkX_4z',
          },
        )
        .then(
          () => {
            console.info('SUCCESS');
            toast({
              description: `Thanks ${data.name}, I'll be in touch.`,
            });
            form.reset();
          },
          (error) => {
            console.warn("FAILED...", JSON.stringify(error));
          },
        );
    }
  };

  {/*Framer*/ }
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };
  const item = {
    hidden: {
      y: 25, opacity: 0, scale: 0.8,
    },
    visible: {
      y: 0, opacity: 1, scale: 1,
    },
  };

  return (
    <>
      <motion.div className="relative w-full h-fit bg-zinc-100 text-black sm:pt-32 pt-16">
        <MaxWidthWrapper className="pt-4 pb-16">
          <div className="flex flex-row sm:justify-start justify-center items-center">
            <span className="font-normal font-noto sm:text-6xl text-4xl text-zinc-800">Let&apos;s work together</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex lg:flex-row flex-col justify-evenly items-center"
          >
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="sm:py-16 py-8 space-y-8 lg:w-2/5 w-2/3">
                <motion.div
                  variants={item}
                  transition={{ ease: easeInOut, duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="What is your name?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  variants={item}
                  transition={{ ease: easeInOut, duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="What is your email?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  variants={item}
                  transition={{ ease: easeInOut, duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Input placeholder="What service are you looking for?" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  variants={item}
                  transition={{ ease: easeInOut, duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me more about your idea..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <div className="w-full flex justify-center items-center sm:justify-start">
                  <Button type="submit" className="rounded-full w-32 h-12 focus:outline-black outline-2 outline-offset-2 flex flex-row justify-evenly items-center gap:2 font-inter"><Send size={16} className="fill-white " />Send it</Button>
                </div>
              </form>
            </Form>
            <div className="flex md:flex-row flex-col space-x-2">
              <motion.div className="md:w-[400px] md:h-[500px] h-[300px] w-[240px] bg-[url('../../public/pfp.avif')] bg-cover bg-center"
                variants={item}
                transition={{ ease: easeInOut, duration: 0.2 }}
              />
              <div className="flex md:flex-col flex-row md:justify-end items-center gap-2 pt-2 justify-center">
                <Link href='https://www.instagram.com/erikberg.photography/' target="_blank" className="group transition-colors" aria-label="Link to my Instagram">
                  <Button type="submit" className="w-8 h-8 rounded-full p-0 m-0 outline-offset-2">
                    <InstagramIcon className="size-4 text-white transition-colors" />
                  </Button>
                </Link>
                <Link href='https://www.facebook.com/eriikb.3' target="_blank" className="group transition-colors" aria-label="Link to my Facebook">
                <Button type="submit" className="w-8 h-8 rounded-full p-0 m-0 outline-offset-2">
                    <FacebookIcon className="size-4 text-white fill-white stroke-none transition-colors" />
                  </Button>
                </Link>
                <Link href='https://www.linkedin.com/in/erikberrg/' target="_blank" className="group transition-colors" aria-label="Link to my LinkedIn">
                <Button type="submit" className="w-8 h-8 rounded-full p-0 m-0 outline-offset-2">
                    <LinkedinIcon className="size-4 text-white fill-white stroke-none transition-colors" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </motion.div>
    </>
  );
}

export default Contact;