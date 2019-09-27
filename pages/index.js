import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import HeroCard from "../components/HeroCard";
import SubHero from "../components/SubHero";
import Cards from "../components/Cards";
import NonViewportSSR from '../components/NonViewportSSR';
import Trackers from '../components/Trackers';
import { homedir } from 'os';

const Home = ( props ) => (
  <div>
    <Head>
      
      <title>Home</title>
      <meta name="Description" content="Put your description here."/>
      <link href="https://timeoutdigital.github.io/bedrock/dist/bedrock.css" rel="stylesheet"/>
      <Trackers/>                                            
  </Head>

    <Nav />

    <div className='hero'>
      <br/>
      <Link href='/secondPage'>
        <button style={{ height: 100, width: '100%' }}>      
          Second pages
        </button>
      </Link>
      <br/>
            
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <HeroCard/>
      <SubHero/>
      <Cards/>
      
      <NonViewportSSR>
        
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <hr/>
        <hr/>
        <div className='row'>
          <Link href='/notFound'>
            <a className='card'>
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next.js on GitHub and in their examples.</p>
            </a>
          </Link>          
        </div>
        </NonViewportSSR>
      
      <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/946258416/?random=1567697049130&amp;cv=9&amp;fst=1567697049130&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1050&amp;u_w=1680&amp;u_ah=1027&amp;u_aw=1680&amp;u_cd=24&amp;u_his=12&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww.timeout.com%2F&amp;tiba=Time%20Out%20%7C%20Best%20Things%20To%20Do%20and%20Events%20In%20Cities%20Worldwide&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
      <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/946258416/?random=1567697049225&amp;cv=9&amp;fst=1567697049225&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1050&amp;u_w=1680&amp;u_ah=1027&amp;u_aw=1680&amp;u_cd=24&amp;u_his=12&amp;u_tz=60&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;gtm=2oa8l2&amp;sendb=1&amp;ig=1&amp;data=event%3Dgtag.config&amp;frm=0&amp;url=https%3A%2F%2Fwww.timeout.com%2F&amp;tiba=Time%20Out%20%7C%20Best%20Things%20To%20Do%20and%20Events%20In%20Cities%20Worldwide&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
    </div>
  </div>
)

// Home.getInitialProps = async function(B, A) {
  

//   return {
//       renderBody : process.browser
//   }
// }

export default Home;
