import React from 'react'
import './Home.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TeamsTab from '../layout/TeamsTab';
import Fixtures from '../layout/Fixtures';

import { AiOutlinePlusCircle } from 'react-icons/ai'

const Home = () => {

    

    return (
        <div>
           <TeamsTab></TeamsTab>
           <Fixtures></Fixtures>
            
        </div>
    )
}

export default Home
