import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';

const Home: NextPage = () => {
    const { data } = useAccount();
    const { isConnected } = useConnect();

    const DisplayNameComp = () => {
        if (isConnected && data) {
            return <div>Your address is: {data.address}</div>;
        } else {
            return <></>;
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Fairymint</title>
                <meta name="description" content="Fairymint website" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>
            <header className="p-4  flex flex-row justify-between">
                <div>NAME </div>
                <div>
                    <ConnectButton
                    // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    />
                </div>
            </header>
            <main className="flex-grow  p-4">
                Content
                <DisplayNameComp />
            </main>
            <footer className="p-4 ">Footer</footer>
        </div>
    );
};

export default Home;
