const Paragraph1 = "A graduate of Le Moyne College, with majors in Theater Arts and Computer Science, Declan's work in theater has varied, including work in stage management, light design, set design, and performance. Declan has taken classes which have covered the fundamentals of theater design, lighting design, advanced acting methods, acting for Shakespeare, and technical theater topics.";

const Paragraph2 = "Past credits include: Come Like Shadows (Lighting Designer/Producer), The Wolves (Lighting Designer), Godspell (Lighting Designer), The Squirrels (Stage Manager), I Hate Hamlet (Set Designer), The (One-Act) Play that Goes Wrong (Lighting Designer), Hand to God (Director), Bare: A Pop Opera (Actor), The Children's Hour (Lighting Designer), Le Moyne Student Dance Co. Recitals (Lighting Designer), The Trojan Women (Stage Manager), and Corduroy! (Sound Operator). Declan's experience also includes carpentry and set construction, having worked in the Le Moyne College scenery shop for three years.";

export default function Bio() {
    return (
        <>
            {Paragraph1}
            <br />
            <br />
            {Paragraph2}
            <br />
            <br />
            {Paragraph2}
            <br />
            <br />
            {Paragraph2}
        </>
    )
}