import Link from 'next/link'
import Router from 'next/router';
import './app.css'
import Header from '../comps/Header'

const Index = () => <div>
    <Header text="Home" fontSize="24px" />
    <Link href="/InfoPage"><button>Info about Mars</button></Link>
</div>

export default Index