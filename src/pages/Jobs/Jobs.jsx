import "./Jobs.scss"
import armymusic from "../../assets/images/instruments/band-overview.webp";
import flute from "../../assets/images/instruments/78Flute-Piccolo.jpeg";
import clarinet from "../../assets/images/instruments/78Clarinet.jpeg";
import euphonium from "../../assets/images/instruments/78Euphonium.jpeg";
import guitar from "../../assets/images/instruments/78Guitar.jpeg";
import horn from "../../assets/images/instruments/78Horn.jpeg";
import saxophone from "../../assets/images/instruments/78Saxophone.jpeg";
import engineer from "../../assets/images/instruments/78SoundEngineer.jpeg";
import trombone from "../../assets/images/instruments/78Trombone.jpeg";
import tuba from "../../assets/images/instruments/78Tuba.jpeg";
import vocals from "../../assets/images/instruments/78Vocalist.jpeg";
import percussion from "../../assets/images/instruments/78Percussion.jpeg";
import bass from "../../assets/images/instruments/78Bass.jpeg";
import trumpet from "../../assets/images/instruments/78Trumpet.jpeg";
import _9B from "../../assets/jobs/9B.pdf";
import _9C from "../../assets/jobs/9C.pdf";
import _9D from "../../assets/jobs/9D.pdf";
import _9E from "../../assets/jobs/9E.pdf";
import _9F from "../../assets/jobs/9F.pdf";
import _9G from "../../assets/jobs/9G.pdf";
import _9H from "../../assets/jobs/9H.pdf";
import _9J from "../../assets/jobs/9J.pdf";
import _9K from "../../assets/jobs/9K.pdf";
import _9L from "../../assets/jobs/9L.pdf";
import _9M from "../../assets/jobs/9M.pdf";
import _9N from "../../assets/jobs/9N.pdf";
import _9T from "../../assets/jobs/9T.pdf";
import _9U from "../../assets/jobs/9U.pdf";
import _9V from "../../assets/jobs/9V.pdf";


