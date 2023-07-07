export default function Home() {
  return (
    <>
        <section className="flex flex-row min-h-fit h-1/2 w-full border-8 border-blue">
          <div className="relative w-1/2 flex border-2">
            <img src='/godspell/Godspell__438.jpg' className="h-full w-full object-cover object-center" alt='Godspell - Le Moyne College 2022' />
            <div className="absolute w-full h-full shadow-inner-md border-2 border-green"></div>
          </div>
          <div className="w-1/2 flex flex-col border-2 border-orange">
            <div className="h-2/10 flex items-center justify-center text-center">
              <h1>About Me</h1>
            </div>
            <div className="h-8/10 flex items-center justify-center text-left text-whitesmoke border-2 border-blue">
                A graduate of Le Moyne College, with majors in Theater Arts and Computer Science, Declan's work in theater has varied, including work in stage management, light design, set design, and performance. Declan has taken classes which have covered the fundamentals of theater design, lighting design, advanced acting methods, acting for Shakespeare, and technical theater topics. Past credits include: Come Like Shadows (Lighting Designer/Producer), The Wolves (Lighting Designer), Godspell (Lighting Designer), The Squirrels (Stage Manager), I Hate Hamlet (Set Designer), The (One-Act) Play that Goes Wrong (Lighting Designer), Hand to God (Director), Bare: A Pop Opera (Actor), The Children's Hour (Lighting Designer), Le Moyne Student Dance Co. Recitals (Lighting Designer), The Trojan Women (Stage Manager), and Corduroy! (Sound Operator). Declan's experience also includes carpentry and set construction, having worked in the Le Moyne College scenery shop for three years.
            </div>
          </div>
        </section>
        <section className="min-h-fit h-1/2 w-full border-8 border-blue">
        </section>
    </>
  );
}