import React from 'react';

import Nav from '../components/nav'
import HeroCard from "../components/HeroCard";
import SubHero from "../components/SubHero";
import Cards from "../components/Cards";
import Trackers from '../components/Trackers';
import Head from 'next/head'

export default class SecondPage extends React.Component{
    render(){
        return (
            <div>
                <Head>      
                    <title>Home</title>
                    <meta name="Description" content="Put your description here."/>
                    <link href="https://timeoutdigital.github.io/bedrock/dist/bedrock.css" rel="stylesheet"/>
                    <Trackers/>
                </Head>
                <Nav />
                <iframe title="myFrame" width="460" height="315" src="https://www.youtube-nocookie.com/embed/Gb5sbORA62w" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      <iframe title="myFrame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/isSxB7pleEQ" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <HeroCard/>
                <SubHero/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        )
    }
}