import React from 'react';
import styles from "/styles/Users.module.css";
import Head from "next/head";
import Link from "next/link";


export const getStaticProps = async () => {
    let URL = 'https://jsonplaceholder.typicode.com/users/'
    const res = await fetch(URL);
    const data =  await res.json();
    return {
        props: {user:data}
    }
}

const Index = ({user}) => {

    return(
        <>
        <Head>
            <title> Users page , made by Serhii Cheremisin</title>
            <meta name="description" content="Next.js demo by Serhii Cheremisin. Watch more om other pages"/>
        </Head>
        <div className={styles.usersWrapper}>
            {
                user.map((el,idx) => {
                    let num = idx + 1;
                    return(
                    <Link key={idx}  href={"users/" + num}>
                        <div className={styles.userBlock}>
                            <span>{el.name}</span>
                            <span>{el.address.city}</span>
                            <span>{el.website}</span>
                        </div>
                    </Link>

                    )

                } )

            }
        </div>
</>
    )

}

export default Index;
