export default function About() {
    return (
        <section id="about" className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">About the Film</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
                A documentary that takes an in depth look into the political movement that sprang from the 2008 economic collapse. It gives a balanced analysis of the movement's successes and failures from those who were instrumental in sustaining the protests to voices from within academia and industry. If you liked 'Inside Job' and 'The Corporation', you need to see 'Occupy: The Movie.'
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">Directed by Corey Ogilvie • Original soundtrack by <a className="hover:underline" href="https://alifeinbinary.com" target="_blank" rel="noopener">A Life in Binary</a></p>
        </section>
    );
}