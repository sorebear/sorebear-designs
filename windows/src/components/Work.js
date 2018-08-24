import React from 'react';

export default ({ layer }) => (
  <section className="content-section work" id={`${layer === 'mask' ? 'mask-' : ''}work`} >
    <h2>Work</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at. Malesuada proin libero nunc consequat interdum varius sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Orci porta non pulvinar neque laoreet suspendisse. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Gravida in fermentum et sollicitudin. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Libero id faucibus nisl tincidunt eget nullam non nisi. Mauris sit amet massa vitae tortor condimentum. Pellentesque diam volutpat commodo sed egestas egestas. Non quam lacus suspendisse faucibus interdum posuere lorem. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at. Malesuada proin libero nunc consequat interdum varius sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Orci porta non pulvinar neque laoreet suspendisse. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Gravida in fermentum et sollicitudin. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Libero id faucibus nisl tincidunt eget nullam non nisi. Mauris sit amet massa vitae tortor condimentum. Pellentesque diam volutpat commodo sed egestas egestas. Non quam lacus suspendisse faucibus interdum posuere lorem. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
    </p>
    { layer === 'mask' ? '' : (
      <div className="expanded-only-content">
        <h2>Our Clients</h2>
        <p>
          Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet volutpat consequat mauris nunc congue. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Varius sit amet mattis vulputate. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Nullam vehicula ipsum a arcu cursus vitae. Sed risus ultricies tristique nulla. Nunc scelerisque viverra mauris in. Libero id faucibus nisl tincidunt eget nullam non. At volutpat diam ut venenatis tellus in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Ultrices gravida dictum fusce ut placerat orci nulla. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Morbi non arcu risus quis varius quam quisque id diam. 
        </p>
      </div>
    )}
  </section>
);