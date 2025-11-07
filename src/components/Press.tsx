import { press } from "../data/press";

export default function Press() {
    return (
        <section id="press" className="flex flex-col w-full text-center justify-center overflow-y-hidden sm:leading-tight md:leading-loose py-6">
            <h2 className="my-4 text-2xl md:text-3xl font-bold leading-none">In The Press</h2>
            {press.map((item, index) => (
                <div key={index}>
                    <span className="text-gray-600 text-sm md:text-base">{item.description}</span>
                    <span className="hidden md:visible md:inline">&nbsp;--&nbsp;</span>
                    <a href={item.url} target="_blank" rel="noopener" className="text-blue-600 text-sm md:text-base sm:block lg:inline">{item.title}</a>
                    {index !== press.length - 1 && <hr className="my-4 w-1/2 mx-auto" />}
                </div>
            ))}
        </section>
    );
}
