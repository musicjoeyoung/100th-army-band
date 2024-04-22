import "./Ensembles.scss"
import { useState } from "react"
import { ensembles } from "../../assets/data/ensembles/ensembles"

const Ensembles = () => {
    const [name, setName] = useState("Concert Band");

    const handleSectionChange = (event) => {
        setName(event.target.value);
    };

    const filteredEnsemble = name === "All" ? ensembles : ensembles.filter(member => member.name === name);

    const renderBio = (bio) => {
        const paragraphs = bio.split("¶");
        return paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };
    return (
        <div className="ensembles">
            <h1>Ensembles</h1>
            <div className="section-selector">
                <label htmlFor="section">Select Section: </label>
                <select id="section" value={name} onChange={handleSectionChange}>
                    <option value="All">All</option>
                    <option value="Concert Band">Concert Band</option>
                    <option value="Ceremonial Band">Brass</option>
                    <option value="Brass Quintet">Woodwind</option>
                    <option value="Percussion">Percussion</option>
                    <option value="Piano">Piano</option>
                    <option value="Vocals">Vocals</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Bass Guitar">Bass Guitar</option>
                    <option value="Sound">Sound</option>
                </select>
            </div>
            {filteredEnsemble.map((member, index) => {
                return (
                    <div key={index} className="ensemble">
                        <h2>{member.name}</h2>
                        <div >
                            <h3>{member.name}</h3>
                            <div className="ensemble__bio">{renderBio(member.bio)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Ensembles