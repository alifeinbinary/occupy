export default function Video() {
    return (
        <div id="video" className="flex flex-col w-full mt-6 xl:w-3/5 2xl:p-12 lg:p-12 md:p-12 sm:p-0" role="main">
            <div className="relative h-0 overflow-hidden max-w-full w-full aspect-video">
                <iframe className="absolute top-0 left-0 w-full h-full" width="1920" height="1080" src="https://www.youtube.com/embed/HmGZS4ac7qQ?si=IFtS7mFOntg6qaYh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen aria-label="YouTube video player"></iframe>
            </div>
        </div>
    );
}