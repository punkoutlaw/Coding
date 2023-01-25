import React from 'react';
import '../style.css';

const Main = () => {
  return (
    <body>
    <div className='container' id='home'>
        <div className='row'>
            <div className='col div1'>
                <h2>EXPERIENCE FEUDALE</h2>
                <br></br>
                <p><b><strong>FEUDALE</strong></b> is a hard-rocking, blues inspired band, with a twist of alternative flare.</p>
            </div>
        </div>

        <div className='row gx-3'>
            <div className='col'>
                <div className='div2'>
                    <b><h2>In The Press <i class="bi bi-newspaper"></i></h2></b>
                    <p>
                        "This group made up of three siblings from Matawan, New Jersey kicks ass and takes names in a winningly dynamic and exciting manner.
                    <br></br>
                    <br></br>
                        Ripping and roaring through ten songs worth of pure nitro-fueled rock'n'roll, these guys deliver a thrilling surplus of passionate shouted vocals and tasty fat hooks.
                    <br></br>
                    <br></br>
                        The arrangements are quite tight and lively, with fierce hacksaw guitars, churning basslines, and savage jackhammer drums creating a tremendous surging sound that shakes and rattles with utmost hard-stomping ferocity.
                    <br></br>
                    <br></br>
                        In short, this is the sort of album you play super loud while constantly pumping your fist in the air. Accolades don't come much better than that."</p>
                </div>
            </div>
            
            <div className='col'>
                <div className='div2'>
                    <b><h2>What's New? <i class="bi bi-fire"></i></h2></b>
                    <p><b>
                        FEUDALE</b> is back with their new hit single, “<i>It’s Alright</i>”.
                    <br></br>
                    <br></br>
                        “<i>It’s Alright</i>” is the follow up single to their latest track “Teenager” and this new single is sure to pump up fans far and wide!
                    <br></br>
                    <br></br>
                        With its electrifying riff, fierce drums and sing out loud chorus it will have you shouting at the top of your lungs “HEY-NA-HEY-NA”!
                    <br></br>
                    <br></br>
                        You’ll be rocking out and jumping around to its ferocious, melodic beats all while cleaning the house (‘cause we’re all still doing that, right?!).
                    <br></br>
                    <br></br>
                        <i>FEUDALE is part of TLG Entertainment and distributes via INgrooves.</i></p>
                </div>
            </div>

            <div className='col'>
                <div className='div2'>
                    <b><h2>About Us <i class="bi bi-book"></i></h2></b>
                    <p><b>
                        FEUDALE</b> has been rocking the Jersey Shore with their edgy mix of rock and blues since forming in 2005.
                    <br></br>
                    <br></br>
                        The band of brothers is led by Bryan (Lead Guitar and Vocals), David (Bass and Vocals), and Michael (Drums) Feudale.
                    <br></br>
                    <br></br>
                        The band’s eclectic musical influences range from The Beatles and Jimi Hendricks to the likes of Alice in Chains and David Bowie.
                    <br></br>
                    <br></br>
                        The FEUDALE Brothers, based in Matawan, NJ, (formally known as <i>Feudale Brothers Band</i>) is a hard-rocking, blues inspired band, with a twist of alternative flare.
                    <br></br>
                    <br></br>
                        What started as a part-time hobby for the band of brothers, eventually evolved into a full-time passion for writing, recording and playing varied styles of great music.</p>
                </div>
            </div>

        </div>

        <div class="row gx-3 justify-content-center">
            <div class="col mx-auto">
                <img src="./Images/feudalenew.png" alt="FEUDALE LOGO" id="img-main" />
            </div>
        </div>

    </div>
    </body>
  )
}

export default Main