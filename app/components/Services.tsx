import { Code, CreditCard, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Web Apps',
      desc: 'Modern fullstack applications.',
      icon: Code,
    },
    {
      title: 'Payments',
      desc: 'Stripe & crypto integrations.',
      icon: CreditCard,
    },
    {
      title: 'Automation',
      desc: 'APIs & workflow systems.',
      icon: Zap,
    },
  ]

  return (
    <section id="services" className="py-24">
      <h2 className="text-4xl font-semibold mb-12">Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-gray-800 bg-white/5 backdrop-blur hover:scale-105 transition"
          >
            <s.icon className="mb-4 text-indigo-500" size={28} />
            <h3 className="text-xl font-medium">{s.title}</h3>
            <p className="text-gray-400 mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}