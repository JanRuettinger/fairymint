import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import { FairyIcon } from './../utils/icons';
import { Screen1 } from '../components/Screen1';
import { Screen2 } from '../components/Screen2';

const Home: NextPage = () => {
    const { isConnected } = useConnect();

    const Screen = () => {
        if (!isConnected) {
            return <Screen1 />;
        } else {
            return <Screen2 />;
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Fairymint</title>
                <meta name="description" content="Fairymint website" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>
            <header className="p-4 flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="w-12">{FairyIcon}</div>
                    <div className="ml-2">
                        <div className="font-bitter font-bold">Fairymint</div>
                        <div className="text-md">on-chain raffles</div>
                    </div>
                </div>
                <div>
                    <ConnectButton
                    // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    />
                </div>
            </header>
            <main className="flex-grow p-4 w-4/5 md:w-3/5 mx-auto">
                <Screen />
            </main>
            {/* <footer className="p-4 ">Footer</footer> */}
        </div>
    );
};

export default Home;
