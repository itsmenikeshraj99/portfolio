import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_yijgzg8",
        "template_kps9n5l",
        form.current,
        "QuzOO_-MGzFRNbTq_"
      );

      setSuccess(
        "✅ Message sent successfully. I will contact you soon."
      );

      form.current.reset();
    } catch (err) {
      setError(
        "❌ Failed to send message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-white text-[#123425] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-5xl font-bold text-emerald-700 text-center mb-4 font-heading">
            Contact Me
          </h2>

          <p className="text-center text-gray-700 mb-16">
            Let's build something amazing together.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Mail className="text-emerald-700" size={28} />
                <div>
                  <p className="text-gray-700">Email</p>
                  <h3 className="text-lg">
                    nikeshkumarwork@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-emerald-700" size={28} />
                <div>
                  <p className="text-gray-700">Phone</p>
                  <h3 className="text-lg">
                    +91 7992401102
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-emerald-700" size={28} />
                <div>
                  <p className="text-gray-700">Location</p>
                  <h3 className="text-lg">
                    Patna, Bihar, India
                  </h3>
                </div>
              </div>

              <div className="mt-12 rounded-3xl border-4 border-emerald-600/30 bg-emerald-600/10 p-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-4 font-heading">
                  Available for
                </h3>

                <ul className="space-y-3 text-gray-800">
                  <li>✅ AI Development</li>
                  <li>✅ React Projects</li>
                  <li>✅ Python Automation</li>
                  <li>✅ Freelancing</li>
                  <li>✅ Remote Opportunities</li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-emerald-50/60 backdrop-blur-xl border-4 border-emerald-600/20 rounded-3xl p-8 space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-emerald-50 border border-green-400/30 outline-none focus:border-green-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-emerald-50 border border-green-400/30 outline-none focus:border-green-400"
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-emerald-50 border border-green-400/30 outline-none focus:border-green-400"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full p-4 rounded-xl bg-emerald-50 border border-green-400/30 outline-none focus:border-green-400"
              />
              {success && (
                <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-emerald-700">
                  <CheckCircle size={20} />
                  <span>{success}</span>
                </div>
              )}

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-emerald-600 py-4 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

            </motion.form>

          </div>

        </motion.div>

      </div>
    </section>
  );
}