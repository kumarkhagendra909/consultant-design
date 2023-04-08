import oval1 from './user/oval1.png'
import oval2 from './user/oval2.png'
import oval3 from './user/oval3.png'

const HappyClient = () => {
    return (
        <div className="client">
            <h1>Our happy clients Say about us</h1>
            <div className='happy-comments'>
                <div className='bg'>
                    <div className='icon'>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div className='para'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    <div className='userinfo'>
                        <div className='user'>
                            <img src={oval1} alt="user1" width="10" height="10" />
                        </div>
                        <div className='info'>
                            <p>Jocob Jones</p>
                        </div>
                    </div>
                </div>
                <div className='bg'>
                    <div className='icon'>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div className='para'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    <div className='userinfo'>
                        <div className='user'>
                            <img src={oval2} alt="user" width="10" height="10" />
                        </div>
                        <div className='info'>
                            <p>Jocob Jones</p>
                        </div>
                    </div>
                </div>
                <div className='bg'>
                    <div className='icon'>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div className='para'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    <div className='userinfo'>
                        <div className='user'>
                            <img src={oval3} alt="user" width="10" height="10" />
                        </div>
                        <div className='info'>
                            <p>Jocob Jones</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HappyClient;
