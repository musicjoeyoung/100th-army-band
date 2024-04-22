import "./MeetTheBand.scss"
import { useState } from "react"
import { staff } from "../../assets/data/staff/staff"

const MeetTheBand = () => {
    const [section, setSection] = useState("Command Team");

    const handleSectionChange = (event) => {
        setSection(event.target.value);
    };

    const filteredStaff = section === "All" ? staff : staff.filter(member => member.section === section);

    const renderBio = (bio) => {
        const paragraphs = bio.split("¶");
        return paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };
    return (
        <div className="meet-the-band">
            <h1>Meet the Band</h1>
            <div>
                <label htmlFor="section">Select Section: </label>
                <select id="section" value={section} onChange={handleSectionChange}>
                    <option value="All">All</option>
                    <option value="Command Team">Command Team</option>
                    <option value="Brass">Brass</option>
                    <option value="Woodwind">Woodwind</option>
                    <option value="Percussion">Percussion</option>
                    <option value="Piano">Piano</option>
                    <option value="Vocals">Vocals</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Bass Guitar">Bass Guitar</option>
                    <option value="Sound">Sound</option>
                </select>
            </div>
            <h2>{section}</h2>
            {filteredStaff.map((member, index) => {
                return (
                    <div key={index} className="member">
                        {/* <h2>{member.section}</h2> */}
                        <div >
                            <h3>{member.name}</h3>
                            <div className="member__bio">{renderBio(member.bio)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MeetTheBand