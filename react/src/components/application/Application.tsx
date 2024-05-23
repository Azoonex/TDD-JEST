const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <input type="text" value="amirabas" onChange={() => {}} />
            <img src="https://explample.com" alt="not found" />
            <form>
                <div>
                    <p>All fields are mandatory</p>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Fullname"
                        value="Vishwas"
                        onChange={() => { }}
                    />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" />
                </div>
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="checkbox1" id="terms" /> I agree to the terms and
                        conditions
                    </label>
                </div>
                <button disabled>Submit</button>

            <input type="text" placeholder="fullName" />

                <div>
                    <label htmlFor="newInpt">indexMain</label>
                    <input type="text" name="newInpt" id="newInpt" />
                </div>
                
            </form>
        </>
    )
}
export default Application