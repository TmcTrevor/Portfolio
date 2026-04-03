import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    setError(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
      formRef.current.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputCls =
    'bg-background-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-white/20 disabled:opacity-50'

  return (
    <section className="py-32 mb-12 relative" id="contact">
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-primary text-base font-mono mb-4">
          05. What's Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let's Build Something Great
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
          I'm currently open to new opportunities where I can contribute to
          meaningful engineering challenges. My inbox is always open!
        </p>

        <div className="max-w-md mx-auto bg-surface-lighter/80 backdrop-blur p-8 rounded-2xl border border-white/5 shadow-2xl">
          {submitted && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-base">check_circle</span>
              Message sent! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              {error}
            </div>
          )}

          <form ref={formRef} className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider font-bold text-slate-400" htmlFor="name">
                Name
              </label>
              <input
                className={inputCls}
                disabled={loading}
                id="name"
                name="user_name"
                placeholder="John Doe"
                required
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider font-bold text-slate-400" htmlFor="email">
                Email
              </label>
              <input
                className={inputCls}
                disabled={loading}
                id="email"
                name="user_email"
                placeholder="john@example.com"
                required
                type="email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-wider font-bold text-slate-400" htmlFor="message">
                Message
              </label>
              <textarea
                className={inputCls}
                disabled={loading}
                id="message"
                name="message"
                placeholder="Hello..."
                required
                rows={4}
              />
            </div>

            <button
              className="mt-4 w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <a
            className="text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300"
            href="https://github.com/mokhames"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300"
            href="https://linkedin.com/in/mokhames"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300"
            href="https://leetcode.com/mokhames"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center pb-8 pt-12 border-t border-white/5 mx-auto max-w-7xl px-6 relative z-10">
        <p className="text-slate-600 text-sm">
          Designed &amp; Built by Mohamed Khames. &copy; 2026
        </p>
      </div>
    </section>
  )
}

export default Contact
