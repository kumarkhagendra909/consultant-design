// import consultant1 from './consultant/consultant1.png';
const PopularConsultants = () => {
    return (
        <div class="section">
            <div class="title">
                <h3>Popular Concultants</h3>
            </div>
            <div className='navig'>
                <a href="all">All</a>
                <a href="itexperts">IT experts</a>
                <a href="finance">Finance</a>
                <a href="life">Life Coach</a>
                <a href="legal">Legal</a>
            </div>
            <div className='slider'>
                <div className='cards'>

                    <div class="owl-carousel">
                        <div className="sliderdetail">
                            {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                            <p id='cname1'>Bessie Cooper</p>
                            <p id='cpoff'>IT Expert</p>
                        </div>
                    </div>
                    <div class="owl-carousel">
                        <div className="sliderdetail">
                            {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                            <p id='cname1'>Bessie Cooper</p>
                            <p id='crpoff'>IT Expert</p>
                        </div>
                    </div>
                    <div class="owl-carousel">
                        {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                        <div className="sliderdetail">
                            {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                            <p id='cname1'>Bessie Cooper</p>
                            <p id='crpoff'>IT Expert</p>
                        </div>
                    </div>
                    <div class="owl-carousel">
                        {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                        <div className="sliderdetail">
                            {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                            <p id='cname1'>Bessie Cooper</p>
                            <p id='crpoff'>IT Expert</p>
                        </div>
                    </div>
                    <div class="owl-carousel">
                        {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                        <div className="sliderdetail">
                            {/* <img alt='consultant' id="consul1" src={consultant1} /> */}
                            <p id='cname1'>Bessie Cooper</p>
                            <p id='crpoff'>IT Expert</p>
                        </div>
                    </div>
                </div>
                <div className='slidebtn' >
                    <div className='sl'></div>
                    <div className='sl'></div>
                    <div className='sl'></div>
                </div>
            </div>
        </div>
    );
}

export default PopularConsultants;
