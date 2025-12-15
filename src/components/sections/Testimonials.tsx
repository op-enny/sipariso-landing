import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/SectionDivider";

const testimonials = [
  {
    quote:
      "Früher habe ich 400 € im Monat an Lieferplattformen gezahlt. Jetzt habe ich die Kontrolle zurück – und spare dabei.",
    name: "Murat K.",
    role: "Inhaber, Türkisches Restaurant",
    location: "Frankfurt am Main",
    rating: 5,
  },
  {
    quote:
      "Ich verstehe nichts von Technik. Sipariso hat alles für mich eingerichtet. Nach 3 Tagen war ich online.",
    name: "Elena S.",
    role: "Inhaberin, Griechischer Feinkostladen",
    location: "München",
    rating: 5,
  },
  {
    quote:
      "Endlich habe ich die E-Mail-Adressen meiner Kunden. Das war bei den großen Plattformen nie möglich.",
    name: "Paolo M.",
    role: "Inhaber, Pizzeria",
    location: "Berlin",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-accent-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-warm">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Was andere Store Owner sagen
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="bordered" className="relative">
              {/* Quote mark */}
              <svg
                className="absolute top-4 right-4 w-8 h-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <blockquote className="text-gray-600 italic mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Author */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-700">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
