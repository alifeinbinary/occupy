export default function Quotes() {
    return (
        <section id="quotes" className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto py-8">
            <div className="space-y-8 text-center">
                <blockquote className="text-xl md:text-2xl font-serif text-gray-800">
                    “A complex political movement gets admirably cogent treatment in Corey Ogilvie's <span className="italic">Occupy the Movie</span>”
                    <span className="block mt-3 text-sm text-gray-500">— Dennis Harvey, Variety</span>
                </blockquote>
                <blockquote className="text-xl md:text-2xl font-serif text-gray-800">
                    “<span className="italic">Occupy: The Movie</span> isn’t propaganda for the cause, but an expert analysis of one of the biggest American social movements since the civil rights era”
                    <span className="block mt-3 text-sm text-gray-500">— Alexander Rogalski, Hot Docs</span>
                </blockquote>
            </div>
        </section>
    );
}