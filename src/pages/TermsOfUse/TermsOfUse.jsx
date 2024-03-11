import "./TermsOfUse.scss"

const TermsOfUse = () => {
    return (
        <main className="terms-of-use">
            <h1>Terms of Use</h1>

            <section>
                <h2>Terms of Use</h2>
                <p className="terms-description">The 100th Army Band Web Site is maintained by in a civilian capacity. (Contact the webmaster for any questions.) It is intended to be used by the public for viewing and
                    retrieving information only. Unauthorized attempts to upload or change
                    information on this service are strictly prohibited and may be
                    punishable under the Computer Fraud and Abuse act of 1986. All
                    information on this site is considered public information and may be
                    distributed or copied freely except where otherwise noted.
                </p>
            </section>


            <section>
                <h2>Disclaimer</h2>
                <p className="terms-description">
                    The appearance of external hyperlinks on the 100th Army Band web site
                    does not constitute endorsement by the U.S Army for the information,
                    products or services contained therein.
                </p>
                <p className="terms-description">
                    For other than authorized activities such as military exchanges and
                    Morale, Welfare and Recreation sites, the U.S. Army does not
                    exercise any editorial control over the information you find at
                    these locations.
                </p>
                <p className="terms-description">
                    Such links are provided consistent with the stated purpose of this
                    site.
                </p>
                <p className="terms-description">
                    Access to 100th Army Band’s Facebook and Twitter pages may require
                    external site memberships that are not managed or maintained by the
                    100th Army Band or The U.S. Army.
                </p>
                <h3>View The U.S. Army’s{" "}
                    <a className="link"
                        href="https://www.army.mil/terms/"
                        target="_blank"
                    >
                        Use of Copyrighted Material
                    </a>{" "}
                    policy.
                </h3>
            </section>


            <section>
                <h2>Security Notice</h2>
                <ol className="terms-list">
                    <li>Information presented on this website is considered public
                        information and may be distributed or copied. Use of appropriate
                        byline/photo/image credits is requested.</li>
                    <li>Unauthorized attempts to upload information or change information
                        on this service are strictly prohibited and may be punishable under
                        the
                        <a className="link"
                            href="https://www.justice.gov/sites/default/files/criminal-ccips/legacy/2015/01/14/ccmanual.pdf"
                            target="_blank"
                        >
                            {" "}Computer Fraud and Abuse Act of 1986{" "}
                        </a>
                        and the National Information Infrastructure Protection Act of 1996.</li>
                </ol>
            </section>

        </main>
    );
};

export default TermsOfUse;
