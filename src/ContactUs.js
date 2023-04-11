
const ContactUs = () => {
    return (
        // <div className='contentclass'>
            <div className='ctt-container'>
                <div class='contact-title'>
                    <h1>Contact Us</h1>
                    <div className='supporting-text1'>
                        <p>
                            Our well trained support team is willing to help you anytime. You can reach out to us.
                        </p>
                    </div>
                </div>
                <div className='contactform'>
                    <form className="form">
                        <label id="namelbl" className="spc" for="name">Your name</label>
                        <br />
                        <input id="name" className="spc" type="text" name="name" placeholder="Enter your full name" required />
                        <br />
                        <label id="emlab" className="spc" for="name">Email address</label>
                        <br />
                        <input id="email" className="spc" type="text" name="email" placeholder="Enter your email" required />
                        <br />
                        <label id="msglbl" className="spc" for="message">Write your  message</label>
                        <br />
                        <textarea className="spc" placeholder='write your message' required></textarea>
                        <br />
                        <button id="submitmessage" className="spc" type="submit>">Send message</button>
                    </form>
                </div>
            </div>
        // </div>
    );
}
export default ContactUs;