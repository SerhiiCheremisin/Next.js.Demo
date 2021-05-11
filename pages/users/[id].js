import React from 'react';
import { useRouter } from 'next/router'
import styles from '/styles/UserPage.module.css'
import Head from "next/head";


export const getStaticPaths = async () => {
    let URL = 'https://jsonplaceholder.typicode.com/users/'
    const res = await fetch(URL);
    const data =  await res.json();
    const result = data.map((el) => {
    return {
        params: {id:el.id.toString()}
    }
     })
    return {
        paths: result,
        fallback: false
    }

}
export const getStaticProps = async (context) =>{
     const id = context.params.id;
     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
     const data = await res.json();

return {
    props: {el:data}
}
}


const PostItem = ({el}) => {
const desc = `User ${el.name} has a phone number ${el.phone}`
    return(
        <div className={styles.userInfo}>
        <Head>
            <title>Page of user {el.name}</title>
            <meta name="description" content={desc}/>
        </Head>
        <div>
            <h1>{el.name}</h1>
            <h2>Email address: {el.email}</h2>
            <h2>Works at: {el.company.name}</h2>
            <h2>Personal Website: {el.website}</h2>
            <h2>Contact number is: {el.phone}</h2>
            <h2>Lives in : {el.address.city}</h2>
        </div>
</div>
    )

}

export default PostItem;
