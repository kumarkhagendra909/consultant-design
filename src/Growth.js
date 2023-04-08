import { FaClock } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
const Growth = () => {
    return (
        <div className='growth'>
            <div className='growth-list'>
                <div className='g-ch'>
                    <div className='g-fa-icon'>
                        <FaClock size={"2rem"} />
                    </div>
                    <div className='g-fa-qoute'>
                        <label className='g-ch-d'>Save Time Money</label>
                    </div>
                </div>
                <div className='g-ch'>
                    <div className='g-fa-icon'>
                        <FaClock size={"2rem"} />
                    </div>
                    <div className='g-fa-qoute'>
                        <label className='g-ch-d'>Best Advise that Matters</label>
                    </div>
                </div>
                <div className='g-ch'>
                    <div className='g-fa-icon'>
                        <FaClock size={"2rem"} />
                    </div>
                    <div className='g-fa-qoute'>
                        <label className='g-ch-d'>Confidential Calls</label>
                    </div>
                </div>
                <div className='g-ch'>
                    <div className='g-fa-icon'>
                        <FaClock size={"2rem"} />
                    </div>
                    <div className='g-fa-qoute'>
                        <label className='g-ch-d'>Instant Advice </label>
                    </div>
                </div>
            </div>
            <div className='growth-content'>
                <div className="aboutus">
                    <h6>About Us</h6>
                </div>
                <div className="g-focus">
                    <h2>Growth-Focused  Consulting Agency</h2><GiArcheryTarget size={'3rem'} color="red" />
                </div>
                <div className="g-para">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book
                    </p>
                    <a href="#readourstory">Read Our Story</a>
                    <br />

                </div>
            </div>
        </div>
    );
}

export default Growth;