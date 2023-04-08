import React from 'react'

const PopularCategoriesHead = () => {
  return (
    <div className='contentclass'>
      <div className='grid-popular'>
        <div class='grid-popular-1'>
          <h1>Popular Categories</h1>
          <div className='supporting-text'>
            <p>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book</p>
          </div>
          <button className="explorebtn">Explore More</button>
        </div>
        <div className='grid-popular-2'>
          <div className='group'>
            <div className='item1'>
              <div className='smallbox'>

              </div>
              <div className='boxtext'>
                <h5>IT experts</h5>
                <p>Lorem Ipsum is simply dummy text of the</p>
                <div className='view-more'>
                  View more
                </div>
              </div>
            </div>
            <div className='item2'>
              <div className='smallbox1'>

              </div>
              <div className='boxtext'>
                <h5>Life Coach</h5>
                <p>Lorem Ipsum is simply dummy text of the</p>
                <div className='view-more1'>
                  View more
                </div>
              </div>
            </div>
          </div>
          <div className='group1'>
            <div className='item2'>
              <div className='smallbox1'>

              </div>
              <div className='boxtext'>
                <h5>Finacial Experts</h5>
                <p>Lorem Ipsum is simply dummy text of the</p>
                <div className='view-more1'>
                  View more
                </div>
              </div>
            </div>
            <div className='item1'>
              <div className='smallbox'>

              </div>
              <div className='boxtext'>
                <h5>Legal</h5>
                <p>Lorem Ipsum is simply dummy text of the</p>
                <div className='view-more'>
                  View more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCategoriesHead;