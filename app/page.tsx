'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { motion } from "framer-motion"
import Image from "next/image"
 

const About = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Video */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
          >
            Welcome to Orchidisland
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-6">
            Orchidisland is a leader in the Moroccan real estate market, headquartered in Marrakech and serving all major cities including Casablanca, Agadir, and Tangier. With years of experience in renting, buying, and selling luxurious properties, we help people find their perfect place to call home.
          </p>
          <Image
            src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png"
            alt="Real estate view"
            width={1000}
            height={600}
            className="rounded-xl w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h3>
            <p className="text-gray-700 mb-4">
              We provide tailored services to ensure that every client gets the best deal possible. Whether you're a first-time buyer, a foreign investor, or a local seller, our agents and legal experts are here to assist you every step of the way.
            </p>
            <p className="text-gray-700">
              Our deep knowledge of the Moroccan market makes us your trusted real estate partner.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png"
              alt="Why Choose Orchidisland"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">More About Orchidisland</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We specialize in selling, renting, and buying luxury properties. We also assist with legal paperwork, investment consulting, and relocation services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What cities do you cover?</AccordionTrigger>
              <AccordionContent>
                Our main office is in Marrakech, but we operate in Casablanca, Agadir, Tangier, Rabat, and other major Moroccan cities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I get in touch?</AccordionTrigger>
              <AccordionContent>
                Visit our Contact page to send us a message directly. You can also call us or reach out via our social media pages.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </section>
    </div>
  )
}

export default About