const Jobs = () => {

    const handleScroll = (e) => {
        const selectedInstrument = e.target.value;
        const section = document.getElementById(selectedInstrument);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <main className="jobs-main">
            <h1>Join the 100th Army Band</h1>
            <article className="jobs">
                <h2>The Role of an Army Musician</h2>
                <section className="jobs__section">
                    {/* **include musical img here** */}
                    <strong>Job Description: </strong>
                    <p className="jobs__paragraph">
                        Musicians specialize in one (or more) of the following
                        instruments/specialties: tuba, trombone, euphonium, bassoon,
                        electric bass guitar, saxophone, flute or piccolo, oboe, clarinet,
                        French horn, percussion, cornet or trumpet, guitar, keyboard,
                        vocalist, and music production. Musicians perform in a variety of
                        ensembles ranging from ceremonial band to jazz band to small
                        ensembles, playing all styles of music. They are primarily
                        responsible for performing and rehearsing as a professional musician
                        within different ensembles of an Army band.
                    </p>
                </section>

                <section className="jobs__section">
                    <strong>Qualifications: </strong>
                    <ul>
                        <li>17-34 years old</li>
                        <li>U.S. Citizen or permanent resident alien</li>
                        <li>Have a high school diploma or equivalent</li>
                        <li>Be in good health and physical condition</li>
                        <li>Be in good moral standing</li>
                        <li>Prior service members may require waiver</li>
                    </ul>
                </section>

                <section className="jobs__section">
                    {/* **include generic friendly band img here** */}
                    <strong>Salary & Benefits: </strong>
                    <p className="jobs__paragraph">
                        As a musician in the Army Reserve, you'll receive benefits that
                        allow you to do what you're best at: making great music. Benefits
                        include:
                    </p>
                    <ul>
                        <li>Advanced initial rank (E-4 pay grade)</li>
                        <li>Tuition Assistance </li>
                        <li>
                            Professional-quality instruments and supplies provided free of
                            charge
                        </li>
                        <li>
                            Check out all the benefits of being in the Army Reserve{" "}
                            <a
                                id="auditionFontATag"
                                href="https://www.goarmy.com/reserve/benefits.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to US Army benefits"
                            >
                                here.
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="jobs__section">
                    <strong>Audition: </strong>
                    <ul className="audition">
                        <li>
                            {" "}
                            <a
                                id="auditionFontATag"
                                href="mailto:78tharmyband@gmail.com?subject=Request Audition Information"
                                aria-label="Link to email the 78th Army Band"
                            >
                                Reach out to us!
                            </a>{" "}
                            We'll get you set up and you will{" "}
                            <a
                                id="auditionFontATag"
                                href="https://www.bands.army.mil/careers/auditions/form.asp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to Army Bands careers form"
                            >
                                submit an audition request.
                            </a>
                        </li>
                        <li>
                            {" "}
                            <a
                                id="auditionFontATag"
                                href="https://www.goarmy.com/locate-a-recruiter.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to US Army recruiters"
                            >
                                Contact your local recruiter.{" "}
                            </a>
                            (We'll help you with this!){" "}
                        </li>
                        <li>Schedule your audition with us. </li>
                        <li>
                            Upon a successful audition and if you are deemed qualified for
                            service, you will sign a contract for{" "}
                            <a
                                id="auditionFontATag"
                                href="https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/creative/42r-musician.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to US Army musician job description"
                            >
                                MOS 42R (Army Musician){" "}
                            </a>
                            and be assigned a training departure date.
                        </li>
                    </ul>
                </section>
            </article>


            <article className="instruments">
                <h2>Instruments</h2>
                <div className="instruments__dropdown">
                    <p>Use the dropdown menu to jump to an instrument:</p>
                    <select name="instruments" id="instruments" onChange={handleScroll}>
                        <option value="flute"> Flute/Piccolo</option>
                        <option value="oboe">Oboe</option>
                        <option value="clarinet">Clarinet</option>
                        <option value="saxophone">Saxophone</option>
                        <option value="bassoon">Bassoon</option>
                        <option value="horn">Horn</option>
                        <option value="trumpet">Trumpet</option>
                        <option value="euphonium">Euphonium</option>
                        <option value="trombone">Trombone</option>
                        <option value="tuba">Tuba</option>
                        <option value="percussion">Percussion</option>
                        <option value="keyboard">Keyboard/Piano</option>
                        <option value="guitar">Electric Guitar</option>
                        <option value="bass">Electric Bass</option>
                        <option value="vocals">Vocals</option>
                        <option value="engineer">Audio Engineer</option>
                    </select>
                </div>
                <section className="instruments__instrument" id="flute">
                    <img className="instruments__img" src={flute} alt="military musician: flute" />
                    <div className="instruments__description">
                        <h1 >Flute/Piccolo</h1>
                        <p >
                            As a flute player U.S. Army Bands, you will be required to be
                            proficient on both flute and piccolo. Flute players perform in
                            concert band, ceremonial band, woodwind quintet and other small
                            ensembles based on their strengths and the needs of the band.
                        </p>

                        <a
                            href={_9G}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to flute"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="oboe">
                    <img
                        className="instruments__img"
                        src={armymusic}
                        alt="military musician: oboe"
                    />
                    <div className="instruments__description">
                        <h1 >Oboe</h1>
                        <p >
                            Oboists perform in concert band, woodwind quintet and ceremonial
                            band. You may also be asked to perform on English horn. Since oboe
                            is not typically found in a marching band, oboists often double on
                            another instrument, such as clarinet or saxophone (though this is
                            not required).{" "}
                        </p>

                        <a
                            href={_9H}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to oboe"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="clarinet">
                    <img
                        className="instruments__img"
                        src={clarinet}
                        alt="military musician: clarinet"
                    />
                    <div className="instruments__description">
                        <h1 >Clarinet</h1>
                        <p >
                            Clarinetists perform in concert band, ceremonial band, woodwind
                            quintet, and other small groups, such as a Dixieland Band.
                            Clarinet players may also be asked to perform on bass clarinet or
                            E-flat clarinet, depending on the piece of music.{" "}
                        </p>

                        <a
                            href={_9J}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to clarinet"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="saxophone">
                    <img
                        className="instruments__img"
                        src={saxophone}
                        alt="military musician: saxophone"
                    />
                    <div className="instruments__description">
                        <h1 >Saxophone</h1>
                        <p >
                            As a saxophone player in U.S. Army Bands, you will perform in
                            concert band, ceremonial band, jazz band, rock band, and various
                            other ensembles based on your skills and the needs of the band.
                            You will be expected to be proficient in different musical styles
                            and to perform on all members of the sax family. While not
                            required, improvisational skill is valued and rewarded.{" "}
                        </p>

                        <a
                            href={_9L}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to saxophone"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="bassoon">
                    <img
                        className="instruments__img"
                        src={armymusic}
                        alt="military musician: bassoon"
                    />
                    <div className="instruments__description">
                        <h1 >Bassoon</h1>
                        <p >
                            Bassoonists perform in concert band, woodwind quintet, and
                            ceremonial band. Since bassoon is not typically found in a
                            marching band, bassoonists often double on another instrument,
                            such as clarinet or saxophone (though this is not required).{" "}
                        </p>

                        <a
                            href={_9K}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to bassoon"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="horn">
                    <img className="instruments__img" src={horn} alt="military musician: horn" />
                    <div className="instruments__description">
                        <h1 >Horn</h1>
                        <p >
                            As a horn player in U.S. Army Bands, you will perform in concert
                            band, ceremonial band, and brass or woodwind quintet. Ability to
                            play in multiple styles, and chamber music experience are valued.{" "}
                        </p>

                        <a
                            href={_9D}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to horn"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="trumpet">
                    <img
                        className="instruments__img"
                        src={trumpet}
                        alt="military musician: trumpet"
                    />
                    <div className="instruments__description">
                        <h1 >Trumpet</h1>
                        <p >
                            Trumpet players perform in concert band, ceremonial band, jazz
                            band, brass quintet, rock band, and various other ensembles based
                            on the needs of the band. While not required, improvisational
                            skill is valued and rewarded. You will also have the honor of
                            performing as a bugler during military ceremonies, and performing
                            Taps at military funerals.{" "}
                        </p>

                        <a
                            href={_9B}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to trumpet"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="euphonium">
                    <img
                        className="instruments__img"
                        src={euphonium}
                        alt="military musician: euphonium"
                    />
                    <div className="instruments__description">
                        <h1 >Euphonium</h1>
                        <p >
                            Euphonium players perform in concert band, ceremonial band, and
                            small ensembles such as tuba-euphonium quartet, brass quintets, or
                            brass bands, depending on the needs of the band. While not
                            required, some euphonium players are also very proficient on
                            trombone.{" "}
                        </p>

                        <a
                            href={_9C}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to euphonium"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="trombone">
                    <img
                        className="instruments__img"
                        src={trombone}
                        alt="military musician: trombone"
                    />
                    <div className="instruments__description">
                        <h1 >Trombone</h1>
                        <p >
                            As a trombone player in U.S. Army Bands, you will perform in
                            several ensembles, including concert band, ceremonial band, jazz
                            ensembles, or other popular music ensembles. While not required,
                            improvisational skill is valued and rewarded. While many trombone
                            players focus mainly on bass trombone, all musicians selected for
                            U.S. Army Bands must be equally skilled on tenor trombone, as you
                            may be asked to perform on either depending on the needs of the
                            ensemble.{" "}
                        </p>

                        <a
                            href={_9E}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to trombone"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="tuba">
                    <img className="instruments__img" src={tuba} alt="military musician: tuba" />
                    <div className="instruments__description">
                        <h1 >Tuba</h1>
                        <p >
                            Tuba players perform in concert band, ceremonial band, brass
                            quintet, Dixieland band, and brass band. Tuba players will be
                            required to perform on sousaphone during marching performances and
                            some outdoor ceremonies.{" "}
                        </p>

                        <a
                            href={_9F}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to tuba"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="percussion">
                    <img
                        className="instruments__img"
                        src={percussion}
                        alt="military musician: percussion"
                    />
                    <div className="instruments__description">
                        <h1 >Percussion</h1>
                        <p >
                            Percussionists perform in a variety of ensembles, and they must
                            have expertise in many different styles of music. Percussionists
                            perform on drum set in rock-pop band, jazz band, and other popular
                            music ensembles. Additionally, percussionists perform on marching
                            snare and bass drum in the ceremonial band and concert snare,
                            mallets, and auxiliary percussion in the concert band.{" "}
                        </p>

                        <a
                            href={_9M}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to percussion"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="keyboard">
                    <img
                        className="instruments__img"
                        src={armymusic}
                        alt="military musician: piano"
                    />
                    <div className="instruments__description">
                        <h1 >Keyboard/Piano</h1>
                        <p >
                            As a pianist in U.S. Army Bands, you will perform in several
                            different capacities. You will perform with the jazz band, jazz
                            combo, rock band, and other popular music ensembles and you will
                            cover piano parts for the concert band. You will also provide solo
                            piano music for dinner receptions and other formal events on post
                            and in the community. Piano players must be experienced in several
                            different styles, and should be very familiar with digital
                            keyboards as well as the piano.{" "}
                        </p>

                        <a
                            href={_9N}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to keyboard/piano"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="guitar">
                    <img
                        className="instruments__img"
                        src={guitar}
                        alt="military musician: guitar"
                    />
                    <div className="instruments__description">
                        <h1 >Electric Guitar</h1>
                        <p >
                            Guitar players perform in many different styles and ensembles,
                            including rock band, jazz band, jazz combo, Latin/salsa band and
                            country band. All guitar players must be skilled in electric
                            guitar, as well as acoustic.{" "}
                        </p>

                        <a
                            href={_9T}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to electric guitar"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="bass">
                    <img className="instruments__img" src={bass} alt="military musician: bass" />
                    <div className="instruments__description">
                        <h1 >Electric Bass</h1>
                        <p >
                            Bass guitarists perform with the jazz band, rock band, Latin/salsa
                            band, and other popular music ensembles as needed. All bass
                            players must play bass guitar proficiently, with additional
                            consideration given to those also proficient on upright bass.{" "}
                        </p>

                        <a
                            href={_9U}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to electric bass"
                        >
                            Click here for resources
                        </a>
                    </div>

                </section>
                <section className="instruments__instrument" id="vocals">
                    <img
                        className="instruments__img"
                        src={vocals}
                        alt="military musician: vocalist"
                    />
                    <div className="instruments__description">
                        <h1 >Vocals</h1>
                        <p >
                            U.S. Army Bands vocalists must be proficient in many styles of
                            music, with an emphasis on popular styles like rock, pop, and
                            country, and must be able to learn new music quickly. Vocalists
                            will perform with many types of ensembles, ranging from a capella
                            performance to rock bands to full concert band. Must be an
                            experienced solo performer with excellent stage presence and
                            professional demeanor.{" "}
                        </p>

                        <a
                            href={_9V}
                            id="pdfLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="scroll to vocals"
                        >
                            Click here for resources
                        </a>
                    </div>
                </section>
                <section className="instruments__instrument" id="engineer">
                    <img
                        className="instruments__img"
                        src={engineer}
                        alt="military musician: engineer"
                    />
                    <div className="instruments__description">
                        <h1 >Audio Engineer</h1>
                        <p >
                            As a production technician (or audio engineer) in U.S. Army Bands,
                            you will be responsible for all live concert audio engineering of
                            performances and rehearsals. In addition to advanced audio
                            techniques, you will be trained on the operation of lighting
                            systems.{" "}
                        </p>
                    </div>

                </section>
            </article>
        </main>
    );
};

export default Jobs;
