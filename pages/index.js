import React from 'react';
import styles from '/styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";

const Home = () => {

    return(
        <>
        <Head>
        <title>Next.js demo by Serhii Cheremisin</title>
        <meta name="description" content="Next.js demo by Serhii Cheremisin. Watch more om other pages"/>
         </Head>
        <div className={styles.homeWrapper}>
            <div className={styles.main}>
                <h1>Home Page</h1>
                 <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at atque consectetur cumque cupiditate debitis dicta dolor et hic ipsum laborum, minus necessitatibus nemo officia placeat, quaerat quasi reprehenderit similique sit tempora vel voluptate. Accusantium beatae blanditiis commodi corporis cupiditate dolor esse, explicabo illum maxime nemo possimus quasi quisquam repellat, repellendus voluptates. Beatae deserunt eius ipsa maxime non quis saepe soluta. Commodi consequatur dolore et incidunt, ipsam reiciendis voluptatum. Consectetur repudiandae veritatis voluptatum! Culpa cumque dolore est id quibusdam, quisquam sapiente. Corporis hic illum laborum pariatur totam? Accusantium, alias aliquam commodi, dignissimos dolore eos, error fuga modi nulla perferendis provident quis quo rerum sunt velit voluptas voluptates? Ad aliquid dolores numquam odit. Dicta doloribus nesciunt quis tempore! Corporis, nulla!</span>
            <Link href="/users" ><button><a >User List</a></button></Link>
            </div>

        </div>
        </>
    )


}

export default Home;
